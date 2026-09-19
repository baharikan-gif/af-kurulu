// Eski kayıtların arşiv metinleri de güncel dünya adlarını kullanır.
const worldNameReplacements = [["Ceza ve Tevkifevleri Genel Müdürlüğü","İnfaz Kurumları Genel Dairesi"],["CEZA VE TEVKİFEVLERİ GENEL MÜDÜRLÜĞÜ","İNFAZ KURUMLARI GENEL DAİRESİ"],["Çocuk Esirgeme Kurumu","Çocuk Bakım Dairesi"],["ÇOCUK ESİRGEME KURUMU","ÇOCUK BAKIM DAİRESİ"],["Adalet Bakanlığı","Hukuk ve İnfaz Bakanlığı"],["ADALET BAKANLIĞI","HUKUK VE İNFAZ BAKANLIĞI"],["Ziraat Bankası","Tarven Bankası"],["ZİRAAT BANKASI","TARVEN BANKASI"],["Sağmalcılar","Vardak"],["SAĞMALCILAR","VARDAK"],["Bayrampaşa","Vardak"],["BAYRAMPAŞA","VARDAK"],["Paşakapısı","Nerhisar"],["PAŞAKAPISI","NERHİSAR"],["Cerrahpaşa","Erdemhan"],["CERRAHPAŞA","ERDEMHAN"],["Mercedesli","uzun siyah otomobilli"],["MERCEDESLİ","UZUN SİYAH OTOMOBİLLİ"],["Ulucanlar","Kargan"],["ULUCANLAR","KARGAN"],["Yeşilyurt","Yelvadi"],["YEŞİLYURT","YELVADİ"],["İstanbul","Kardun"],["İSTANBUL","KARDUN"],["Bakırköy","Serenköy"],["BAKIRKÖY","SERENKÖY"],["Ümraniye","Orven"],["ÜMRANİYE","ORVEN"],["Soğanlık","Söğenlik"],["SOĞANLIK","SÖĞENLİK"],["Kapıkule","Batıgeçit"],["KAPIKULE","BATIGEÇİT"],["Türkiye","Velya"],["TÜRKİYE","VELYA"],["Almanya","Velmanya"],["ALMANYA","VELMANYA"],["Üsküdar","Yelhisar"],["ÜSKÜDAR","YELHİSAR"],["Kadıköy","Derenköy"],["KADIKÖY","DERENKÖY"],["Topkapı","Taşgeçit"],["TOPKAPI","TAŞGEÇİT"],["Maltepe","Yeltepe"],["MALTEPE","YELTEPE"],["Çınarlı","Çınarova"],["ÇINARLI","ÇINAROVA"],["Ankara","Ardora"],["ANKARA","ARDORA"],["Metris","Dervan"],["METRİS","DERVAN"],["Kartal","Tarsal"],["KARTAL","TARSAL"],["Merter","Velter"],["MERTER","VELTER"],["Bağdat","Arel"],["BAĞDAT","AREL"],["Bursa","Belra"],["BURSA","BELRA"],["İzmir","İldem"],["İZMİR","İLDEM"],["Sivas","Torvas"],["SİVAS","TORVAS"],["T.C.","VELYA CUMHURİYETİ"],["Rize","Nerze"],["RİZE","NERZE"],["Buca","Meldar"],["BUCA","MELDAR"],["Moda","Lora"],["MODA","LORA"],["Şile","Sire"],["ŞİLE","SİRE"],["PTT","PHİ"],["TEK","VEK"],[" TL"," VL"]];
function migrateWorldNames(value) {
  if (typeof value === "string") {
    for (const [oldName, newName] of worldNameReplacements) {
      const escaped = oldName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      value = value.replace(new RegExp("(?<![\\p{L}])" + escaped + ((oldName === "TEK" || oldName === "MODA" || oldName === "Moda") ? "(?![\\p{L}])" : ""), "gu"), () => newName);
    }
    return value.replace(/Kurgusal\s+|kurgusal\s+/g, "").replace(/Velya'nin/g, "Velya'nın");
  }
  if (Array.isArray(value)) return value.map(migrateWorldNames);
  if (value && typeof value === "object") return Object.fromEntries(Object.entries(value).map(([key, item]) => [key, migrateWorldNames(item)]));
  return value;
}

// Takvim ayları sıfır tabanlıdır: 0 = Ocak 1991, 12 = Ocak 1992.
const SAVE_KEY = 'af_kurulu_calendar_v2';
const SETTINGS_KEY = 'af_kurulu_settings_v1';
const RIOT_CAPACITY = 110;
const months = ['OCAK', 'ŞUBAT', 'MART', 'NİSAN', 'MAYIS', 'HAZİRAN', 'TEMMUZ', 'AĞUSTOS', 'EYLÜL', 'EKİM', 'KASIM', 'ARALIK'];
const initialMonths = typeof cases !== 'undefined' ? cases.map(c => c.initialMonth) : [0, 0, 1, 2, 2, 2, 3, 3, 3, 3, 4, 4, 5, 5, 5, 5, 6, 6];
const servedMonths = typeof cases !== 'undefined' ? cases.map(c => c.servedMonths) : [25, 50, 54, 38, 25, 18, 48, 30, 28, 171, 44, 32, 36, 110, 60, 152, 50, 49];
const sentenceMonths = typeof cases !== 'undefined' ? cases.map(c => c.sentenceMonths) : [36, 96, 72, 60, 48, 36, 84, 48, 54, 216, 72, 60, 60, 180, 96, 180, 72, 96];
let decisionTimer = null;
let gameState;

// Ayarlar Durumu (Ses, Ekran Sarsıntısı, Yazı Boyutu ve Karanlık Mod)
let gameSettings = {
  sound: true,
  shake: true,
  fontSize: 'normal',
  darkMode: false
};

function loadSettings() {
  try {
    const raw = localStorage.getItem(SETTINGS_KEY);
    if (raw) {
      gameSettings = { ...gameSettings, ...JSON.parse(raw) };
    }
  } catch (e) {}
  applySettings();
}

function saveSettings() {
  try {
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(gameSettings));
  } catch (e) {}
  applySettings();
}

function applySettings() {
  scheduleDocumentFit();
  if (typeof isMuted !== 'undefined') {
    isMuted = !gameSettings.sound;
    if (isMuted && typeof heartbeatInterval !== 'undefined' && heartbeatInterval) {
      clearInterval(heartbeatInterval);
      heartbeatInterval = null;
    } else if (!isMuted) {
      if (typeof initAudio === 'function') initAudio();
      if (typeof checkHeartbeat === 'function') checkHeartbeat();
    }
  }
  const soundIcon = document.getElementById('soundIcon');
  if (soundIcon) soundIcon.textContent = gameSettings.sound ? '🔊' : '🔇';

  const settingSoundBtn = document.getElementById('btnSettingSoundToggle');
  if (settingSoundBtn) {
    settingSoundBtn.textContent = gameSettings.sound ? 'AÇIK' : 'KAPALI';
    settingSoundBtn.className = gameSettings.sound
      ? 'bg-emerald-800 text-emerald-100 px-3 py-1.5 rounded font-bold text-xs cursor-pointer border border-emerald-600'
      : 'bg-stone-700 text-stone-300 px-3 py-1.5 rounded font-bold text-xs cursor-pointer border border-stone-600';
  }

  // Yazı Boyutu ve Karanlık Modu DOM'a yansıt
  if (typeof document !== 'undefined' && document.body && document.body.classList) {
    document.body.classList.remove('font-size-normal', 'font-size-large', 'font-size-xlarge');
    document.body.classList.add(`font-size-${gameSettings.fontSize || 'normal'}`);

    if (gameSettings.darkMode) {
      document.body.classList.add('theme-dark');
    } else {
      document.body.classList.remove('theme-dark');
    }
  }

  // Yazı boyutu butonları
  const fontNormalBtn = document.getElementById('btnFont-normal');
  const fontLargeBtn = document.getElementById('btnFont-large');
  const fontXlargeBtn = document.getElementById('btnFont-xlarge');
  const fontLabel = document.getElementById('labelFontSizeCurrent');
  const curFont = gameSettings.fontSize || 'normal';

  if (fontLabel) {
    fontLabel.textContent = curFont === 'xlarge' ? 'ÇOK BÜYÜK' : curFont === 'large' ? 'BÜYÜK' : 'STANDART';
  }

  if (fontNormalBtn && fontLargeBtn && fontXlargeBtn) {
    const activeCls = 'py-1.5 rounded font-bold transition text-center border cursor-pointer bg-amber-800 text-amber-100 border-amber-600 shadow-sm';
    const inactiveCls = 'py-1.5 rounded font-bold transition text-center border cursor-pointer bg-stone-200 text-stone-700 hover:bg-stone-300 border-stone-300';
    fontNormalBtn.className = curFont === 'normal' ? activeCls : inactiveCls;
    fontLargeBtn.className = curFont === 'large' ? activeCls : inactiveCls;
    fontXlargeBtn.className = curFont === 'xlarge' ? activeCls : inactiveCls;
  }

  // Karanlık mod butonu
  const darkBtn = document.getElementById('btnSettingDarkToggle');
  if (darkBtn) {
    darkBtn.textContent = gameSettings.darkMode ? 'AÇIK' : 'KAPALI';
    darkBtn.className = gameSettings.darkMode
      ? 'bg-emerald-800 text-emerald-100 px-3 py-1.5 rounded font-bold text-xs cursor-pointer border border-emerald-600'
      : 'bg-stone-700 text-stone-300 px-3 py-1.5 rounded font-bold text-xs cursor-pointer border border-stone-600';
  }

  if (typeof document !== 'undefined' && document.body && document.body.classList) {
    if (!gameSettings.shake) {
      document.body.classList.add('no-shake');
    } else {
      document.body.classList.remove('no-shake');
    }
  }

  if (!gameSettings.shake) {
    document.getElementById('deskArea')?.classList.remove('danger-level-1', 'danger-level-2');
  }
}

function toggleSettingsSound() {
  gameSettings.sound = !gameSettings.sound;
  saveSettings();
}

function setFontSize(size) {
  if (!['normal', 'large', 'xlarge'].includes(size)) size = 'normal';
  gameSettings.fontSize = size;
  saveSettings();
}

function toggleDarkMode() {
  gameSettings.darkMode = !gameSettings.darkMode;
  saveSettings();
}

function resetAllData() {
  try {
    localStorage.removeItem(SAVE_KEY);
    localStorage.removeItem(SETTINGS_KEY);
    localStorage.removeItem('af_kurulu_vicdan_sicil_save');
  } catch (e) {}
  restartGame();
  closeSettingsModal();
  updateMenuButtons();
  openMainMenu();
}

function toggleFullscreen() {
  if (typeof document === 'undefined') return;
  const isFull = !!(document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement);
  
  try {
    if (!isFull) {
      const docEl = document.documentElement;
      if (docEl.requestFullscreen) {
        docEl.requestFullscreen().catch(() => {});
      } else if (docEl.webkitRequestFullscreen) {
        docEl.webkitRequestFullscreen();
      } else if (docEl.msRequestFullscreen) {
        docEl.msRequestFullscreen();
      } else if (docEl.mozRequestFullScreen) {
        docEl.mozRequestFullScreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      }
    }
  } catch (e) {}

  setTimeout(updateFullscreenUI, 100);
}

function updateFullscreenUI() {
  if (typeof document === 'undefined') return;
  const isFull = !!(document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement);
  
  const topIcon = document.getElementById('topFullscreenIcon');
  if (topIcon) topIcon.textContent = isFull ? '🗗' : '⛶';

  const menuLabel = document.getElementById('fullscreenLabel');
  if (menuLabel) menuLabel.textContent = isFull ? 'PENCERE MODU' : 'TAM EKRAN';

  const menuSub = document.getElementById('fullscreenSub');
  if (menuSub) menuSub.textContent = isFull ? 'Tam ekrandan çık' : 'Görünümü genişlet / tam ekran yap';

  const menuIcon = document.getElementById('fullscreenIcon');
  if (menuIcon) menuIcon.textContent = isFull ? '🗗' : '⛶';
}

if (typeof document !== 'undefined' && typeof document.addEventListener === 'function') {
  document.addEventListener('fullscreenchange', updateFullscreenUI);
  document.addEventListener('webkitfullscreenchange', updateFullscreenUI);
  document.addEventListener('mozfullscreenchange', updateFullscreenUI);
  document.addEventListener('MSFullscreenChange', updateFullscreenUI);
}

