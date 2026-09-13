// Takvim ayları sıfır tabanlıdır: 0 = Ocak 1991, 12 = Ocak 1992.
const SAVE_KEY = 'af_kurulu_calendar_v2';
const SETTINGS_KEY = 'af_kurulu_settings_v1';
const RIOT_CAPACITY = 115;
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
  if (typeof isMuted !== 'undefined') {
    isMuted = !gameSettings.sound;
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

  const settingShakeBtn = document.getElementById('btnSettingShakeToggle');
  if (settingShakeBtn) {
    settingShakeBtn.textContent = gameSettings.shake ? 'AÇIK' : 'KAPALI';
    settingShakeBtn.className = gameSettings.shake
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

function toggleScreenShake() {
  gameSettings.shake = !gameSettings.shake;
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
  '17_0': { caller: 'Bakanlık Müsteşar Yardımcısı Rıfat Bey', callerDept: 'ANKARA · MAKAM SANTRALİ', dialogue: 'Başkanım, Turgut Bey’in dosyası bugün önünüzde. Mağdurla mesele kapandı, karşılıklı anlaştılar diye bilgi geldi. Bunca hizmeti olan bir insanı artık ailesine kavuşturalım. Bu dosyada olumlu karar bekliyoruz; aksi durumda kurulun uygulamalarını ayrıca incelememiz gerekecek.' },
  '17_1': { caller: 'Bakanlık Müsteşar Yardımcısı Rıfat Bey', callerDept: 'ANKARA · MAKAM SANTRALİ', dialogue: 'Turgut Bey için altı ay bekledik. Dernek teklifini reddetmiş, ayrı adrese gidecekmiş; artık dosyanın kapanmasını bekliyoruz. Mağdurla anlaşma belgesi yoksa bu konuyu uzatmayın. Vereceğiniz kararın gerekçesini şahsen görmek istiyorum.' },

  // 5. Vaka: Cemil Bozkurt (İhale Yolsuzluğu & Rüşvet) - İlk İnceleme
  '5_0': {
    caller: 'Bakanlık Özel Kalem Müdürü Muzaffer Bey',
    callerDept: 'T.C. ADALET BAKANLIĞI SANTRAL · ANKARA',
    dialogue: 'Sayın Komisyon Başkanım, Cemil Bozkurt Bey\'in dosyası önünüze gelmiş olmalı. Kendisi ağır şeker hastası, revirde yataktan kalkamıyor. Ailesi perişan vaziyette. Sayın Bakanımız bu dosyayı bizzat takip ediyor ve tahliyesini bekliyor. Bu akşam evrakı imzalayın, Ankara\'da önünüz açılsın. Aksi takdirde teftiş heyeti yarın masanızı inceler!'
  },
  // 6. Vaka: Barış Aksoy (Tıp Fakültesi Öğrencisi & Bildiri) - İlk İnceleme
  '6_0': {
    caller: 'DGM Başsavcı Vekili Kenan Bey',
    callerDept: 'DEVLET GÜVENLİK MAHKEMESİ BAŞSAVCILIĞI',
    dialogue: 'Başkan dinle beni! Barış Aksoy isimli militanı tahliye etmeyi aklından bile geçirme. Fakülteden kaydı çoktan silindi, artık öğrenci falan değil. Dışarı çıkarsa öğrenci derneklerini yeniden sokağa döker. Erteleme kaşesini vur, dosyasını kapat. Yoksa terör örgütüne yataklıktan hakkında dosya açtırırım!'
  },
  // 2. Vaka: Erkan Korkmaz (Tetikçi / Çete) - İlk İnceleme
  '2_0': {
    caller: 'Gizli İhbar (Kıraathane Esnafı)',
    callerDept: 'KADIKÖY İLÇE EMNİYET SANTRALİ AKTARMALI',
    dialogue: "Ben kahvehanenin yakınında esnafım. Dün iki kişi dükkâna gelip işletmeciye Erkan’ın yakında çıkacağını söyledi. İşletmeci konuşmak istemeyince kepenge vurdular. İsimlerini bilmiyorum; Erkan mı gönderdi onu da bilmiyorum. Olayı karakola bildirdik."
  },
  // 9. Vaka: Murat Çetin (Alkollü Kaza) - İlk İnceleme
  '9_0': {
    caller: 'Milletvekili Başdanışmanı Selahattin Bey',
    callerDept: 'TBMM İKTİDAR GRUBU ODASI',
    dialogue: 'Başkanım, bu dosyayı Sayın Vekilimiz yakından takip ediyor. Mağdur ailesinin dilekçesi var; ayrıca biz de bu toplantıda tahliye kararı çıkmasını istemiyoruz. Kurum raporlarınız olumlu olabilir, ancak kararınızın gerekçesi Ankara’da ayrıca değerlendirilecek. Erteleme yönünde hareket etmenizi bekliyoruz.'
  },
  // 1. Vaka: Emre Yılmaz (6 Ay Erteleme Sonrası Dönüş - 2. İnceleme)
  '1_1': {
    caller: 'Kartal Oto Sanayi - Tornacı Nuri Usta',
    callerDept: 'KARTAL PTT SANTRALİ · ŞAHSİ ÇAĞRI',
    dialogue: 'Başkan Bey, ben Kartal’dan Nuri. Emre için kalfa yardımcılığı teklifimi yazılı gönderdim. Hastane kontrollerine göre saatlerini ayarlayabilirim. İçerideki olayın ayrıntılarını bilmiyorum; ailesi yaralandığını söyledi. Atölyede çalıştığı dönemde verilen işleri tamamlıyordu. Dışarıdaki borçlarını nasıl çözeceğini ise bilmiyorum.'
  },
  // 2. Vaka: Erkan Korkmaz (6 Ay Erteleme Sonrası Dönüş - 2. İnceleme)
  '2_1': {
    caller: 'Kadıköy İlçe Emniyet Amiri Kemal Bey',
    callerDept: 'İSTANBUL EMNİYET MÜDÜRLÜĞÜ · ASAYİŞ ŞUBE',
    dialogue: "Başkanım, Mayıs ayındaki aramanın tutanağını dosyanıza gönderdik. Erkan’ın kişisel eşya torbasında iki metal parçası ve mağdurun yeni adresinin krokisi bulunmuş. Dışarıdaki tehditlerle bağlantısını araştırıyoruz. Mağdurun koruma başvurusu sürüyor; şu an Erkan’ın talimat verdiğini doğrulayan bir ifade yok."
  }
};

let activeCallKey = null;
let activePhoneCall = null;
let phoneInterval = null;
let phoneAnswered = false;
let phoneIgnored = false;

function freshGame() {
  return { version: 2, vicdan: 50, sicil: 50, capacity: 104, history: [], activeTab: 'main', phase: 'review',
    queue: cases.map((c, i) => ({ id: c.id, month: c.initialMonth ?? initialMonths[i], firstMonth: c.initialMonth ?? initialMonths[i], review: 0, previous: null })),
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
    ['main','defense','psych','guard','letter'].includes(s.activeTab) && Number.isInteger(s.meetingPosition) && s.meetingPosition >= 1 && s.meetingPosition <= 4 &&
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
      gameState = parsed;
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

// Geriye dönük uyumluluk ve yardımcı nesneler: cases veritabanından dinamik türetilir
const followUps = {};
const followUpDefenses = {};
if (typeof cases !== 'undefined') {
  cases.forEach(c => {
    if (c.review) {
      followUps[c.id] = [
        c.review.status,
        c.review.psychNote,
        c.review.guardReport,
        c.review.letterText,
        c.review.releaseConsequence.headline,
        c.review.releaseConsequence.body,
        c.review.releaseConsequence.vicdanDelta,
        c.review.releaseConsequence.sicilDelta
      ];
      followUpDefenses[c.id] = c.review.defenseText;
    }
  });
}

function currentCase() {
  const e = gameState.queue[0];
  if (!e) return null;
  const base = cases[e.id - 1];
  const c = { ...base };
  c.mainText = base.mainText.replace(/07\.\d{2}\.1991/g, dateFor(e.firstMonth).short);
  // Tarihe bağlı özgün öyküler yeni takvimde göreli anlatılır.
  c.mainText = c.mainText.replace('Temmuz ayındaki sınavlara', 'yaklaşan sınavlara');
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
  if (e.id >= 3 && e.id <= 18) c.mainText += `<p class="mt-2"><strong>GÜNCEL EK BELGE:</strong> ${revLetter}</p>`;
  c.releaseConsequence = revRelease;
  c.rejectConsequence = revReject;
  c.mainText = '<p class="bg-red-100 text-red-900 border border-red-700 rounded p-2 mb-2"><strong>SON İNCELEME:</strong> İkinci ret kararında şartlı tahliye hakkı yanar; dosya kapanır.</p>' + c.mainText;
  return c;
}

function isTerminal() { return gameState.vicdan <= 0 || gameState.sicil <= 0 || gameState.capacity >= RIOT_CAPACITY; }

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
    if (subLbl) subLbl.textContent = 'PTT Dahili Santral Beklemede';
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
        subLbl.textContent = 'PTT Dahili Santral Beklemede';
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
    showPhoneNotice(`PTT DAHİLİ KRİPTO HATTI: Bu oturumda ${activePhoneCall ? activePhoneCall.caller : 'makam'} ile görüşüldü. Telefon tutanağı masadaki evraklara işlenmiştir.`);
  } else if (phoneIgnored) {
    showPhoneNotice('PTT DAHİLİ SANTRAL: Çağrı meşgule atıldı. Şu anda hattan yeni bir talimat veya arama gelmiyor.');
  } else {
    showPhoneNotice('PTT DAHİLİ SANTRAL: Şu anda hattan gelen aktif bir arama veya bakanlık talimatı bulunmuyor. Kırmızı hat beklemede.');
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
        <p class="text-[11px] leading-relaxed">Komisyonunuz karar verdikçe, verilen hükümler, basın kupürleri ve bürokratik sonuçlar bu çekmecede dosyalanacaktır.</p>
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
  document.getElementById('docContent').innerHTML = currentCase()[fieldMap[tab]] || currentCase().mainText;
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
    document.getElementById(id).textContent = `${label}: ${delta > 0 ? '+' : ''}${delta} puan`;
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