// 1991 Kırmızı Masa Telefonu Çağrıları (Baskı, rüşvet ve sokak istihbaratı diyalogları)
const phoneCalls = {
  // 31. Vaka: Kadir Yılmaz (İhale Yolsuzluğu) - İlk İnceleme
  '31_0': {
    caller: 'Ardora Büyükşehir Eski Başkanı Nusret Bey',
    callerDept: 'ARDORA · ÖZEL HAT',
    dialogue: 'Başkanım, Kadir Yılmaz benim çok eski ve değerli bir dostumdur. İçeride yeterince yattı. Yarım kalan enerji ve yol projelerimiz var; memleket ekonomisi için Kadir\'in dışarı çıkması şart. Bu dosyada pürüz istemiyorum, onayınızı bekliyorum. Aksi halde Ardora\'daki itibarınızı ve geleceğinizi gözden geçirmeniz gerekir.'
  },
  // 32. Vaka: Selim "Sarı" Yücel (Gümrük Çetesi) - İlk İnceleme
  '32_0': {
    caller: 'İstihbarat Daire Başkan Yardımcısı Tuğrul Bey',
    callerDept: 'ARDORA · EMNİYET VE İSTİHBARAT SANTRALİ',
    dialogue: 'Kurul Başkanı! Masandaki Sarı Selim dosyası için arıyorum. Bu adamın dışarı adım atması demek, Batıgeçit ve İldem sokaklarının yeniden kan gölüne dönmesi demektir. Eski ortaklarını şimdiden tehdit ettiriyor. Şartlı tahliyesine derhal ret kaşesini basacaksın! Eğer onaylayıp salarsan, çıkacak ilk çatışmadan ve güvenlik zafiyetinden doğrudan sen sorumlu tutulursun!'
  },

  "28_0": {"caller":"Milletvekili Rauf Erel’in Özel Kalem Müdürü Saim Bey","callerDept":"VELYA MECLİSİ · MİLLETVEKİLİ ÖZEL KALEMİ","dialogue":"Başkanım, Sayın Vekilimiz adına arıyorum. Oğuz Vardar’ın ailesi mağdurun zararını karşıladı, evrakı da dosyanızda. Vardar Metal bu şehrin ekmek kapısıdır. Oğuz Bey’in ailesine dönmesini bekliyoruz. Olumlu değerlendirmenizi Bakanlıktaki muhataplarımıza ileteceğiz. Dosya yine beklerse kurulunuzun neden işi uzattığını da sormamız gerekecek."},
  "28_1": {"caller":"Milletvekili Rauf Erel’in Özel Kalem Müdürü Saim Bey","callerDept":"VELYA MECLİSİ · MİLLETVEKİLİ ÖZEL KALEMİ","dialogue":"Başkanım, altı ay önce ödeme belgesi istediniz. Şimdi para işçinin hesabına geçmiş; banka kaydı önünüzde. Vekilimiz bu kez tahliye bekliyor. Kararınızı Bakanlığa bildireceğiz. Yine ret verirseniz kurulunuzun uygulamalarının incelenmesini isteyeceğiz. Takdir elbette sizin."},

  '17_0': { caller: 'Bakanlık Müsteşar Yardımcısı Rıfat Bey', callerDept: 'ARDORA · MAKAM SANTRALİ', dialogue: 'Başkanım, Turgut Bey’in dosyası bugün önünüzde. Mağdurla mesele kapandı, karşılıklı anlaştılar diye bilgi geldi. Bunca hizmeti olan bir insanı artık ailesine kavuşturalım. Bu dosyada olumlu karar bekliyoruz; aksi durumda kurulun uygulamalarını ayrıca incelememiz gerekecek.' },
  '17_1': { caller: 'Bakanlık Müsteşar Yardımcısı Rıfat Bey', callerDept: 'ARDORA · MAKAM SANTRALİ', dialogue: 'Turgut Bey için altı ay bekledik. Dernek teklifini reddetmiş, ayrı adrese gidecekmiş; artık dosyanın kapanmasını bekliyoruz. Mağdurla anlaşma belgesi yoksa bu konuyu uzatmayın. Vereceğiniz kararın gerekçesini şahsen görmek istiyorum.' },

  // 5. Vaka: Cemil Bozkurt (İhale Yolsuzluğu & Rüşvet) - İlk İnceleme
  '5_0': {
    caller: 'Bakanlık Özel Kalem Müdürü Muzaffer Bey',
    callerDept: 'VELYA CUMHURİYETİ HUKUK VE İNFAZ BAKANLIĞI SANTRAL · ARDORA',
    dialogue: 'Sayın Kurul Başkanım, Cemil Bozkurt Bey\'in dosyası önünüze gelmiş olmalı. Kendisi ağır şeker hastası, revirde yataktan kalkamıyor. Ailesi perişan vaziyette. Sayın Bakanımız bu dosyayı bizzat takip ediyor ve tahliyesini bekliyor. Bu akşam evrakı imzalayın, Ardora\'da önünüz açılsın. Aksi takdirde teftiş heyeti yarın masanızı inceler!'
  },
  // 6. Vaka: Barış Aksoy (Tıp Fakültesi Öğrencisi & Bildiri) - İlk İnceleme
  '6_0': {
    caller: 'Devlet Güvenlik Mahkemesi Başsavcı Vekili Kenan Bey',
    callerDept: 'DEVLET GÜVENLİK MAHKEMESİ BAŞSAVCILIĞI',
    dialogue: 'Başkan dinle beni! Barış Aksoy isimli militanı tahliye etmeyi aklından bile geçirme. Fakülteden kaydı çoktan silindi, artık öğrenci falan değil. Dışarı çıkarsa öğrenci derneklerini yeniden sokağa döker. Erteleme kaşesini vur, dosyasını kapat. Yoksa terör örgütüne yataklıktan hakkında dosya açtırırım!'
  },
  // 2. Vaka: Erkan Korkmaz (Tetikçi / Çete) - İlk İnceleme
  '2_0': {
    caller: 'Gizli İhbar (Kıraathane Esnafı)',
    callerDept: 'DERENKÖY İLÇE EMNİYET SANTRALİ AKTARMALI',
    dialogue: "Ben kahvehanenin yakınında esnafım. Dün iki kişi dükkâna gelip işletmeciye Erkan’ın yakında çıkacağını söyledi. İşletmeci konuşmak istemeyince kepenge vurdular. İsimlerini bilmiyorum; Erkan mı gönderdi onu da bilmiyorum. Olayı karakola bildirdik."
  },
  // 9. Vaka: Murat Çetin (Alkollü Kaza) - İlk İnceleme
  '9_0': {
    caller: 'Milletvekili Başdanışmanı Selahattin Bey',
    callerDept: 'VELYA MECLİSİ İKTİDAR GRUBU ODASI',
    dialogue: 'Başkanım, bu dosyayı Sayın Vekilimiz yakından takip ediyor. Mağdur ailesinin dilekçesi var; ayrıca biz de bu toplantıda tahliye kararı çıkmasını istemiyoruz. Kurum raporlarınız olumlu olabilir, ancak kararınızın gerekçesi Ardora’da ayrıca değerlendirilecek. Erteleme yönünde hareket etmenizi bekliyoruz.'
  },
  // 1. Vaka: Emre Yılmaz (6 Ay Erteleme Sonrası Dönüş - 2. İnceleme)
  '1_1': {
    caller: 'Tarsal Oto Sanayi - Tornacı Nuri Usta',
    callerDept: 'TARSAL PHİ SANTRALİ · ŞAHSİ ÇAĞRI',
    dialogue: 'Başkan Bey, ben Tarsal’dan Nuri. Emre için kalfa yardımcılığı teklifimi yazılı gönderdim. Hastane kontrollerine göre saatlerini ayarlayabilirim. İçerideki olayın ayrıntılarını bilmiyorum; ailesi yaralandığını söyledi. Atölyede çalıştığı dönemde verilen işleri tamamlıyordu. Dışarıdaki borçlarını nasıl çözeceğini ise bilmiyorum.'
  },
  // 2. Vaka: Erkan Korkmaz (6 Ay Erteleme Sonrası Dönüş - 2. İnceleme)
  '2_1': {
    caller: 'Derenköy İlçe Emniyet Amiri Kemal Bey',
    callerDept: 'KARDUN EMNİYET MÜDÜRLÜĞÜ · ASAYİŞ ŞUBE',
    dialogue: "Başkanım, Mayıs ayındaki aramanın tutanağını dosyanıza gönderdik. Erkan’ın kişisel eşya torbasında iki metal parçası ve mağdurun yeni adresinin krokisi bulunmuş. Dışarıdaki tehditlerle bağlantısını araştırıyoruz. Mağdurun koruma başvurusu sürüyor; şu an Erkan’ın talimat verdiğini doğrulayan bir ifade yok."
  }
};

let activeCallKey = null;
let activePhoneCall = null;
let phoneInterval = null;
let phoneAnswered = false;
let phoneIgnored = false;
let phoneVoiceAudio = null;

function freshGame() {
  const q = cases.map((c, i) => ({ id: c.id, month: c.initialMonth ?? initialMonths[i], firstMonth: c.initialMonth ?? initialMonths[i], review: 0, previous: null }));
  q.sort((a,b) => a.month - b.month || a.id - b.id);
  return { version: 2, vicdan: 50, sicil: 50, capacity: 104, history: [], activeTab: 'main', phase: 'review',
    queue: q,
    meetingPosition: 1, pending: null };
}

function dateFor(month) {
  const year = 1991 + Math.floor(month / 12);
  const mm = String(month % 12 + 1).padStart(2, '0');
  return { meetingDate: `7 ${months[month % 12]} ${year}`, short: `07.${mm}.${year}`, term: `${year}/${mm}` };
}

function saveGame() {
  try { localStorage.setItem(SAVE_KEY, JSON.stringify(gameState)); }
  catch (e) {
    const notice = document.getElementById('saveNotice');
    if (notice) notice.textContent = 'Kayıt yapılamadı. Sayfayı kapatırsanız ilerleme kaybolabilir.';
  }
  updateMenuButtons();
}

function validSave(s) {
  const entry = e => e && Number.isInteger(e.id) && e.id >= 1 && e.id <= cases.length && Number.isInteger(e.month) && e.month >= 0 && Number.isInteger(e.firstMonth) && e.firstMonth >= 0 && e.firstMonth <= e.month && Number.isInteger(e.review) && e.review >= 0;
  return s && s.version === 2 && ['review', 'consequence', 'ended'].includes(s.phase) &&
    ['vicdan', 'sicil', 'capacity'].every(k => Number.isFinite(s[k]) && s[k] >= 0 && s[k] <= (k === 'capacity' ? 140 : 100)) &&
    Array.isArray(s.queue) && s.queue.every(entry) && s.queue.every((e, i) => !i || s.queue[i - 1].month <= e.month) &&
    new Set(s.queue.map(e => e.id)).size === s.queue.length &&
    Array.isArray(s.history) && s.history.every(h => h && ['month','name','decision','summary'].every(k => typeof h[k] === 'string')) &&
    ['main','defense','psych','guard','letter'].includes(s.activeTab) && Number.isInteger(s.meetingPosition) && s.meetingPosition >= 1 && s.meetingPosition <= cases.length * 2 &&
    (s.phase === 'ended' || s.queue.length > 0) &&
    (s.phase !== 'consequence' || (s.pending && typeof s.pending.isRelease === 'boolean' && s.pending.outcome && typeof s.pending.outcome.body === 'string' && ['vicdanDelta','sicilDelta','capacityDelta'].every(k => Number.isFinite(s.pending.outcome[k]))));
}

function loadSavedGame() {
  gameState = freshGame();
  try {
    const raw = localStorage.getItem(SAVE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (!validSave(parsed)) throw new Error('Geçersiz kayıt');
      gameState = migrateWorldNames(parsed);
      // Eski sürümde oluşmuş üçüncü ve sonraki incelemeler artık kapalıdır.
      if (gameState.queue.some(e => e.review > 1)) {
        const oldCurrent = gameState.queue[0];
        gameState.queue = gameState.queue.filter(e => e.review <= 1);
        if (oldCurrent.review > 1) {
          gameState.pending = null;
          gameState.activeTab = 'main';
          gameState.meetingPosition = 1;
          gameState.phase = gameState.queue.length && !isTerminal() ? 'review' : 'ended';
        }
        saveGame();
      }
    } else if (localStorage.getItem('af_kurulu_vicdan_sicil_save')) {
      const notice = document.getElementById('saveNotice');
      if (notice) notice.textContent = 'Yeni aylık takvim için yeni oyun açıldı. Eski sürüm kaydınız korunuyor.';
    }
  } catch (e) {
    const notice = document.getElementById('saveNotice');
    if (notice) notice.textContent = 'Kayıt okunamadı; yeni oyun açıldı.';
  }
}

// Ana Menü ve Giriş Sayfası Yönetimi
function getContinueSummary() {
  if (!gameState || !gameState.queue || !gameState.queue.length || gameState.phase === 'ended') {
    return null;
  }
  const e = gameState.queue[0];
  const dateInfo = dateFor(e.month);
  const totalInMeeting = gameState.queue.filter(x => x.month === e.month).length + gameState.meetingPosition - 1;
  return `Kaldığınız Yer: ${dateInfo.meetingDate} · Dosya ${gameState.meetingPosition}/${totalInMeeting} (Vicdan: %${gameState.vicdan} | Sicil: %${gameState.sicil})`;
}

function updateMenuButtons() {
  const summary = getContinueSummary();
  const btnContinue = document.getElementById('btnMenuContinue');
  const summaryEl = document.getElementById('menuContinueSummary');

  if (btnContinue && summaryEl) {
    if (summary) {
      btnContinue.disabled = false;
      btnContinue.classList.remove('opacity-50', 'cursor-not-allowed');
      summaryEl.textContent = summary;
    } else {
      btnContinue.disabled = true;
      btnContinue.classList.add('opacity-50', 'cursor-not-allowed');
      summaryEl.textContent = 'Kayıtlı veya devam eden kurul oturumu bulunmuyor.';
    }
  }
}

function openMainMenu() {
  stopPhoneRinging();
  updateMenuButtons();
  updateFullscreenUI();
  document.getElementById('mainMenuScreen')?.classList.remove('hidden');
  document.getElementById('gameScreen')?.classList.add('hidden');
}

function closeMainMenu() {
  document.getElementById('mainMenuScreen')?.classList.add('hidden');
  document.getElementById('gameScreen')?.classList.remove('hidden');
  scheduleDocumentFit();
}

function continueGame() {
  closeMainMenu();
  renderCurrentCase();
}

function startNewGamePrompt() {
  const hasProgress = gameState && (gameState.history?.length > 0 || gameState.queue?.[0]?.month > 0 || gameState.vicdan !== 50 || gameState.sicil !== 50);
  if (hasProgress && gameState.phase !== 'ended') {
    document.getElementById('newGameConfirmModal')?.classList.remove('hidden');
  } else {
    confirmStartNewGame();
  }
}

function closeNewGameConfirmModal() {
  document.getElementById('newGameConfirmModal')?.classList.add('hidden');
}

function confirmStartNewGame() {
  closeNewGameConfirmModal();
  restartGame();
  closeMainMenu();
}

function openSettingsModal() {
  applySettings();
  document.getElementById('settingsModal')?.classList.remove('hidden');
}

function closeSettingsModal() {
  document.getElementById('settingsModal')?.classList.add('hidden');
}

function openInstructionsModal() {
  document.getElementById('instructionsModal')?.classList.remove('hidden');
}

function closeInstructionsModal() {
  document.getElementById('instructionsModal')?.classList.add('hidden');
}

function openAboutModal() {
  document.getElementById('aboutModal')?.classList.remove('hidden');
  document.getElementById('copyEmailNotice')?.classList.add('hidden');
}

function closeAboutModal() {
  document.getElementById('aboutModal')?.classList.add('hidden');
}

function copyEmailAddress() {
  const email = 'baharikan@gmail.com';
  if (typeof navigator !== 'undefined' && navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(email).then(() => {
      const notice = document.getElementById('copyEmailNotice');
      if (notice) notice.classList.remove('hidden');
    }).catch(() => {
      if (typeof prompt === 'function') prompt('E-posta adresi:', email);
    });
  } else {
    if (typeof prompt === 'function') prompt('E-posta adresi:', email);
  }
}

window.addEventListener('DOMContentLoaded', () => {
  loadSettings();
  loadSavedGame();
  updateMenuButtons();
});

function restartGame() {
  clearTimeout(decisionTimer);
  stopPhoneRinging();
  phoneAnswered = false;
  phoneIgnored = false;
  activePhoneCall = null;
  activeCallKey = null;
  document.getElementById('phoneModal')?.classList.add('hidden');
  document.getElementById('archiveModal')?.classList.add('hidden');
  document.getElementById('compareModal')?.classList.add('hidden');
  gameState = freshGame();
  saveGame();
  renderCurrentCase();
}

function currentCase() {
  const e = gameState.queue[0];
  if (!e) return null;
  const base = cases[e.id - 1];
  const c = { ...base };
  const elapsed = e.month - e.firstMonth;
  const served = Math.min(sentenceMonths[e.id - 1], servedMonths[e.id - 1] + elapsed);
  c.sentence = `${Math.floor(served / 12)} yıl ${served % 12} ay infaz / ${Math.floor(sentenceMonths[e.id - 1] / 12)} yıl ${sentenceMonths[e.id - 1] % 12} ay`;
  c.age += Math.floor(elapsed / 12);
  if (!e.review) return c;

  const rev = base.review || {};
  let revStatus = rev.status || '';
  let revPsych = rev.psychNote || '';
  let revGuard = rev.guardReport || '';
  let revLetter = rev.letterText || '';
  let revDefense = rev.defenseText || "6 ay önceki erteleme kararınızdan sonra kurumda çalışmaya ve cezamı çekmeye devam ettim. Durumumun kurulumuzca hakkaniyetle yeniden takdirini arz ederim.";
  let revRelease = rev.releaseConsequence ? { ...rev.releaseConsequence } : { headline: '', body: '', chronicle: '', vicdanDelta: 0, sicilDelta: 0, capacityDelta: -3 };
  let revReject = rev.rejectConsequence ? { ...rev.rejectConsequence } : { headline: `${base.name.toLocaleUpperCase('tr-TR')}: ŞARTLI TAHLİYE HAKKI YANDI`, body: '', chronicle: '', vicdanDelta: -10, sicilDelta: 10, capacityDelta: 3 };


  const banner = `<div class="bg-amber-100 border border-amber-700 rounded p-2 mb-3"><strong>YENİ BİLGİ · ${e.review + 1}. DEĞERLENDİRME</strong><p>Önceki karar: ${dateFor(e.previous ?? e.month - 6).meetingDate} — 6 ay erteleme.</p><p>İlk incelemeden bu yana ${elapsed} ay geçti.</p></div>`;
  const status = e.review === 1 ? revStatus : `Son altı aylık takip tamamlandı. Önceki gelişme: ${revStatus} Yeni kurul için aşağıdaki durum yeniden değerlendirildi.`;
  c.mainText = banner + `<p><strong>GÜNCEL DURUM:</strong> ${status}</p><details class="mt-3"><summary>İlk dosyayı aç (arşiv)</summary>${c.mainText}</details>`;
  c.psychNote = banner + `<p><strong>GÜNCEL DOKTOR RAPORU:</strong> ${revPsych}</p>`;
  c.guardReport = banner + `<p><strong>SON ALTI AYIN JURNALİ:</strong> ${revGuard}</p>`;
  c.defenseText = banner + `<div class="bg-stone-50/80 p-3 rounded border border-stone-300 font-typewriter text-stone-900"><div class="flex items-center justify-between border-b border-stone-300 pb-1.5 mb-2 text-xs font-mono text-stone-600"><span>GÜNCEL HÜKÜMLÜ BEYANI</span><span>${e.review + 1}. İNCELEME</span></div><p class="italic text-stone-800 leading-relaxed text-[13px]">${revDefense}</p><div class="mt-3 pt-2 border-t border-dashed border-stone-300 text-right text-[11px] font-mono text-stone-500">İfade Sahibi: <span class="italic text-stone-700 font-semibold">${base.name} (Ek Savunma)</span></div></div>`;
  c.letterText = banner + `<p><strong>YENİ MEKTUP / EK BELGE:</strong> ${revLetter}</p>`;
  if (revLetter) c.mainText += `<p class="mt-2"><strong>GÜNCEL EK BELGE:</strong> ${revLetter}</p>`;
  c.releaseConsequence = revRelease;
  c.rejectConsequence = revReject;
  c.mainText = '<p class="bg-red-100 text-red-900 border border-red-700 rounded p-2 mb-2"><strong>SON İNCELEME:</strong> İkinci ret kararında şartlı tahliye hakkı yanar; dosya kapanır.</p>' + c.mainText;
  return c;
}

function isTerminal() { return gameState.vicdan <= 0 || gameState.sicil <= 0 || gameState.capacity > RIOT_CAPACITY; }

// Telefon Zili Yönetimi
function startPhoneRinging() {
  stopPhoneRinging();
  if (typeof playPhoneRingBurst === 'function') playPhoneRingBurst();
  phoneInterval = setInterval(() => {
    if (typeof playPhoneRingBurst === 'function') playPhoneRingBurst();
  }, 3200);
}

function stopPhoneRinging() {
  if (phoneInterval) {
    clearInterval(phoneInterval);
    phoneInterval = null;
  }
}

function checkAndTriggerPhoneCall() {
  const e = gameState?.queue?.[0];
  const bar = document.getElementById('phoneDeskBar');
  const icon = document.getElementById('phoneIconBox');
  const statusLbl = document.getElementById('phoneStatusLabel');
  const subLbl = document.getElementById('phoneSubLabel');
  const actionBtns = document.getElementById('phoneActionBtns');
  const phoneBtn = document.getElementById('btnDeskPhone') || document.getElementById('btnHeaderPhone');
  const ringingOverlay = document.getElementById('ringingPhoneOverlay');
  const ringPing = document.getElementById('phoneRingPing');
  const ringBadge = document.getElementById('phoneRingBadge');

  if (gameState.phase !== 'review' || !e) {
    stopPhoneRinging();
    if (ringingOverlay) ringingOverlay.classList.add('hidden');
    if (bar) bar.classList.remove('phone-ringing');
    if (phoneBtn) {
      phoneBtn.classList.remove('phone-ringing');
      phoneBtn.title = 'Kırmızı Masa Telefonu (Sessiz)';
    }
    if (ringPing) ringPing.classList.add('hidden');
    if (ringBadge) ringBadge.classList.add('hidden');
    if (icon) icon.classList.remove('phone-icon-pulse');
    if (statusLbl) statusLbl.textContent = 'KIRMIZI HAT: SESSİZ';
    if (subLbl) subLbl.textContent = 'PHİ Dahili Santral Beklemede';
    if (actionBtns) actionBtns.classList.add('hidden');
    return;
  }

  const callKey = `${e.id}_${e.review}`;
  if (callKey !== activeCallKey) {
    activeCallKey = callKey;
    phoneAnswered = false;
    phoneIgnored = false;
    stopPhoneRinging();
  }
  const call = phoneCalls[callKey];

  if (call && !phoneAnswered && !phoneIgnored) {
    activePhoneCall = call;
    if (ringingOverlay) ringingOverlay.classList.remove('hidden');
    if (bar) bar.classList.add('phone-ringing');
    if (phoneBtn) {
      phoneBtn.classList.add('phone-ringing');
      phoneBtn.title = `☎️ ÇALIYOR! Arayan: ${call.caller} (Açmak için tıklayın)`;
    }
    if (ringPing) ringPing.classList.remove('hidden');
    if (ringBadge) ringBadge.classList.remove('hidden');
    if (icon) icon.classList.add('phone-icon-pulse');
    if (statusLbl) {
      statusLbl.textContent = '☎️ ÇALIYOR! (DAHİLİ KRİPTO HAT)';
      statusLbl.classList.add('text-red-400');
    }
    if (subLbl) subLbl.textContent = `Arayan: ${call.caller}`;
    if (actionBtns) actionBtns.classList.remove('hidden');
    startPhoneRinging();
  } else {
    stopPhoneRinging();
    if (ringingOverlay) ringingOverlay.classList.add('hidden');
    if (bar) bar.classList.remove('phone-ringing');
    if (phoneBtn) {
      phoneBtn.classList.remove('phone-ringing');
      phoneBtn.title = phoneAnswered
        ? `Kırmızı Masa Telefonu (Görüşüldü: ${activePhoneCall ? activePhoneCall.caller : ''})`
        : (phoneIgnored ? 'Kırmızı Masa Telefonu (Meşgule Atıldı)' : 'Kırmızı Masa Telefonu (Sessiz)');
    }
    if (ringPing) ringPing.classList.add('hidden');
    if (ringBadge) ringBadge.classList.add('hidden');
    if (icon) icon.classList.remove('phone-icon-pulse');
    if (statusLbl) {
      statusLbl.classList.remove('text-red-400');
      if (phoneAnswered) {
        statusLbl.textContent = 'GÖRÜŞÜLDÜ: ' + (activePhoneCall ? activePhoneCall.caller : 'Ahize Kapatıldı');
      } else if (phoneIgnored) {
        statusLbl.textContent = 'ARAMA MEŞGULE ATILDI (CEVAPSIZ)';
      } else {
        statusLbl.textContent = 'KIRMIZI HAT: SESSİZ';
      }
    }
    if (subLbl) {
      if (phoneAnswered) {
        subLbl.textContent = 'Görüşme tutanağı masaya işlendi';
      } else if (phoneIgnored) {
        subLbl.textContent = 'Santral hattı kesildi';
      } else {
        subLbl.textContent = 'PHİ Dahili Santral Beklemede';
      }
    }
    if (actionBtns) actionBtns.classList.add('hidden');
  }
}

function handlePhoneClick() {
  const e = gameState?.queue?.[0];
  const callKey = e ? `${e.id}_${e.review}` : null;
  const call = callKey ? phoneCalls[callKey] : null;

  if (call && !phoneAnswered && !phoneIgnored) {
    answerPhone();
  } else if (phoneAnswered) {
    showPhoneNotice(`PHİ DAHİLİ KRİPTO HATTI: Bu oturumda ${activePhoneCall ? activePhoneCall.caller : 'makam'} ile görüşüldü. Telefon tutanağı masadaki evraklara işlenmiştir.`);
  } else if (phoneIgnored) {
    showPhoneNotice('PHİ DAHİLİ SANTRAL: Çağrı meşgule atıldı. Şu anda hattan yeni bir talimat veya arama gelmiyor.');
  } else {
    showPhoneNotice('PHİ DAHİLİ SANTRAL: Şu anda hattan gelen aktif bir arama veya bakanlık talimatı bulunmuyor. Kırmızı hat beklemede.');
  }
}

function showPhoneNotice(msg) {
  const modal = document.getElementById('phoneStatusModal');
  const textEl = document.getElementById('phoneStatusModalText');
  if (modal && textEl) {
    textEl.textContent = msg;
    modal.classList.remove('hidden');
  } else if (typeof alert !== 'undefined') {
    alert(msg);
  }
}

function closePhoneStatusModal() {
  document.getElementById('phoneStatusModal')?.classList.add('hidden');
}

function answerPhone() {
  if (!activePhoneCall) return;
  stopPhoneRinging();
  document.getElementById('ringingPhoneOverlay')?.classList.add('hidden');
  if (typeof playPhonePickupSound === 'function') playPhonePickupSound();
  
  if (typeof gameSettings !== 'undefined' && gameSettings.sound) {
    if (!phoneVoiceAudio) {
      phoneVoiceAudio = new Audio('phone1.ogg');
      phoneVoiceAudio.loop = true;
    }
    phoneVoiceAudio.play().catch(e => console.warn('Audio play failed:', e));
  }

  phoneAnswered = true;

  const dateInfo = dateFor(gameState.queue[0]?.month || 0);
  const dateEl = document.getElementById('phoneCallDate');
  const deptEl = document.getElementById('phoneCallDept');
  const nameEl = document.getElementById('phoneCallerName');
  const dialEl = document.getElementById('phoneDialogueText');

  if (dateEl) dateEl.textContent = dateInfo.short;
  if (deptEl) deptEl.textContent = activePhoneCall.callerDept;
  if (nameEl) nameEl.innerHTML = `<span>☎️</span> <span>${activePhoneCall.caller}</span>`;
  if (dialEl) dialEl.textContent = `"${activePhoneCall.dialogue}"`;

  document.getElementById('phoneModal')?.classList.remove('hidden');
  checkAndTriggerPhoneCall();
}

function closePhoneModal() {
  if (typeof playPhoneHangupSound === 'function') playPhoneHangupSound();
  document.getElementById('phoneModal')?.classList.add('hidden');
  document.getElementById('ringingPhoneOverlay')?.classList.add('hidden');
  
  if (phoneVoiceAudio) {
    phoneVoiceAudio.pause();
    phoneVoiceAudio.currentTime = 0;
  }
  
  checkAndTriggerPhoneCall();
}

function ignorePhone() {
  stopPhoneRinging();
  phoneIgnored = true;
  document.getElementById('ringingPhoneOverlay')?.classList.add('hidden');
  checkAndTriggerPhoneCall();
}

// Arşiv Çekmecesi Yönetimi
function updateArchiveCount() {
  const badge = document.getElementById('archiveCountBadge');
  if (badge && gameState) {
    badge.textContent = `(${gameState.history ? gameState.history.length : 0})`;
  }
}

function openArchiveModal() {
  if (typeof playPaperSound === 'function') playPaperSound();
  renderArchiveList();
  document.getElementById('archiveModal')?.classList.remove('hidden');
}

function closeArchiveModal() {
  if (typeof playPaperSound === 'function') playPaperSound();
  document.getElementById('archiveModal')?.classList.add('hidden');
}

function renderArchiveList() {
  const container = document.getElementById('archiveListContainer');
  if (!container) return;
  container.innerHTML = '';

  if (!gameState?.history || gameState.history.length === 0) {
    container.innerHTML = `
      <div class="p-4 bg-stone-200/80 rounded border border-stone-300 text-center text-stone-600 font-typewriter">
        <p class="font-bold text-sm mb-1 text-stone-900">ARŞİVDE HENÜZ KARAR BULUNMUYOR</p>
        <p class="text-[11px] leading-relaxed">Kurulunuz karar verdikçe, verilen hükümler, basın kupürleri ve bürokratik sonuçlar bu çekmecede dosyalanacaktır.</p>
      </div>
    `;
    return;
  }

  const reversedHistory = [...gameState.history].reverse();
  reversedHistory.forEach(h => {
    const isRelease = h.decision === 'Şartlı Tahliye';
    const card = document.createElement('div');
    card.className = "p-3 bg-white/95 rounded border border-stone-300 shadow-sm space-y-1.5 text-stone-900";
    card.innerHTML = `
      <div class="flex items-center justify-between border-b border-stone-200 pb-1">
        <span class="font-mono text-[10px] text-stone-600 font-bold">${h.month}</span>
        <span class="font-bold text-[10px] font-mono px-2 py-0.5 rounded ${isRelease ? 'bg-emerald-100 text-emerald-800 border border-emerald-300' : 'bg-red-100 text-red-900 border border-red-300'}">
          ${h.decision}
        </span>
      </div>
      <div>
        <h4 class="font-bold text-stone-900 text-sm font-typewriter">${h.name}</h4>
      </div>
      ${h.headline ? `<div class="text-[11px] font-bold font-serif text-stone-950 uppercase border-l-2 ${isRelease ? 'border-emerald-600' : 'border-red-600'} pl-2">${h.headline}</div>` : ''}
      <p class="text-[11px] text-stone-700 leading-snug font-typewriter">${h.body || h.summary}</p>
      ${(h.vicdanDelta !== undefined || h.sicilDelta !== undefined) ? `
        <div class="flex gap-3 pt-1 border-t border-stone-100 text-[10px] font-mono text-stone-600">
          <span>⚖️ Vicdan: ${h.vicdanDelta > 0 ? '+' : ''}${h.vicdanDelta}</span>
          <span>📂 Sicil: ${h.sicilDelta > 0 ? '+' : ''}${h.sicilDelta}</span>
          <span>🏢 Doluluk: ${h.capacityDelta > 0 ? '+' : ''}${h.capacityDelta}</span>
        </div>
      ` : ''}
    `;
    container.appendChild(card);
  });
}

// 6 Ay Öncesi vs. Güncel Karşılaştırma Yönetimi
function openComparisonModal() {
  if (typeof playPaperSound === 'function') playPaperSound();
  const e = gameState?.queue?.[0];
  if (!e || e.review < 1) return;
  const c = currentCase();
  const previous = [...gameState.history].reverse().find(h =>
    (h.id === e.id || (!h.id && h.name === c.name)) &&
    h.month === dateFor(e.previous ?? e.month - 6).meetingDate);
  const old = previous?.dossier;
  const set = (id, text) => { const el = document.getElementById(id); if (el) el.textContent = text; };
  set('compareInmateTitle', c.name + ': Önceki İnceleme ve Güncel Dosya');
  set('compareInmateSubtitle', 'Önceki Oturum: ' + dateFor(e.previous ?? e.month - 6).meetingDate + ' ➔ Güncel Oturum: ' + dateFor(e.month).meetingDate);
  const missing = 'Bu eski kayıtta belge kopyası bulunmuyor. Yeni kararlar belgeleri saklayacak.';
  set('compareOldCrime', old ? old.crime + ' (' + old.age + ' Yaş, ' + old.sentence + ')' : missing);
  set('compareOldPsych', old?.psychNote || missing);
  set('compareOldGuard', old?.guardReport || missing);
  set('compareOldNewsHeadline', previous?.headline || 'Önceki karar');
  set('compareOldNewsBody', previous?.body || previous?.summary || 'Önceki karar kaydı bulunamadı.');
  set('compareNewStatus', dossierText(c.mainText.split('<details')[0]));
  set('compareNewPsych', dossierText(c.psychNote));
  set('compareNewGuard', dossierText(c.guardReport));
  set('compareNewLetter', dossierText(c.letterText));

  document.getElementById('compareModal')?.classList.remove('hidden');
}

function closeComparisonModal() {
  if (typeof playPaperSound === 'function') playPaperSound();
  document.getElementById('compareModal')?.classList.add('hidden');
}

function renderCurrentCase() {
  document.getElementById('consequenceModal').classList.add('hidden');
  document.getElementById('gameOverModal').classList.add('hidden');
  updateUI();
  updateArchiveCount();
  updateMenuButtons();

  if (gameState.phase === 'ended' || !gameState.queue.length) {
    stopPhoneRinging();
    triggerEnding();
    return;
  }
  const c = currentCase();
  const e = gameState.queue[0];
  const nameEl = document.getElementById('inmateName');
  if (nameEl) nameEl.textContent = c.name;
  const ageEl = document.getElementById('inmateAge');
  if (ageEl) ageEl.textContent = c.age;
  const crimeLineEl = document.getElementById('inmateCrimeLine');
  if (crimeLineEl) crimeLineEl.textContent = c.crime;
  const timeServedEl = document.getElementById('timeServed');
  if (timeServedEl) timeServedEl.textContent = c.sentence;
  const prisonLineEl = document.getElementById('inmatePrisonLine');
  if (prisonLineEl) prisonLineEl.textContent = getPrisonInfo(c).name;
  const verdictStatusEl = document.getElementById('verdictStatus');
  if (verdictStatusEl) verdictStatusEl.textContent = e.review ? 'YENİDEN İNCELEME' : 'İNCELEMEDE';
  const stampOverlayEl = document.getElementById('stampOverlay');
  if (stampOverlayEl) stampOverlayEl.classList.add('hidden');

  document.getElementById('rejectLabel').textContent = e.review === 0 ? '6 AY ERTELE' : 'KESİN RET';
  document.getElementById('btnReject').title = e.review === 0 ? 'Dosya altı ay sonra yeniden incelenir.' : 'Şartlı tahliye hakkı yanar; dosya kapanır.';
  // 6 Ay Karşılaştırma Butonu Görünürlüğü
  const compareBar = document.getElementById('compareDossierBar');
  if (compareBar) {
    if (e.review >= 1) compareBar.classList.remove('hidden');
    else compareBar.classList.add('hidden');
  }

  switchTab(gameState.activeTab, false);
  for (const id of ['btnReject','btnRelease']) document.getElementById(id).disabled = gameState.phase !== 'review';

  checkAndTriggerPhoneCall();

  if (gameState.phase === 'consequence') showConsequenceModal();
}

function getInmateSignatureData(c) {
  const id = c?.id || 1;
  const signatures = {
    1: 'M10,12 C8,20 12,28 20,30 C30,32 36,22 32,14 C40,6 50,4 56,16 C62,26 58,32 48,28 C58,18 70,8 82,22 C90,30 96,20 102,14 M12,34 C44,36 78,35 108,30 M95,22 C102,32 108,28',
    2: 'M10,24 C8,12 22,6 26,16 C28,26 14,28 10,32 C20,24 36,14 52,28 C68,10 84,26 102,16 M18,34 C50,38 86,34 112,26',
    3: 'M12,10 L12,30 M12,18 C20,10 28,10 30,22 C32,30 22,32 14,28 C26,20 42,10 58,26 C74,12 90,24 108,18 M14,32 Q60,36 110,28',
    4: 'M10,18 C14,8 20,6 24,14 C28,22 22,28 16,26 C24,18 34,10 42,18 C48,24 46,30 40,28 M52,8 C46,20 44,26 50,28 C58,30 66,22 68,14 C72,8 80,6 86,18 C92,26 100,18 106,14 M8,32 C36,34 72,33 108,30',
    5: 'M12,22 C14,8 20,4 24,14 C28,22 24,30 16,28 C24,16 36,6 48,20 C54,28 52,34 42,30 C52,16 64,8 76,24 C84,30 90,20 94,14 M10,34 C42,38 80,36 102,28 M88,22 C96,34 102,28',
    6: 'M12,28 L12,10 C22,8 28,14 22,20 C28,20 30,30 18,28 C32,20 48,10 62,28 C76,12 92,26 110,18 M12,32 C50,36 88,34 116,26',
    7: 'M10,14 C8,22 12,28 20,26 C28,24 26,16 22,10 C32,8 40,10 44,20 C48,28 44,32 36,28 C44,18 56,10 66,22 C74,28 80,22 82,18 M10,32 C40,34 68,33 84,30',
    8: 'M10,28 L14,10 L20,26 L26,10 L32,28 C44,14 58,30 74,12 C88,26 102,14 110,22 M12,32 C48,36 88,34 110,28',
    9: 'M10,26 L18,8 L26,26 L34,8 L42,28 C54,10 68,32 84,8 C98,28 114,10 124,24 M8,30 Q65,38 126,26',
    10: 'M10,10 L20,28 L30,10 M20,18 L20,34 C34,22 50,12 66,30 C82,12 98,28 114,18 M12,36 L116,28',
    11: 'M12,26 C10,16 14,10 20,14 C24,18 20,24 14,26 C20,22 28,16 36,22 C42,26 40,30 34,28 C40,22 50,16 60,24 C66,28 70,22 72,18 M10,30 C36,32 62,30 74,26',
    12: 'M14,10 L14,30 M8,10 L22,10 M8,20 L20,20 C32,12 44,28 58,14 C72,28 88,12 104,24 M12,32 C44,34 80,33 108,30',
    13: 'M18,12 C8,10 8,26 18,28 C28,30 30,18 22,14 C32,16 44,10 56,24 C66,12 78,28 92,14 C104,26 112,18 116,22 M14,32 C52,36 92,34 118,26',
    14: 'M22,8 C8,8 8,22 22,26 C32,28 28,36 16,34 C30,22 50,14 66,30 C82,12 98,28 114,16 M14,36 C60,40 102,38 118,28',
    15: 'M10,10 L20,32 L30,10 C44,22 60,10 76,30 C92,12 108,28 122,18 M12,34 C54,38 98,36 120,28',
    16: 'M20,12 C8,12 8,28 20,28 C32,28 32,12 20,12 C36,18 52,32 68,14 C84,30 100,14 110,24 M16,31 C54,35 90,33 108,28',
    17: 'M8,10 L30,10 M19,10 L19,32 C34,18 52,34 70,12 C88,32 106,10 120,26 M10,34 C58,40 102,36 122,28 M18,37 C72,44 116,32',
    18: 'M12,28 L12,8 L28,8 M12,18 L24,18 C38,24 52,14 68,32 C84,14 100,28 112,20 M12,32 C52,36 90,34 114,28',
    19: 'M24,12 C8,10 8,26 22,30 C36,24 52,14 68,28 C82,12 98,26 112,20 M16,32 C56,36 96,34 116,28',
    20: 'M20,14 C12,8 10,18 18,22 C24,26 18,32 10,30 C22,22 38,30 54,14 C70,28 86,14 104,24 M14,32 C50,36 88,34 108,28',
    21: 'M10,28 L10,8 L26,28 L26,8 C44,14 62,34 80,10 C98,30 116,12 126,26 M10,32 C64,40 112,36 128,28',
    22: 'M12,8 L12,30 M28,10 C14,16 16,30 28,32 C40,20 56,30 72,12 C88,28 104,14 110,24 M12,34 C54,36 96,34 112,30',
    23: 'M10,30 L10,8 C18,6 28,10 28,18 C28,26 18,26 10,22 L28,34 L50,8 L64,34 L84,8 L104,32 L122,12 M8,36 L126,28',
    24: 'M10,26 L14,12 L22,24 L28,12 L32,26 C42,14 58,30 72,14 C86,28 100,16 108,24 M12,30 C52,34 90,32 110,28',
    25: 'M10,6 L10,32 M10,16 Q22,6 26,34 M24,12 C42,6 48,36 64,10 C80,36 96,8 112,28 M8,36 C56,44 100,38 126,28 M20,39 C74,46 118,34',
    26: 'M24,10 C10,8 8,22 16,28 C26,32 40,14 54,26 C68,10 82,26 96,14 C110,26 116,16 118,22 M14,32 C58,36 102,34 120,26',
    27: 'M12,8 L12,30 L28,30 C44,16 60,30 76,12 C92,28 108,14 116,22 M12,32 C54,36 96,34 118,28',
    28: 'M22,10 C8,10 8,30 22,30 C36,30 38,10 22,10 C44,12 60,34 78,10 C96,32 112,10 124,26 M10,36 C60,44 108,38 128,28 M24,39 C76,46 118,34',
    29: 'M24,10 C10,8 6,26 20,30 C34,24 52,12 68,28 C84,10 100,24 112,18 M14,34 L114,26',
    30: 'M18,16 C12,10 10,20 16,24 C22,28 18,32 10,30 C22,24 36,20 52,30 C68,14 84,28 98,22 M12,32 C46,34 82,33 100,28',
    31: 'M10,6 L10,34 M28,8 L10,20 L28,34 C46,14 64,36 82,8 C100,32 118,10 126,26 M8,36 L128,28 M18,39 L120,32',
    32: 'M22,10 C8,8 6,22 20,26 C30,28 18,34 8,34 L44,12 L62,32 L82,10 L102,30 L124,14 M6,36 L126,28',
    33: 'M12,10 L12,28 M12,18 C22,10 30,12 32,22 C34,30 22,32 12,28 C28,20 46,8 62,28 C78,12 96,26 110,18 M14,32 Q62,36 110,28'
  };
  const path = signatures[id] || signatures[1];
  const tilt = ((id * 17) % 19) - 9;
  const thumbOpacity = (0.75 + ((id % 5) * 0.04)).toFixed(2);
  const strokeWidth = (id === 23 || id === 31 || id === 32 || id === 25) ? '2.3' : ((id === 4 || id === 24 || id === 30) ? '1.7' : '2.0');
  const inkColor = (id % 3 === 0) ? 'text-blue-900' : ((id % 3 === 1) ? 'text-blue-950' : 'text-indigo-950');
  return { path, tilt, thumbOpacity, strokeWidth, inkColor };
}

function getPrisonInfo(c) {
  const text = ((c?.mainText || '') + ' ' + (c?.guardReport || ''));
  if (text.includes('Serenköy')) {
    return {
      key: 'serenkoy',
      name: 'Serenköy Kadın Kapalı İnfaz Kurumu',
      region: 'Kardun',
      clerkLocation: 'Serenköy İnfaz Zabıt Masası',
      clerkCode: 'KRD-SRN',
      headerDept: 'SERENKÖY KADIN KAPALI İNFAZ KURUMU MÜDÜRLÜĞÜ',
      stampLine1: 'SERENKÖY KADIN KAPALI',
      wardenName: 'Nevin Tümer',
      wardenTitle: 'Kurum Müdiresi (1. Sınıf)',
      wardenSigPath: 'M10,18 C14,8 20,6 24,14 C28,22 22,28 16,26 C24,18 32,10 38,16 C42,22 40,28 36,26 M44,8 L44,28 C52,12 60,6 66,20 C70,28 68,32 62,28 C70,20 80,10 88,22 C94,28 102,18 106,16 M8,33 C40,34 76,33 108,30',
      guardName: 'Şükran Aksoy (Başgardiyan)',
      guardRank: 'Kadın Koğuşları Başmemuru',
      guardSigPath: 'M8,18 C12,8 18,6 22,14 C26,22 20,28 14,26 C22,18 32,10 38,18 C44,24 42,28 36,26 C44,16 56,8 66,18 C72,24 74,18 76,14 M10,28 C38,30 62,28 78,24',
      doctorName: 'Dr. Feride Çalık',
      doctorTitle: 'Kadın Psikiyatristi / Adli Tıp',
      doctorDipNo: 'DİP. NO: 3421-F · KARDUN',
      doctorStampName: 'DR. FERİDE ÇALIK',
      doctorStampTitle: 'PSİKİYATRİST · KADIN',
      doctorSigPath: 'M8,20 C15,8 22,6 28,18 C34,28 44,30 52,12 C60,4 70,6 76,22 C82,34 95,28 108,14 M10,26 Q55,32 110,22',
      doctorProtocol: '3421-F / KADIN'
    };
  }
  if (text.includes('Kargan')) {
    return {
      key: 'kargan',
      name: 'Kargan Kapalı İnfaz Kurumu',
      region: 'Ardora',
      clerkLocation: 'Kargan İnfaz Zabıt Masası',
      clerkCode: 'ARD-KRG',
      headerDept: 'KARGAN KAPALI İNFAZ KURUMU MÜDÜRLÜĞÜ',
      stampLine1: 'KARGAN KAPALI İNFAZ',
      wardenName: 'Nusret Ergin',
      wardenTitle: 'Ceza İnfaz Kurumu Müdürü',
      wardenSigPath: 'M10,8 L10,28 M10,16 L20,14 L14,20 M26,10 L26,28 C34,12 42,8 48,18 C52,26 48,30 42,28 C50,18 62,8 70,20 C76,28 84,18 92,12 C98,8 104,16 108,20 M8,32 C38,34 72,33 110,28 M92,20 C100,30 108,28',
      guardName: 'H. Salgar (Başgardiyan)',
      guardRank: 'Disiplin ve Sevk Amiri',
      guardSigPath: 'M8,10 L16,26 L24,10 L32,26 L40,12 C50,6 58,8 62,18 C66,26 62,28 56,26 C64,16 72,8 80,20 M10,28 L82,24',
      doctorName: 'Dr. Osman Delibaş',
      doctorTitle: 'Nöropsikiyatrist',
      doctorDipNo: 'DİP. NO: 7724-O · ARDORA',
      doctorStampName: 'DR. OSMAN DELİBAŞ',
      doctorStampTitle: 'NÖROPSİKİYATRİST',
      doctorSigPath: 'M10,24 L20,8 L30,24 L40,10 L50,26 C62,12 75,6 86,22 C94,32 102,20 108,16 M12,28 L108,24',
      doctorProtocol: '7724-O / NÖRО'
    };
  }
  if (text.includes('Meldar')) {
    return {
      key: 'meldar',
      name: 'Meldar Kapalı İnfaz Kurumu',
      region: 'İldem',
      clerkLocation: 'Meldar İnfaz Zabıt Masası',
      clerkCode: 'ILD-MLD',
      headerDept: 'MELDAR KAPALI İNFAZ KURUMU MÜDÜRLÜĞÜ',
      stampLine1: 'MELDAR KAPALI İNFAZ',
      wardenName: 'Fikret Yalçın',
      wardenTitle: 'Ceza İnfaz Kurumu Müdürü',
      wardenSigPath: 'M10,10 L10,28 M10,18 L22,16 M10,10 L24,10 C32,20 40,28 48,18 C56,8 64,4 70,16 C76,26 72,32 64,28 C72,18 82,8 92,20 C98,28 104,20 108,16 M8,32 C36,34 74,33 108,30',
      guardName: 'C. Terzioğlu (Başgardiyan)',
      guardRank: 'İnfaz Koruma Başmemuru',
      guardSigPath: 'M8,22 C10,10 16,6 20,14 C24,22 18,26 12,24 M26,8 L26,26 C34,10 40,6 46,16 C50,24 46,28 38,26 C46,16 58,8 68,20 C74,26 76,20 78,16 M8,28 C36,30 62,28 80,24',
      doctorName: 'Dr. Recep Altın',
      doctorTitle: 'Adli Tıp Uzmanı',
      doctorDipNo: 'DİP. NO: 5503-R · İLDEM',
      doctorStampName: 'DR. RECEP ALTIN',
      doctorStampTitle: 'ADLİ TIP UZMANI',
      doctorSigPath: 'M10,20 C18,6 28,4 32,16 C36,26 28,30 22,28 C30,24 40,18 48,24 C58,30 72,12 88,22 C98,28 105,20 108,18 M14,30 Q60,36 106,26',
      doctorProtocol: '5503-R / ADLİ'
    };
  }
  if (text.includes('Belra')) {
    return {
      key: 'belra',
      name: 'Belra Kapalı İnfaz Kurumu',
      region: 'Belra',
      clerkLocation: 'Belra İnfaz Zabıt Masası',
      clerkCode: 'BLR-KPL',
      headerDept: 'BELRA KAPALI İNFAZ KURUMU MÜDÜRLÜĞÜ',
      stampLine1: 'BELRA CEZA VE İNFAZ',
      wardenName: 'İsmet Aktaş',
      wardenTitle: 'Ceza İnfaz Kurumu Müdürü',
      wardenSigPath: 'M14,8 L14,28 M8,8 L22,8 M8,28 L22,28 C30,16 38,8 44,18 C50,26 46,32 38,28 C46,18 58,8 66,20 C72,28 80,18 88,12 C94,8 102,16 106,22 M10,33 C38,34 74,33 108,30',
      guardName: 'M. Karaca (Başgardiyan)',
      guardRank: '1. Sınıf İnfaz Koruma',
      guardSigPath: 'M10,10 L10,26 M10,16 L20,14 C28,8 34,6 38,16 C42,24 38,28 30,26 C38,16 50,8 58,20 C64,26 70,20 74,16 M8,28 L76,24',
      doctorName: 'Dr. Murat Yüksel',
      doctorTitle: 'Psikiyatrist / Kurum Tabibi',
      doctorDipNo: 'DİP. NO: 6612-M · BELRA',
      doctorStampName: 'DR. MURAT YÜKSEL',
      doctorStampTitle: 'PSİKİYATRİST',
      doctorSigPath: 'M12,22 Q26,6 38,22 Q50,34 64,10 Q78,2 92,24 Q100,32 108,18 M10,28 C40,36 80,32 110,24',
      doctorProtocol: '6612-M / PSİK'
    };
  }
  if (text.includes('Orven')) {
    return {
      key: 'orven',
      name: 'Orven Kapalı İnfaz Kurumu',
      region: 'Orven',
      clerkLocation: 'Orven İnfaz Zabıt Masası',
      clerkCode: 'ORV-KPL',
      headerDept: 'ORVEN KAPALI İNFAZ KURUMU MÜDÜRLÜĞÜ',
      stampLine1: 'ORVEN KAPALI İNFAZ',
      wardenName: 'Vehbi Dural',
      wardenTitle: 'Ceza İnfaz Kurumu Müdürü',
      wardenSigPath: 'M12,22 C14,8 20,4 24,12 C28,20 24,28 18,26 C26,16 36,8 44,18 C50,26 48,32 42,28 M54,8 C48,16 46,20 50,26 C56,32 64,28 68,18 C72,10 80,6 86,16 C92,26 100,16 106,12 M8,32 C38,34 74,33 108,30',
      guardName: 'S. Bayraktar (Başgardiyan)',
      guardRank: 'İnfaz ve Sevk Amiri',
      guardSigPath: 'M8,20 C10,8 14,4 18,12 C22,20 16,26 10,22 C18,14 28,6 36,18 C40,24 38,28 32,26 C40,14 52,6 62,18 C68,24 72,18 76,14 M10,28 C36,30 62,28 78,24',
      doctorName: 'Dr. Hülya Demirci',
      doctorTitle: 'Adli Psikiyatrist',
      doctorDipNo: 'DİP. NO: 2287-H · ORVEN',
      doctorStampName: 'DR. HÜLYA DEMİRCİ',
      doctorStampTitle: 'ADLİ PSİKİYATRİST',
      doctorSigPath: 'M8,14 C12,22 16,26 22,20 C28,14 26,8 32,10 C38,12 40,22 48,18 C56,14 64,24 74,16 C82,10 92,20 104,14 M12,26 Q55,34 106,22',
      doctorProtocol: '2287-H / ADLİ'
    };
  }
  if (text.includes('Dervan')) {
    return {
      key: 'dervan',
      name: 'Dervan Kapalı İnfaz Kurumu',
      region: 'Dervan',
      clerkLocation: 'Dervan İnfaz Zabıt Masası',
      clerkCode: 'DRV-KPL',
      headerDept: 'DERVAN KAPALI İNFAZ KURUMU MÜDÜRLÜĞÜ',
      stampLine1: 'DERVAN KAPALI İNFAZ',
      wardenName: 'Rasim Çetin',
      wardenTitle: 'Ceza İnfaz Kurumu Müdürü',
      wardenSigPath: 'M10,16 C14,6 22,4 26,14 C30,22 24,28 16,26 C26,16 38,6 46,18 C52,26 50,32 44,28 C52,18 60,8 70,20 C76,28 72,32 66,28 C74,18 84,10 94,20 C100,26 106,18 108,14 M8,32 C36,34 70,33 108,30 M100,20 C106,30 110,26',
      guardName: 'B. Güvenç (Başgardiyan)',
      guardRank: 'Koğuşlar Güvenlik Amiri',
      guardSigPath: 'M8,22 Q18,6 28,20 Q38,30 50,10 Q60,2 68,18 C72,26 70,28 64,26 C72,16 78,10 82,20 M10,26 C36,30 62,28 82,24',
      doctorName: 'Dr. Cemal Özkan',
      doctorTitle: 'Psikiyatrist / Adli Tıp',
      doctorDipNo: 'DİP. NO: 4490-C · DERVAN',
      doctorStampName: 'DR. CEMAL ÖZKAN',
      doctorStampTitle: 'PSİKİYATRİST',
      doctorSigPath: 'M10,24 L18,10 L26,28 L38,8 L50,26 L64,10 L78,28 L90,14 M10,30 Q55,38 108,24',
      doctorProtocol: '4490-C / PSİK'
    };
  }
  if (text.includes('Nerhisar') || text.includes('Yelhisar')) {
    return {
      key: 'nerhisar',
      name: 'Nerhisar Kapalı İnfaz Kurumu',
      region: 'Yelhisar',
      clerkLocation: 'Nerhisar İnfaz Zabıt Masası',
      clerkCode: 'YLH-NRH',
      headerDept: 'NERHİSAR KAPALI İNFAZ KURUMU MÜDÜRLÜĞÜ',
      stampLine1: 'NERHİSAR KAPALI İNFAZ',
      wardenName: 'Ahmet Selçuk',
      wardenTitle: 'Ceza İnfaz Kurumu Müdürü',
      wardenSigPath: 'M10,10 C8,18 10,26 16,28 C24,30 30,22 26,14 C32,8 38,6 42,18 C46,26 42,32 36,28 M50,10 L50,28 C58,10 66,4 72,16 C78,26 74,32 66,28 C74,18 84,8 94,20 C100,26 106,18 108,14 M8,32 C36,34 72,33 108,30',
      guardName: 'K. Yaman (Başgardiyan)',
      guardRank: 'Taşra Cezaevi Başgardiyanı',
      guardSigPath: 'M8,16 C6,22 8,28 14,26 C20,24 24,18 20,10 C28,6 36,4 40,16 C44,22 40,28 34,24 C42,14 52,8 60,18 C66,26 70,20 72,16 M8,28 C34,30 60,28 74,24',
      doctorName: 'Dr. Leyla Sarı',
      doctorTitle: 'Adli Tıp ve Psikiyatri',
      doctorDipNo: 'DİP. NO: 1195-L · YELHİSAR',
      doctorStampName: 'DR. LEYLA SARI',
      doctorStampTitle: 'ADLİ TIP · PSİKİYATRİ',
      doctorSigPath: 'M10,18 C16,6 24,4 28,14 C32,22 26,28 20,26 C28,20 38,14 48,22 C58,28 72,10 86,24 C96,32 104,22 108,18 M8,30 Q58,36 110,24',
      doctorProtocol: '1195-L / ADLİ'
    };
  }
  if (text.includes('Ardora Merkez')) {
    return {
      key: 'ardora_merkez',
      name: 'Ardora Merkez Kapalı İnfaz Kurumu',
      region: 'Ardora',
      clerkLocation: 'Ardora Merkez Zabıt Masası',
      clerkCode: 'ARD-MRK',
      headerDept: 'ARDORA MERKEZ KAPALI İNFAZ KURUMU MÜDÜRLÜĞÜ',
      stampLine1: 'ARDORA MERKEZ KAPALI',
      wardenName: 'Kemal Sancar',
      wardenTitle: 'Merkez İnfaz Kurumu Müdürü',
      wardenSigPath: 'M10,12 C8,20 10,26 16,28 C24,30 30,22 28,14 C36,6 44,4 48,16 C52,26 48,32 40,28 M56,8 L56,28 M56,14 L68,12 M56,18 L64,20 C72,8 80,2 86,16 C92,26 88,32 80,28 C88,16 98,8 106,20 M8,32 C36,34 74,33 108,30 M96,20 C104,30 108,26',
      guardName: 'T. Alkan (Başgardiyan)',
      guardRank: 'Merkez İnfaz Başmemuru',
      guardSigPath: 'M8,10 L8,26 M8,16 L18,14 M8,10 L20,10 C28,18 34,26 42,16 C50,6 56,4 60,16 C64,24 60,28 52,24 C60,14 68,8 76,20 M10,28 C36,30 62,28 78,24',
      doctorName: 'Dr. Kahraman Bulut',
      doctorTitle: 'Başhekim / Adli Psikiyatrist',
      doctorDipNo: 'DİP. NO: 9920-K · ARDORA',
      doctorStampName: 'DR. KAHRAMAN BULUT',
      doctorStampTitle: 'BAŞHEKİM · ADLİ',
      doctorSigPath: 'M8,22 Q20,6 32,20 Q44,32 58,8 Q72,2 84,22 Q94,34 106,12 M12,24 C42,34 78,30 108,22 M20,28 Q60,32 100,26',
      doctorProtocol: '9920-K / MRK'
    };
  }
  // Varsayılan: Vardak (Kardun)
  return {
    key: 'vardak',
    name: 'Vardak Kapalı İnfaz Kurumu',
    region: 'Kardun',
    clerkLocation: 'Vardak İnfaz Zabıt Masası',
    clerkCode: 'KRD-VRD',
    headerDept: 'VARDAK KAPALI İNFAZ KURUMU MÜDÜRLÜĞÜ',
    stampLine1: 'VARDAK KAPALI İNFAZ',
    wardenName: 'Turan Sezgin',
    wardenTitle: 'Ceza İnfaz Kurumu Müdürü',
    wardenSigPath: 'M8,10 L30,10 M19,10 L19,28 C24,14 30,10 36,18 C40,24 38,30 32,28 C40,20 50,14 58,22 C64,28 72,18 80,12 C86,8 94,18 102,22 M10,32 C42,33 74,32 106,28',
    guardName: 'R. Çakır (Başgardiyan)',
    guardRank: '1. Sınıf İnfaz Koruma',
    guardSigPath: 'M8,20 C10,8 16,4 22,12 C26,20 20,26 14,24 C22,14 32,6 40,18 C46,26 44,28 36,26 M50,8 L50,26 C58,10 64,6 70,16 C74,24 72,28 66,24 C72,14 78,8 82,18 M8,28 C36,30 62,28 82,24',
    doctorName: 'Dr. Sevim Arslan',
    doctorTitle: 'Uzm. Psikiyatrist / Adli Tıp',
    doctorDipNo: 'DİP. NO: 8841-K · KARDUN',
    doctorStampName: 'DR. SEVİM ARSLAN',
    doctorStampTitle: 'UZM. PSİKİYATRİST',
    doctorSigPath: 'M10,22 Q22,8 32,22 Q42,32 52,10 Q62,5 72,24 Q85,30 102,12 M12,25 C40,32 75,28 105,20',
    doctorProtocol: '8841-K / SEVK'
  };
}

function renderDocumentSealAndSignature(tab, c) {
  if (!c) return '';
  const queueEntry = gameState?.queue?.[0];
  const meetingDate = queueEntry ? dateFor(queueEntry.month).meetingDate : '7 Ocak 1991';
  const currentYear = queueEntry ? (1991 + Math.floor(queueEntry.month / 12)) : 1991;
  const inmateName = c.name || 'Hükümlü';
  const prison = getPrisonInfo(c);

  if (tab === 'defense') {
    const sig = getInmateSignatureData(c);
    return `
      <div class="doc-seal-block mt-2 pt-1.5 border-t border-dashed border-stone-300 font-typewriter select-none">
        <div class="flex items-center justify-between text-[8px] font-mono text-stone-500 uppercase tracking-wider border-b border-stone-200 pb-0.5 mb-1">
          <span>HÜKÜMLÜ İFADE VE SAVUNMA TUTANAĞI</span>
          <span>ZAPIT NO: ${currentYear}/${prison.clerkCode}-${String(c.id || 1).padStart(2, '0')}</span>
        </div>
        <div class="flex items-end justify-between gap-2">
          <!-- Sol: İfadeyi Alan Kâtip & Damga -->
          <div class="flex flex-col items-start">
            <div class="border border-indigo-900/60 bg-indigo-50/70 text-indigo-950 px-1 py-0.2 text-[8px] font-mono font-bold tracking-wider uppercase mb-0.5 rotate-1 rounded-xs">
              [BİZZAT DİNLENDİ VE ZAPTA GEÇİRİLDİ]
            </div>
            <div class="text-[8px] text-stone-600 font-mono leading-none">Zabıt Memuru:</div>
            <svg class="text-indigo-900 doc-sig-ink -my-0.5" style="width: 72px; height: 22px;" viewBox="0 0 110 38" fill="none" stroke="currentColor">
              <path d="M8,26 C7,14 13,6 18,13 C22,21 24,28 27,14 C30,7 35,6 37,17 C39,24 41,27 46,12 C49,7 57,6 56,18 C55,27 48,30 46,26 C45,21 52,22 57,20 C62,18 66,24 72,19 C77,15 82,23 88,17 C94,12 100,16 106,22 M14,32 C38,36 72,34 104,27" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <div class="text-[9px] font-bold text-stone-800 leading-tight">M. Demir</div>
            <div class="text-[7.5px] font-mono text-stone-500 leading-none">Zabıt Kâtibi · ${prison.clerkLocation}</div>
          </div>

          <!-- Sağ: Hükümlü İmzası ve Parmak İzi -->
          <div class="flex items-end gap-2 text-right">
            <!-- Otantik Parmak İzi (SVG Thumbprint) -->
            <div class="flex flex-col items-center">
              <div class="text-slate-800 doc-thumbprint" style="width: 20px; height: 28px; opacity: ${sig.thumbOpacity}; transform: rotate(${sig.tilt}deg);" title="Hükümlü Sağ El Başparmak İzi">
                <svg viewBox="0 0 40 55" fill="none" stroke="currentColor" class="w-full h-full">
                  <ellipse cx="20" cy="27" rx="17" ry="24" stroke-width="1.2" stroke-dasharray="3,1" />
                  <ellipse cx="20" cy="27" rx="13" ry="20" stroke-width="1.2" stroke-dasharray="4,1" />
                  <path d="M12,18 Q20,10 28,18 Q34,26 28,38 Q20,46 12,38 Q8,30 12,18" stroke-width="1.3" />
                  <path d="M15,22 Q20,15 25,22 Q29,29 25,36 Q20,41 15,36 Q11,30 15,22" stroke-width="1.3" />
                  <path d="M18,25 Q20,20 22,25 Q24,30 22,34 Q20,37 18,34" stroke-width="1.3" />
                  <path d="M8,26 Q10,12 20,8 Q30,12 32,26" stroke-width="1.1" stroke-dasharray="2,2" />
                </svg>
              </div>
              <span class="text-[7.5px] font-mono text-stone-500 mt-0.5 leading-none">Parmak İzi</span>
            </div>

            <!-- Hükümlü Islak İmzası -->
            <div>
              <div class="text-[8px] text-stone-600 font-mono leading-none">İfade Sahibi Hükümlü:</div>
              <svg class="${sig.inkColor} doc-sig-ink ml-auto -my-0.5" style="width: 78px; height: 22px;" viewBox="0 0 130 46" fill="none" stroke="currentColor">
                <path d="${sig.path}" stroke-width="${sig.strokeWidth}" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <div class="text-[10px] font-bold text-stone-900 font-typewriter leading-tight">${inmateName}</div>
              <div class="text-[7.5px] font-mono text-stone-500 leading-none">Mühür ve İmza Onaylı</div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  if (tab === 'psych') {
    return `
      <div class="doc-seal-block mt-2 pt-1.5 border-t border-amber-400/80 font-typewriter select-none">
        <div class="flex items-center justify-between text-[8px] font-mono text-amber-950/80 uppercase tracking-wider border-b border-amber-300 pb-0.5 mb-1">
          <span>CEZAEVİ TABİPLİĞİ ADLİ TIP VE PSİKİYATRİ SERVİSİ</span>
          <span>SAĞLIK GÖZLEM TUTANAĞI</span>
        </div>
        <div class="flex items-end justify-between gap-2">
          <!-- Sol: Tabiplik Kayıt Damgası -->
          <div class="flex flex-col items-start">
            <div class="border border-purple-900/60 bg-purple-50/70 text-purple-950 doc-seal-stamp-purple px-1 py-0.2 text-[8px] font-mono font-bold tracking-wider uppercase mb-0.5 -rotate-2 rounded-xs">
              [MÜŞAHEDE KAYIT: ${currentYear}/P]
            </div>
            <div class="text-[8px] text-amber-950/80 font-mono leading-none">Klinik Protokol No:</div>
            <div class="text-[9px] font-bold text-amber-950 font-mono leading-tight">${prison.doctorProtocol}</div>
            <div class="text-[7.5px] font-mono text-amber-900/70 leading-none">Müşahede Defterine İşlendi</div>
          </div>

          <!-- Sağ: Hekim Kaşesi ve İmzası -->
          <div class="relative flex items-center justify-end">
            <!-- Oval Hekim Kaşesi (SVG) -->
            <div class="relative shrink-0 -mr-3 opacity-85 transform rotate-2" style="width: 58px; height: 32px;">
              <svg viewBox="0 0 110 58" class="w-full h-full text-purple-900 doc-seal-stamp-purple">
                <ellipse cx="55" cy="29" rx="52" ry="26" stroke="currentColor" stroke-width="2" fill="none" />
                <ellipse cx="55" cy="29" rx="48" ry="22" stroke="currentColor" stroke-width="0.8" stroke-dasharray="3,1.5" fill="none" />
                <text x="55" y="20" text-anchor="middle" font-size="7.5" font-weight="bold" fill="currentColor" font-family="monospace">${prison.doctorStampName}</text>
                <text x="55" y="31" text-anchor="middle" font-size="6.5" font-weight="bold" fill="currentColor" font-family="monospace">${prison.doctorStampTitle}</text>
                <text x="55" y="41" text-anchor="middle" font-size="5.5" fill="currentColor" font-family="monospace">${prison.doctorDipNo}</text>
              </svg>
            </div>

            <!-- Doktor Islak İmzası -->
            <div class="relative z-10 text-right pr-1">
              <div class="text-[8px] text-amber-950/80 font-mono leading-none">Muayene Eden Hekim:</div>
              <svg class="text-blue-900 doc-sig-ink ml-auto -my-0.5" style="width: 78px; height: 22px;" viewBox="0 0 110 35" fill="none" stroke="currentColor">
                <path d="${prison.doctorSigPath}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <div class="text-[10px] font-bold text-amber-950 leading-tight">${prison.doctorName}</div>
              <div class="text-[7.5px] font-mono text-amber-900/80 leading-none">${prison.doctorTitle}</div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  if (tab === 'guard') {
    return `
      <div class="doc-seal-block mt-2 pt-1.5 border-t border-stone-300 font-typewriter select-none">
        <div class="flex items-center justify-between text-[8px] font-mono text-stone-500 uppercase tracking-wider border-b border-stone-200 pb-0.5 mb-1">
          <span>${prison.headerDept}</span>
          <span>DİSİPLİN VE ASAYİŞ TUTANAĞI</span>
        </div>
        <div class="flex items-end justify-between gap-2">
          <!-- Sol: Vardiya Başmemuru Parafı -->
          <div class="flex flex-col items-start">
            <div class="border border-stone-700/70 bg-stone-100 text-stone-800 px-1 py-0.2 text-[8px] font-mono font-bold tracking-wider uppercase mb-0.5 rotate-1 rounded-xs">
              [KOĞUŞ ASAYİŞİ ONAYLI]
            </div>
            <div class="text-[8px] text-stone-600 font-mono leading-none">Vardiya Amiri:</div>
            <svg class="text-stone-800 doc-sig-ink -my-0.5" style="width: 60px; height: 18px;" viewBox="0 0 90 30" fill="none" stroke="currentColor">
              <path d="${prison.guardSigPath}" stroke-width="2" stroke-linecap="round"/>
            </svg>
            <div class="text-[9px] font-bold text-stone-800 leading-tight">${prison.guardName}</div>
            <div class="text-[7.5px] font-mono text-stone-500 leading-none">${prison.guardRank}</div>
          </div>

          <!-- Sağ: Cezaevi Müdürlüğü Resmî Mührü ve İmzası -->
          <div class="relative flex items-center justify-end">
            <!-- Dikdörtgen Daire Kaşesi (SVG) -->
            <div class="relative shrink-0 -mr-3 opacity-85 transform -rotate-2" style="width: 58px; height: 32px;">
              <svg viewBox="0 0 110 58" class="w-full h-full text-indigo-950 doc-seal-stamp-indigo">
                <rect x="4" y="4" width="102" height="50" rx="3" stroke="currentColor" stroke-width="2" fill="none"/>
                <rect x="7" y="7" width="96" height="44" rx="2" stroke="currentColor" stroke-width="0.8" stroke-dasharray="2,1.5" fill="none"/>
                <text x="55" y="18" text-anchor="middle" font-size="6.2" font-weight="bold" fill="currentColor" font-family="monospace">${prison.stampLine1}</text>
                <text x="55" y="30" text-anchor="middle" font-size="7.5" font-weight="bold" fill="currentColor" font-family="monospace">CEZAEVİ MÜDÜRLÜĞÜ</text>
                <text x="55" y="42" text-anchor="middle" font-size="6.2" font-weight="bold" fill="currentColor" font-family="monospace">★ GÖRÜLMÜŞTÜR ★</text>
              </svg>
            </div>

            <!-- Kurum Müdürü İmzası -->
            <div class="relative z-10 text-right pr-1">
              <div class="text-[8px] text-stone-600 font-mono leading-none">Kurum Müdürü:</div>
              <svg class="text-blue-900 doc-sig-ink ml-auto -my-0.5" style="width: 78px; height: 22px;" viewBox="0 0 110 35" fill="none" stroke="currentColor">
                <path d="${prison.wardenSigPath}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <div class="text-[10px] font-bold text-stone-900 leading-tight">${prison.wardenName}</div>
              <div class="text-[7.5px] font-mono text-stone-500 leading-none">${prison.wardenTitle}</div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  // Varsayılan / Gerekçeli Dosya (`main`)
  return `
    <div class="doc-seal-block mt-2 pt-1.5 border-t border-stone-300 font-typewriter select-none">
      <div class="flex items-center justify-between text-[8px] font-mono text-stone-500 uppercase tracking-wider border-b border-stone-200 pb-0.5 mb-1">
        <span>TUTANAK TASDİK VE İNFAZ TEFTİŞ ŞERHİ</span>
        <span>VELYA CUMHURİYETİ</span>
      </div>
      <div class="flex items-end justify-between gap-2">
        <!-- Sol: Kâtip Parafı -->
        <div class="flex flex-col items-start">
          <div class="border border-red-900/60 bg-red-50/70 text-red-950 doc-seal-stamp-red px-1 py-0.2 text-[8px] font-mono font-bold tracking-wider uppercase mb-0.5 -rotate-1 rounded-xs shadow-2xs">
            [ASLINA UYGUNDUR]
          </div>
          <div class="text-[8px] text-stone-600 font-mono leading-none">Tanzim Eden Kâtip:</div>
          <svg class="text-blue-900 doc-sig-ink -my-0.5" style="width: 72px; height: 22px;" viewBox="0 0 115 40" fill="none" stroke="currentColor">
            <path d="M8,24 C12,30 20,31 22,23 C24,13 14,9 18,5 C22,1 27,4 25,13 C23,21 16,25 25,28 M34,6 L34,28 M47,8 C43,14 38,18 35,19 C40,21 45,26 49,29 M44,20 C49,16 53,23 58,18 C62,14 66,22 71,17 C76,13 81,21 86,16 C92,12 98,15 105,21 M15,34 C42,39 78,36 108,26 C112,24 105,21 96,23 C84,26 70,32 54,37" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <div class="text-[9px] font-bold text-stone-800 leading-tight">S. Kenter</div>
          <div class="text-[7.5px] font-mono text-stone-500 leading-none">Zabıt Sicil: 4182-V</div>
        </div>

        <!-- Sağ: Resmî Kırmızı Kauçuk Mühür ve Heyet Başkanı İmzası -->
        <div class="relative flex items-center justify-end">
          <!-- Mühür (SVG) - Kesin ve Kompakt Boyut -->
          <div class="relative shrink-0 -mr-2 opacity-85 transform -rotate-6" style="width: 44px; height: 44px;">
            <svg viewBox="0 0 100 100" class="w-full h-full text-red-800 doc-seal-stamp-red">
              <circle cx="50" cy="50" r="46" stroke="currentColor" stroke-width="2" fill="none" />
              <circle cx="50" cy="50" r="41" stroke="currentColor" stroke-width="1" stroke-dasharray="2.5,2" fill="none" />
              <circle cx="50" cy="50" r="28" stroke="currentColor" stroke-width="1.5" fill="none" />
              <!-- Terazi SVG İkonu -->
              <path d="M50,33 L50,62 M40,40 L60,40 M38,40 L34,50 L42,50 Z M62,40 L58,50 L66,50 Z M45,62 L55,62" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" fill="none" />
              <!-- Dairesel Kavisli Metin -->
              <path id="curveTopMain" d="M 16,50 A 34,34 0 0,1 84,50" fill="none" />
              <path id="curveBottomMain" d="M 84,50 A 34,34 0 0,1 16,50" fill="none" />
              <text font-size="6.5" font-weight="bold" fill="currentColor" letter-spacing="0.5">
                <textPath href="#curveTopMain" startOffset="50%" text-anchor="middle">VELYA CUMHURİYETİ</textPath>
              </text>
              <text font-size="5.5" font-weight="bold" fill="currentColor" letter-spacing="0.5">
                <textPath href="#curveBottomMain" startOffset="50%" text-anchor="middle">★ İNFAZ TEFTİŞ KURULU ★</textPath>
              </text>
              <text x="50" y="60" text-anchor="middle" font-size="5.5" font-weight="bold" fill="currentColor">${currentYear}</text>
            </svg>
          </div>

          <!-- Kurul Başkanı İmzası -->
          <div class="relative z-10 text-right pr-1">
            <div class="text-[8px] text-stone-600 font-mono leading-none">Teftiş Heyeti Adına:</div>
            <svg class="text-blue-900 doc-sig-ink ml-auto -my-0.5" style="width: 82px; height: 24px;" viewBox="0 0 130 40" fill="none" stroke="currentColor">
              <path d="M10,12 C8,22 10,30 18,32 C28,34 36,24 30,16 C38,8 48,4 54,18 C58,26 54,34 46,30 C54,20 66,10 76,24 C82,32 80,36 72,32 C80,20 92,10 102,22 C110,30 116,22 120,14 M12,36 C44,38 80,37 122,32 M110,22 C116,34 120,36 124,28 M118,14 L124,30" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <div class="text-[10px] font-bold text-stone-900 leading-tight">Kurul Başkanı / Başmüfettiş</div>
            <div class="text-[7.5px] font-mono text-stone-500 leading-none">${meetingDate}</div>
          </div>
        </div>
      </div>
    </div>
  `;
}

function switchTab(tab, sound = true) {
  if (!currentCase()) return;
  if (!['main','defense','psych','guard','letter'].includes(tab)) tab = 'main';
  if (tab === 'letter') tab = 'defense';
  gameState.activeTab = tab;
  if (sound) playPaperSound();
  for (const t of ['main','defense','psych','guard']) {
    const btn = document.getElementById(`tabBtn-${t}`);
    if (btn) {
      btn.classList.remove('opacity-75','opacity-100','font-bold');
      btn.classList.add(t === tab ? 'opacity-100' : 'opacity-75');
    }
  }
  const fieldMap = {
    main: 'mainText',
    defense: 'defenseText',
    psych: 'psychNote',
    guard: 'guardReport'
  };
  const baseContent = currentCase()[fieldMap[tab]] || currentCase().mainText;
  const sealAndSignature = renderDocumentSealAndSignature(tab, currentCase());
  document.getElementById('docContent').innerHTML = baseContent + sealAndSignature;
  scheduleDocumentFit();
  if (sound) saveGame();
}

function dossierText(html) {
  return (html || '').replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
}

function handleDecision(isRelease) {
  if (gameState.phase !== 'review' || !currentCase()) return;
  stopPhoneRinging();
  document.getElementById('phoneModal')?.classList.add('hidden');
  const c = currentCase(), e = gameState.queue[0];
  const outcome = { ...(isRelease ? c.releaseConsequence : c.rejectConsequence) };
  if (!isRelease && e.review === 0) outcome.body += ` Yeniden kurul tarihi: ${dateFor(e.month + 6).meetingDate}.`;
  for (const key of ['vicdan','sicil','capacity']) {
    const before = gameState[key];
    gameState[key] = Math.min(key === 'capacity' ? 140 : 100, Math.max(key === 'capacity' ? 70 : 0, before + outcome[key + 'Delta']));
    outcome[key + 'Delta'] = gameState[key] - before;
  }
  gameState.history.push({
    month: dateFor(e.month).meetingDate,
    monthIndex: e.month,
    name: c.name,
    decision: isRelease ? 'Şartlı Tahliye' : (e.review === 0 ? '6 Ay Erteleme' : 'Şartlı Tahliye Hakkı Yandı'),
    summary: outcome.chronicle,
    id: e.id,
    review: e.review,
    dossier: { crime: c.crime, age: c.age, sentence: c.sentence,
      mainText: dossierText(c.mainText), defenseText: dossierText(c.defenseText),
      psychNote: dossierText(c.psychNote), guardReport: dossierText(c.guardReport), letterText: dossierText(c.letterText) },
    headline: outcome.headline,
    body: outcome.body,
    vicdanDelta: outcome.vicdanDelta,
    sicilDelta: outcome.sicilDelta,
    capacityDelta: outcome.capacityDelta,
    isRelease: isRelease
  });
  // Sonuç, puanlar ve aşama tek kayıtta yazılır; animasyon kayıt işlemini geciktirmez.
  gameState.phase = 'consequence';
  gameState.pending = { isRelease, outcome };
  saveGame();
  updateUI();
  updateArchiveCount();
  for (const id of ['btnReject','btnRelease']) document.getElementById(id).disabled = true;
  playStampSound(isRelease);
  document.getElementById('stampOverlay').classList.remove('hidden');
  const badge = document.getElementById('stampBadge');
  badge.textContent = isRelease ? 'ŞARTLI TAHLİYE KABUL' : (e.review === 0 ? 'TAHLİYE REDDİ: 6 AY' : 'ŞARTLI TAHLİYE HAKKI YANDI');
  badge.className = `stamp-badge stamp-anim px-5 py-3 rounded-lg text-xl font-typewriter font-bold ${isRelease ? 'text-emerald-800 bg-emerald-100' : 'text-red-900 bg-red-100'}`;
  decisionTimer = setTimeout(showConsequenceModal, 900);
}


function endingSummary() {
  const history = gameState.history || [];
  const last = history[history.length - 1];
  let endMonth = last?.monthIndex;
  // Önceki kayıtlar yalnızca yazılı kurul tarihini saklıyordu.
  if (!Number.isInteger(endMonth) && last) {
    const match = /^7 (.+) (\d{4})$/.exec(last.month);
    const month = match ? months.indexOf(match[1]) : -1;
    if (month >= 0) endMonth = (Number(match[2]) - 1991) * 12 + month;
  }
  if (!Number.isInteger(endMonth) || endMonth < 0) {
    endMonth = gameState.lastMonth ?? gameState.queue[0]?.month ?? 0;
  }
  return {
    period: `Görevin ${endMonth + 1}. ayında sona erdi (${dateFor(0).meetingDate} – ${dateFor(endMonth).meetingDate})`,
    count: `${history.length} DOSYA İNCELEMESİ`
  };
}

function nextLabel() {
  if (isTerminal()) return 'NİHAİ BİLANÇOYU AÇ';
  const e = gameState.queue[0], rest = gameState.queue.slice(1);
  if (!gameState.pending.isRelease && e.review === 0) rest.push({ month: e.month + 6 });
  if (!rest.length) return 'NİHAİ BİLANÇOYU AÇ';
  const month = Math.min(...rest.map(x => x.month));
  return month === e.month ? 'AYNI TOPLANTIDA SONRAKİ DOSYA' : `${dateFor(month).meetingDate} KURULUNA GEÇ${month - e.month > 1 ? ' (ARADAKİ AYLARDA DOSYA YOK)' : ''}`;
}

function showConsequenceModal() {
  if (gameState.phase !== 'consequence') return;
  const o = gameState.pending.outcome;
  document.getElementById('newsDate').textContent = `KURUL: ${dateFor(gameState.queue[0].month).short}`;
  document.getElementById('consequenceHeadline').textContent = o.headline;
  document.getElementById('consequenceBody').textContent = o.body;
  document.getElementById('nextMonthBtnLabel').textContent = nextLabel();
  for (const [key, id, label] of [['vicdan','statVicdanDiff','⚖️ Vicdan'],['sicil','statSicilDiff','📂 Sicil'],['capacity','statCapacityDiff','🏢 Doluluk']]) {
    const delta = o[key + 'Delta'];
    document.getElementById(id).textContent = delta === 0 ? `${label}: Değişmedi (0)` : `${label}: ${delta > 0 ? '+' : ''}${delta} puan`;
  }
  for (const key of ['vicdan', 'sicil']) {
    const el = document.getElementById(key === 'vicdan' ? 'statVicdanReason' : 'statSicilReason');
    const reason = o[key + 'Reason'];
    el.textContent = typeof reason === 'string' ? reason : '';
    el.hidden = !el.textContent;
  }
  document.getElementById('consequenceModal').classList.remove('hidden');
}

function nextCase() {
  if (gameState.phase !== 'consequence') return;
  clearTimeout(decisionTimer);
  stopPhoneRinging();
  phoneAnswered = false;
  phoneIgnored = false;
  activePhoneCall = null;
  const e = gameState.queue.shift();
  gameState.lastMonth = e.month;
  if (!gameState.pending.isRelease && e.review === 0) gameState.queue.push({ ...e, month: e.month + 6, previous: e.month, review: e.review + 1 });
  gameState.queue.sort((a,b) => a.month - b.month || a.id - b.id);
  gameState.meetingPosition = gameState.queue[0]?.month === e.month ? gameState.meetingPosition + 1 : 1;
  gameState.pending = null;
  gameState.activeTab = 'main';
  gameState.phase = isTerminal() || !gameState.queue.length ? 'ended' : 'review';
  saveGame();
  renderCurrentCase();
}

/* ==========================================================================
   TAM EKRAN 3D GERÇEK İNFAZ KLASÖRÜ & SAYFA ÇEVİRME SİSTEMİ
   ========================================================================== */
let interactiveDossierState = {
  isOpen: false,
  isCoverOpened: false,
  currentPage: 0
};

const INTERACTIVE_TABS = [
  { id: 'main', title: 'GEREKÇELİ DOSYA', icon: '📁' },
  { id: 'defense', title: 'TUTUKLU SAVUNMASI', icon: '⚖️' },
  { id: 'psych', title: 'DOKTOR MÜŞAHADE NOTU', icon: '📌' },
  { id: 'guard', title: 'CEZAEVİ İDARE RAPORU', icon: '📋' },
  { id: 'verdict', title: 'HÜKÜM VE KARAR MAZBATASI', icon: '📜' }
];

function executeInteractiveDecision(isRelease) {
  closeInteractiveDossier();
  handleDecision(isRelease);
}

function getInmateSicil(c) {
  if (!c) return 'HS-1991/482101';
  if (c.sicilNo) return c.sicilNo;
  const caseYear = 1991 + Math.floor((c.initialMonth || 0) / 12);
  const inmateSeq = 482100 + (c.id || 1);
  return `HS-${caseYear}/${inmateSeq}`;
}

function renderInteractiveVerdictPage(c) {
  const e = gameState.queue[0];
  const prison = getPrisonInfo(c);
  const meetingDate = (e && typeof dateFor === 'function') ? dateFor(e.month).meetingDate : '7 OCAK 1991';
  const currentYear = e ? (1991 + Math.floor(e.month / 12)) : 1991;
  const isReview = e && e.review > 0;
  const canDecide = gameState.phase === 'review';

  return `
    <div class="space-y-2.5 font-typewriter text-stone-900 select-none">
      <!-- Resmi Antet & Başlık -->
      <div class="border-b-2 border-stone-800 pb-1.5 text-center relative">
        <button type="button" onclick="closeInteractiveDossier()" title="Masaya Dön (ESC)" class="absolute right-0 top-0 text-stone-600 hover:text-red-900 font-bold text-sm px-1.5 py-0.5 rounded hover:bg-stone-300/80 transition cursor-pointer select-none leading-none">✕</button>
        <div class="text-[9.5px] font-mono tracking-widest text-stone-700 uppercase font-bold">
          VELYA CUMHURİYETİ HUKUK VE İNFAZ BAKANLIĞI
        </div>
        <div class="text-[8.5px] font-mono tracking-wider text-stone-600 uppercase">
          İNFAZ KURUMLARI GENEL DAİRESİ · İNFAZ TEFTİŞ KURULU BAŞKANLIĞI
        </div>
        <div class="text-xs sm:text-sm font-bold font-serif uppercase tracking-wider text-stone-950 mt-0.5">
          ŞARTLI TAHLİYE VE İNFAZ TEFTİŞ KARAR MAZBATASI
        </div>
        <div class="text-[8.5px] font-mono text-stone-500 mt-0.5">
          ESAS NO: ${currentYear}/${e ? e.id : (c.id || 1)} · CELSE TARİHİ: ${meetingDate}
        </div>
      </div>

      <!-- Hükümlü Kimlik Çerçevesi (Ad Soyad ve Sicil No) -->
      <div class="bg-stone-100/90 border border-stone-400 rounded px-3 py-1.5 text-[11px] font-mono flex items-center justify-between shadow-2xs">
        <div><span class="text-stone-500 font-semibold uppercase">HÜKÜMLÜ:</span> <strong class="text-stone-900">${c.name}</strong></div>
        <div><span class="text-stone-500 font-semibold uppercase">SİCİL NO:</span> <strong class="text-stone-900 font-mono">${getInmateSicil(c)}</strong></div>
      </div>

      <!-- Süslü Bürokratik Gerekçe Cümleleri (Orijinal Tam Metin) -->
      <div class="text-[11.5px] sm:text-xs leading-relaxed text-stone-900 space-y-1.5 text-justify">
        <p>
          Yukarıda hüviyet ve infaz evrakı derç olunan hükümlünün şartlı tahliye talebine matuf dosyası; Ceza İnfaz Kurumu Müdürlüğü disiplin ve asayiş zaptı, tabip müşahade müzekkeresi, zabıt kâtibi huzurunda bizzat istima olunan meşru savunması ve amme davası münderecatı muvacehesinde heyetimizce bi’l-etraf ve bi’t-tetkik incelenmiştir.
        </p>
        <p class="font-semibold text-stone-950">
          Velya Cumhuriyeti mer’i infaz mevzuatı, amme intizamının muhafazası, ceza infaz kurumlarının umumi doluluk dengesi ile mezkûr şahsın cemiyet hayatına intibak kabiliyeti tezekkür olunarak; adalet ve vicdan terazisi muvacehesinde <u>aşağıdaki kararın ittihaz ve tesisi tensip ve uygun görülmüştür:</u>
        </p>
      </div>

      <!-- Karar Verme ve Damga Vurma Alanı (Sol: Ret/Erteleme, Sağ: Tahliye) -->
      <div class="pt-1">
        ${canDecide ? `
          <div class="grid grid-cols-2 gap-1.5 sm:gap-2">
            <!-- Sol: Ertele / Ret Damgası -->
            <button type="button" onclick="executeInteractiveDecision(false)" class="group p-1.5 sm:p-2 bg-red-950/5 hover:bg-red-900/15 active:scale-95 border-2 border-dashed border-red-800 rounded text-left transition cursor-pointer flex flex-col justify-between">
              <div class="flex items-center justify-between gap-0.5">
                <span class="text-[9.5px] sm:text-[11px] font-bold text-red-950 font-typewriter tracking-tight flex items-center gap-0.5">
                  <span>🔴</span> <span>${isReview ? 'KESİN RET DAMGASI VUR' : '6 AY ERTELEME DAMGASI VUR'}</span>
                </span>
                <span class="text-[7.5px] sm:text-[8px] font-mono uppercase bg-red-800 text-white px-1 py-0.2 rounded font-bold shrink-0">MÜHÜR</span>
              </div>
              <p class="text-[8.5px] sm:text-[9.5px] text-red-900/90 font-mono mt-0.5 leading-snug">
                ${isReview 
                  ? '"Şartlı tahliye istemi katiyetle reddedilerek..."' 
                  : '"İnfazın devamı ile 6 ay sonra yeniden incelenmesine..."'}
              </p>
            </button>

            <!-- Sağ: Tahliye Damgası -->
            <button type="button" onclick="executeInteractiveDecision(true)" class="group p-1.5 sm:p-2 bg-emerald-950/5 hover:bg-emerald-900/15 active:scale-95 border-2 border-dashed border-emerald-800 rounded text-left transition cursor-pointer flex flex-col justify-between">
              <div class="flex items-center justify-between gap-0.5">
                <span class="text-[9.5px] sm:text-[11px] font-bold text-emerald-950 font-typewriter tracking-tight flex items-center gap-0.5">
                  <span>🟢</span> <span>TAHLİYE KARARINI DAMGALA</span>
                </span>
                <span class="text-[7.5px] sm:text-[8px] font-mono uppercase bg-emerald-800 text-white px-1 py-0.2 rounded font-bold shrink-0">MÜHÜR</span>
              </div>
              <p class="text-[8.5px] sm:text-[9.5px] text-emerald-900/90 font-mono mt-0.5 leading-snug">
                "Şartlı tahliye istemi uygun görülmüş olup..."
              </p>
            </button>
          </div>
        ` : `
          <div class="p-2.5 bg-stone-200/90 border border-stone-400 rounded text-center text-xs font-typewriter text-stone-800">
            <span class="font-bold text-stone-950">BU CELSEDE VERİLEN KARAR MASADA MÜHÜRLENMİŞTİR</span>
            <p class="text-[10px] text-stone-600 font-mono mt-0.5">Kararın idari ve adli neticesi zabıt çekmecesine işlendi.</p>
          </div>
        `}
      </div>
    </div>
  `;
}

function openInteractiveDossier() {
  if (!currentCase()) return;
  const c = currentCase(), e = gameState.queue[0];
  const prison = getPrisonInfo(c);

  const currentYear = e ? (1991 + Math.floor(e.month / 12)) : 1991;
  const termEl = document.getElementById('coverCaseTerm');
  if (termEl) termEl.textContent = `İLAM: ${currentYear}/${e ? e.id : (c.id || 1)}`;
  const archiveTagEl = document.getElementById('coverArchiveTag');
  if (archiveTagEl) archiveTagEl.textContent = `İTK-${currentYear} / RESMİ İNFAZ CİLDİ`;
  const modalYearEl = document.getElementById('interactiveModalYearTitle');
  if (modalYearEl) modalYearEl.textContent = `${currentYear} İNFAZ KLASÖRÜ`;

  const nameEl = document.getElementById('coverInmateName');
  if (nameEl) nameEl.textContent = c.name;
  const ageEl = document.getElementById('coverInmateAge');
  if (ageEl) ageEl.textContent = c.age;
  const sicilEl = document.getElementById('coverInmateSicil');
  if (sicilEl) sicilEl.textContent = getInmateSicil(c);
  const sentenceEl = document.getElementById('coverInmateSentence');
  if (sentenceEl) sentenceEl.textContent = c.sentence;
  const crimeEl = document.getElementById('coverInmateCrime');
  if (crimeEl) crimeEl.textContent = c.crime;
  const prisonEl = document.getElementById('coverPrisonName');
  if (prisonEl) prisonEl.textContent = prison.name;

  interactiveDossierState.isOpen = true;
  interactiveDossierState.isCoverOpened = false;
  interactiveDossierState.currentPage = 0;

  const coverLeaf = document.getElementById('interactiveCoverLeaf');
  if (coverLeaf) {
    coverLeaf.classList.remove('is-opened');
  }

  renderInteractiveDossierPage(0);

  const modal = document.getElementById('interactiveDossierModal');
  if (modal) modal.classList.remove('hidden');

  setupInteractiveTouchSwipe();
  scheduleDocumentFit();

  if (typeof playRealisticPageFlipSound === 'function') {
    playRealisticPageFlipSound();
  } else if (typeof playPaperSound === 'function') {
    playPaperSound();
  }
}

function closeInteractiveDossier() {
  interactiveDossierState.isOpen = false;
  const modal = document.getElementById('interactiveDossierModal');
  if (modal) modal.classList.add('hidden');
  if (typeof playPaperSound === 'function') playPaperSound();
}

function openDossierCover() {
  if (interactiveDossierState.isCoverOpened) return;
  interactiveDossierState.isCoverOpened = true;
  const coverLeaf = document.getElementById('interactiveCoverLeaf');
  if (coverLeaf) {
    coverLeaf.classList.add('is-opened');
  }
  if (typeof playRealisticPageFlipSound === 'function') {
    playRealisticPageFlipSound();
  } else if (typeof playPaperSound === 'function') {
    playPaperSound();
  }
}

function renderInteractiveDossierPage(index) {
  interactiveDossierState.currentPage = index;
  const c = currentCase();
  if (!c) return;

  const totalPages = INTERACTIVE_TABS.length;
  const pageInfo = INTERACTIVE_TABS[index] || INTERACTIVE_TABS[0];
  const fieldMap = {
    main: 'mainText',
    defense: 'defenseText',
    psych: 'psychNote',
    guard: 'guardReport'
  };

  const titleEl = document.getElementById('interactivePageTitle');
  if (titleEl) titleEl.textContent = `${pageInfo.title} (${index + 1}. SAYFA)`;
  const iconEl = document.getElementById('interactivePageIcon');
  if (iconEl) iconEl.textContent = pageInfo.icon;
  const counterEl = document.getElementById('interactivePageCounter');
  if (counterEl) counterEl.textContent = `${index + 1} / ${totalPages}`;
  const bottomNavInfo = document.getElementById('interactiveBottomNavInfo');
  if (bottomNavInfo) bottomNavInfo.textContent = `Sayfa ${index + 1} / ${totalPages}: ${pageInfo.title}`;

  const headerEl = document.getElementById('interactivePageHeader');
  if (headerEl) {
    if (pageInfo.id === 'verdict') {
      headerEl.classList.add('hidden');
    } else {
      headerEl.classList.remove('hidden');
    }
  }

  const prevBtn = document.getElementById('btnInteractivePrev');
  if (prevBtn) prevBtn.disabled = (index === 0);
  const nextBtn = document.getElementById('btnInteractiveNext');
  if (nextBtn) nextBtn.disabled = (index === totalPages - 1);
  const cornerNextBtn = document.getElementById('btnInteractivePageCornerNext');
  if (cornerNextBtn) {
    if (index === totalPages - 1) {
      cornerNextBtn.style.visibility = 'hidden';
      cornerNextBtn.disabled = true;
    } else {
      cornerNextBtn.style.visibility = 'visible';
      cornerNextBtn.disabled = false;
    }
  }
  const cornerPrevBtn = document.getElementById('btnInteractivePageCornerPrev');
  if (cornerPrevBtn) {
    if (index === 0) {
      cornerPrevBtn.style.visibility = 'hidden';
      cornerPrevBtn.disabled = true;
    } else {
      cornerPrevBtn.style.visibility = 'visible';
      cornerPrevBtn.disabled = false;
    }
  }

  const bodyEl = document.getElementById('interactivePageBody');
  if (bodyEl) {
    if (pageInfo.id === 'verdict') {
      bodyEl.innerHTML = renderInteractiveVerdictPage(c);
    } else {
      const baseContent = c[fieldMap[pageInfo.id]] || c.mainText;
      const sealAndSignature = renderDocumentSealAndSignature(pageInfo.id, c);
      bodyEl.innerHTML = baseContent + sealAndSignature;
    }
    bodyEl.scrollTop = 0;
    scheduleDocumentFit();
  }
}

function flipInteractivePage(direction) {
  if (!interactiveDossierState.isCoverOpened) {
    openDossierCover();
    return;
  }

  const totalPages = INTERACTIVE_TABS.length;
  let nextIdx = interactiveDossierState.currentPage;
  if (direction === 'next' && nextIdx < totalPages - 1) {
    nextIdx++;
  } else if (direction === 'prev' && nextIdx > 0) {
    nextIdx--;
  } else {
    return;
  }

  const pageWrapper = document.getElementById('interactivePagesWrapper');
  if (pageWrapper) {
    pageWrapper.classList.remove('page-turn-forward', 'page-turn-backward');
    void pageWrapper.offsetWidth;
    pageWrapper.classList.add(direction === 'next' ? 'page-turn-forward' : 'page-turn-backward');
  }

  if (typeof playRealisticPageFlipSound === 'function') {
    playRealisticPageFlipSound();
  } else if (typeof playPaperSound === 'function') {
    playPaperSound();
  }

  renderInteractiveDossierPage(nextIdx);
}

function setupInteractiveTouchSwipe() {
  const book = document.getElementById('interactiveDossierBook');
  if (!book || typeof book.addEventListener !== 'function' || book._swipeInit) return;
  book._swipeInit = true;

  let startX = 0;
  let startY = 0;
  book.addEventListener('touchstart', e => {
    if (e.touches && e.touches[0]) {
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
    }
  }, { passive: true });

  book.addEventListener('touchend', e => {
    if (!e.changedTouches || !e.changedTouches[0]) return;
    const diffX = e.changedTouches[0].clientX - startX;
    const diffY = e.changedTouches[0].clientY - startY;
    if (Math.abs(diffX) > 40 && Math.abs(diffX) > Math.abs(diffY) * 1.2) {
      if (diffX < 0) {
        flipInteractivePage('next');
      } else {
        flipInteractivePage('prev');
      }
    }
  }, { passive: true });
}

if (typeof window !== 'undefined' && window.addEventListener) {
  window.addEventListener('keydown', e => {
    if (!interactiveDossierState.isOpen) return;
    if (e.key === 'Escape') {
      closeInteractiveDossier();
    } else if (e.key === 'ArrowRight') {
      flipInteractivePage('next');
    } else if (e.key === 'ArrowLeft') {
      flipInteractivePage('prev');
    }
  });
}



// Seçili standart boyutta, taşmadan sığan en büyük yarım pikseli bul.
function fitDocumentText(element) {
  if (!element || !element.clientHeight || !element.clientWidth || !element.style?.setProperty) return;
  if (gameSettings.fontSize !== 'normal') {
    element.style.removeProperty('--auto-document-size');
    return;
  }
  const scroll = element.scrollTop;
  const availableHeight = element.clientHeight;
  const availableWidth = element.clientWidth;
  let chosen = 12;
  for (let size = 16; size >= 12; size -= 0.5) {
    element.style.setProperty('--auto-document-size', size + 'px');
    if (element.scrollHeight <= availableHeight + 1 && element.scrollWidth <= availableWidth + 1) {
      chosen = size;
      break;
    }
  }
  element.style.setProperty('--auto-document-size', chosen + 'px');
  element.scrollTop = scroll;
}
function scheduleDocumentFit() {
  if (typeof window.requestAnimationFrame !== 'function') return;
  if (scheduleDocumentFit.pending) return;
  scheduleDocumentFit.pending = true;
  window.requestAnimationFrame(() => {
    scheduleDocumentFit.pending = false;
    for (const id of ['docContent', 'interactivePageBody']) fitDocumentText(document.getElementById(id));
  });
}
window.addEventListener('resize', scheduleDocumentFit);
window.visualViewport?.addEventListener('resize', scheduleDocumentFit);
window.addEventListener('DOMContentLoaded', () => {
  if (typeof ResizeObserver !== 'undefined') {
    const observer = new ResizeObserver(scheduleDocumentFit);
    for (const id of ['docContent', 'interactivePageBody']) {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    }
  }
  document.addEventListener?.('toggle', scheduleDocumentFit, true);
  document.addEventListener?.('transitionend', scheduleDocumentFit, true);
  document.fonts?.ready.then(scheduleDocumentFit);
  scheduleDocumentFit();
});
