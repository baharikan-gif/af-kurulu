// =============================================================================
// AF KURULU - 1991 MAHKÛM VAKA VERİTABANI (CASES DATA)
// =============================================================================
// Her mahkûm; kimlik, ilk inceleme belgeleri, ilk karar sonuçları ve
// 6 ay sonraki 2. inceleme (review) belgeleri ile sonuçlarını tek bir nesnede barındırır.
// Yeni vaka eklemek için bu listenin sonuna yeni bir nesne eklemeniz yeterlidir.

const cases = [
  {
    "id": 1,
    "name": "Emre Yılmaz",
    "age": 24,
    "crime": "Motosiklet Hırsızlığı & Mala Zarar",
    "sentence": "3 Yıl Hapis (2 Yıl 1 Ay Tamamlandı)",
    "initialMonth": 0,
    "servedMonths": 25,
    "sentenceMonths": 36,
    "mainText": "\n          <p><strong>GÖRÜŞME YERİ:</strong> Bayrampaşa Kapalı Cezaevi</p>\n          <p class=\"mt-1\"><strong>OLAY ÖZETİ:</strong> Hükümlü, Kadıköy Rıhtım Caddesi'nde park halindeki bir motosikleti düz kontak yaparak çalmış; 48 saat sonra aracı bizzat sahibine götürmüş ve polise teslim olmuştur. Kontak düzeneğindeki hasarın bedelinin ödendiğine ilişkin makbuz dosyadadır. Tutuklanmadan önce ailesinin geçimini sağlıyordu.</p>\n        ",
    "defenseText": "\n          <div class=\"bg-stone-50/80 p-3 rounded border border-stone-300 font-typewriter text-stone-900\">\n            <div class=\"flex items-center justify-between border-b border-stone-300 pb-1.5 mb-2 text-xs font-mono text-stone-600\">\n              <span>HÜKÜMLÜ İFADE VE SAVUNMA ZAPTI</span>\n              <span>KOD: 1991/B-01</span>\n            </div>\n            <p class=\"italic text-stone-800 leading-relaxed text-[13px]\">\n              \"Gençtim, tefecinin borç batağındaydım. Pişman olup motoru bizzat sahibine götürdüm, esnafla helalleştik. Çıkar çıkmaz sanayide torna tezgahında helal ekmeğimi kazanmak istiyorum.\"\n            </p>\n            <div class=\"mt-3 pt-2 border-t border-dashed border-stone-300 text-right text-[11px] font-mono text-stone-500\">\n              İfade Sahibi: <span class=\"italic text-stone-700 font-semibold\">Emre Yılmaz (Mühür/İmza)</span>\n            </div>\n          </div>\n        ",
    "psychNote": "\n          <div class=\"bg-yellow-100 p-3 rounded border border-yellow-300 postit-shadow text-amber-950 font-typewriter\">\n            <div class=\"font-bold border-b border-amber-300 pb-1 mb-1\">GİZLİ GÖZLEM NOTU - DR. SEVİM (05.01.1991)</div>\n            <p>Son dört görüşmede eyleminin sorumluluğunu kabul etti. Görüşmelerde saldırgan davranış gözlenmedi. Borç ilişkileri sorulduğunda ayrıntı vermekten kaçındı. Kurum içindeki uyumun dışarıda sürüp sürmeyeceği konusunda kesin değerlendirme yapılamamaktadır.</p>\n          </div>\n        ",
    "guardReport": "\n          <p><strong>CEZAEVİ İDARESİ RAPORU:</strong></p>\n          <p>25 aydır kurumumuzdadır. Son 18 ayda disiplin cezası bulunmuyor; torna atölyesi devam çizelgesi düzenli. Kartal’daki Nuri Usta’nın kalfa yardımcılığı teklifi telefonla doğrulandı. Annesinin yanında kalacağını bildirdi; barınma adresinin teyidi henüz dosyaya ulaşmadı.</p>\n        ",
    "letterText": "\n          <p><strong>ANNESİNİN DİLEKÇESİ:</strong></p>\n          <p class=\"italic\">\"Sayın Kurul Üyeleri, Emre evin tek ekmek getireniydi. Babası vefat etti. Motorun sahibi esnaf bile hakkını helal etti. Evladımı bana bağışlayın.\"</p>\n        ",
    "releaseConsequence": {
      "headline": "TAHLİYE EDİLEN GENÇ SANAYİDE İŞE BAŞLADI",
      "body": "Emre Yılmaz, Kartal Sanayi Sitesi’nde kalfa yardımcısı olarak işe başladı. İlk ayın devam çizelgesi işveren tarafından gönderildi; annesinin adresi teyit edildi. İzlem raporunda yeni bir olay kaydı bulunmuyor.",
      "vicdanDelta": 15,
      "sicilDelta": 10,
      "capacityDelta": -3,
      "chronicle": "Emre kalfa yardımcısı olarak işe başladı; ilk ayın iş ve adres bilgileri doğrulandı."
    },
    "rejectConsequence": {
      "headline": "KOĞUŞTAKİ BIÇAKLI KAVGADA BİR HÜKÜMLÜ YARALANDI",
      "body": "Erteleme sonrasında Emre, koğuşta çıkan kavgada bıçakla yaralandı ve hastaneye kaldırıldı. Olay tutanağında kavgayı başlattığına ilişkin bulgu yer almıyor. Daha önce bildirilen koğuş tehditlerinin işleme alınıp alınmadığı hakkında idari inceleme başlatıldı.",
      "vicdanDelta": -25,
      "sicilDelta": -10,
      "capacityDelta": 3,
      "chronicle": "Emre koğuş kavgasında yaralandı; tehdit bildirimlerinin takibi hakkında inceleme açıldı."
    },
    "review": {
      "status": "Bıçaklanma sonrası hastane tedavisi tamamlandı; korumalı müşahede koğuşunda kalıyor. Kontrol randevuları devam ediyor.",
      "psychNote": "Görüşmelerde uyku bozukluğu ve kalabalık ortamlarda kaygı bildirdi. Saldırı sonrasında başlayan belirtiler için takip sürüyor. Düzenli barınma ve tedaviye erişim planı dosyaya eklendi; dışarıdaki borç ilişkileri henüz doğrulanamadı.",
      "guardReport": "Son altı ayda disiplin cezası yok. Yaralanma nedeniyle atölyeye ara verdi; hafif işlere kontrollü döndü. Annesinin adresi teyit edildi. Nuri Usta kalfa yardımcılığı teklifini yazılı olarak yeniledi.",
      "letterText": "Annesi tedavi belgelerini ekleyerek kontrol randevularına eşlik edeceğini bildirdi. İşveren ilk dönemde ağır iş vermeyeceğini yazdı.",
      "defenseText": "\"Koğuştaki kavgada yaralandım. Hastanede tedavi gördüm; şimdi ayrı koğuşta kalıyorum. Nuri Usta hafif iş vereceğini yazdı. Annemin yanında kalacağım, kontrollerime gideceğim. Borç meselesini ailemle çözeceğim. Cezamın bitmesine beş ay kaldı.\"",
      "releaseConsequence": {
        "headline": "EMRE TEDAVİ TAKİBİYLE İŞE BAŞLADI",
        "body": "Emre kalfa yardımcılığına başladı. İşveren çalışma saatlerini hastane kontrollerine göre düzenledi. İlk takip raporunda tedaviye devam ettiği, borç konusundaki beyanının ise henüz doğrulanamadığı belirtildi.",
        "chronicle": "Emre kalfa yardımcılığına başladı. İşveren çalışma saatlerini hastane kontrollerine göre düzenledi. İlk takip raporunda tedaviye devam ettiği, borç konusundaki beyanının ise henüz doğrulanamadığı belirtildi.",
        "vicdanDelta": 15,
        "sicilDelta": 10,
        "capacityDelta": -3
      },
      "rejectConsequence": {
        "headline": "CEZAEVİNDE İKİNCİ SALDIRI: EMRE YILMAZ AĞIR YARALANDI",
        "body": "Emre’nin şartlı tahliye talebi ikinci kez reddedildi. Korumalı koğuştan hastane kontrolüne götürülürken ortak sevk bekleme alanında ikinci bıçaklı saldırıda ağır yaralandı ve hastanede tedaviye alındı. Koruma kararına rağmen ortak alanda bekletilmesine ilişkin güvenlik ihmali incelemesi başlatıldı. Şartlı tahliye hakkı yandı. Kalan cezasını tamamlayacak; dosya yeniden kurula gelmeyecek.",
        "chronicle": "Emre ikinci saldırıda ağır yaralandı; tedaviye alındı. Şartlı tahliye hakkı yandı. Kalan cezasını tamamlayacak; dosya yeniden kurula gelmeyecek.",
        "vicdanDelta": -30,
        "sicilDelta": -20,
        "capacityDelta": -1
      }
    }
  },
  {
    "id": 2,
    "name": "Erkan Korkmaz",
    "age": 38,
    "crime": "Nitelikli Yağma & Silahla Ağır Yaralama",
    "sentence": "8 Yıl Hapis (4 Yıl 2 Ay Tamamlandı)",
    "initialMonth": 0,
    "servedMonths": 50,
    "sentenceMonths": 96,
    "mainText": "\n          <p><strong>GÖRÜŞME YERİ:</strong> Sağmalcılar Cezaevi</p>\n          <p class=\"mt-1\"><strong>OLAY ÖZETİ:</strong> Kadıköy Moda'da kıraathaneyi adamlarıyla basarak esnaftan haraç ve koruma parası talep etmiş, itiraz eden işletmeciyi ruhsatsız pompalı tüfekle bacağından vurup ömür boyu sakat bırakmıştır. Yağma ve kasten yaralamadan ikinci mükerrir sabıkası bulunmaktadır.</p>\n        ",
    "defenseText": "\n          <div class=\"bg-stone-50/80 p-3 rounded border border-stone-300 font-typewriter text-stone-900\">\n            <div class=\"flex items-center justify-between border-b border-stone-300 pb-1.5 mb-2 text-xs font-mono text-stone-600\">\n              <span>HÜKÜMLÜ İFADE VE SAVUNMA ZAPTI</span>\n              <span>KOD: 1991/B-02</span>\n            </div>\n            <p class=\"italic text-stone-800 leading-relaxed text-[13px]\">\n              \"İşletmeciden ortaklık alacağım olduğunu düşünüyordum. Silah kullanmam yanlıştı. Bundan sonra alacak meselesiyle avukatım ilgilenecek. Tahliye olursam ağabeyimin yanında çalışacağım.\"\n            </p>\n            <div class=\"mt-3 pt-2 border-t border-dashed border-stone-300 text-right text-[11px] font-mono text-stone-500\">\n              İfade Sahibi: <span class=\"italic text-stone-700 font-semibold\">Erkan Korkmaz (Mühür/İmza)</span>\n            </div>\n          </div>\n        ",
    "psychNote": "\n          <div class=\"bg-yellow-100 p-3 rounded border border-yellow-300 postit-shadow text-amber-950 font-typewriter\">\n            <div class=\"font-bold border-b border-amber-300 pb-1 mb-1\">GİZLİ GÖZLEM NOTU - DR. SEVİM</div>\n            <p class=\"text-red-900 font-bold\">Son üç görüşmede silah kullandığını kabul etti; yaralamanın sorumluluğunu konuşurken sık sık mağdurun davranışlarına döndü. Öfke kontrolü görüşmelerine iki kez katıldı, üçüncü görüşmeyi reddetti. Mağdurla yeniden karşılaşması hâlinde nasıl davranacağı sorusuna somut bir yanıt vermedi.</p>\n          </div>\n        ",
    "guardReport": "\n          <p><strong>CEZAEVİ İDARESİ RAPORU:</strong></p>\n          <p>50 aylık infazında üç disiplin cezası bulunuyor. 12.11.1990 tarihli tutanak, havalandırmada başka bir hükümlüye sivriltilmiş metal parçasıyla saldırmaya çalıştığını kaydediyor. 03.01.1991 tarihli ziyaret tutanağında mağdurun taşındığı adresi sorduğu belirtiliyor. Ağabeyinin iş teklifine ilişkin yazılı belge henüz ulaşmadı.</p>\n        ",
    "letterText": "\n          <p><strong>MAĞDUR AİLESİNDEN TELGRAF:</strong></p>\n          <p class=\"italic text-red-950 font-bold\">\"Bu adam sakın salınmasın! Dükkanımızı yakmakla tehdit ediyor. Adalet bizi korusun!\"</p>\n        ",
    "releaseConsequence": {
      "headline": "TAHLİYEDEN 18 GÜN SONRA KAHVEHANE BASKINI: 1 ÖLÜ!",
      "body": "Tahliyeden 18 gün sonra işletmeci kahvehanede silahla vurularak öldürüldü. Erkan Korkmaz olay yerinden ayrılırken yakalandı. Tahliye öncesindeki tehdit ve disiplin kayıtlarının değerlendirilmesine ilişkin kurul hakkında inceleme başlatıldı.",
      "vicdanDelta": -30,
      "sicilDelta": -30,
      "capacityDelta": -3,
      "chronicle": "Tahliye sonrası kahvehane saldırısında işletmeci öldürüldü; Erkan yakalandı, kurul kararının incelemesi başlatıldı."
    },
    "rejectConsequence": {
      "headline": "ERKAN KORKMAZ’IN DOSYASI ALTI AY ERTELENDİ",
      "body": "Kurul dosyayı altı ay erteledi. Mağdurun koruma başvurusu işleme alındı; dükkâna yönelik tehditler hakkında soruşturma sürüyor. İdari değerlendirmede disiplin ve ziyaret tutanaklarının kararda dikkate alındığı kaydedildi.",
      "vicdanDelta": 15,
      "sicilDelta": 15,
      "capacityDelta": 3,
      "chronicle": "Erkan’ın dosyası ertelendi; mağdurun koruma başvurusu ve tehdit soruşturması işleme alındı."
    },
    "review": {
      "status": "14.05.1991 tarihli aramada yatağının altındaki kişisel eşya torbasında iki sivriltilmiş metal parçası ve mağdurun yeni adresini gösteren kroki bulundu. Erkan eşyaların kendisine ait olmadığını beyan etti.",
      "psychNote": "Son iki görüşmede mağdurla husumetinin kalmadığını söyledi. Kroki sorulduğunda başkalarının bıraktığını belirtti. Görüşmelerde yeni bir tehdit sözü kaydedilmedi; beyanıyla arama bulguları arasındaki uyuşmazlık açıklığa kavuşmadı.",
      "guardReport": "Arama tutanağı iki görevli tarafından imzalandı; torbada Erkan adına gelen mektuplar da bulunuyor. Disiplin kurulunca 15 gün hücre tecridi uygulanmıştır. Sonraki ziyaret tutanağında mağdurun işyerine haber gönderme girişimi kaydedildi; mesajın dışarıya ulaştığı doğrulanamadı.",
      "letterText": "Mağdurun ailesi dükkân önündeki tehditlerin sürdüğünü bildirdi. Emniyet olayların Erkan’ın talimatıyla gerçekleşip gerçekleşmediğini henüz belirlemedi.",
      "defenseText": "\"56 aydır içerideyim. Aramada bulunanlar benim değil; torbaya başkası koymuş olabilir. Bunun için 15 gün hücre cezası aldım. İşletmeciyle alacak meselesini artık sürdürmek istemiyorum. Çıkarsam ağabeyimin yanında çalışacağım.\"",
      "releaseConsequence": {
        "headline": "TAHLİYE SONRASI MAĞDURUN EVİNE SALDIRI: İKİ YARALI",
        "body": "Tahliyeden 72 saat sonra mağdurun evine yapılan saldırıda iki kişi ağır yaralandı. Erkan olayla ilgili gözaltına alındı. Saldırı adresinin dosyadaki krokiyle eşleşmesi üzerine tahliye değerlendirmesi hakkında inceleme açıldı.",
        "chronicle": "Tahliyeden 72 saat sonra mağdurun evine yapılan saldırıda iki kişi ağır yaralandı. Erkan olayla ilgili gözaltına alındı. Saldırı adresinin dosyadaki krokiyle eşleşmesi üzerine tahliye değerlendirmesi hakkında inceleme açıldı.",
        "vicdanDelta": -30,
        "sicilDelta": -25,
        "capacityDelta": -3
      },
      "rejectConsequence": {
        "headline": "ERKAN KORKMAZ: ŞARTLI TAHLİYE HAKKI YANDI",
        "body": "14.05.1991 tarihli aramada yatağının altındaki kişisel eşya torbasında iki sivriltilmiş metal parçası ve mağdurun yeni adresini gösteren kroki bulundu. Erkan eşyaların kendisine ait olmadığını beyan etti. Kurul şartlı tahliye talebini ikinci kez reddetti. Şartlı tahliye hakkı yandı. Kalan cezasını tamamlayacak; dosya yeniden kurula gelmeyecek.",
        "chronicle": "Şartlı tahliye hakkı yandı. Kalan cezasını tamamlayacak; dosya yeniden kurula gelmeyecek.",
        "vicdanDelta": 10,
        "sicilDelta": 10,
        "capacityDelta": 3
      }
    }
  },
  {
    "id": 3,
    "name": "Hasan Demir",
    "age": 61,
    "crime": "Nitelikli Dolandırıcılık (32 Emekli Aile)",
    "sentence": "6 Yıl Hapis (4 Yıl 6 Ay Tamamlandı)",
    "initialMonth": 1,
    "servedMonths": 54,
    "sentenceMonths": 72,
    "mainText": "\n          <p><strong>GÖRÜŞME YERİ:</strong> Üsküdar Paşakapısı Cezaevi</p>\n          <p class=\"mt-1\"><strong>OLAY ÖZETİ:</strong> 1985 yılında 'Gülkent Konut Yapı Kooperatifi' adıyla paravan proje başlatmış, 32 dar gelirli emekli ailenin tüm ikramiye ve birikimlerini arsa teminatı yalanıyla zimmetine geçirmiştir. Mağdur ailelerin zararları henüz karşılanmamıştır.</p>\n          <p class=\"mt-2\"><strong>MALİ İNCELEME EKİ (02.02.1991):</strong> Kooperatiften oğlunun şirketine yapılan bir transferin dekontu bulundu. Hasan bunu malzeme avansı olarak açıklıyor; karşılık gelen fatura henüz sunulmadı. İlgili hesabın hareketleri istenmiş, inceleme devam etmektedir.</p>\n          <p class=\"mt-2\"><strong>MAĞDUR DİLEKÇESİ:</strong> Aileler sahada inşaat başlamadığını bildiriyor. Mevcut keşif tutanağı yalnızca temel kazısını doğruluyor; malzeme teslimi kayıtları eksik.</p>\n        ",
    "defenseText": "\n          <div class=\"bg-stone-50/80 p-3 rounded border border-stone-300 font-typewriter text-stone-900\">\n            <div class=\"flex items-center justify-between border-b border-stone-300 pb-1.5 mb-2 text-xs font-mono text-stone-600\">\n              <span>HÜKÜMLÜ İFADE VE SAVUNMA ZAPTI</span>\n              <span>KOD: 1991/B-03</span>\n            </div>\n            <p class=\"italic text-stone-800 leading-relaxed text-[13px]\">\n              \"Ben kimsenin helal lokmasını bilerek yemedim. İnşaat maliyetleri yükseldi, arsa sahibi sözleşmeyi feshetti. Kasadaki her kuruş temele harcandı. Bu yaşta cezaevinde geceleri göğsüm sıkışıyor, nefesim daralıyor. Tek dileğim, kalan günlerimde torunumu kucağıma alıp helallik istemek. Takdir yüce devletimizindir.\"\n            </p>\n            <div class=\"mt-3 pt-2 border-t border-dashed border-stone-300 text-right text-[11px] font-mono text-stone-500\">\n              İfade Sahibi: <span class=\"italic text-stone-700 font-semibold\">Hasan Demir (Mühür/İmza)</span>\n            </div>\n          </div>\n        ",
    "psychNote": "\n          <div class=\"bg-yellow-100 p-3 rounded border border-yellow-300 postit-shadow text-amber-950 font-typewriter\">\n            <div class=\"font-bold border-b border-amber-300 pb-1 mb-1\">KLİNİK GÖZLEM NOTU - DR. SEVİM (04.02.1991)</div>\n            <p>Hükümlüde kronik iskemik kalp hastalığı, hipertansiyon ve efor dispnesi mevcuttur. Tansiyon ve dilaltı ilaçları revirce düzenli verilmektedir. Genel klinik tablosu ilaçla dengelenebilmekle birlikte, koğuşun rutubetli ve basık ortamı kardiyovasküler yükünü artırmaktadır. Son hastane kontrolünde ilaç tedavisi ve düzenli takip önerildi. Şu an acil müdahale gerektiren bulgu kaydedilmedi; bu değerlendirme ileride kriz olmayacağı anlamına gelmez. Ailesi dışarıdaki kontrol randevularına eşlik edeceğini bildirmiştir.</p>\n          </div>\n        ",
    "guardReport": "\n          <p><strong>CEZAEVİ İDARESİ RAPORU:</strong></p>\n          <p>54 aydır kurumumuzdadır. Koğuş arkadaşlarıyla ve infaz memurlarıyla geçimi gayet iyidir. İflas nedeniyle derin vicdan azabı çektiğini beyan etmekte, koğuşta sessiz ve içine kapanık bir hayat sürmektedir. Disiplin cezası bulunmamaktadır.</p>\n          <p class=\"mt-2 text-stone-700 text-[13px] leading-relaxed\">\n            Ailesine gönderdiği iki mektupta <em>\"Ben çıkana kadar torunuma kimse el sürmesin, torunumun yerini değiştirdiniz mi?\"</em> ifadeleri yer alıyor. Hasan bunların aile içi konuşmalar olduğunu söylüyor. Mektupların mali incelemeyle bağlantısı henüz belirlenmedi.\n          </p>\n        ",
    "letterText": "\n          <p><strong>MAĞDUR EMEKLİLER DERNEĞİ DİLEKÇESİ:</strong></p>\n          <p class=\"italic\">\"Biz 32 aileyiz. Birikimlerimizi bu kooperatife yatırdık. Sahada inşaatın başladığını görmedik; oğlunun şirketine aktarılan paranın açıklanmasını ve alacaklarımız için güvence verilmesini istiyoruz.\"</p>\n        ",
    "releaseConsequence": {
      "headline": "HASAN TAHLİYE EDİLDİ: PARA TRANSFERİ İNCELEMESİ SÜRÜYOR",
      "body": "Hasan ailesinin yanına yerleşti ve hastane kontrollerine katıldı. Oğlunun şirketindeki hesaptan yapılan çekim incelemeye alındı; paranın kullanım amacı açıklığa kavuşmadı. Ailelere henüz ödeme yapılmadı. Eksik mali belgelerle verilen tahliye kararı hakkında idari değerlendirme istendi.",
      "vicdanDelta": 10,
      "sicilDelta": -10,
      "capacityDelta": -3,
      "chronicle": "Hasan tedaviye devam ediyor; ödeme yapılmadı ve şirket hesabının incelemesi sürüyor."
    },
    "rejectConsequence": {
      "headline": "MALİ İNCELEME SÜRERKEN HASAN’IN DOSYASI ERTELENDİ",
      "body": "Kurul dosyayı altı ay erteledi. Daha önce başlatılan mali incelemede oğlunun şirketindeki hesaba ilişkin belgeler ulaştı ve hesap üzerine tedbir uygulandı. Mektuplardaki “torun” ifadesi de inceleme kapsamına alındı; anlamı henüz doğrulanmadı. Hasan hastane kontrollerine sevkle devam ediyor.",
      "vicdanDelta": -10,
      "sicilDelta": 10,
      "capacityDelta": 3,
      "chronicle": "Hasan’ın incelemesi ertelendi; oğlunun şirket hesabına tedbir uygulandı, sağlık takibi sürüyor."
    },
    "review": {
      "status": "Haziran ayında göğüs ağrısıyla hastaneye sevk edildi. Tetkik ve tedavinin ardından revir koğuşuna döndü. Oğlunun şirket hesabındaki paradan ailelere kısmi ödeme yapıldı.",
      "psychNote": "Kalp hastalığı için ilaç tedavisi ve düzenli hastane kontrolü sürüyor. Son muayenede acil müdahale gerektiren bulgu kaydedilmedi. Sevklerde bir kontrolün geciktiği bildirildi; ailesi dışarıda randevulara eşlik etmeyi taahhüt ediyor.",
      "guardReport": "Disiplin cezası yok. Revirde kalıyor; hastane sevk çizelgesi dosyaya eklendi. Mektuplarında “torun” ifadesini kullanmayı sürdürüyor. Hasan bunun ailesini ilgilendirdiğini söylüyor; ifadenin şifre olduğu doğrulanmadı.",
      "letterText": "Mali incelemede oğlunun şirket hesabından ailelerin alacaklarının yüzde 25’i karşılandı. Hasan kalan ödeme için takvim sundu, fakat gelir kaynağını belgeleyemedi. Bazı aileler planı kabul ediyor; diğerleri güvence istiyor.",
      "defenseText": "\"Hastaneden revir koğuşuna döndüm; ilaçlarımı kullanıyorum. Hesaptan ödeme yapıldı, kalanını da ödemek istiyorum. Dışarıda iş bağlantılarım var ama henüz sözleşme yapmadık. Mektuptaki torun benim aile meselem. 60 aydır içerideyim; kalan cezam 12 ay. Ailem kontrollerime götürecek.\"",
      "releaseConsequence": {
        "headline": "HASAN ÖDEME PLANI VE SAĞLIK TAKİBİYLE TAHLİYE EDİLDİ",
        "body": "Hasan ailesinin yanında tedaviye devam etti. Ödeme planının ilk taksiti yatırıldı, ikinci taksit gecikti. Kalan tutarın kaynağına ilişkin inceleme sürüyor; tam geri ödeme henüz sağlanmadı.",
        "chronicle": "Hasan ailesinin yanında tedaviye devam etti. Ödeme planının ilk taksiti yatırıldı, ikinci taksit gecikti. Kalan tutarın kaynağına ilişkin inceleme sürüyor; tam geri ödeme henüz sağlanmadı.",
        "vicdanDelta": 10,
        "sicilDelta": -10,
        "capacityDelta": -3
      },
      "rejectConsequence": {
        "headline": "HASAN DEMİR: ŞARTLI TAHLİYE HAKKI YANDI",
        "body": "Kurul ikinci incelemede tahliyeyi reddetti. Hasan revirde tedaviye devam ediyor; hastane sevklerinin düzenli yapılması istendi. Yüzde 25’lik ödeme geri alınmadı; kalan alacaklar için mali takip sürüyor. Şartlı tahliye hakkı yandı. Kalan cezasını tamamlayacak; dosya yeniden kurula gelmeyecek.",
        "chronicle": "Şartlı tahliye hakkı yandı. Kalan cezasını tamamlayacak; dosya yeniden kurula gelmeyecek.",
        "vicdanDelta": 10,
        "sicilDelta": 10,
        "capacityDelta": 3
      }
    }
  },
  {
    "id": 4,
    "name": "Zehra Toprak",
    "age": 29,
    "crime": "Kasten Ağır Yaralama (Eski Eşi Bıçaklama)",
    "sentence": "5 Yıl Hapis (3 Yıl 2 Ay Tamamlandı)",
    "initialMonth": 2,
    "servedMonths": 38,
    "sentenceMonths": 60,
    "mainText": "\n          <p><strong>GÖRÜŞME YERİ:</strong> Bakırköy Kadın Cezaevi</p>\n          <p class=\"mt-1\"><strong>OLAY ÖZETİ:</strong> Kendisini ve 2 küçük çocuğunu yıllarca darp eden, hakkında daha önce şikâyet başvuruları bulunan eski kocasının, gece yarısı kapıyı baltayla kırıp içeri girmesi üzerine mutfak bıçağıyla müdahale etmiş ve şahsı ağır yaralamıştır. 2 çocuğu koruma altında yetiştirme yurdundadır.</p>\n          <p class=\"mt-2\"><strong>YENİ TEHDİT BİLDİRİMİ:</strong> Eski eşinden gelen mektupta kendisine ve çocuklarına yönelik tehditler yer alıyor. Mektup ilgili birime iletildi; inceleme sürüyor.</p>\n          <p class=\"mt-2\"><strong>SOSYAL HİZMET NOTU:</strong> Bir dayanışma kuruluşu geçici barınma teklif etti. Kabul yazısı dosyada; adresin gizliliği ve ulaşım düzeni henüz teyit edilmedi. Çocuklarla ilk görüşmelerin uzman eşliğinde yapılması planlanıyor. Tahliye, çocukların bakım düzenini kendiliğinden değiştirmeyecek.</p>\n        ",
    "defenseText": "\n          <div class=\"bg-stone-50/80 p-3 rounded border border-stone-300 font-typewriter text-stone-900\">\n            <div class=\"flex items-center justify-between border-b border-stone-300 pb-1.5 mb-2 text-xs font-mono text-stone-600\">\n              <span>HÜKÜMLÜ İFADE VE SAVUNMA ZAPTI</span>\n              <span>KOD: 1991/B-04</span>\n            </div>\n            <p class=\"italic text-stone-800 leading-relaxed text-[13px]\">\n              \"O gece baltayla kapıyı yardığında gözleri dönmüştü; çocuklarımın boğazına sarılacaktı. Önüne geçmeseydim iki yavrum bugün mezardaydı. Ben katil değilim, anneyim. Evlatlarım yurtta yapayalnız, ne olur beni onlara bağışlayın.\"\n            </p>\n            <div class=\"mt-3 pt-2 border-t border-dashed border-stone-300 text-right text-[11px] font-mono text-stone-500\">\n              İfade Sahibi: <span class=\"italic text-stone-700 font-semibold\">Zehra Toprak (Mühür/İmza)</span>\n            </div>\n          </div>\n        ",
    "psychNote": "\n          <div class=\"bg-yellow-100 p-3 rounded border border-yellow-300 postit-shadow text-amber-950 font-typewriter\">\n            <div class=\"font-bold border-b border-amber-300 pb-1 mb-1\">GİZLİ GÖZLEM NOTU - DR. SEVİM</div>\n            <p>Görüşmelerde çocuklarından ayrılığı ve eski eşinden gelen mektubu anlatırken kaygı belirtileri gözlendi. Kurum içinde saldırgan davranış kaydı bulunmuyor. Düzenli görüşme ve psikolojik destek önerildi. Dışarıdaki güvenlik ihtiyacı için sosyal hizmet birimiyle görüşüldü.</p>\n          </div>\n        ",
    "guardReport": "\n          <p><strong>CEZAEVİ İDARESİ RAPORU:</strong></p>\n          <p>38 aydır kurumumuzdadır. Dikiş atölyesine düzenli devam ediyor; çocuklarına gönderdiği paraların makbuzları dosyada. Disiplin cezası bulunmuyor. İdari yazışmada barınma teklifinin teyidi ve ulaşım planı istenmiş; yanıt bekleniyor. Bu eksikler için sorumlu birim sosyal hizmet bürosudur.</p>\n        ",
    "letterText": "\n          <p><strong>ESKİ KOCANIN TEHDİT MEKTUBU:</strong></p>\n          <p class=\"italic text-red-950\">\"O kadın beni sakat bıraktı. Eğer onu salarsanız çocukları da onu da yaşatmam.\"</p>\n        ",
    "releaseConsequence": {
      "headline": "ZEHRA GEÇİCİ ADRESE YERLEŞTİ: ÇOCUKLARIYLA GÖRÜŞMELER BAŞLADI",
      "body": "Zehra teklif edilen geçici adrese yerleşti. Çocuklarıyla uzman eşliğinde görüşmeler başladı; çocuklar mevcut bakım düzeninde kalıyor. Tehdit incelemesi sürüyor. Ulaşım ve adres gizliliği teyidinin tahliyeden sonra tamamlanması idari rapora eksiklik olarak işlendi.",
      "vicdanDelta": 20,
      "sicilDelta": -10,
      "capacityDelta": -3,
      "chronicle": "Zehra geçici barınmaya yerleşti; gözetimli görüşmeler başladı. Teyitlerin gecikmesi idari rapora işlendi."
    },
    "rejectConsequence": {
      "headline": "ERTELEME SONRASI AİLE GÖRÜŞMELERİ İÇİN DESTEK PLANI",
      "body": "Erteleme sonrasında görüşme kayıtlarında çocuklardan birinin daha az konuştuğu ve görüşmelerden ayrılmakta zorlandığı belirtildi. Zehra kısa süreli yemek reddi sonrası sağlık takibine alındı. Sosyal hizmet birimi aile görüşmeleri ve barınma hazırlıklarını sürdürüyor; bekleyen teyitler için yeni yazışma yapıldı.",
      "vicdanDelta": -25,
      "sicilDelta": 15,
      "capacityDelta": 3,
      "chronicle": "Erteleme sonrası aile görüşmelerine destek istendi; Zehra sağlık takibine alındı, barınma hazırlığı sürüyor."
    },
    "review": {
      "status": "Kısa süreli yemek reddi sonrasında beslenmesi düzene girdi. Çocuklarıyla düzenli görüşüyor. Geçici barınma adresi ve ulaşım planı doğrulandı; tehdit incelemesi henüz sonuçlanmadı.",
      "psychNote": "Görüşmelere düzenli katılıyor. Ayrılık ve eski eşin tehdidiyle ilgili kaygıları sürüyor. Beslenme takibinde yeni sorun kaydedilmedi. Psikolojik desteğin tahliye sonrasında da sürmesi için randevu oluşturuldu.",
      "guardReport": "Son altı ayda disiplin cezası yok. Dikiş atölyesine döndü. Sosyal hizmet bürosu adres gizliliği ve ulaşım düzenini teyit etti; çocuklarla uzman eşliğinde görüşme planı dosyaya eklendi.",
      "letterText": "Sosyal hizmet uzmanı geçici barınma kabulünü ve ilk görüşme tarihlerini yazılı bildirdi. Çocukların bakım düzeni ayrıca değerlendirilecek; tehdit bildirimine ilişkin inceleme sürüyor.",
      "defenseText": "\"İlk ertelemeden sonra bir süre yemek yemedim; şimdi düzenli besleniyorum ve görüşmelere gidiyorum. Çocuklarımı görmek istiyorum ama düzenlerinin bir günde değişmeyeceğini biliyorum. Kalacağım yerden kabul yazısı geldi. Eski eşimin mektubu beni hâlâ korkutuyor; ulaşım için hazırlanan planı kullanacağım. Dikiş işine devam edebilmek için de görüşüyorum.\"",
      "releaseConsequence": {
        "headline": "ZEHRA DOĞRULANAN BARINMA PLANINA GEÇTİ",
        "body": "Zehra geçici adrese yerleşti ve destek randevularına katıldı. Çocuklarıyla uzman eşliğinde görüşmeler sürüyor; birlikte yaşamaya henüz geçilmedi. Tehdit incelemesi açık tutuluyor.",
        "chronicle": "Zehra geçici adrese yerleşti ve destek randevularına katıldı. Çocuklarıyla uzman eşliğinde görüşmeler sürüyor; birlikte yaşamaya henüz geçilmedi. Tehdit incelemesi açık tutuluyor.",
        "vicdanDelta": 15,
        "sicilDelta": -10,
        "capacityDelta": -3
      },
      "rejectConsequence": {
        "headline": "ZEHRA TOPRAK: ŞARTLI TAHLİYE HAKKI YANDI",
        "body": "Kurul ikinci incelemede tahliyeyi reddetti. Şartlı tahliye hakkı yandı. Kalan cezasını tamamlayacak; dosya yeniden kurula gelmeyecek. Zehra’nın aile görüşmeleri, dikiş atölyesi çalışması ve psikolojik desteği devam ediyor. Çocukların bakım planı ile tehdit incelemesi ilgili birimlerce izleniyor.",
        "chronicle": "Şartlı tahliye hakkı yandı. Kalan cezasını tamamlayacak; dosya yeniden kurula gelmeyecek.",
        "vicdanDelta": -10,
        "sicilDelta": 10,
        "capacityDelta": 3
      }
    }
  },
  {
    "id": 5,
    "name": "Cemil Bozkurt",
    "age": 47,
    "crime": "İhaleye Fesat Karıştırma & Nitelikli Rüşvet",
    "sentence": "4 Yıl Hapis (2 Yıl 1 Ay Tamamlandı)",
    "initialMonth": 2,
    "servedMonths": 25,
    "sentenceMonths": 48,
    "mainText": "\n          <p><strong>GÖRÜŞME YERİ:</strong> Ankara Merkez Kapalı Cezaevi</p>\n          <p class=\"mt-1\"><strong>OLAY ÖZETİ:</strong> Karayolları ve Altyapı İhale Dairesi Başkanı iken, uluslararası bir otoyol projesinin şartname ve keşif bedellerini önceden müteahhitlik şirketine sızdırdığı ve lüks bir otel odasında döviz cinsinden rüşvet alırken suçüstü operasyonla yakalandığı sabit görülmüştür.</p>\n        ",
    "defenseText": "\n          <div class=\"bg-stone-50/80 p-3 rounded border border-stone-300 font-typewriter text-stone-900\">\n            <div class=\"flex items-center justify-between border-b border-stone-300 pb-1.5 mb-2 text-xs font-mono text-stone-600\">\n              <span>HÜKÜMLÜ İFADE VE SAVUNMA ZAPTI</span>\n              <span>KOD: 1991/B-05</span>\n            </div>\n            <p class=\"italic text-stone-800 leading-relaxed text-[13px]\">\n              \"Bana bürokrasideki rakiplerim tarafından açıkça siyasi kumpas kuruldu. Masamdaki döviz rüşvet değil, kurduğumuz vakfın resmi bağışıdır. Devlete ömrünü vermiş bir daire başkanını burada harcayamazsınız; Ankara elbet hakkımı teslim edecektir.\"\n            </p>\n            <div class=\"mt-3 pt-2 border-t border-dashed border-stone-300 text-right text-[11px] font-mono text-stone-500\">\n              İfade Sahibi: <span class=\"italic text-stone-700 font-semibold\">Cemil Bozkurt (Mühür/İmza)</span>\n            </div>\n          </div>\n        ",
    "psychNote": "\n          <div class=\"bg-yellow-100 p-3 rounded border border-yellow-300 postit-shadow text-amber-950 font-typewriter\">\n            <div class=\"font-bold border-b border-amber-300 pb-1 mb-1\">GİZLİ GÖZLEM NOTU - DR. SEVİM</div>\n            <p>Görüşmelerde mahkûmiyetini haksızlık olarak anlatıyor; sorumluluğu sorulduğunda bürokrasideki rakiplerine dönüyor. Görüşmelere katılıyor ancak olayın sonuçlarını tartışmakta isteksiz. Revir kaydında diyabet için ilaç ve beslenme takibi var; son hafta avluya ve ziyaretçi görüşlerine katıldığı kaydedilmiş. Yatak istirahati öneren güncel bir rapor bulunmuyor.</p>\n          </div>\n        ",
    "guardReport": "\n          <p><strong>CEZAEVİ İDARESİ RAPORU:</strong></p>\n          <p>25 aydır kurumumuzdadır. 12.02.1991 tarihinde ziyaret saatinin uzatılmasını, 20.02.1991 tarihinde tek kişilik revir odasını talep etti; talepler kabul edilmedi. Ziyaret süresi sonunda ayrılmayı reddetmesi tutanağa geçirildi. Ziyaretçileri arasında eski iş bağlantıları bulunuyor; görüşmelerde yeni bir suç talimatı kaydedilmedi. Tahliye sonrası kalacağı adres henüz teyit edilmedi.</p>\n        ",
    "letterText": "\n          <p><strong>SARI ZARF - BAKANLIK MÜŞAVİRİNDEN NOT:</strong></p>\n          <p class=\"italic border-l-2 border-red-700 pl-2\">\"Kurul Üyesinin dikkatine: Cemil Bey'in devlete hizmetleri malumdur. Kurulunuzun bu dosyada yapıcı davranması kariyeriniz açısından daha hayırlı olacaktır.\"</p>\n        ",
    "releaseConsequence": {
      "headline": "CEMİL BOZKURT TAHLİYE EDİLDİ: KARAR İÇİN AÇIKLAMA İSTENDİ",
      "body": "Cemil ailesinin yanına yerleşti. Bakanlık özel kaleminden karara ilişkin teşekkür telefonu geldi; kurul başkanının adı terfi değerlendirmesine alındı. Sağlık iddiası ve eksik adres teyidinin kararda nasıl değerlendirildiği hakkında açıklama istendi.",
      "vicdanDelta": -30,
      "sicilDelta": 25,
      "capacityDelta": -3,
      "chronicle": "Cemil tahliye edildi; Bakanlık desteği geldi, dosyadaki eksikler için açıklama istendi."
    },
    "rejectConsequence": {
      "headline": "CEMİL’İN DOSYASI ERTELENDİ: KURULA TEFTİŞ YAZISI",
      "body": "Dosya altı ay ertelendi. İki gün sonra kurulun son kararlarını isteyen bir teftiş yazısı ulaştı. Yazıda rutin inceleme deniyor; özel kalem aynı gün ertelemenin gerekçesini ayrıca sordu. Cemil kurumda diyabet takibine devam ediyor.",
      "vicdanDelta": 25,
      "sicilDelta": -30,
      "capacityDelta": 3,
      "chronicle": "Ertelemenin ardından teftiş yazısı geldi; özel kalem karara ilişkin gerekçe istedi."
    },
    "review": {
      "status": "Son altı ayda yeni disiplin olayı kaydedilmedi. Kalacağı adres doğrulandı. Eski iş bağlantısının şirketinden danışmanlık teklifi geldi; görev tanımı henüz sunulmadı.",
      "psychNote": "Görüşmelere düzenli katılıyor. Son görüşmede ziyaret kuralına uymadığını kabul etti; mahkûmiyet hakkındaki itirazını sürdürüyor. Diyabet takibi devam ediyor; günlük faaliyetlere katılıyor.",
      "guardReport": "Son altı ayın ziyaretleri zamanında tamamlandı; yeni ayrıcalık talebi yok. Adres teyidi dosyada. İş teklifi yazılı olarak ulaştı fakat danışmanlığın kapsamı ve ihalelerle ilişkisi açıklanmadı. Bu eksiklik için şirkete yazı gönderildi.",
      "letterText": "Bakanlık özel kalemi önceki tahliye talebini yineledi. Ayrı bir yazıda kurulun teftişinin devam ettiği bildirildi. İş teklifini veren şirket, Cemil’in eski iş bağlantılarından birine ait.",
      "defenseText": "\"Ziyaret saati konusunda kurala uymadım; son altı ayda aynı sorun yaşanmadı. Mahkûmiyet hakkındaki itirazım sürüyor ama kurumun kurallarına uyuyorum. Evimin teyidi geldi. Danışmanlık teklifini kabul etmek istiyorum; görev tanımını şirket hazırlayacak. Bakanlıktan kimin aradığını ben belirlemiyorum.\"",
      "releaseConsequence": {
        "headline": "CEMİL DANIŞMANLIK İŞİNE BAŞLADI",
        "body": "Cemil doğrulanan adrese yerleşti ve danışmanlık sözleşmesini imzaladı. Bakanlık kararı olumlu karşıladı. İşin ihale faaliyetleriyle ilişkisi henüz açıklanmadı; yeni bir suç tespiti bulunmuyor.",
        "chronicle": "Cemil doğrulanan adrese yerleşti ve danışmanlık sözleşmesini imzaladı. Bakanlık kararı olumlu karşıladı. İşin ihale faaliyetleriyle ilişkisi henüz açıklanmadı; yeni bir suç tespiti bulunmuyor.",
        "vicdanDelta": -10,
        "sicilDelta": 10,
        "capacityDelta": -3
      },
      "rejectConsequence": {
        "headline": "CEMİL BOZKURT: ŞARTLI TAHLİYE HAKKI YANDI",
        "body": "Kurul ikinci incelemede tahliyeyi reddetti. Şartlı tahliye hakkı yandı. Kalan cezasını tamamlayacak; dosya yeniden kurula gelmeyecek. Bakanlık özel kalemi kararın gerekçesini yeniden istedi; devam eden teftişte kurulun işlemleri için ek belge talep edildi. Cemil’in son altı aylık olumlu kurum kaydı karara eklenmiş olsa da iş teklifinin kapsamı belirsiz kaldı.",
        "chronicle": "Şartlı tahliye hakkı yandı. Kalan cezasını tamamlayacak; dosya yeniden kurula gelmeyecek.",
        "vicdanDelta": 10,
        "sicilDelta": -15,
        "capacityDelta": 3
      }
    }
  },
  {
    "id": 6,
    "name": "Barış Aksoy",
    "age": 22,
    "crime": "Toplantı ve Gösteri Kanununa Muhalefet & Kamu Malına Zarar",
    "sentence": "3 Yıl Hapis (1 Yıl 6 Ay Tamamlandı)",
    "initialMonth": 2,
    "servedMonths": 18,
    "sentenceMonths": 36,
    "mainText": "\n          <p><strong>GÖRÜŞME YERİ:</strong> Bursa Kapalı Cezaevi</p>\n          <p class=\"mt-1\"><strong>OLAY ÖZETİ:</strong> İstanbul Üniversitesi Cerrahpaşa Tıp Fakültesi 3. sınıf öğrencisidir. Üniversitede düzenlenen harç zammı protestosunda izin verilmeyen pankartı taşımak, bildiri dağıtmak ve polisin müdahalesi sırasında taşla ekip otosunun camını kırmak suçlarından hüküm giymiştir. Bu mahkûmiyet öncesinde adli kaydı bulunmamaktadır.</p><p class=\"mt-2\"><strong>FAKÜLTE YAZISI (04.03.1991):</strong> Öğrenci kaydı devam etmektedir. Önceki dönemler için verilen kayıt dondurma süresi sona ermiştir. Bu döneme dönüş işlemleri için 25.03.1991 tarihine kadar başvuru ve uygulama derslerine katılım planı istenmektedir. Süre kaçırılırsa bu dönem derslere dönüş yapılamayacak; sonraki dönem için ayrı başvuru değerlendirilecektir.</p>\n        ",
    "defenseText": "\n          <div class=\"bg-stone-50/80 p-3 rounded border border-stone-300 font-typewriter text-stone-900\">\n            <div class=\"flex items-center justify-between border-b border-stone-300 pb-1.5 mb-2 text-xs font-mono text-stone-600\">\n              <span>HÜKÜMLÜ İFADE VE SAVUNMA ZAPTI</span>\n              <span>KOD: 1991/B-06</span>\n            </div>\n            <p class=\"italic text-stone-800 leading-relaxed text-[13px]\">\n              \"Taşı ben attım. Kimseyi yaralamak istemedim ama camı kırdım. Protestoya katılmamı yanlış bulmuyorum; taşı atmamı savunmuyorum. Fakülteden gelen yazıdaki başvuruyu yapmak istiyorum. Biriken dersleri tamamlamak için ayrıca çalışmam gerekecek.\"\n            </p>\n            <div class=\"mt-3 pt-2 border-t border-dashed border-stone-300 text-right text-[11px] font-mono text-stone-500\">\n              İfade Sahibi: <span class=\"italic text-stone-700 font-semibold\">Barış Aksoy (Mühür/İmza)</span>\n            </div>\n          </div>\n        ",
    "psychNote": "\n          <div class=\"bg-yellow-100 p-3 rounded border border-yellow-300 postit-shadow text-amber-950 font-typewriter\">\n            <div class=\"font-bold border-b border-amber-300 pb-1 mb-1\">GİZLİ GÖZLEM NOTU - DR. SEVİM</div>\n            <p>Son görüşmelerde camı kırdığını kabul etti ve bu davranışını protestoya katılma gerekçesinden ayrı anlattı. Kurumda öfke patlaması kaydedilmedi. Gerilimli bir ortamda benzer davranışı nasıl önleyeceği sorulduğunda ortamdan uzaklaşacağını söyledi. Bunun dışarıdaki davranışına nasıl yansıyacağı henüz gözlenemez.</p>\n          </div>\n        ",
    "guardReport": "\n          <p><strong>CEZAEVİ İDARESİ RAPORU:</strong></p>\n          <p>18 aydır kurumumuzdadır. Okuma yazma çalışmalarına düzenli katılmış; disiplin cezası bulunmamaktadır. Ablasının yanında kalacağı adres doğrulandı. Fakülte başvuru belgeleri hazırlanmış; uygulama derslerine dönüşün nasıl sağlanacağı henüz kesinleşmemiştir. Savcılıktan tahliyeye itiraz yazısı gelmiştir; yazıya yeni bir kurum içi olay tutanağı eklenmemiştir.</p>\n        ",
    "letterText": "\n          <p><strong>TIP FAKÜLTESİ HOCALARININ DİLEKÇESİ:</strong></p>\n          <p class=\"italic\">\"Barış’ın kayıt durumuna ilişkin güncel yazı ektedir. Eksik uygulamaları için danışmanlık sunabiliriz; derslere kabul ve başarı ayrıca değerlendirilecektir.\"</p>\n        ",
    "releaseConsequence": {
      "headline": "BARIŞ FAKÜLTEYE DÖNÜŞ BAŞVURUSUNU YAPTI",
      "body": "Barış başvurusunu süresi içinde yaptı. Fakülte eksik uygulamalar için çalışma planı istedi; ders ve sınav başarısı henüz değerlendirilmedi. Ablasının yanına yerleşti. Savcılık tahliye kararına ilişkin itirazını yineleyerek kuruldan gerekçe istedi.",
      "vicdanDelta": 20,
      "sicilDelta": -15,
      "capacityDelta": -3,
      "chronicle": "Barış fakülteye süresinde başvurdu; eksik ders planı bekleniyor, savcılığın itirazı sürüyor."
    },
    "rejectConsequence": {
      "headline": "BARIŞ BU DÖNEM DERSLERE DÖNEMEDİ",
      "body": "Ertelemenin ardından Barış bu dönemin derslerine dönüş işlemlerini tamamlayamadı. Fakülte sonraki dönem başvurusunun ayrıca değerlendirileceğini bildirdi; öğrencilik kaydı silinmedi. Eğitim birimi yeni başvuru hazırlığına destek veriyor. Savcılık erteleme kararını olumlu karşıladığını yazılı bildirdi.",
      "vicdanDelta": -25,
      "sicilDelta": 15,
      "capacityDelta": 3,
      "chronicle": "Barış bir eğitim dönemini kaybetti; öğrencilik kaydı sürüyor, sonraki dönem için hazırlık yapılıyor."
    },
    "review": {
      "status": "Önceki dönem derslere dönemedi. Öğrencilik kaydı sürüyor; 03.09.1991 tarihli fakülte yazısında yeni dönem başvurusu için 25.09.1991 son tarih olarak bildirildi. Kabul ve ders planı ayrıca değerlendirilecek.",
      "psychNote": "Eğitim dönemini kaçırdıktan sonra görüşmelerde daha az konuştuğu kaydedildi. Son iki ayda okuma yazma çalışmalarına düzenli döndü. Camı kırma eylemine ilişkin sorumluluğunu kabul etmeyi sürdürüyor.",
      "guardReport": "Son altı ayda disiplin cezası yok. Ablasının adres teyidi yenilendi. Yeni dönem için başvuru dosyası hazır; uygulama derslerine katılım düzeni fakültenin değerlendirmesini bekliyor.",
      "letterText": "Fakülte danışmanı eksik dersler için görüşme teklif etti. Savcılık önceki itirazını yineledi; yeni bir olay kaydı sunulmadı. Tahliye kararı, okula kabulün yerine geçmeyecek.",
      "defenseText": "\"Geçen dönemi kaçırdım. Kaydım silinmedi; danışmanım yeni başvuru için yazdı. Taş atmamın sorumluluğunu kabul ediyorum. Ablamın yanında kalıp eksik derslere hazırlanacağım. Başvurumun kabul edileceğini bilmiyorum ama belgelerimi hazırladım.\"",
      "releaseConsequence": {
        "headline": "BARIŞ YENİ DÖNEM İÇİN BAŞVURDU",
        "body": "Barış ablasının yanına yerleşip başvurusunu verdi. Fakülte eksik uygulama dersleri için görüşme tarihi belirledi. Kaybettiği dönem geri gelmedi; derslere dönüş ve başarı henüz kesinleşmedi. Savcılığın itirazı devam ediyor.",
        "chronicle": "Barış ablasının yanına yerleşip başvurusunu verdi. Fakülte eksik uygulama dersleri için görüşme tarihi belirledi. Kaybettiği dönem geri gelmedi; derslere dönüş ve başarı henüz kesinleşmedi. Savcılığın itirazı devam ediyor.",
        "vicdanDelta": 12,
        "sicilDelta": -10,
        "capacityDelta": -3
      },
      "rejectConsequence": {
        "headline": "BARIŞ AKSOY: ŞARTLI TAHLİYE HAKKI YANDI",
        "body": "Kurul ikinci incelemede tahliyeyi reddetti. Şartlı tahliye hakkı yandı. Kalan cezasını tamamlayacak; dosya yeniden kurula gelmeyecek. Barış kurumun eğitim birimiyle çalışmalarına devam ediyor. Fakülteye yazılı başvuru ve öğrencilik durumuna ilişkin değerlendirme ayrı süreçler olarak sürüyor; bu karar öğrencilik kaydını kendiliğinden silmiyor. Savcılık ret kararını olumlu karşıladı.",
        "chronicle": "Şartlı tahliye hakkı yandı. Kalan cezasını tamamlayacak; dosya yeniden kurula gelmeyecek.",
        "vicdanDelta": -10,
        "sicilDelta": 10,
        "capacityDelta": 3
      }
    }
  },
  {
    "id": 7,
    "name": "Salih Güler",
    "age": 53,
    "crime": "Uyuşturucu Madde Ticareti (Torbacılık)",
    "sentence": "7 Yıl Hapis (4 Yıl Tamamlandı)",
    "initialMonth": 3,
    "servedMonths": 48,
    "sentenceMonths": 84,
    "mainText": "\n          <p><strong>GÖRÜŞME YERİ:</strong> Ümraniye Cezaevi</p>\n          <p class=\"mt-1\"><strong>OLAY ÖZETİ:</strong> Ümraniye ve Kadıköy genelindeki lise önlerinde ve gençlik parklarında sentetik hap ve esrar satışı yaptığı sırada Narkotik Şube ekiplerince suçüstü yakalanmıştır. Üzerinde yüklü miktarda satışa hazır uyuşturucu paketleri bulunmuş olup, uyuşturucu ticaretinden üçüncü mükerrir sabıka kaydıdır.</p>\n          <p class=\"mt-2\"><strong>İMAMIN GÖZLEM NOTU:</strong> Salih, kurul tarihi belli olmadan önce de mescidin temizliğini düzenli yapıyordu. İbadetine ve buradaki görevlerine şahidim; dışarıdaki işlerini ve bağlantılarını bilmiyorum.</p>\n          <p class=\"mt-2\"><strong>MEKTUP EKİ:</strong> Eski iş bağlantısına yazdığı mektupta “Hocayla görüştüm, kurul için yazı verecek” cümlesi yer alıyor. Mektubun devamında dışarıdaki iş imkânlarını soruyor.</p>\n        ",
    "defenseText": "\n          <div class=\"bg-stone-50/80 p-3 rounded border border-stone-300 font-typewriter text-stone-900\">\n            <div class=\"flex items-center justify-between border-b border-stone-300 pb-1.5 mb-2 text-xs font-mono text-stone-600\">\n              <span>HÜKÜMLÜ İFADE VE SAVUNMA ZAPTI</span>\n              <span>KOD: 1991/B-07</span>\n            </div>\n            <p class=\"italic text-stone-800 leading-relaxed text-[13px]\">\n              \"Uyuşturucu sattım; artık o işi yapmayacağım. İbadetime devam ediyorum, imam efendi bana kefildir. Verdiğim numara iş arayanlar içindi. Çıkınca yeğenimin deposunda çalışacağım. Mağdurlar konusunda söyleyeceğim, tövbe ettiğimdir.\"\n            </p>\n            <div class=\"mt-3 pt-2 border-t border-dashed border-stone-300 text-right text-[11px] font-mono text-stone-500\">\n              İfade Sahibi: <span class=\"italic text-stone-700 font-semibold\">Salih Güler (Mühür/İmza)</span>\n            </div>\n          </div>\n        ",
    "psychNote": "\n          <div class=\"bg-yellow-100 p-3 rounded border border-yellow-300 postit-shadow text-amber-950 font-typewriter\">\n            <div class=\"font-bold border-b border-amber-300 pb-1 mb-1\">GİZLİ GÖZLEM NOTU - DR. SEVİM</div>\n            <p class=\"text-red-950 font-bold\">Görüşmelere düzenli katılıyor. Mağdurlara verilen zarar sorulduğunda kendi tövbesini ve imamın desteğini anlatıyor; zararın telafisine ilişkin somut plan sunmadı. Eski bağlantısıyla ilişkisini yalnızca iş bulmaya yardımcı olmak şeklinde açıklıyor. Bu açıklama henüz doğrulanmadı.</p>\n          </div>\n        ",
    "guardReport": "\n          <p><strong>CEZAEVİ İDARESİ RAPORU:</strong></p>\n          <p>48 aydır kurumumuzdadır. 19.03.1991 tarihli tutanakta iki hükümlüye telefon numarası yazılı kâğıt verdiği kaydedildi. Numara, önceki suç dosyasında adı geçen bir kişiye ait. Konuşmanın içeriği kaydedilmedi. Yeğeninin deposuna ilişkin iş teklifi henüz yazılı olarak ulaşmadı.</p>\n        ",
    "letterText": "\n          <p><strong>BİR ANNENİN FERYADI:</strong></p>\n          <p class=\"italic text-red-900\">\"16 yaşındaki evladımı zehirleyen bu adamdı! Bu zehir tacirini sakın salmayın!\"</p>\n        ",
    "releaseConsequence": {
      "headline": "SERBEST KALAN ŞAHIS PARKLARDA YENİDEN YAKALANDI!",
      "body": "Salih Güler tahliyeden üç hafta sonra okul çevresinde satışa hazırlanmış 400 uyuşturucu hapla yakalandı. Birlikte yakalanan kişinin dosyadaki telefon numarasının sahibi olduğu belirlendi. Tahliye öncesindeki bağlantı kaydının değerlendirilmesine ilişkin inceleme başlatıldı.",
      "vicdanDelta": -30,
      "sicilDelta": -10,
      "capacityDelta": -3,
      "chronicle": "Salih eski bağlantısıyla birlikte uyuşturucu maddelerle yakalandı; tahliye dosyası incelemeye alındı."
    },
    "rejectConsequence": {
      "headline": "SALİH’İN TAHLİYE DOSYASI ALTI AY ERTELENDİ",
      "body": "Kurul dosyayı altı ay erteledi. İş teklifi için yazılı teyit, telefon numarasının sahibiyle ilişkisinin niteliği için ek bilgi istendi. Salih kurum içindeki görevlerini sürdürüyor. Narkotik birimi bağlantı kaydının incelenmesini olumlu karşıladı.",
      "vicdanDelta": 15,
      "sicilDelta": 15,
      "capacityDelta": 3,
      "chronicle": "Salih’in dosyası ertelendi; iş teklifi ve eski bağlantısı hakkında ek bilgi istendi."
    },
    "review": {
      "status": "Yeğeninin deposundan yazılı iş teklifi geldi; işyerinin faaliyeti ve kalacağı adres doğrulandı. Eski bağlantısıyla yazışması sürüyor. Son altı ayda yeni disiplin cezası kaydedilmedi.",
      "psychNote": "Görüşmelerde uyuşturucu satışını bırakacağını söylüyor. Mağdurlara ilişkin sorularda imamın desteğini öne çıkarmayı sürdürüyor. Depodaki işini açıklayabiliyor; eski bağlantısıyla neden yazıştığına verdiği yanıtlar sınırlı.",
      "guardReport": "Temizlik görevleri düzenli; ziyaret kurallarına uyuyor. Son mektubunda eski bağlantısına “Yeğenimin deposuna geçeceğim; senin iş için konuşuruz” yazdı. Buradaki işin ne olduğu belirlenmedi. Depoda yasadışı faaliyet tespit edildiğine ilişkin bir kayıt bulunmuyor.",
      "letterText": "İmam, Salih’in kurul tarihleri dışında da ibadet ve görevlerine devam ettiğini doğruladı: “Buradaki davranışına şahidim; dışarıdaki ilişkilerine kefil olamam.” Yeğeni iş ve barınma teklifini yazılı yeniledi.",
      "defenseText": "\"Yeğenimin yazısı geldi, depoda yükleme ve sayım işine bakacağım. İbadetime kurul için başlamadım; hocaya sorabilirsiniz. Eski tanıdığımla mektuplaştım, benden iş bulmamı istedi. Mağdurlar için ne yapacağımı henüz bilmiyorum. Tövbe ettiğimi söyledim, bundan sonra yaptıklarımla göstermek istiyorum.\"",
      "releaseConsequence": {
        "headline": "SALİH DEPODA İŞE BAŞLADI: ESKİ BAĞLANTISIYLA GÖRÜŞTÜ",
        "body": "Salih doğrulanan depoda çalışmaya başladı. Eski bağlantısıyla görüştüğü bildirildi; görüşmenin içeriği bilinmiyor. Yeni bir suç tespiti bulunmuyor. İzlem birimi bağlantıya ilişkin açıklama istedi.",
        "chronicle": "Salih doğrulanan depoda çalışmaya başladı. Eski bağlantısıyla görüştüğü bildirildi; görüşmenin içeriği bilinmiyor. Yeni bir suç tespiti bulunmuyor. İzlem birimi bağlantıya ilişkin açıklama istedi.",
        "vicdanDelta": 10,
        "sicilDelta": -10,
        "capacityDelta": -3
      },
      "rejectConsequence": {
        "headline": "SALİH GÜLER: ŞARTLI TAHLİYE HAKKI YANDI",
        "body": "Kurul ikinci incelemede tahliyeyi reddetti. Şartlı tahliye hakkı yandı. Kalan cezasını tamamlayacak; dosya yeniden kurula gelmeyecek. Salih kurum içindeki görevlerine devam ediyor. Doğrulanan iş teklifine rağmen eski bağlantısıyla yazışmasının amacı açıklığa kavuşmadı; yeni bir suç tespit edilmiş değil. İdari değerlendirmede bağlantı kaydının dikkate alındığı belirtildi.",
        "chronicle": "Şartlı tahliye hakkı yandı. Kalan cezasını tamamlayacak; dosya yeniden kurula gelmeyecek.",
        "vicdanDelta": -10,
        "sicilDelta": 10,
        "capacityDelta": 3
      }
    }
  },
  {
    "id": 8,
    "name": "Meryem Sönmez",
    "age": 33,
    "crime": "Resmi Belgede Sahtecilik & Dolandırıcılık",
    "sentence": "4 Yıl Hapis (2 Yıl 6 Ay Tamamlandı)",
    "initialMonth": 3,
    "servedMonths": 30,
    "sentenceMonths": 48,
    "mainText": "\n          <p><strong>GÖRÜŞME YERİ:</strong> Bakırköy Kadın Cezaevi</p>\n          <p class=\"mt-1\"><strong>OLAY ÖZETİ:</strong> Özel hastanede muhasebe sorumlusu iken, 7 yaşındaki lösemi hastası kızının yurt dışından dövizle getirilen pahalı kemoterapi iğnelerini karşılayabilmek amacıyla sahte fatura ve hayali kasa fişleri düzenleyerek kurum hesabından para çekmiştir. Kızı Cerrahpaşa Onkoloji Servisi’nde tedavi görmektedir.</p>\n          <p class=\"mt-2\"><strong>HASTANE YAZISI (03.04.1991):</strong> Hastalığın ağır seyrettiği, tedavinin sürdüğü bildirildi. Teyzesi refakat ediyor; aile desteğine ihtiyaç var. Annesinin yanında bulunması tedavi sonucuna ilişkin güvence oluşturmuyor.</p>\n          <p class=\"mt-2\"><strong>MALİ EK:</strong> İlaç makbuzları çekilen tutarın önemli bir bölümünü doğruluyor; kalan tutarın belgeleri eksik. Özel hastanenin zararının yüzde 10’u ödendi. Avukat kalan ödeme için güvence istiyor; Meryem’in kız kardeşi iş ve barınma teklifini yazılı sundu.</p>\n        ",
    "defenseText": "\n          <div class=\"bg-stone-50/80 p-3 rounded border border-stone-300 font-typewriter text-stone-900\">\n            <div class=\"flex items-center justify-between border-b border-stone-300 pb-1.5 mb-2 text-xs font-mono text-stone-600\">\n              <span>HÜKÜMLÜ İFADE VE SAVUNMA ZAPTI</span>\n              <span>KOD: 1991/B-08</span>\n            </div>\n            <p class=\"italic text-stone-800 leading-relaxed text-[13px]\">\n              \"Faturaları ben düzenledim, parayı izinsiz aldım. İlaç için kullandım; bazı makbuzları bulamadım. Yaptığımı çocuğumun hastalığı ortadan kaldırmıyor. Kardeşim refakat ediyor ama işi de var. Ben yanında olmak, çalışıp kalan borcu ödemek istiyorum.\"\n            </p>\n            <div class=\"mt-3 pt-2 border-t border-dashed border-stone-300 text-right text-[11px] font-mono text-stone-500\">\n              İfade Sahibi: <span class=\"italic text-stone-700 font-semibold\">Meryem Sönmez (Mühür/İmza)</span>\n            </div>\n          </div>\n        ",
    "psychNote": "\n          <div class=\"bg-yellow-100 p-3 rounded border border-yellow-300 postit-shadow text-amber-950 font-typewriter\">\n            <div class=\"font-bold border-b border-amber-300 pb-1 mb-1\">GİZLİ GÖZLEM NOTU - DR. SEVİM</div>\n            <p>Görüşmelerde belge düzenlediğini ve parayı izinsiz aldığını kabul ediyor. Kızının durumundan söz ederken yoğun kaygı ve uyku güçlüğü bildiriyor. Destek görüşmelerine katılıyor. Ödeme planını anlatabiliyor; bu planın gelir kaynağının doğrulanması mali incelemenin konusu.</p>\n          </div>\n        ",
    "guardReport": "\n          <p><strong>CEZAEVİ İDARESİ RAPORU:</strong></p>\n          <p>30 aydır kurumumuzdadır; disiplin cezası yok. Örgü satışlarından yaptığı ödemeler makbuzlarla kayıtlı. Kız kardeşinin adresi doğrulandı; önerdiği işin düzenli geliri henüz belgelenmedi. Özel hastane avukatının ödeme güvencesi talebi dosyaya eklendi.</p>\n        ",
    "letterText": "\n          <p><strong>ŞİRKET AVUKATININ DİLEKÇESİ:</strong></p>\n          <p class=\"italic\">\"Para ödenmeden tahliyesine rızamız yoktur.\"</p>\n        ",
    "releaseConsequence": {
      "headline": "MERYEM KIZINA REFAKAT ETTİ; AİLE YAS DESTEĞİ ALIYOR",
      "body": "Meryem hastanede kızına refakat etti. Tedaviye rağmen ilerleyen haftalarda kızı vefat etti. Meryem ailesinin yanında yas desteği alıyor. Ödeme planının ilk taksiti yatırıldı; kalan tutarın güvencesi konusunda hastane avukatı itirazını sürdürdü ve kuruldan gerekçe istendi.",
      "vicdanDelta": 25,
      "sicilDelta": -15,
      "capacityDelta": -3,
      "chronicle": "Meryem kızının son haftalarında yanında oldu; kayıp sonrası ailesiyle yas desteğine başladı, ödeme takibi sürüyor."
    },
    "rejectConsequence": {
      "headline": "7 YAŞINDAKİ LÖSEMİLİ KIZ ÇOCUĞU VEFAT ETTİ",
      "body": "Erteleme sonrasında hastaneden, sürdürülen tedaviye rağmen kızının vefat ettiği bildirildi. Bu sürede teyzesi refakat etti. Meryem kurumda yas desteğine alındı. Mali belgelerin tamamlanması için yazışmalar sürdü; idari değerlendirmede eksik ödeme güvencesinin takip edildiği belirtildi.",
      "vicdanDelta": -30,
      "sicilDelta": 15,
      "capacityDelta": 3,
      "chronicle": "Meryem kızını kaybetti ve kurumda yas desteğine alındı; zarar ödemelerine ilişkin inceleme sürüyor."
    },
    "review": {
      "status": "Kızının ölümünün ardından yas desteği alıyor. Örgü satışları ve ailesinin katkısıyla özel hastanenin zararının yüzde 20’si ödendi.",
      "psychNote": "Görüşmelere devam ediyor; yas belirtileri sürüyor. Örgü işine dönmüş, kalan borç için plan hazırlamış. Desteğin dışarıda da sürmesi için görüşme ayarlandı.",
      "guardReport": "Disiplin cezası yok. Yüzde 20’lik ödemeye ilişkin makbuzlar dosyada. Kız kardeşinin adresi ve birlikte çalışacakları işyeri doğrulandı; gelirlerinin kalan borcu ne sürede karşılayacağı belirsiz.",
      "letterText": "Özel hastane avukatı kısmi ödemeyi doğruluyor; kalan tutarın ödeme takvimine itiraz ediyor. Kız kardeşi barınma ve iş desteğini yeniledi. Borç takibi tahliye kararından bağımsız sürecek.",
      "defenseText": "\"Kızım artık yok. Onun için yaptığımı söylemem eksik belgeleri tamamlamıyor. Elimdeki makbuzları verdim, kardeşim de ödemeye yardım etti. Çalışıp kalanını ödemek istiyorum. Burada başladığım destek görüşmelerine dışarıda da devam edeceğim.\"",
      "releaseConsequence": {
        "headline": "MERYEM AİLESİNİN YANINA DÖNDÜ",
        "body": "Meryem yas desteğine dışarıda devam ediyor; tahliye kızının kaybını geri çevirmedi. Kız kardeşiyle çalışmaya başladı. Yeni ödeme yaptı ancak kalan borcun tamamlanma tarihi henüz kesinleşmedi.",
        "chronicle": "Meryem yas desteğine dışarıda devam ediyor; tahliye kızının kaybını geri çevirmedi. Kız kardeşiyle çalışmaya başladı. Yeni ödeme yaptı ancak kalan borcun tamamlanma tarihi henüz kesinleşmedi.",
        "vicdanDelta": 10,
        "sicilDelta": -10,
        "capacityDelta": -3
      },
      "rejectConsequence": {
        "headline": "MERYEM SÖNMEZ: ŞARTLI TAHLİYE HAKKI YANDI",
        "body": "Kurul ikinci incelemede tahliyeyi reddetti. Şartlı tahliye hakkı yandı. Kalan cezasını tamamlayacak; dosya yeniden kurula gelmeyecek. Meryem’in yas desteği ve örgü çalışması sürüyor. Yapılmış ödemeler geçerliliğini koruyor; kalan borç için takip devam ediyor. Kız kardeşi görüş ziyaretlerini sürdürüyor.",
        "chronicle": "Şartlı tahliye hakkı yandı. Kalan cezasını tamamlayacak; dosya yeniden kurula gelmeyecek.",
        "vicdanDelta": -10,
        "sicilDelta": 10,
        "capacityDelta": 3
      }
    }
  },
  {
    "id": 9,
    "name": "Murat Çetin",
    "age": 26,
    "crime": "Bilinçli Taksirle Ölüme Neden Olma (Alkollü Trafik Kazası)",
    "sentence": "4 Yıl 6 Ay Hapis (2 Yıl 4 Ay Tamamlandı)",
    "initialMonth": 3,
    "servedMonths": 28,
    "sentenceMonths": 54,
    "mainText": "\n          <p><strong>GÖRÜŞME YERİ:</strong> Metris Cezaevi</p>\n          <p class=\"mt-1\"><strong>OLAY ÖZETİ:</strong> Gece saatlerinde Bağdat Caddesi üzerinde yüksek sürat ve 1.8 promil alkol tesiri altında araç kullanırken kırmızı ışık ihlali yapmış, yaya geçidinden geçen 20 yaşındaki bir üniversite öğrencisine çarparak ölümüne yol açmıştır. Kaza sonrası olay yerinden kaçmayıp teslim olmuştur.</p>\n          <p class=\"mt-2\"><strong>İNFAZ VE BAŞVURU NOTU:</strong> Toplam 54 aylık cezanın 28 ayı tamamlandı. Şartlı tahliye başvurusu değerlendirme gündemine alındı; toplam ceza süresi sona ermedi.</p>\n          <p class=\"mt-2\"><strong>AİLE VE TAKİP PLANI:</strong> Anne ve babasının adresi doğrulandı. Ailesi destek görüşmelerine ulaşım sağlayacağını bildirdi; dışarıdaki ilk randevu henüz kesinleşmedi.</p>\n          <p class=\"mt-2\"><strong>MAĞDUR ANNESİNİN DİLEKÇESİ:</strong> “Oğlumun kaybıyla her gün yaşıyoruz. Murat’ın pişman olduğunu söylemesi bize yetmiyor. Tahliye değerlendirmesinde neye dayanıldığını öğrenmek ve itirazımızın dosyada kalmasını istiyoruz.”</p>\n        ",
    "defenseText": "\n          <div class=\"bg-stone-50/80 p-3 rounded border border-stone-300 font-typewriter text-stone-900\">\n            <div class=\"flex items-center justify-between border-b border-stone-300 pb-1.5 mb-2 text-xs font-mono text-stone-600\">\n              <span>HÜKÜMLÜ İFADE VE SAVUNMA ZAPTI</span>\n              <span>KOD: 1991/B-09</span>\n            </div>\n            <p class=\"italic text-stone-800 leading-relaxed text-[13px]\">\n              \"Alkollü olduğum hâlde direksiyona geçtim ve kırmızı ışıkta durmadım. Bir insanın ölümüne neden oldum; bunu kaza diyerek geçiştiremem. Destek görüşmelerine katılıyorum. Şartlı tahliye değerlendirmesi için başvurdum. Ailemin yanında kalıp görüşmelere devam etmek istiyorum; dışarıda bunu sürdürebildiğimi henüz göstermedim.\"\n            </p>\n            <div class=\"mt-3 pt-2 border-t border-dashed border-stone-300 text-right text-[11px] font-mono text-stone-500\">\n              İfade Sahibi: <span class=\"italic text-stone-700 font-semibold\">Murat Çetin (Mühür/İmza)</span>\n            </div>\n          </div>\n        ",
    "psychNote": "\n          <div class=\"bg-yellow-100 p-3 rounded border border-yellow-300 postit-shadow text-amber-950 font-typewriter\">\n            <div class=\"font-bold border-b border-amber-300 pb-1 mb-1\">GİZLİ GÖZLEM NOTU - DR. SEVİM</div>\n            <p>Görüşmelerde ölümle sonuçlanan davranışının sorumluluğunu kabul ediyor. Uyku güçlüğü ve yoğun suçluluk duygusu bildiriyor. Düzenli destek görüşmelerine katılıyor. Tedavi ve risk değerlendirmesinin sürmesi öneriliyor; tahliye hâlinde görüşmelerin kesintiye uğramaması için randevu planı hazırlanıyor.</p>\n          </div>\n        ",
    "guardReport": "\n          <p><strong>CEZAEVİ İDARESİ RAPORU:</strong></p>\n          <p>28 aydır kurumumuzdadır. Kütüphane görevine düzenli devam ediyor; disiplin cezası bulunmuyor. Kurum kayıtlarında alkol kullanımına ilişkin olay yok. Bu gözlem dışarıdaki davranışını doğrulamıyor. Destek programına katılım çizelgesi dosyaya eklendi.</p>\n        ",
    "letterText": "\n          <p><strong>ÖLEN GENCİN ANNESİNİN MEKTUBU:</strong></p>\n          <p class=\"italic text-red-950 font-bold border-l-2 border-red-600 pl-2\">\"Oğlumun kaybıyla yaşıyoruz. Tahliye değerlendirmesinin gerekçesini öğrenmek ve itirazımızın dosyada kalmasını istiyoruz.\"</p>\n        ",
    "releaseConsequence": {
      "headline": "MURAT AİLESİNİN YANINA YERLEŞTİ: DESTEK GÖRÜŞMELERİ BAŞLADI",
      "body": "Murat doğrulanan adrese yerleşti. İlk destek randevusu tahliye sonrasında tamamlandı ve görüşmeye katıldı. İlk takip döneminde yeni olay bildirilmedi; uzun dönemli takip sürüyor. Mağdur ailesi itirazını korudu. Milletvekili danışmanlığından kurul kararının açıklanmasını isteyen bir yazı geldi.",
      "vicdanDelta": 10,
      "sicilDelta": -10,
      "capacityDelta": -3,
      "chronicle": "Murat ailesinin yanında destek görüşmelerine başladı; mağdur ailesinin itirazı ve siyasi makamın açıklama talebi sürüyor."
    },
    "rejectConsequence": {
      "headline": "MURAT’IN SAĞLIK TAKİBİ SIKLAŞTIRILDI",
      "body": "Erteleme sonrasında görüşmelerde uyku sorunlarının arttığı ve kütüphane görevine katılımının azaldığı kaydedildi. Sağlık ekibi görüşmeleri sıklaştırdı ve düzenli değerlendirme planladı. Milletvekili danışmanlığı ertelemeyi olumlu karşıladığını bildirdi; mağdur ailesinin dilekçesi dosyada tutuldu.",
      "vicdanDelta": -15,
      "sicilDelta": 15,
      "capacityDelta": 3,
      "chronicle": "Murat’ın destek görüşmeleri sıklaştırıldı; erteleme kararı siyasi makam tarafından olumlu karşılandı."
    },
    "review": {
      "status": "Erteleme sonrasında sıklaştırılan görüşmelere düzenli katıldı. Son iki ayda kütüphane görevine yeniden devam etti. Aile adresi ve dışarıdaki ilk destek randevusu doğrulandı.",
      "psychNote": "Uyku yakınmaları azaldığını bildiriyor; suçluluk duygusu sürüyor. Destek programına katılım düzenli. Dışarıda programı sürdürebilmesi takip gerektiriyor; kurum içi düzelme tek başına kesin sonuç göstermiyor.",
      "guardReport": "Disiplin cezası yok. Kütüphane devam çizelgesi ve görüşme kayıtları dosyada. Ailesinin ulaşım desteği teyit edildi; tahliye sonrası randevu yazılı olarak alındı.",
      "letterText": "Ailesi görüşmelere ulaşım sağlayacağını bildirdi. Mağdur ailesi itirazını yineledi ve karar gerekçesinin kendilerine bildirilmesini istedi. Danışmanlığın önceki baskı yazısı ayrı ek olarak duruyor.",
      "defenseText": "\"Ertelemeden sonra bir süre kütüphaneye gitmedim, uykum da bozuldu. Görüşmeleri aksatmamaya çalıştım ve son iki ayda görevime döndüm. Ailem randevularıma götürecek; tarihini de aldık. Ölen gencin ailesinin beni affetmesini bekleyemem. Dışarıda da bu düzeni sürdürmek benim sorumluluğum.\"",
      "releaseConsequence": {
        "headline": "MURAT DOĞRULANAN TAKİP PLANIYLA TAHLİYE EDİLDİ",
        "body": "Murat ailesinin yanına yerleşti ve planlanan randevulara katıldı. İlk takip döneminde yeni olay kaydedilmedi. Mağdur ailesi itirazını sürdürdü; danışmanlık kurul kararına ilişkin yeniden açıklama istedi.",
        "chronicle": "Murat ailesinin yanına yerleşti ve planlanan randevulara katıldı. İlk takip döneminde yeni olay kaydedilmedi. Mağdur ailesi itirazını sürdürdü; danışmanlık kurul kararına ilişkin yeniden açıklama istedi.",
        "vicdanDelta": 10,
        "sicilDelta": -10,
        "capacityDelta": -3
      },
      "rejectConsequence": {
        "headline": "MURAT ÇETİN: ŞARTLI TAHLİYE HAKKI YANDI",
        "body": "Kurul ikinci incelemede tahliyeyi reddetti. Şartlı tahliye hakkı yandı. Kalan cezasını tamamlayacak; dosya yeniden kurula gelmeyecek. Murat’ın sağlık görüşmeleri ve kütüphane görevi sürüyor; aile ziyaretleri planlandı. Mağdur ailesinin itirazı dosyada kaldı. Danışmanlık kararı olumlu karşıladığını bildirdi.",
        "chronicle": "Şartlı tahliye hakkı yandı. Kalan cezasını tamamlayacak; dosya yeniden kurula gelmeyecek.",
        "vicdanDelta": -10,
        "sicilDelta": 10,
        "capacityDelta": 3
      }
    }
  },
  {
    "id": 10,
    "name": "Yavuz Kara",
    "age": 51,
    "crime": "Organize Suç Örgütü Adına Tasarlayarak Öldürme",
    "sentence": "18 Yıl Hapis (14 Yıl 3 Ay Tamamlandı)",
    "initialMonth": 3,
    "servedMonths": 171,
    "sentenceMonths": 216,
    "mainText": "\n          <p><strong>GÖRÜŞME YERİ:</strong> Bayrampaşa Özel Tip Cezaevi</p>\n          <p class=\"mt-1\"><strong>OLAY ÖZETİ:</strong> 1970'lerin çalkantılı yeraltı hesaplaşmaları döneminde çıkar amaçlı silahlı suç örgütü adına tetikçilik yapmış, kanlı bir kahvehane çatışmasında karşı şebeke mensubunu tasarlayarak öldürmüştür. Dosyada kayıtlı toplam ceza 18 yıldır; 14 yıl 3 ayı tamamlanmıştır.</p>\n          <p class=\"mt-2\"><strong>BARINMA VE BAKIM TEKLİFİ:</strong> Yeğeni Rize’deki evinde kalmasını, hastane kontrollerine ulaşımını ve geçimini sağlamayı teklif ediyor. Kovanlar yeğenine ait; Yavuz’un ağır taşıma yerine malzeme hazırlığına yardımcı olması planlanıyor. Adres ve bakım düzeni için yerel teyit bekleniyor.</p>\n          <p class=\"mt-2\"><strong>GÜVENLİK EKİ (02.04.1991):</strong> Önceki suç dosyasında adı geçen bir kişinin ziyaret talebi Yavuz tarafından reddedildi. Aynı kişinin köydeki adresi sorduğuna ilişkin ihbar alındı. İhbarın ayrıntıları ve adresi sorma amacı doğrulanmadı; Yavuz’un yeni bir talimat verdiğine ilişkin kayıt bulunmuyor.</p>\n        ",
    "defenseText": "\n          <div class=\"bg-stone-50/80 p-3 rounded border border-stone-300 font-typewriter text-stone-900\">\n            <div class=\"flex items-center justify-between border-b border-stone-300 pb-1.5 mb-2 text-xs font-mono text-stone-600\">\n              <span>HÜKÜMLÜ İFADE VE SAVUNMA ZAPTI</span>\n              <span>KOD: 1991/B-10</span>\n            </div>\n            <p class=\"italic text-stone-800 leading-relaxed text-[13px]\">\n              \"O adamı ben öldürdüm; örgütün içinde olmam kararımı ortadan kaldırmaz. Ziyaretime gelmek isteyen eski tanıdığımla görüşmedim. Yeğenimin yanında kalmak istiyorum. Kovanların ağır işlerini yapamam ama malzeme hazırlığına yardım edebilirim. Adresimi neden sorduklarını bilmiyorum; onlarla yeniden görüşmek istemiyorum.\"\n            </p>\n            <div class=\"mt-3 pt-2 border-t border-dashed border-stone-300 text-right text-[11px] font-mono text-stone-500\">\n              İfade Sahibi: <span class=\"italic text-stone-700 font-semibold\">Yavuz Kara (Mühür/İmza)</span>\n            </div>\n          </div>\n        ",
    "psychNote": "\n          <div class=\"bg-yellow-100 p-3 rounded border border-yellow-300 postit-shadow text-amber-950 font-typewriter\">\n            <div class=\"font-bold border-b border-amber-300 pb-1 mb-1\">GİZLİ GÖZLEM NOTU - DR. SEVİM</div>\n            <p>Görüşmelerde öldürme eyleminin sorumluluğunu kabul ediyor. Gelecek planını yeğeniyle yaşamak ve gündelik işlere katılmak üzerinden anlatıyor. Görüşmelerde tehdit ifadesi kaydedilmedi. Eski ilişkilerinden koptuğu beyanının dışarıda sürüp sürmeyeceği bu görüşmelerle kesinleştirilemez.</p>\n          </div>\n        ",
    "guardReport": "\n          <p><strong>CEZAEVİ İDARESİ RAPORU:</strong></p>\n          <p>Son üç yılda disiplin cezası bulunmuyor. Sağlık ekinde diz hareketlerinde kısıtlılık ve gözlükle kısmen düzelen görme sorunu kayıtlı; düzenli kontrol önerilmiş. Günlük işlerini yardımla sürdürüyor. Emniyet, adres sorgusuna ilişkin inceleme tamamlanmadan karar verilmesine itiraz ediyor; somut bir saldırı hazırlığı tespit edildiğine ilişkin belge sunulmadı.</p>\n        ",
    "letterText": "\n          <p><strong>YAVUZ'UN DİLEKÇESİ:</strong></p>\n          <p class=\"italic\">\"Yeğenimin yanında kalmak istiyorum. Eski tanıdığımla görüşmeyi reddettim; adresime ilişkin ihbarın araştırılmasını da istiyorum.\"</p>\n        ",
    "releaseConsequence": {
      "headline": "TAHLİYE EDİLEN ESKİ TETİKÇİ KÖYÜNE ULAŞTI",
      "body": "Yavuz yeğeninin yanına yerleşti ve planlanan sağlık kontrolüne katıldı. Kovan malzemelerinin hazırlanmasına yardım ediyor. İlk takip döneminde yeni olay bildirilmedi. Yerel teyitlerin tahliyeden sonra tamamlanması ve adres ihbarının açık kalması üzerine emniyet kuruldan gerekçe istedi.",
      "vicdanDelta": 15,
      "sicilDelta": -15,
      "capacityDelta": -3,
      "chronicle": "Yavuz yeğeninin yanına yerleşti; ilk takipte olay bildirilmedi, adres ihbarının incelemesi sürüyor."
    },
    "rejectConsequence": {
      "headline": "YAVUZ’UN DOSYASI ERTELENDİ: BAKIM VE ADRES TEYİDİ BEKLENİYOR",
      "body": "Dosya altı ay ertelendi. Yerel birimden barınma ve bakım teklifinin teyidi, emniyetten adres ihbarına ilişkin ek bilgi istendi. Yavuz kurumda sağlık kontrollerine devam ediyor. İdari değerlendirmede açık kayıtların takibinin sürdürüldüğü belirtildi.",
      "vicdanDelta": -15,
      "sicilDelta": 15,
      "capacityDelta": 3,
      "chronicle": "Yavuz’un dosyası ertelendi; bakım planı ve adres ihbarı araştırılırken sağlık takibi devam ediyor."
    },
    "review": {
      "status": "Yeğeninin evi, geçim desteği ve kontrollere ulaşım planı doğrulandı. Yeni disiplin olayı yok. Adresin sorulduğuna ilişkin ihbarın amacı hâlâ açıklanamadı.",
      "psychNote": "Görüşmelerde geleceğe ilişkin somut planlarını sürdürüyor. Eski tanıdığıyla görüşmeyi reddetme kararını yineledi. Kurum içindeki olumlu gözlemler, dışarıdaki ilişkiler için tek başına güvence oluşturmuyor.",
      "guardReport": "Son altı ayda disiplin cezası yok. Yeğeninin bakım ve ulaşım planı yazılı teyit edildi; ilk sağlık kontrolü için tarih alındı. Yeni bir suç bağlantısı veya talimat kaydı sunulmadı.",
      "letterText": "Yerel inceleme evin ve kovanların yeğenine ait olduğunu doğruladı. Emniyet adres ihbarının incelemesini sürdürüyor; yeni saldırı hazırlığına ilişkin bulgu bildirmedi. Yavuz’un korunma ihtiyacı ile kendisinin oluşturabileceği risk ayrı değerlendiriliyor.",
      "defenseText": "\"Yeğenimin evini ve gelirini kontrol etmişler, hastane için de tarih aldık. Eski tanıdığımla yine görüşmek istemiyorum. Yaptığımın sorumluluğu bende; bunu yaşımı veya sağlığımı söyleyerek değiştiremem. Adresimi neden sorduğunu bilmiyorum. Köye gidersem kontrollerime devam edip yeğenimin yanında çalışabildiğim kadar çalışacağım.\"",
      "releaseConsequence": {
        "headline": "YAVUZ DOĞRULANAN BAKIM PLANIYLA KÖYÜNE YERLEŞTİ",
        "body": "Yavuz yeğeninin evine yerleşti, kontrol randevusuna katıldı. İlk takip döneminde olay bildirilmedi. Adres ihbarının incelemesi sürdüğü için emniyet kararın gerekçesini yeniden istedi.",
        "chronicle": "Yavuz yeğeninin evine yerleşti, kontrol randevusuna katıldı. İlk takip döneminde olay bildirilmedi. Adres ihbarının incelemesi sürdüğü için emniyet kararın gerekçesini yeniden istedi.",
        "vicdanDelta": 12,
        "sicilDelta": -10,
        "capacityDelta": -3
      },
      "rejectConsequence": {
        "headline": "YAVUZ KARA: ŞARTLI TAHLİYE HAKKI YANDI",
        "body": "Kurul ikinci incelemede tahliyeyi reddetti. Şartlı tahliye hakkı yandı. Kalan cezasını tamamlayacak; dosya yeniden kurula gelmeyecek. Yavuz kurumda sağlık kontrollerine devam ediyor; yeğeni ziyaretlerini sürdürüyor. Doğrulanan bakım planı dosyada kaldı. Emniyet adres ihbarını araştırmaya devam ediyor; yeni suç veya saldırı hazırlığı tespit edildiği bildirilmedi.",
        "chronicle": "Şartlı tahliye hakkı yandı. Kalan cezasını tamamlayacak; dosya yeniden kurula gelmeyecek.",
        "vicdanDelta": -10,
        "sicilDelta": 10,
        "capacityDelta": 3
      }
    }
  },
  {
    "id": 11,
    "name": "Nermin Acar",
    "age": 41,
    "crime": "Kasten Yangın Çıkarma",
    "sentence": "6 Yıl Hapis (3 Yıl 8 Ay Tamamlandı)",
    "initialMonth": 4,
    "servedMonths": 44,
    "sentenceMonths": 72,
    "mainText": "<p><strong>GÖRÜŞME YERİ:</strong> Bakırköy Kadın Cezaevi</p><p class=\"mt-2\"><strong>OLAY ÖZETİ:</strong> 1987 yılında, ödenmeyen ücretler nedeniyle tartıştığı işvereninin tekstil deposunu gece ateşe verdi. Gece bekçisi yangında yaralandı. Nermin depoda kimse olmadığını düşündüğünü söylüyor; yangını çıkardığını kabul ediyor.</p><p class=\"mt-2\"><strong>OLAY TUTANAĞI (12.04.1991):</strong> Nermin, koruyucusu kırık makine nedeniyle atölyede çalışmayı durdurdu. Tartışmada görevliye hakaret ettiği iki tanıkça kaydedildi. Ertesi gün bakım yapıldığı, makine arıza kaydında doğrulanıyor.</p><p class=\"mt-2\"><strong>YAŞAM PLANI:</strong> Kız kardeşinin adresi doğrulandı. Eski işvereniyle bağlantısı olmayan dikimevinden sözlü iş teklifi var; yazılı teyit bekleniyor.</p>",
    "defenseText": "<p><strong>HÜKÜMLÜ İFADESİ:</strong></p><p>“Ücretimi alamamam yaptığımı haklı çıkarmaz. Depoyu ben yaktım. Bekçinin içeride olduğunu bilmiyordum ama yaralanmasına neden oldum. Atölyede makineyi durdurmak istedim; görevliye söylediğim sözleri söylememeliydim.”</p>",
    "psychNote": "<p><strong>DR. SEVİM — GÖRÜŞME NOTU:</strong> Yangını çıkardığını ve bekçiye verdiği zararı kabul ediyor. Eski işvereni hakkında konuşurken sesini yükseltiyor; görüşmelerde tehdit kaydedilmedi. Atölyedeki tartışmayı anlatırken güvenlik itirazı ile kullandığı sözleri ayırabiliyor. Kurum dışındaki çatışmalara nasıl yanıt vereceği henüz gözlenemez.</p>",
    "guardReport": "<p><strong>CEZAEVİ İDARESİ RAPORU:</strong> “Otoriteyle sorunlu, diğer hükümlüleri yönlendiriyor.” Bu değerlendirmeye dayanak olarak 12 Nisan’daki iş durdurma ve hakaret tutanağı gösteriliyor. Önceki 18 ayda disiplin cezası yok; atölye devamı düzenli. Nermin tutanağa yazılı itiraz etmiş, inceleme henüz sonuçlanmamış.</p>",
    "letterText": "<p><strong>KIZ KARDEŞİNİN YAZISI:</strong> Evimde kalabilir. Dikimeviyle görüştüm ancak işe başlayacağı tarih henüz belli değil.</p>",
    "releaseConsequence": {
      "headline": "NERMİN DİKİMEVİNDE İŞE BAŞLADI",
      "body": "Nermin kız kardeşinin yanına yerleşti; dikimevinin teklifi kesinleşti ve işe başladı. Ücret alacağına ilişkin başvurusunu yazılı yollarla takip ediyor. İlk izlem döneminde yeni şiddet olayı bildirilmedi. Kurum, olumsuz rapora rağmen verilen tahliye kararının gerekçesini istedi.",
      "vicdanDelta": 10,
      "sicilDelta": -10,
      "capacityDelta": -3,
      "chronicle": "Nermin işe başladı; alacağını yazılı yollarla takip ediyor, kurum karar için gerekçe istedi."
    },
    "rejectConsequence": {
      "headline": "NERMİN’İN DOSYASI ERTELENDİ: ATÖLYE TUTANAĞI İNCELENİYOR",
      "body": "Dosya altı ay ertelendi. Dikimevi boş pozisyonu başka biriyle doldurdu. Nermin atölyeye devam ediyor; arıza kaydı ve hakaret tutanağı ayrı ayrı inceleniyor. İdari değerlendirmede ek inceleme beklenmesi olumlu karşılandı.",
      "vicdanDelta": -10,
      "sicilDelta": 10,
      "capacityDelta": 3,
      "chronicle": "Nermin’in dosyası ertelendi; iş teklifi kayboldu, atölye olayı incelemesi sürüyor."
    },
    "review": {
      "status": "Makinenin koruyucusunun kırık olduğu incelemede doğrulandı. Hakaret kaydı korundu; Nermin kullandığı sözler için yazılı özür sundu. İlk iş teklifi artık geçerli değil.",
      "psychNote": "Yangının sorumluluğunu kabul etmeyi sürdürüyor. Güvenlik itirazını geri çekmedi, ancak görevliye hakaretini savunmuyor. Son görüşmelerde yeni tehdit kaydedilmedi.",
      "guardReport": "Son altı ayda yeni disiplin olayı yok. Atölye çalışması sürüyor. Yaralanan bekçiye küçük bir ödeme yapıldığı makbuzla doğrulandı; kalan tazminat ödenmedi.",
      "letterText": "Bekçi ödemeyi aldığını doğruladı; tahliyeyi desteklediğine ilişkin beyan vermedi. Kız kardeşinin barınma desteği sürüyor; evde parça başı dikiş işi için teklif var, düzenli gelir güvencesi yok.",
      "defenseText": "\"Makinenin bozuk olduğu kayda geçti. Görevliye hakaret etmem doğru değildi, özür yazdım; güvenlik itirazımdan vazgeçmedim. Bekçiye az da olsa ödeme yapabildim. İlk iş fırsatı kalmadı ama kardeşimle parça başı iş alabiliriz. Gelirin düzenli olacağına söz veremem.\"",
      "releaseConsequence": {
        "headline": "NERMİN GEÇİCİ DİKİŞ İŞLERİYLE ÇALIŞMAYA BAŞLADI",
        "body": "Nermin kız kardeşinin yanında parça başı iş almaya başladı. Bekçiye iki küçük ödeme daha yaptı; ödemeler düzenli değil. İlk takipte yeni şiddet olayı bildirilmedi; kurum olumsuz değerlendirmesinin gerekçelerini yineledi.",
        "chronicle": "Nermin kız kardeşinin yanında parça başı iş almaya başladı. Bekçiye iki küçük ödeme daha yaptı; ödemeler düzenli değil. İlk takipte yeni şiddet olayı bildirilmedi; kurum olumsuz değerlendirmesinin gerekçelerini yineledi.",
        "vicdanDelta": 10,
        "sicilDelta": -10,
        "capacityDelta": -3
      },
      "rejectConsequence": {
        "headline": "NERMİN ACAR: ŞARTLI TAHLİYE HAKKI YANDI",
        "body": "Kurul ikinci incelemede tahliyeyi reddetti. Şartlı tahliye hakkı yandı. Kalan cezasını tamamlayacak; dosya yeniden kurula gelmeyecek. Nermin’in atölye çalışması ve bekçiye ödeme çabası devam ediyor. Makine arızası ile hakaret kaydı arşivde ayrı bulgular olarak korunuyor; aile ziyaretleri sürüyor.",
        "chronicle": "Şartlı tahliye hakkı yandı. Kalan cezasını tamamlayacak; dosya yeniden kurula gelmeyecek.",
        "vicdanDelta": -10,
        "sicilDelta": 10,
        "capacityDelta": 3
      }
    }
  },
  {
    "id": 12,
    "name": "İhsan Keskin",
    "age": 36,
    "crime": "Sahte Belge Düzenleme ve Dolandırıcılık",
    "sentence": "5 Yıl Hapis (2 Yıl 8 Ay Tamamlandı)",
    "initialMonth": 4,
    "servedMonths": 32,
    "sentenceMonths": 60,
    "mainText": "<p><strong>GÖRÜŞME YERİ:</strong> Metris Cezaevi</p><p class=\"mt-2\"><strong>OLAY ÖZETİ:</strong> 1988 yılında sahte çalışma belgeleri düzenleyip iş bulma vaadiyle başvuranlardan para aldı. Ücret ödeyen on iki kişiye iş sağlanmadı. Belgeleri hazırladığını kabul ediyor; paranın bir bölümünü birlikte çalıştığı kişiye verdiğini söylüyor.</p><p class=\"mt-2\"><strong>GÜVENLİK TUTANAĞI (08.05.1991):</strong> İhsan’ın verdiği yer bilgisiyle ortak depoda iki kesici alet bulundu. Bir hükümlüyü sorumlu tuttu; ancak aletleri o kişinin koyduğunu gördüğünü ilk ifadesinde söylemişken, ek ifadesinde bunu başkasından duyduğunu belirtti. Aletlerin varlığı doğrulandı; kime ait oldukları belirlenmedi.</p><p class=\"mt-2\"><strong>KORUMA VE YAŞAM PLANI:</strong> Bilgi verdiği koğuşta öğrenildikten sonra tehdit dilekçesi sundu. Ayrı koğuşa geçiş talebi değerlendiriliyor. Ablasının adresi doğrulandı; önerdiği işin ayrıntıları henüz yazılı değil.</p>",
    "defenseText": "<p><strong>HÜKÜMLÜ İFADESİ:</strong></p><p>“Sahte belgeleri ben hazırladım. Başvuranlara iş bulamadığımızı biliyordum, yine de para aldım. Depodaki aletlerin yerini söyledim. Kimin koyduğunu gördüm demem doğru değildi; duyduğumu söyledim. Şimdi koğuşta adım çıktı. Ablamın yanında kalmak ve çalışmak istiyorum.”</p>",
    "psychNote": "<p><strong>DR. SEVİM — GÖRÜŞME NOTU:</strong> Görüşmelere düzenli katılıyor. Tehdit bildiriminden sonra uyku güçlüğü anlatıyor. İfadesindeki değişikliği kabul ediyor fakat ilk anlatımını neden kesinleştirdiğine ilişkin açıklaması değişken. Güvenlik ihtiyacı ile tanıklığının doğruluğu ayrı konulardır.</p>",
    "guardReport": "<p><strong>CEZAEVİ İDARESİ RAPORU:</strong> 32 aydır kurumda; son bir yılda disiplin cezası yok. Yazı işlerine yardımcı oluyor. Birim sorumlusu, aletlerin bulunmasına katkısı nedeniyle tahliyesini destekliyor. Ek tutanak, suçlanan hükümlünün atölye kaydı nedeniyle belirtilen saatte depoya erişiminin mümkün olmadığını bildiriyor; araştırma sürüyor.</p>",
    "letterText": "<p><strong>ABLASININ DİLEKÇESİ:</strong> Evimde kalabilir. Yakındaki tamir atölyesiyle konuştum; kabul yazısını henüz alamadım.</p>",
    "releaseConsequence": {
      "headline": "İHSAN TAHLİYE EDİLDİ; DEPO SORUŞTURMASI SÜRÜYOR",
      "body": "İhsan ablasının yanına yerleşti. Sunduğu bilginin ardından bulunan aletler muhafaza edildi; suçlanan diğer hükümlü hakkında aidiyet kanıtlanamadı. Birim sorumlusu tahliyeyi olumlu karşıladı. Çelişkili tanıklığın karardaki ağırlığı için kuruldan açıklama istendi.",
      "vicdanDelta": -10,
      "sicilDelta": 10,
      "capacityDelta": -3,
      "chronicle": "İhsan ablasının yanına yerleşti; aletlerin aidiyeti belirsiz, çelişkili tanıklığa ilişkin inceleme sürüyor."
    },
    "rejectConsequence": {
      "headline": "İHSAN’IN DOSYASI ERTELENDİ; KORUMA TALEBİ İŞLEME ALINDI",
      "body": "Dosya altı ay ertelendi. Tehdit bildirimi ayrıca değerlendirilerek İhsan başka koğuşa alındı. Depodaki aletlerin sahibine ilişkin inceleme sürüyor. Birim sorumlusu olumlu önerisinin kabul edilmemesine itiraz etti; kurul ek tutanakların tamamlanmasını istedi.",
      "vicdanDelta": 10,
      "sicilDelta": -10,
      "capacityDelta": 3,
      "chronicle": "İhsan’ın dosyası ertelendi; koruma tedbiri alındı, depo olayının incelemesi sürüyor."
    },
    "review": {
      "status": "Koğuş değişikliğinden sonra yeni tehdit olayı kaydedilmedi. Suçlanan diğer hükümlüye ilişkin iddia doğrulanmadı; aletlerin sahibi belirlenemedi. Ablasının adresi ve tamir atölyesindeki yardımcı iş teklifi teyit edildi.",
      "psychNote": "İlk ifadesinde görmediği bir olayı görmüş gibi anlattığını açıkça kabul ediyor. Bunun sonuçlarını sorulduğunda anlatabiliyor. Görüşmelerde uyku yakınmaları azaldı; dışarıdaki davranışı henüz sınanmadı.",
      "guardReport": "Son altı ayda disiplin cezası yok. İş teklifinde para tahsilatı veya belge düzenleme görevi bulunmuyor. İhsan ek ifadesini yazılı olarak düzeltmiş; bu düzeltme diğer hükümlünün dosyasına da eklenmiş.",
      "letterText": "Soruşturma yazısı aletlerin bulunduğunu, ancak İhsan’ın kişiye yönelik isnadını destekleyen yeterli bulgu olmadığını belirtiyor. Ablası barınma desteğini yeniledi. Önceki güvenlik katkısı yeni raporda tek başına tahliye gerekçesi olarak sunulmuyor.",
      "defenseText": "\"Görmediğim şeyi görmüş gibi anlatmam yanlıştı. Düzeltme yazısını verdim; diğer kişinin dosyasına da girdiğini söylediler. Koğuş değişince tehdit kesildi. Ablamın yanındaki atölyenin yazısı geldi. Orada para veya belge işine bakmayacağım; yardımcı olarak çalışacağım.\"",
      "releaseConsequence": {
        "headline": "İHSAN DOĞRULANAN İŞ TEKLİFİYLE TAHLİYE EDİLDİ",
        "body": "İhsan atölyede yardımcı olarak işe başladı. İlk takipte yeni dolandırıcılık olayı bildirilmedi. Düzeltilen ifadesi depo soruşturmasında korundu; aletlerin aidiyeti hâlâ belirlenemedi.",
        "chronicle": "İhsan atölyede yardımcı olarak işe başladı. İlk takipte yeni dolandırıcılık olayı bildirilmedi. Düzeltilen ifadesi depo soruşturmasında korundu; aletlerin aidiyeti hâlâ belirlenemedi.",
        "vicdanDelta": 10,
        "sicilDelta": 0,
        "capacityDelta": -3
      },
      "rejectConsequence": {
        "headline": "İHSAN KESKİN: ŞARTLI TAHLİYE HAKKI YANDI",
        "body": "Kurul ikinci incelemede tahliyeyi reddetti. Şartlı tahliye hakkı yandı. Kalan cezasını tamamlayacak; dosya yeniden kurula gelmeyecek. İhsan yeni koğuşunda çalışmayı sürdürüyor; koruma ihtiyacı izleniyor. Düzeltilmiş ifadesi dosyada kalıyor. Diğer hükümlüye ilişkin doğrulanmayan iddia kesin bulguya dönüşmüyor.",
        "chronicle": "Şartlı tahliye hakkı yandı. Kalan cezasını tamamlayacak; dosya yeniden kurula gelmeyecek.",
        "vicdanDelta": -10,
        "sicilDelta": 0,
        "capacityDelta": 3
      }
    }
  },
  {
    "id": 13,
    "name": "Orhan Tekin",
    "age": 32,
    "crime": "İşyerinden Hırsızlık",
    "sentence": "5 Yıl Hapis (3 Yıl Tamamlandı)",
    "initialMonth": 5,
    "servedMonths": 36,
    "sentenceMonths": 60,
    "mainText": "<p><strong>GÖRÜŞME YERİ:</strong> Sağmalcılar Cezaevi</p><p class=\"mt-2\"><strong>OLAY ÖZETİ:</strong> 1988 yılında tadilat için girdiği üç dükkânın anahtarlarının kopyasını aldı. İşyerleri kapalıyken girerek para ve küçük elektronik eşyalar çaldı. İki olayda eşyalar geri alındı; üçüncü dükkânın zararı henüz tamamen karşılanmadı. Orhan anahtarları kopyaladığını ve hırsızlıkları kabul ediyor.</p><p class=\"mt-2\"><strong>İŞ TEKLİFİ:</strong> Eski ustası çilingir dükkânında yeniden çalışmasını teklif etti. İşyerinin faaliyeti doğrulandı; işin müşterilerin anahtarlarını teslim alma ve evlere servis görevlerini içerip içermediği belirtilmedi. Orhan yalnızca tezgâh başında çalışacağını söylüyor.</p><p class=\"mt-2\"><strong>MAĞDURUN YAZISI:</strong> “Eşyalarımın bir kısmını geri aldım. Kilitleri değiştirdim; yine de dükkânı kapatırken tedirgin oluyorum. Ödemelerin sürmesini istiyorum.” Tahliyeye ilişkin kesin bir görüş bildirilmedi. Ablasının yanında kalacağı adres doğrulandı.</p>",
    "defenseText": "<p><strong>HÜKÜMLÜ İFADESİ:</strong></p><p>“Anahtarları bana iş için vermişlerdi, ben kopyaladım. Bir kere yapıp bırakmadım; üç dükkâna girdim. Ustamın yanında yalnızca tezgâhta çalışacağım. Servise çıkmam diyorum ama bunu ustayla henüz yazılı konuşmadık. Bildiğim iş bu; başka iş bulursam onu da yaparım.”</p>",
    "psychNote": "<p><strong>DR. SEVİM — GÖRÜŞME NOTU:</strong> Hırsızlıkların planlı olduğunu kabul ediyor; olayları geçim sıkıntısıyla açıklamakla birlikte bunun haklı gerekçe olmadığını söylüyor. Görüşmelerde iş planını ayrıntılandırabiliyor. Müşteri anahtarlarına yeniden erişmesi sorulduğunda işvereninin denetleyeceğini belirtiyor; denetimin nasıl yapılacağı henüz tanımlanmadı.</p>",
    "guardReport": "<p><strong>CEZAEVİ İDARESİ RAPORU:</strong> 36 aydır kurumda. Son iki yılda disiplin cezası yok. Bakım atölyesindeki görevine düzenli katılıyor; son altı ayın alet teslim çizelgesinde eksik bulunmuyor. Atölye kazancından yaptığı kısmi ödemelerin makbuzları dosyada. Kurumdaki alet denetiminin dışarıdaki işyerinde nasıl sağlanacağı bilinmiyor.</p>",
    "letterText": "<p><strong>USTASININ MEKTUBU:</strong> Orhan mesleğini bilir, yeniden çalışabilir. Görevlerini işe başladığında konuşacağız.</p>",
    "releaseConsequence": {
      "headline": "ORHAN ESKİ İŞİNE DÖNDÜ: GÖREV SINIRLARI BELİRSİZ",
      "body": "Orhan ustasının dükkânında işe başladı ve mağdura küçük bir ödeme yaptı. İlk ay müşteri adreslerine servis için de gönderildiği işveren görüşmesinde öğrenildi; dosyadaki tezgâh başı planı uygulanmadı. Yeni bir hırsızlık tespiti bulunmuyor. İş planının değerlendirilmesine ilişkin kuruldan açıklama istendi.",
      "vicdanDelta": 10,
      "sicilDelta": -10,
      "capacityDelta": -3,
      "chronicle": "Orhan çalışmaya ve ödemeye başladı; görevleri beyan edilen planı aştı, yeni hırsızlık kaydı yok."
    },
    "rejectConsequence": {
      "headline": "ORHAN’IN DOSYASI ERTELENDİ; YAZILI İŞ PLANI İSTENDİ",
      "body": "Dosya altı ay ertelendi. İşverenden görev tanımı ve denetim planı istendi. Orhan atölye çalışmalarına ve küçük ödemelere devam etti. İşveren mevcut pozisyonu başka biriyle doldurduğunu bildirdi; yeni iş imkânları araştırılıyor.",
      "vicdanDelta": -10,
      "sicilDelta": 10,
      "capacityDelta": 3,
      "chronicle": "Orhan’ın dosyası ertelendi; ilk iş fırsatı kapandı, atölye çalışması ve ödemeler sürüyor."
    },
    "review": {
      "status": "İlk iş teklifi kapanınca bir metal doğrama atölyesinden yardımcı iş teklifi aldı. İşyerinin faaliyeti ve görev tanımı doğrulandı; müşteri anahtarı veya adres servisi görevi bulunmuyor. Ücret daha düşük ve ilk üç ay deneme süresi var.",
      "psychNote": "Eski işine dönmenin yaratacağı erişim sorununu görüşmelerde açıklayabiliyor. Daha düşük ücretli işi kabul edeceğini belirtiyor. Kurum içindeki düzenli davranışın denetimi daha az olan ortamda sürüp sürmeyeceği henüz gözlenmedi.",
      "guardReport": "Son altı ayda disiplin cezası yok; alet teslim çizelgesinde eksik bulunmuyor. Yeni iş teklifi yazılı. Mağdura ödemeler sürmüş fakat zarar henüz tamamen karşılanmamış.",
      "letterText": "Ablasının adres teyidi yenilendi. Yeni işveren sigortalı çalışma ve ücret teklifini yazılı bildirdi; deneme süresi sonrası devam garantisi yok. Mağdur yapılan ödemeleri doğruladı, kalan tutar için takvim istedi.",
      "defenseText": "\"Ustamın yanındaki yer dolmuş. Yeni atölyenin ücreti daha az ama kabul ediyorum. Orada anahtar veya müşteri eviyle işim olmayacak. Ablamda kalacağım; borcu bir anda kapatamam. Son altı ayın ödeme makbuzları dosyada. İşin devamının garanti olmadığını biliyorum.\"",
      "releaseConsequence": {
        "headline": "ORHAN METAL ATÖLYESİNDE ÇALIŞMAYA BAŞLADI",
        "body": "Orhan ablasının yanına yerleşti ve metal atölyesinde işe başladı. İlk ayın devamı doğrulandı; yeni hırsızlık kaydı bulunmuyor. Düşük gelir nedeniyle ödeme taksitleri küçük kaldı. Deneme süresi henüz tamamlanmadı.",
        "chronicle": "Orhan ablasının yanına yerleşti ve metal atölyesinde işe başladı. İlk ayın devamı doğrulandı; yeni hırsızlık kaydı bulunmuyor. Düşük gelir nedeniyle ödeme taksitleri küçük kaldı. Deneme süresi henüz tamamlanmadı.",
        "vicdanDelta": 10,
        "sicilDelta": 0,
        "capacityDelta": -3
      },
      "rejectConsequence": {
        "headline": "ORHAN TEKİN: ŞARTLI TAHLİYE HAKKI YANDI",
        "body": "Kurul ikinci incelemede tahliyeyi reddetti. Şartlı tahliye hakkı yandı. Kalan cezasını tamamlayacak; dosya yeniden kurula gelmeyecek. Orhan atölyede çalışmayı ve mağdura ödeme yapmayı sürdürüyor. Doğrulanan yeni iş teklifi dosyada kalıyor; dışarıdaki işveren pozisyonu açık tutamayacağını bildirdi.",
        "chronicle": "Şartlı tahliye hakkı yandı. Kalan cezasını tamamlayacak; dosya yeniden kurula gelmeyecek.",
        "vicdanDelta": -10,
        "sicilDelta": 0,
        "capacityDelta": 3
      }
    }
  },
  {
    "id": 14,
    "name": "Selim Duran",
    "age": 36,
    "crime": "Kasten Öldürme",
    "sentence": "15 Yıl Hapis (9 Yıl 2 Ay Tamamlandı)",
    "initialMonth": 5,
    "servedMonths": 110,
    "sentenceMonths": 180,
    "mainText": "<p><strong>GÖRÜŞME YERİ:</strong> Bursa Kapalı Cezaevi</p><p class=\"mt-2\"><strong>OLAY ÖZETİ:</strong> 1982 yılında, ailesinin istediği evliliği reddederek başka bir şehirde yaşamaya başlayan 22 yaşındaki kız kardeşi Aylin Duran’ı öldürdü. Aylin bir terzi atölyesinde çalışıyordu. Selim ve bazı yakınları olay sırasında “aile namusu” ifadesini kullandı. Selim öldürme eylemini kabul ediyor; bu gerekçe dosyada failin beyanı olarak kayıtlıdır.</p><p class=\"mt-2\"><strong>AİLE MEKTUBU:</strong> Amcası “Aile içinde gerekeni yaptı, artık evine dönsün” diye yazdı. Selim son görüşmesinde bu ifadeyi kabul etmediğini söyledi; mektuba yazılı yanıt vermedi.</p><p class=\"mt-2\"><strong>YAŞAM VE GÜVENLİK PLANI:</strong> Aileden bağımsız bir işveren iş teklif etti; kabul yazısı var, barınma henüz ayarlanmadı. Aile evi hazır seçenek olarak sunuluyor. Hayattaki kız kardeşi görüşmek istemediğini ve adresinin paylaşılmamasını istediğini bildirdi; bu talep ilgili birime iletildi.</p>",
    "defenseText": "<p><strong>HÜKÜMLÜ İFADESİ:</strong></p><p>“Aylin’i ben öldürdüm. O zaman ailemin sözlerini gerekçe yaptım. Onun nasıl yaşayacağına karar vermek benim hakkım değildi. Amcamın yazdığını şimdi kabul etmiyorum. Ama dışarıda aile evine dönmeden nerede kalacağım belli değil. Kız kardeşim benimle görüşmek istemiyorsa buna uyacağım.”</p>",
    "psychNote": "<p><strong>DR. SEVİM — GÖRÜŞME NOTU:</strong> Son altı görüşmede öldürme eylemini gerekçelendirmeden anlatmaya başladı; önceki kayıtlarda aile baskısını öne çıkarıyordu. Kız kardeşinin kendisiyle görüşmeme hakkını kabul ettiğini söylüyor. Aileden gelecek baskıya nasıl yanıt vereceğine ilişkin planı henüz somut değil. Görüşmelerdeki değişim, dışarıdaki davranışının garantisi sayılmıyor.</p>",
    "guardReport": "<p><strong>CEZAEVİ İDARESİ RAPORU:</strong> Son üç yılda disiplin cezası yok. Marangoz atölyesine düzenli devam ediyor. Amcasının son ziyaret talebini kabul etti; tutanakta konuşmanın içeriği yer almıyor. İş teklifi doğrulandı, fakat işyerinin yatacak yer sağlayamadığı bildirildi. Hayattaki kız kardeşinin adresi dosyanın açık eklerine alınmadı.</p>",
    "letterText": "<p><strong>KIZ KARDEŞİNİN BAŞVURUSU:</strong> Selim’le görüşmek istemiyorum. Nerede yaşadığımın aileyle paylaşılmamasını ve talebimin karar ne olursa olsun korunmasını istiyorum.</p>",
    "releaseConsequence": {
      "headline": "SELİM AİLE EVİNE DÖNDÜ; BAĞIMSIZ BARINMA SAĞLANAMADI",
      "body": "Selim işine başladı ancak ayrı barınma bulunamadığından aile evine yerleşti. İlk takipte yeni şiddet olayı bildirilmedi. Aile baskısına ilişkin kaygı ve barınma planındaki eksiklik nedeniyle ek değerlendirme istendi. Kız kardeşinin görüşmeme ve adres gizliliği talebi korunuyor.",
      "vicdanDelta": -10,
      "sicilDelta": -10,
      "capacityDelta": -3,
      "chronicle": "Selim işe başladı fakat aile evine döndü; bağımsız barınma planı tamamlanmadı, güvenlik talepleri sürüyor."
    },
    "rejectConsequence": {
      "headline": "SELİM’İN DOSYASI ERTELENDİ; BAĞIMSIZ YAŞAM PLANI İSTENDİ",
      "body": "Kurul dosyayı altı ay erteledi. İşveren ve sosyal hizmet birimiyle bağımsız barınma için yazışma başlatıldı. Selim görüşmelerine devam ediyor. Amcası karara itiraz etti; kız kardeşinin güvenlik talepleri tahliye değerlendirmesinden ayrı izleniyor.",
      "vicdanDelta": 10,
      "sicilDelta": 10,
      "capacityDelta": 3,
      "chronicle": "Selim’in dosyası ertelendi; bağımsız barınma hazırlığı ve görüşmeler sürüyor."
    },
    "review": {
      "status": "İş teklifini sürdüren işveren, aile evinden ayrı bir oda için kira desteği sundu. Adres ve gelir teyit edildi. Selim amcasına aile gerekçesini reddeden bir mektup yazdı; sonraki ziyaret talebini kabul etmedi.",
      "psychNote": "Görüşmelerde Aylin’in kendi yaşamını seçme hakkını tanıyan beyanları sürüyor. Ailesinin olası baskışında destek isteyeceği kişileri belirtebiliyor. Bu plan henüz kurum dışında sınanmadı; uzun süredir kurallara uyması suçun ağırlığını ortadan kaldırmıyor.",
      "guardReport": "Son altı ayda disiplin cezası yok. Ayrı oda ve iş teklifinin yazılı teyitleri dosyada. Amcasına gönderilen yanıt ile reddedilen ziyaret talebi kayda alındı. Aile tarafından yeni bir doğrudan tehdit bildirimi alınmadı.",
      "letterText": "Hayattaki kız kardeşi görüşmeme talebini yeniledi; affettiğine veya tahliyeyi desteklediğine ilişkin beyan vermedi. Adresi paylaşılmıyor. Bağımsız barınma ve destek görüşmesi planı hazır; aileyle temasın tümüyle kesileceği garanti edilemiyor.",
      "defenseText": "\"Amcama, yaptığımın ailenin hakkını korumak olmadığını yazdım. Son ziyaretini kabul etmedim. Ayrı kalacağım yerin teyidi geldi. Aylin’e yaptığımı geri alamam; diğer kız kardeşimin beni affetmesini veya görmesini isteyemem. Ailem baskı yaparsa işyerindeki sorumluya ve destek birimine başvuracağım.\"",
      "releaseConsequence": {
        "headline": "SELİM AYRI ADRESE YERLEŞTİ; TAKİP GÖRÜŞMELERİ SÜRÜYOR",
        "body": "Selim doğrulanan odaya yerleşti ve çalışmaya başladı. İlk görüşmelere katıldı; kız kardeşiyle temas kurduğu bildirilmedi. Ailenin etkisinden uzak kalıp kalmayacağı takip ediliyor. Kız kardeşinin güvenlik talepleri korunuyor.",
        "chronicle": "Selim doğrulanan odaya yerleşti ve çalışmaya başladı. İlk görüşmelere katıldı; kız kardeşiyle temas kurduğu bildirilmedi. Ailenin etkisinden uzak kalıp kalmayacağı takip ediliyor. Kız kardeşinin güvenlik talepleri korunuyor.",
        "vicdanDelta": 10,
        "sicilDelta": -10,
        "capacityDelta": -3
      },
      "rejectConsequence": {
        "headline": "SELİM DURAN: ŞARTLI TAHLİYE HAKKI YANDI",
        "body": "Kurul ikinci incelemede tahliyeyi reddetti. Şartlı tahliye hakkı yandı. Kalan cezasını tamamlayacak; dosya yeniden kurula gelmeyecek. Selim atölye çalışmasına ve görüşmelere devam ediyor. Bağımsız yaşam hazırlıkları arşivde kalıyor. Kız kardeşinin görüşmeme ve adres gizliliği talepleri bu karardan bağımsız korunuyor.",
        "chronicle": "Şartlı tahliye hakkı yandı. Kalan cezasını tamamlayacak; dosya yeniden kurula gelmeyecek.",
        "vicdanDelta": -10,
        "sicilDelta": 10,
        "capacityDelta": 3
      }
    }
  },
  {
    "id": 15,
    "name": "Vedat Sarp",
    "age": 48,
    "crime": "Banka Kaynaklarını Usulsüz Aktarma ve Sahte Belge Düzenleme",
    "sentence": "8 Yıl Hapis (5 Yıl Tamamlandı)",
    "initialMonth": 5,
    "servedMonths": 60,
    "sentenceMonths": 96,
    "mainText": "<p><strong>GÖRÜŞME YERİ:</strong> Ankara Merkez Kapalı Cezaevi</p><p class=\"mt-2\"><strong>OLAY ÖZETİ:</strong> Kurgusal Birlik Ticaret Bankası’nın kredi yöneticisiyken, ortaklarının denetimindeki şirketlere gerçeğe aykırı teminat belgeleriyle kredi açtı. Kredi tutarları başka hesaplara aktarıldı; bankanın zararının büyük bölümü karşılanmadı. 1986’da tutuklandı. Vedat imzaladığı belgeleri kabul ediyor; yönetim kurulunun baskısını da gerekçe gösteriyor.</p><p class=\"mt-2\"><strong>MALİ İNCELEME EKİ (04.06.1991):</strong> Vedat’ın verdiği hesap listesinde üç kayıt doğrulandı ve bir taşınmaz satışından zararın yüzde 8’i karşılandı. Diğer kayıtların bir kısmı eski. Yeni önerisi, bağlantılı şirketlerden birinin varlık satışını bizzat yönetmek; satışa konu varlığın değeri bağımsız olarak teyit edilmedi.</p><p class=\"mt-2\"><strong>ALACAKLI TEMSİLCİSİNİN YAZISI:</strong> Gerçekleşen tahsilat doğrulanıyor. Temsilci, yeni satışta Vedat’a imza yetkisi verilmesini istemiyor. Tahliye ile varlıkları yönetme yetkisinin ayrı konular olduğunu belirtiyor.</p>",
    "defenseText": "<p><strong>HÜKÜMLÜ İFADESİ:</strong></p><p>“Teminatların yazıldığı değerde olmadığını biliyordum, yine de imzaladım. Üst yönetimin baskısı vardı ama imza benim. Verdiğim bilgilerle para geri geldi. Kalan varlıkları en iyi ben biliyorum. Dışarı çıkarsam satışı hızlandırırım; yetki verilmezse alıcılarla nasıl görüşeceğim?”</p>",
    "psychNote": "<p><strong>DR. SEVİM — GÖRÜŞME NOTU:</strong> Belgelerdeki sorumluluğunu kabul ediyor, ancak görüşmeleri sıklıkla geri kazanılabilecek para miktarına yönlendiriyor. Kendisine yetki verilmeden işbirliği yapması sorulduğunda teklifini sınırlıyor. Kurumda kurallara uyumu düzenli; bu gözlem mali güvenilirliği tek başına doğrulamaz.</p>",
    "guardReport": "<p><strong>CEZAEVİ İDARESİ RAPORU:</strong> 60 aydır kurumda; son iki yılda disiplin cezası yok. İnceleme birimine belgeler göndermiş, görüşmelere katılmış. Eşinin adresi doğrulandı. Eski şirket yöneticileriyle ziyaretleri sürüyor; yeni bir usulsüz işlem talimatına ilişkin tutanak bulunmuyor. Varlık satışı önerisi henüz bağımsız değerleme içermiyor.</p>",
    "letterText": "<p><strong>MALİ İNCELEME BİRİMİ:</strong> Belge sunması tahliyeye bağlı değildir. Doğrulanmış tahsilat ile henüz gerçekleşmemiş satış vaadi ayrı kayıtlardır.</p>",
    "releaseConsequence": {
      "headline": "VEDAT TAHLİYE EDİLDİ; VARLIK SATIŞI BEKLENEN TUTARA ULAŞMADI",
      "body": "Vedat eşinin yanına yerleşti. İlgili şirket özel yetki belgesiyle satış görüşmelerine katılmasını sağladı; bu yetki kurul tarafından verilmedi. Bağımsız değerleme önerdiği bedelin altında kaldı. Yeni bir ödeme yapıldı ama vaat edilen tahsilat gerçekleşmedi. Kuruldan, belirsiz satış vaadinin kararındaki ağırlığını açıklaması istendi.",
      "vicdanDelta": -10,
      "sicilDelta": -10,
      "capacityDelta": -3,
      "chronicle": "Vedat tahliye edildi; satış beklentisi karşılanmadı, sınırlı tahsilat yapıldı ve karar gerekçesi istendi."
    },
    "rejectConsequence": {
      "headline": "VEDAT’IN DOSYASI ERTELENDİ; BAĞIMSIZ DEĞERLEME İSTENDİ",
      "body": "Dosya altı ay ertelendi. Mali inceleme birimi bağımsız değerleme ve doğrudan belge teslimi istedi. Daha önce tahsil edilen yüzde 8’lik tutar korundu. Vedat ek kayıtlar gönderdi; gerçekleşecek yeni tahsilat henüz belli değil. İdari değerlendirmede vaatlerle doğrulanmış kayıtların ayrılması olumlu karşılandı.",
      "vicdanDelta": 10,
      "sicilDelta": 10,
      "capacityDelta": 3,
      "chronicle": "Vedat’ın dosyası ertelendi; bağımsız değerleme ve belge incelemesi sürüyor, önceki tahsilat korundu."
    },
    "review": {
      "status": "Bağımsız satış ve belge incelemesiyle toplam tahsilat yüzde 18’e çıktı. Vedat yeni belgeleri kendisine imza yetkisi verilmeden teslim etti. Önerdiği ilk satış bedelinin gerçekleşebilir olmadığı doğrulandı.",
      "psychNote": "Yeni görüşmelerde yetki talebini geri çektiğini söylüyor. İlk değerlemesinin iyimser olduğunu kabul ediyor; kalan varlıklara ilişkin bilgilerin doğruluğu mali incelemede değerlendiriliyor. Kurum içi uyumu sürüyor.",
      "guardReport": "Son altı ayda disiplin cezası yok. Belgeler doğrudan inceleme birimine teslim edilmiş. Eşinin adresi teyit edildi. Eski iş ortaklarından gelen danışmanlık teklifini reddettiğini yazılı bildirdi; geçimini eşinin geliriyle sağlayacağını söylüyor.",
      "letterText": "Mali inceleme birimi yüzde 18’lik tahsilatı doğruladı; kalan tutarın güvencesi bulunmuyor. İşbirliği kurum içinden de sürdürülebilir. Tahliye sonrası bilgi ve belge taleplerinin devam edeceği bildirildi.",
      "defenseText": "\"İlk söylediğim satış bedeli çıkmadı. Yetki almadan da belgeleri verdim, inceleme birimi tahsilat yaptı. Kalan paranın hepsini geri getireceğime söz veremem. Danışmanlık teklifini kabul etmedim. Eşimin yanında kalıp istenen kayıtları sunmaya devam edeceğim.\"",
      "releaseConsequence": {
        "headline": "VEDAT BELGE TESLİMİNE DIŞARIDA DEVAM EDİYOR",
        "body": "Vedat doğrulanan adrese yerleşti ve istenen belgeleri gönderdi. Küçük bir ek tahsilat yapıldı; zararın çoğu hâlâ karşılanmadı. Alacaklı temsilcisi tahliyeye itirazını sürdürdü; yeni bir usulsüz işlem tespiti bildirilmedi.",
        "chronicle": "Vedat doğrulanan adrese yerleşti ve istenen belgeleri gönderdi. Küçük bir ek tahsilat yapıldı; zararın çoğu hâlâ karşılanmadı. Alacaklı temsilcisi tahliyeye itirazını sürdürdü; yeni bir usulsüz işlem tespiti bildirilmedi.",
        "vicdanDelta": 10,
        "sicilDelta": -10,
        "capacityDelta": -3
      },
      "rejectConsequence": {
        "headline": "VEDAT SARP: ŞARTLI TAHLİYE HAKKI YANDI",
        "body": "Kurul ikinci incelemede tahliyeyi reddetti. Şartlı tahliye hakkı yandı. Kalan cezasını tamamlayacak; dosya yeniden kurula gelmeyecek. Vedat kurumdan belge sunmaya devam ediyor. Yüzde 18’lik tahsilat korundu; kalan varlıkların incelemesi sürüyor. Ret kararı yeni bir tahsilat veya zararın tamamen karşılanması anlamına gelmiyor.",
        "chronicle": "Şartlı tahliye hakkı yandı. Kalan cezasını tamamlayacak; dosya yeniden kurula gelmeyecek.",
        "vicdanDelta": -10,
        "sicilDelta": 10,
        "capacityDelta": 3
      }
    }
  },
  {
    "id": 16,
    "name": "Onur Eren",
    "age": 35,
    "crime": "Eşini Kasten Öldürme",
    "sentence": "15 Yıl Hapis (12 Yıl 8 Ay Tamamlandı)",
    "initialMonth": 5,
    "servedMonths": 152,
    "sentenceMonths": 180,
    "mainText": "<p><strong>GÖRÜŞME YERİ:</strong> Bursa Kapalı Cezaevi</p><p class=\"mt-2\"><strong>OLAY ÖZETİ:</strong> 1978 yılında, 22 yaşındayken boşanmak istediği eşi Dilek Eren’i öldürdü. Boşanma ve çocukların geleceği konusunda yaşanan anlaşmazlığı ilk ifadesinde gerekçe göstermişti; sonraki yıllarda bu gerekçeyi açıkça reddetti. Dilek bir konfeksiyon atölyesinde çalışıyordu. Çocukları Elif ve Can, annelerinin ölümünden sonra anneannelerinin yanında büyüdü.</p><p class=\"mt-2\"><strong>İNFAZ DURUMU:</strong> Toplam 180 aylık cezanın 152 ayı tamamlandı; kalan süre 28 ay.</p><p class=\"mt-2\"><strong>ÇOCUKLARIN DURUMU:</strong> Elif 17, Can 15 yaşında. Elif görüşmek istemediğini bildirdi. Can bir mektup almayı kabul ediyor; yüz yüze görüşmeye hazır olduğunu söylemedi. Mevcut bakım düzeninin değiştirilmesi talep edilmiyor. Çocuklarla temas, destek uzmanı aracılığıyla ve ayrı değerlendirmeyle yürütülecek.</p><p class=\"mt-2\"><strong>BAĞIMSIZ YAŞAM PLANI:</strong> Eski atölye eğitmeninin önerdiği mobilya işyerinden iş teklifi ve çocukların yaşadığı mahalleden ayrı bir pansiyon adresi doğrulandı. Onur gelirinin bir bölümünü bakım giderlerine göndermek istiyor; desteği görüşme şartına bağlamıyor.</p>",
    "defenseText": "<p><strong>HÜKÜMLÜ İFADESİ:</strong></p><p>“Boşanmak isteyen bendim. Bir tartışmayı, Dilek’in söylediklerini veya gençliğimi gerekçe yapamam; onu ben öldürdüm. Çocuklarımı annesiz bıraktım. Artık hayatımı onların eğitimine ve ihtiyaçlarına destek olmak için kullanmak istiyorum. Bu, onları görme veya affedilme hakkı vermez. Elif istemiyorsa kapısına gitmeyeceğim. Can’a da yalnızca kabul ettiği biçimde yazacağım.”</p>",
    "psychNote": "<p><strong>DR. SEVİM — UZUN SÜRELİ TAKİP ÖZETİ:</strong> Son dört yılın görüşmelerinde eşini suçlayan açıklamalar tekrarlanmadı. Eylemini ve çocuklar üzerindeki sonuçlarını tutarlı biçimde kabul ediyor. Çocuklarının görüşmeme tercihine saygı duyacağını davranışlarıyla da gösterdi; reddedilen görüşme talebini yinelemedi. Pişmanlığı yalnızca tahliye görüşmesinde ortaya çıkan bir beyan değil. Dışarıdaki uyum için destek görüşmelerinin sürmesi önerildi.</p>",
    "guardReport": "<p><strong>CEZAEVİ İDARESİ RAPORU:</strong> Son beş yılda disiplin cezası yok. Mobilya atölyesinde düzenli çalışıyor. Son üç yıldaki küçük para gönderimleri kayıtlı; mektup veya görüşme karşılığı talep edilmemiş. İş ve pansiyon teyitleri dosyada. Tahliye sonrası ilk destek randevusu için yazışma sürüyor.</p>",
    "letterText": "<p><strong>ANNEANNENİN YAZISI:</strong> Gönderilen paraları çocukların giderleri için aldım; bu affettiğim anlamına gelmiyor. Çocuklar aynı evde ve okullarında kalacak. Karar ne olursa olsun görüşme tercihlerinin korunmasını istiyorum.</p>",
    "releaseConsequence": {
      "headline": "ONUR AYRI ADRESE YERLEŞTİ; ÇOCUKLARINA DESTEĞE BAŞLADI",
      "body": "Onur doğrulanan pansiyona yerleşti ve mobilya atölyesinde çalışmaya başladı. İlk ücretinden çocukların giderlerine ödeme yaptı; görüşme şartı ileri sürmedi. Elif’in görüşmeme tercihini korudu, Can’a uzman aracılığıyla bir mektup gönderdi. Çocukların bakım düzeni değişmedi. Destek randevusu tamamlandı; anneanne kararın gerekçesini istedi.",
      "vicdanDelta": 15,
      "sicilDelta": -10,
      "capacityDelta": -3,
      "chronicle": "Onur ayrı yaşamaya ve çalışmaya başladı; çocukların tercihlerine uyarak maddi desteğini sürdürdü."
    },
    "rejectConsequence": {
      "headline": "ONUR’UN DOSYASI ERTELENDİ; DESTEK GÖNDERİMLERİ SÜRÜYOR",
      "body": "Dosya altı ay ertelendi. Onur atölye çalışmasına ve çocuklara yaptığı küçük ödemelere devam etti. Görüşme taleplerini artırmadı. İşveren açık pozisyonu doldurabileceğini bildirdi; dışarıdaki yaşam planının yeniden teyidi istendi. İdari değerlendirmede ek takip süresi beklendiği kaydedildi.",
      "vicdanDelta": -10,
      "sicilDelta": 10,
      "capacityDelta": 3,
      "chronicle": "Onur’un dosyası ertelendi; çocuklara desteği ve temas sınırlarına uyumu sürdü."
    },
    "review": {
      "status": "Ceza süresinin 158 ayı tamamlandı; 22 ay kaldı. İşveren daha düşük ücretli bir başlangıç pozisyonu teklif etti; pansiyon ve iş teyitleri yenilendi. Çocuklara küçük ödemeler ve temas sınırlarına uyum sürdü.",
      "psychNote": "Ertelemenin ardından görüşmelerine devam etti. Dilek’in ölümüne ilişkin sorumluluğunu aynı açıklıkla kabul ediyor. Elif’in görüşmeme kararını değiştirmeye çalışmadı; Can’dan gelen kısa mektubu bir görüşme izni olarak yorumlamadı. Pişmanlığındaki tutarlılık korunuyor.",
      "guardReport": "Yeni disiplin cezası yok. Atölye devamı ve ödeme kayıtları dosyada. Ayrı barınma teyit edildi; dışarıdaki destek görüşmesi için tarih alındı. Çocukların bakımını üstlenme veya adreslerine gitme talebi yok.",
      "letterText": "Anneanne maddi desteği doğruladı, affetme veya birlikte yaşamaya ilişkin bir talep sunmadı. Can yazışmaya devam etmek istiyor; Elif temas istemiyor. Uzman bu tercihlerin ayrı ayrı korunmasını istedi.",
      "defenseText": "\"Altı ay daha geçti; söylediklerim değişmedi. Çalışıp çocuklara destek olmayı istiyorum. Elif’in kararını değiştirmeye çalışmadım. Can mektup yazdı ama bunu yanıma gelmek istiyor diye yorumlamıyorum. Dilek’i geri getiremem. Yapabileceğim, onların hayatını kendi isteğime göre düzenlemeye bir daha kalkışmamak.\"",
      "releaseConsequence": {
        "headline": "ONUR ÇALIŞMAYA BAŞLADI; TEMAS SINIRLARINI KORUDU",
        "body": "Onur ayrı adrese yerleşti, çalışmaya ve destek görüşmelerine başladı. Gelirinden çocuklara ödeme yaptı; çocukların affetmesini veya görüşmesini şart koşmadı. Can’la kabul edilen yazışma sürdü; Elif’in temas istememe tercihi değişmedi.",
        "chronicle": "Onur ayrı adrese yerleşti, çalışmaya ve destek görüşmelerine başladı. Gelirinden çocuklara ödeme yaptı; çocukların affetmesini veya görüşmesini şart koşmadı. Can’la kabul edilen yazışma sürdü; Elif’in temas istememe tercihi değişmedi.",
        "vicdanDelta": 15,
        "sicilDelta": -10,
        "capacityDelta": -3
      },
      "rejectConsequence": {
        "headline": "ONUR EREN: ŞARTLI TAHLİYE HAKKI YANDI",
        "body": "Kurul ikinci incelemede tahliyeyi reddetti. Şartlı tahliye hakkı yandı. Kalan cezasını tamamlayacak; dosya yeniden kurula gelmeyecek. Onur kalan 22 ayı kurumda tamamlayacak. Atölye çalışmasına, destek görüşmelerine ve çocuklara yaptığı ödemelere devam ediyor. Çocukların görüşme tercihleri değişmedi; ret kararı pişmanlığını geri çekmesine yol açmadı.",
        "chronicle": "Şartlı tahliye hakkı yandı. Kalan cezasını tamamlayacak; dosya yeniden kurula gelmeyecek.",
        "vicdanDelta": -10,
        "sicilDelta": 10,
        "capacityDelta": 3
      }
    }
  },
  {
    "id": 17,
    "name": "Turgut Aksu",
    "age": 52,
    "crime": "Tehdit ve Kişiyi Hürriyetinden Yoksun Kılma",
    "sentence": "6 Yıl Hapis (4 Yıl 2 Ay Tamamlandı)",
    "initialMonth": 8,
    "servedMonths": 50,
    "sentenceMonths": 72,
    "mainText": "<p><strong>GÖRÜŞME YERİ:</strong> Ankara Merkez Kapalı Cezaevi</p><p class=\"mt-2\"><strong>OLAY ÖZETİ:</strong> Kurgusal Çınarlı ilçesinin eski belediye başkanıdır. 1987’de belediye alımlarındaki usulsüzlükleri bildiren muhasebe görevlisi Fikret’i, iki çalışanına talimat vererek belediyeye ait bir binada saatlerce alıkoydurdu. Şikâyetini geri çekmezse ailesinin işini kaybedeceğini söyledi. Görevli binadan ayrılmasının engellendiğini tanıklarla bildirdi; Turgut tehdit ve kişiyi hürriyetinden yoksun kılma suçlarından hüküm giydi.</p><p class=\"mt-2\"><strong>GÜNCEL MAĞDUR BAŞVURUSU (28.06.1991):</strong> Fikret, eski belediye çalışanlarından birinin kendisine “Başkan çıkınca konuşursunuz” dediğini bildirdi. Görüşme doğrulandı; kişinin Turgut’un talimatıyla hareket ettiği belirlenmedi. Mağdur bir uzlaşma dilekçesi vermedi.</p><p class=\"mt-2\"><strong>TAHLİYE PLANI:</strong> Eşinin başka bir ilçedeki adresi doğrulandı. Eski siyasi arkadaşları bir dernekte yöneticilik teklif ediyor; görevin belediye ve eski çalışanlarla ilişkisi açıklanmamış. Mağdurla doğrudan temas kurmayacağını söylüyor.</p>",
    "defenseText": "<p><strong>HÜKÜMLÜ İFADESİ:</strong></p><p>“O odadan çıkmasına izin verilmedi; talimatı ben verdim. Şikâyetini çekmesini istedim. Eskiden bunu belediyeyi korumak diye anlatıyordum, şimdi bunun gerekçe olmadığını biliyorum. Gelen dernek teklifini henüz kabul etmedim. Fikret’le doğrudan görüşmeyeceğim; konuşulacaksa avukatlar konuşsun.”</p>",
    "psychNote": "<p><strong>DR. SEVİM — GÖRÜŞME NOTU:</strong> Alıkoyma talimatını kabul ediyor. Olayı anlatırken zaman zaman “kurumun itibarını korumak” ifadesine dönüyor, sorulduğunda bunun davranışını haklı çıkarmadığını söylüyor. Eski çalışanlarla sınırlarını nasıl belirleyeceğine ilişkin planı genel ifadelerden oluşuyor.</p>",
    "guardReport": "<p><strong>CEZAEVİ İDARESİ RAPORU:</strong> 50 aydır kurumda; son iki yılda disiplin cezası yok. Ziyaretçilerinin bir kısmı eski belediye çalışanları. Tutanaklarda yeni tehdit talimatı kaydedilmedi. Dosyada mağdurun güncel başvurusu var; şikâyetinden vazgeçtiğini gösteren belge yok. Dernekteki görev tanımı için yazılı bilgi istendi.</p>",
    "letterText": "<p><strong>FİKRET’İN DİLEKÇESİ:</strong> Ben görüşüp uzlaşacağımı söylemedim. Eski çalışanların benimle irtibata geçmesini istemiyorum. Kararın gerekçesini öğrenmek istiyorum.</p>",
    "releaseConsequence": {
      "headline": "ESKİ BAŞKAN TAHLİYE EDİLDİ; MAĞDUR YENİDEN BAŞVURDU",
      "body": "Turgut doğrulanan adrese yerleşti ve dernekte göreve başladı. Eski bir çalışanı Fikret’i görüşmeye çağırdı; bunun Turgut’un talimatıyla yapıldığı doğrulanmadı. Fikret temas istemediğini yeniden bildirdi. Üst makamdan teşekkür yazısı gelirken, görev ve temas planındaki eksikler için kuruldan açıklama istendi.",
      "vicdanDelta": -15,
      "sicilDelta": 15,
      "capacityDelta": -3,
      "chronicle": "Turgut dernekte göreve başladı; mağdur yeni temas girişimini bildirdi, üst makam tahliyeyi olumlu karşıladı."
    },
    "rejectConsequence": {
      "headline": "TURGUT’UN DOSYASI ERTELENDİ; ÜST MAKAMDAN GEREKÇE TALEBİ",
      "body": "Kurul dosyayı altı ay erteledi. Dernek görevi ve mağdurla temas girişimi hakkında ek bilgi istendi. Üst makam, ertelemenin gerekçesini ve kurulun son kararlarını talep etti. Mağdurun temas istememe başvurusu ayrıca işleme alındı.",
      "vicdanDelta": 15,
      "sicilDelta": -15,
      "capacityDelta": 3,
      "chronicle": "Turgut’un dosyası ertelendi; ek inceleme başladı, üst makam kurulun kararlarına ilişkin belge istedi."
    },
    "review": {
      "status": "Dernek yöneticiliği teklifini yazılı reddetti. Eşinin adresi yenilendi; eski belediyeyle bağlantısı olmayan küçük bir işletmede iş teklifi doğrulandı. Mağdura yapılan çağrının talimatla gerçekleştiği doğrulanmadı.",
      "psychNote": "Alıkoyma ve tehdidin sorumluluğunu kabul etmeyi sürdürüyor. Eski çalışanlarından mağdurla irtibat kurmamalarını yazılı istedi. Görüşmelerdeki bu değişimin kurum dışında sürüp sürmeyeceği henüz gözlenmedi.",
      "guardReport": "Son altı ayda disiplin cezası yok. Dernek teklifinin reddi ve çalışanlara gönderilen yazı dosyada. Mağdurun şikâyetinden vazgeçtiğine ilişkin belge hâlâ yok. Adres ve iş teyitleri tamamlandı.",
      "letterText": "Fikret, son aylarda yeni temas girişimi olmadığını bildirdi; bunun affetme veya tahliyeyi destekleme anlamına gelmediğini belirtti. Üst makamın tahliye talebi sürüyor. Mağdurun temas istememe tercihi ayrı kayıt olarak korunuyor.",
      "defenseText": "\"Dernek işini kabul etmedim, yazısını verdim. Eski çalışanlara Fikret’i aramamalarını söyledim. Onun benimle anlaşmak zorunda olmadığını kabul ediyorum. Eşimin yanında kalıp yeni işte çalışacağım. Makamdan kimin aradığı benim sorumluluğumu ortadan kaldırmaz.\"",
      "releaseConsequence": {
        "headline": "TURGUT YENİ İŞİNE BAŞLADI; TEMAS İZLEMİ SÜRÜYOR",
        "body": "Turgut ayrı ilçedeki adrese yerleşip doğrulanan işte çalışmaya başladı. İlk takip döneminde mağdura yeni temas bildirilmedi. Üst makam kararı olumlu karşıladı; geçmiş nüfuz ilişkilerinin etkisi takip edilmeye devam ediyor.",
        "chronicle": "Turgut ayrı ilçedeki adrese yerleşip doğrulanan işte çalışmaya başladı. İlk takip döneminde mağdura yeni temas bildirilmedi. Üst makam kararı olumlu karşıladı; geçmiş nüfuz ilişkilerinin etkisi takip edilmeye devam ediyor.",
        "vicdanDelta": -10,
        "sicilDelta": 10,
        "capacityDelta": -3
      },
      "rejectConsequence": {
        "headline": "TURGUT AKSU: ŞARTLI TAHLİYE HAKKI YANDI",
        "body": "Kurul ikinci incelemede tahliyeyi reddetti. Şartlı tahliye hakkı yandı. Kalan cezasını tamamlayacak; dosya yeniden kurula gelmeyecek. Üst makam kuruldan ek açıklama istedi. Turgut kurumda çalışmalarını sürdürüyor. Mağdurun temas istememe talebi korunuyor; ret kararı, doğrulanmamış talimat iddiasını kanıtlanmış hâle getirmiyor.",
        "chronicle": "Şartlı tahliye hakkı yandı. Kalan cezasını tamamlayacak; dosya yeniden kurula gelmeyecek.",
        "vicdanDelta": 10,
        "sicilDelta": -10,
        "capacityDelta": 3
      }
    }
  },
  {
    "id": 18,
    "name": "Fehmi Korukçu",
    "age": 48,
    "crime": "Hayali İhracat Tertibi ile Haksız Teşvik Primi Temini, Dolandırıcılık ve Evrakta Sahtecilik",
    "sentence": "8 Yıl Hapis (4 Yıl 1 Ay Tamamlandı)",
    "initialMonth": 6,
    "servedMonths": 49,
    "sentenceMonths": 96,
    "mainText": "<p><strong>GÖRÜŞME YERİ:</strong> Sağmalcılar Cezaevi</p><p class=\"mt-2\"><strong>OLAY ÖZETİ:</strong> KORUKÇU Dış Ticaret adına düzenlenen 17 adet sahte ihracat faturası ve teşvik beyannamesiyle Hazine'den 280 milyon lira haksız teşvik primi temin edildiği belirlenmiştir. Beyan edilen TIR plakalarının gümrükten çıkış kaydı bulunamamıştır. 1987’de tutuklanan Fehmi, evrakların sahte olduğunu bilmediğini ve şirket sahibi Haldun Kırdar’ın talimatlarını deftere işleyen bir muhasebeci olduğunu savunmaktadır.</p><p class=\"mt-2\"><strong>MALİYE TEFTİŞ MÜZEKKERESİ (12.01.1989):</strong> Sahte ihracat faturalarında ve teşvik beyannamelerinde muhasebeci Fehmi Korukçu’nun ıslak imzası ve kaşesi sabittir. Şirket sahibi Haldun Kırdar ifadesinde teşvik ve muhasebe işlerini bizzat Fehmi’nin yürüttüğünü beyan etmiştir.</p><p class=\"mt-2\"><strong>EŞİNİN DİLEKÇESİ:</strong> Eşi Fatma Korukçu, iki çocuğuyla mağdur olduğunu, eşinin çıkması durumunda Yeşilyurt’ta bakkal dükkânı açacağını bildirmiştir. Hükümlü ise savunmasında üç çocuğu olduğunu beyan etmiştir. Nüfus kaydında aile adresi Kartal Soğanlık görünmekte olup, dilekçedeki Yeşilyurt adresinde mahalle muhtarlığı onayı bulunmamaktadır.</p>",
    "defenseText": "<p><strong>HÜKÜMLÜ İFADESİ:</strong></p><p>“Ben şirkette sadece bordrolu bir muhasebeciydim. Patronum Haldun Bey ne emrettiyse deftere onu işledim. Faturaların veya gümrük beyannamelerinin sahte olduğunu bilme imkânım yoktu. Teşvik primleri şirket hesabına yatardı, tek kuruş elime geçmedi. Üç çocuğum var, eşim verem başlangıcı. Koğuşta mutfak sayımındayım, kimseyle derdim yok. Dışarı çıkıp bakkal açarak çocuklarımı kimseye muhtaç etmemek istiyorum.”</p>",
    "psychNote": "<p><strong>DR. SEVİM — GÖRÜŞME NOTU:</strong> Kronik duodenal ülser (1986'dan beri takip) ve Evre I hipertansiyon saptanmıştır. Epigastriumda hassasiyet mevcuttur. Mevcut diyet ve cezaevi revir imkânlarıyla takibi mümkündür; hayati tehlike arz eden acil klinik tablo veya hastaneye sevk gerektiren durum saptanmamıştır. Suçuna yönelik içgörüsü kısmidir.</p>",
    "guardReport": "<p><strong>CEZAEVİ İDARESİ RAPORU:</strong> 49 aydır kurumumuzdadır; disiplin cezası bulunmuyor. İaşe mutfağı sayım ve ambar tesliminde görevlidir; idareyle uyumludur. Aramada üzerinde teamül dışı miktarda Maltepe sigarası ve çay tespit edilmiş, sözlü ikaz yapılmıştır. Eşi ve kızı haricinde her perşembe siyah Mercedesli bir şahıs tarafından ziyaret edilmekte ve kendisine paket bırakılmaktadır. Koğuşta iaşe harici sigara ve çay dağıtması dikkat çekmektedir.</p>",
    "letterText": "<p><strong>ŞİRKET ÇALIŞANLARININ ORTAK DİLEKÇESİ:</strong> 7 aydır ödenmeyen maaşlarımız ve tazminatlarımız dururken, sahte evraklarla teşvik primlerini buharlaştıran sorumluların tahliyesine rızamız yoktur.</p>",
    "releaseConsequence": {
      "headline": "HAYALİ İHRACATÇI TAHLİYE EDİLDİ: DEVLET 280 MİLYON ZARARDA",
      "body": "Şartlı tahliyesi onaylanan Fehmi Korukçu salıverildi. Hazine'nin 280 milyonluk teşvik alacağını tahsil davası sonuçsuz kaldı. Eski fabrika işçileri şirket önünde eylem yaptı. Maliye Teftiş Kurulu, devam eden tahkikat sürecinde verilen tahliye kararının gerekçesini kuruldan resmen talep etti.",
      "vicdanDelta": -15,
      "sicilDelta": -15,
      "capacityDelta": -3,
      "chronicle": "Fehmi Korukçu tahliye edildi; Hazine alacağı tahsil edilemedi, işçilerin eylemi ve teftiş incelemesi sürüyor."
    },
    "rejectConsequence": {
      "headline": "HAYALİ İHRACAT DOSYASINDA RET: TEFTİŞ DERİNLEŞİYOR",
      "body": "Kurul, adres çelişkileri ve Hazine alacağının tahsili yönündeki Maliye tahkikatının tamamlanmaması nedeniyle tahliye talebini 6 ay erteledi. Maliye Teftiş Kurulu kararı olumlu karşılarken, cezaevinde doluluk baskısı devam ediyor.",
      "vicdanDelta": 10,
      "sicilDelta": 15,
      "capacityDelta": 3,
      "chronicle": "Fehmi Korukçu'nun dosyası ertelendi; Maliye Teftiş Kurulu tahkikatı sürdürüyor."
    },
    "review": {
      "status": "Hükümlü mutfak sayım görevinden alındı ve B-3 koğuşuna nakledildi. Eski patronu Haldun Kırdar'ın yurt dışına kaçtığı ve gıyabi tahkikat başlatıldığı öğrenildi. Siyah Mercedesli ziyaretçi son iki aydır kuruma gelmedi.",
      "psychNote": "Son altı ayda 7 kilo kayıp saptandı. Geçirdiği aktif duodenal ülser kanaması revirde kontrol altına alındı; hemoglobin 9.8 gr. Dış merkeze acil sevk endikasyonu yoktur; revir şartlarında takibi mümkündür.",
      "guardReport": "Koğuş aramasında yastık kılıfı içinde 2.500.000 TL nakit para ve bir döviz bürosu kartviziti bulundu. Kaynağını izah edemediği için 7 gün hücre tecridi ve mutfak görevinden men cezası verildi.",
      "letterText": "Ziraat Bankası müzekkeresinde, Hazine teşvik ödemelerinin yapıldığı günlerde eşinin hesabına döviz yatırıldığı doğrulandı. Gümrük Müdürlüğü beyan edilen TIR plakalarının Kapıkule çıkış kaydının bulunmadığını bildirdi.",
      "defenseText": "\"Sayın Kurula, altı ay daha cezamı çektim. Yastıkta bulunan para bana ait değil; koğuşta herkes birbirine emanet bırakır. Ben kimseye faizle para vermedim. Patronum Almanya'ya kaçıp suçu bana yıktı; benim hiçbir şeyden haberim yoktu. Ülserim kanadı, revirde çok zor günler geçirdim. Eşim gelemiyor, çocuklarım perişan. Beni salın, memleketime gideyim.\"",
      "releaseConsequence": {
        "headline": "İKİNCİ KURULDA TAHLİYE: HAYALİ İHRACAT DOSYASI KAPANDI",
        "body": "Fehmi ikinci incelemede tahliye edildi. Hazine 280 milyon liralık kamu alacağını tahsil edemedi. Yastıkta ele geçirilen nakit paraya ilişkin tahkikat takipsizlikle kapatıldı; karar kamuoyunda tepkiyle karşılandı.",
        "chronicle": "Fehmi ikinci incelemede tahliye edildi. Hazine 280 milyon liralık kamu alacağını tahsil edemedi. Yastıkta ele geçirilen nakit paraya ilişkin tahkikat takipsizlikle kapatıldı; karar kamuoyunda tepkiyle karşılandı.",
        "vicdanDelta": -20,
        "sicilDelta": -25,
        "capacityDelta": -3
      },
      "rejectConsequence": {
        "headline": "FEHMİ KORUKÇU: ŞARTLI TAHLİYE HAKKI YANDI",
        "body": "Kurul ikinci incelemede tahliyeyi reddetti. Şartlı tahliye hakkı yandı. Kalan cezasını tamamlayacak; dosya yeniden kurula gelmeyecek. Yastık kılıfında bulunan 2.500.000 TL nakit para ve döviz kartviziti nedeniyle hücre cezası uygulandı. Teşvik günü hesaba yatan dövizler dosyaya eklendi; Fehmi kalan cezasını kurumda tamamlayacak.",
        "chronicle": "Şartlı tahliye hakkı yandı. Kalan cezasını tamamlayacak; dosya yeniden kurula gelmeyecek.",
        "vicdanDelta": 10,
        "sicilDelta": 15,
        "capacityDelta": 3
      }
    }
  },
  {
    "id": 19,
    "name": "Cemalettin KARA",
    "age": 39,
    "crime": "Kasten Adam Öldürme (İş ortağı Mustafa GÜLER'i bıçaklamak suretiyle)",
    "sentence": "15 Yıl Ağır Hapis (5 Yıl 4 Ay 3 Gün Tamamlandı)",
    "initialMonth": 9,
    "servedMonths": 64,
    "sentenceMonths": 180,
    "mainText": "<p><strong>GÖRÜŞME YERİ:</strong> Sağmalcılar Cezaevi (Bayrampaşa) - C-9 Koğuşu</p><p class=\"mt-2\"><strong>OLAY ÖZETİ:</strong> Hükümlü, 1989 yılında Topkapı Maltepe Sanayi'de iş ortağı Mustafa GÜLER'i bıçaklayarak öldürmekten mahkûm olmuştur. Cinayet karanlıkta işlenmiş, suç aleti bıçak hükümlünün elinde bulunmuştur.</p><p class=\"mt-2\"><strong>EK BELGE / DİLEKÇE:</strong><br>[EK-1] Topkapı Karakolu Olay Yeri Zaptı - 12.01.1989 Saat: 21:10<br>\"Maltepe Sanayi 12. Blok 7 no. TEK planlı kesintisi 19:30-21:00. Ortam karanlık. Maktul Mustafa GÜLER yerde. Üzerinde 3 bıçak yarası: Biri önden sağdan sola yukarı, ikisi arkadan yukarıdan aşağı, farklı açılarda.<br>Suç aleti: 22 cm mutfak bıçağı, atölye demirbaş No:17, sağ el için bileylenmiş, sapı bez bantla sağ ele göre sarılı. Üzerinde kan. Sapında silinmiş 2 farklı parmak izi.<br>Hükümlü KARA'nın gömleğinde kan yoktur, pantolon paçasında 3 damla kan. Maktulün sağ el tırnak arasında deri ve 0 Rh(+) kan pıhtısı. Hükümlü kan grubu A Rh(+). Uyuşmuyor.\"<br><br>[EK-2] Tanık Beyanları<br>Şükrü ASLAN: \"Karanlıktı, itişme oldu. Kim vurdu görmedim.\"<br>Nuri ÖZCAN: \"Bıçak Cemal'in elindeydi.\"<br>Hasan Basri ÇELİK (Çırak - 2 gün sonra Almanya'ya giden): \"Korktum dışarı kaçtım, görmedim.\"</p>",
    "defenseText": "<p><strong>HÜKÜMLÜ İFADESİ:</strong></p><p>\"Ben Mustafa ile 86'dan beri Topkapı Maltepe Sanayi'de atölye işletirdik. Borç vardı. 12 Ocak akşamı depoda toplandık. Ben, Mustafa, kalfa Şükrü, çırak Hasan Basri ve alacaklı Nuri abi. Saat yedi buçuk gibi TEK'in kesintisi oldu, ışıklar gitti.</p><p>Tartışma çıktı, itiş kakış oldu. Karanlıkta biri beni itti, tezgaha düştüm. Elim bıçağa değdi. Tezgahtaki ekmek bıçağı. Mustafa yerde yatıyordu. Ben vurmadım. Polis geldiğinde bıçak elimde kaldı diye yazmışlar.</p><p>Arz ederim.\"</p>",
    "psychNote": "<p><strong>DR. CEMİL AKTAŞ — GÖRÜŞME NOTU:</strong> Sağmalcılar Cezaevi Revir Tabipliği. Klinik: TA: 145/90. Kalemi sol eliyle tutar. Sağ el 2. ve 3. parmakta eski iş kazası sekeli mevcut. Vücudunda kesik izi yoktur. Psikiyatri: Şuur açık, oryante. Anksiyöz. İntihar fikri yoktur. Mütalaa: Revir ve iaşe imkanları ile takibi mümkündür. Sevk gerektirmez.</p>",
    "guardReport": "<p><strong>CEZAEVİ İDARESİ RAPORU:</strong> Hükümlü Cemalettin KARA, C-9 koğuşunda kalır. Atölyede çalışır, tezgahını sol tarafa çekmiş vaziyette çalışır.</p><p>VUKUAT ZAPTI - Tarih: 14.03.1991 - Yer: Marangozhane Atölyesi. Hükümlü KARA atölyede çalışırken elindeki çekici savurmuş, yanında çalışan hükümlü Şükrü ASLAN'ın eline vurmuş. Revirde pansuman yapıldı. Sonrasında aralarında kavga çıkmış, tarafımızca ayrılmıştır. Tutuklu savunmasında kendisini şöyle savunmuştur: \"Ben solak adamım, sağ elimle vurdum, elim kaydı, yanlışlıkla vurdum, arkadaşımdan özür diledim.\"</p>",
    "letterText": "<p><strong>EK BİLGİ:</strong> Cinayet yeri zaptı ve tanık beyanları olayın aydınlanmamış yönlerine işaret etmektedir.</p>",
    "releaseConsequence": {
      "headline": "ORTAĞINI BIÇAKLAYAN TAHLİYE OLDU",
      "body": "Topkapı'da ortağını öldüren Cemalettin Kara tahliye edildi. Sanayi esnafı \"Depoda 5 kişi vardı\" diyor.",
      "vicdanDelta": -10,
      "sicilDelta": -10,
      "capacityDelta": -3,
      "chronicle": "Ortağını bıçaklamaktan mahkûm olan Cemalettin Kara tahliye edildi. Dava şüpheleri aydınlanamadı."
    },
    "rejectConsequence": {
      "headline": "KURUL RET VERDİ",
      "body": "Ortağını öldüren mobilyacının dosyası 6 ay ertelendi.",
      "vicdanDelta": 10,
      "sicilDelta": 10,
      "capacityDelta": 3,
      "chronicle": "Cemalettin Kara'nın dosyası cinayet şüpheleri üzerine 6 ay ertelendi."
    },
    "review": {
      "status": "Hükümlü atölyeden alınmış, temizliğe verilmiş. Yeni vukuatı yoktur.",
      "psychNote": "Mütalaa: Takibi mümkündür. Sevk gerektirmez.",
      "guardReport": "Hükümlü sessizdir. Disiplin suçu yoktur.",
      "letterText": "[EK-3] Almanya'dan Mektup Fotokopisi - Hasan Basri ÇELİK (02.10.1991): \"Cemal abi, o gece Nuri abi Mustafa abinin yakasına yapışmıştı. Ben dışarı kaçarken Şükrü abi tezgahtan bıçağı alıyordu sandım. Yemin olsun sen vurmadın.\" NOT: Zarf pulsuz, elden getirilmiş. Teyidi yoktur.",
      "defenseText": "\"Sayın Kurula, O bıçak sağ el için bilenmiş bıçaktı, tezgahtaki. Ben sol elle çalışırım. O gece karanlıktı, 5 kişiydik. Ben vurmadım. Arz ederim.\"",
      "releaseConsequence": {
        "headline": "İKİNCİ KURULDA TAHLİYE",
        "body": "Dosya kapandı. Mektup dosyada kaldı.",
        "chronicle": "İkinci incelemede Almanya'dan gelen yeni şüpheli mektubun da etkisiyle tahliye edildi. Dosya kapandı.",
        "vicdanDelta": -5,
        "sicilDelta": -5,
        "capacityDelta": -3
      },
      "rejectConsequence": {
        "headline": "HAK YANDI",
        "body": "Hükümlü 15 yılı tam yatacak.",
        "chronicle": "Şartlı tahliye hakkı yandı. Yeni sunulan mektuba rağmen, cezanın tamamının yatılmasına karar verildi.",
        "vicdanDelta": 5,
        "sicilDelta": 5,
        "capacityDelta": 3
      }
    }
  },
  {
    "id": 20,
    "name": "Suna KESKİN",
    "age": 45,
    "crime": "Kasten Adam Öldürme ve Kundaklama",
    "sentence": "18 Yıl Ağır Hapis (6 Yıl 8 Ay Tamamlandı)",
    "initialMonth": 1,
    "servedMonths": 80,
    "sentenceMonths": 216,
    "mainText": "<p><strong>GÖRÜŞME YERİ:</strong> Bakırköy Kadın ve Çocuk Tutukevi</p><p class=\"mt-2\"><strong>OLAY ÖZETİ:</strong> Merter'deki tekstil atölyesini iflas nedeniyle sigortadan para almak amacıyla yaktığı, bu sırada içeride bulunan gece bekçisi Rüstem AVCI'nın yanarak ölmesine neden olduğu gerekçesiyle mahkûm edilmiştir. Bekçinin cesedi dışarıdan asma kilit vurulmuş kazan dairesinde bulunmuştur.</p><p class=\"mt-2\"><strong>EK BELGE / DİLEKÇE:</strong><br>[EK-1] Sigorta Müfettişliği Gizli Tahkikat Raporu Özeti (1984)<br>\"Atölye yangınının kasten çıkarıldığı sabittir. Ancak şüpheli bir durum mevcuttur: Yangından bir hafta önce, atölyedeki en değerli dokuma makinelerinin el altından satılarak depodan çıkarıldığı tespit edilmiştir. Gece bekçisi Rüstem AVCI'nın bu durumu fark edip Suna Keskin'e şantaj yaptığına dair işçiler arasında söylentiler mevcuttur. Maktulün cesedi, dışarıdan asma kilit vurulmuş olan kazan dairesinde bulunmuştur. Hükümlü, kilidin yangın paniğiyle yanlışlıkla kilitlendiğini iddia etmiştir.\"<br><br>[EK-2] Maktulün Eşinin Kurula Dilekçesi<br>\"Kocam o kadının kirli işlerini öğrendiği için o odaya kilitlenip diri diri yakıldı. O kadın çok zeki ve kurnazdır. İçeride melek taklidi yaptığına kanıp onu dışarı salarsanız, iki yetim çocuğumun iki eli yakanızda olur.\"</p>",
    "defenseText": "<p><strong>HÜKÜMLÜ İFADESİ:</strong></p><p>\"Merter'deki tekstil atölyem 84 krizinde iflasın eşiğine gelmişti. Borç batağındaydım. Evet, çaresizlikten atölyeyi ben yaktım, sigortadan gelecek parayla borçları kapatırım diye düşündüm. Ama yemin ederim bekçi Rüstem'in o gece içeride olduğunu bilmiyordum. Bana o akşam memleketi Sivas'a yola çıkacağını söylemişti.</p><p>Yangını çıkardıktan sonra onun içeride olduğunu öğrenince aklımı kaçıracaktım. Ben hırsızlık yapmış olabilirim ama katil değilim. Yıllardır her gece rüyamda o ateşi görüyorum. İçeride okuma-yazma kursları vererek vicdanımın yükünü hafifletmeye çalışıyorum. Tahliyemi arz ederim.\"</p>",
    "psychNote": "<p><strong>GÖRÜŞME NOTU:</strong> Hükümlüde kronik uykusuzluk (insomnia) ve derin bir suçluluk duygusu gözlemlenmiştir. Düzenli olarak antidepresan kullanmaktadır. Maktulün adını her duyduğunda anksiyete krizi geçirmektedir. Pişmanlığı samimi görünmektedir.</p>",
    "guardReport": "<p><strong>CEZAEVİ İDARESİ RAPORU:</strong> Hükümlü Suna KESKİN, koğuş temsilcisidir. Kurumumuzda kaldığı 80 ay boyunca hiçbir disiplin cezası almamıştır. Cezaevi kütüphanesinin sorumluluğunu yürütmekte, ayrıca genç kadın mahkûmlara okuma-yazma öğretmektedir. İdareyle son derece uyumlu, örnek bir mahkûmdur.</p>",
    "letterText": "<p><strong>EK BİLGİ:</strong> Maktul eşinin dilekçesi ve Sigorta Raporu Ana Metin içerisine eklenmiştir.</p>",
    "releaseConsequence": {
      "headline": "SİGORTA VURGUNCUSU PATRONİÇE SERBEST",
      "body": "Bekçisini diri diri yakmakla suçlanan Suna Keskin, \"iyi halden\" tahliye edildi. Karar, maktulün ailesini isyan ettirirken, sigorta şirketleri birliği Adalet Bakanlığı'na itiraz dilekçesi sundu.",
      "vicdanDelta": -15,
      "sicilDelta": -20,
      "capacityDelta": -3,
      "chronicle": "Şüpheli kundaklama dosyasında, sigorta dolandırıcısı Suna Keskin tahliye edildi. Gerçek kilit sırrı aydınlatılamadı."
    },
    "rejectConsequence": {
      "headline": "KUNDAKÇI PATRONİÇEYE KURULDAN VİZE ÇIKMADI",
      "body": "Atölyesini yakarak bekçisinin ölümüne sebep olan Suna Keskin'in dosyası ertelendi. Cezaevinde okuma-yazma hocalığı yapması affedilmesine yetmedi.",
      "vicdanDelta": 10,
      "sicilDelta": 15,
      "capacityDelta": 3,
      "chronicle": "Cinayet şüpheleri nedeniyle Suna Keskin'in dosyası ertelendi."
    },
    "review": {
      "status": "Hükümlü kütüphane görevine devam ediyor. Bir mahkûm kadının okuma yazma belgesi almasını sağladı.",
      "psychNote": "Uykusuzluk şikayetleri artmıştır. Son günlerde 'Beni o odada kilitli bıraktılar' şeklinde sanrılar görmekte ve geceleri bağırarak uyanmaktadır. Vicdani çöküş hızlanmıştır.",
      "guardReport": "Disiplin suçu yoktur. Ağır depresif durumu idarece de gözlemlenmektedir.",
      "letterText": "[EK-3] Emniyet İhbar Tutanağı (Ekim 1991): 1984 yılında makineleri taşıyan nakliyeci şoförünün, kahvehanede 'Kadın sadece kibriti çaktı, kapıyı kilitleyen bizdik ama parayı eksik aldık' şeklinde konuştuğu ihbar edilmiştir. Şoför polis sorgusunda bunu sarhoşlukla söylediğini iddia edip reddetmiştir. Savcılık eski dosyayı yeniden açmayı delil yetersizliğinden reddetmiştir.",
      "defenseText": "\"Sayın Kurul, asma kilidi ben takmadım! O gece atölyede makineleri taşıyan nakliyeciler de vardı, onlar şahit. Rüstem'i onlar kilitledi, benim haberim yoktu! Sadece yangını çıkardım. Lütfen inanın, ben katil değilim, yavaş yavaş aklımı kaybediyorum burada.\"",
      "releaseConsequence": {
        "headline": "ŞÜPHELİ KUNDAKLAMA DOSYASI KAPANDI, SUNA SERBEST",
        "body": "Sonradan ortaya çıkan nakliyeci ihbarı üzerine kuruldaki şüpheleri azalan Suna Keskin tahliye edildi. Gerçek katilin kim olduğu sırrını koruyor.",
        "chronicle": "İkinci incelemede, nakliyeci şüphesi üzerine Suna Keskin tahliye edildi. Dosya tam aydınlatılamadan kapandı.",
        "vicdanDelta": -5,
        "sicilDelta": -10,
        "capacityDelta": -3
      },
      "rejectConsequence": {
        "headline": "KİLİDİN SIRRI ÇÖZÜLEMEDİ, HAKKI YANDI",
        "body": "Kurul, Suna Keskin'in tahliyesini kesin olarak reddetti. Suçu nakliyecilere atma çabası sonuç vermeyen hükümlü cezasını tamamlayacak.",
        "chronicle": "Şartlı tahliye hakkı yandı. Kundaklama dosyasında cezanın tamamen yatılmasına karar verildi.",
        "vicdanDelta": 10,
        "sicilDelta": 15,
        "capacityDelta": 3
      }
    }
  },
  {
    "id": 21,
    "name": "Nihat ARIKAN",
    "age": 29,
    "crime": "Tedbirsizlik neticesi ölüme sebebiyet vermek; kaza mahallini terk",
    "sentence": "6 Yıl 8 Ay Ağır Hapis (4 Yıl 5 Ay Tamamlandı)",
    "initialMonth": 7,
    "servedMonths": 53,
    "sentenceMonths": 80,
    "mainText": "<p><strong>GÖRÜŞME YERİ:</strong> Ümraniye E Tipi Kapalı Cezaevi</p><p class=\"mt-2\"><strong>OLAY ÖZETİ:</strong> 18 Ağustos 1987 gecesi Şile yolunda aracıyla bir yayaya çarparak ölümüne sebep olmuş ve kaza mahallinden kaçmıştır.</p><p class=\"mt-2\"><strong>EK BELGE / DİLEKÇE:</strong><br>[EK-1] Müteveffanın Ablası Ayten Sönmez'in Dilekçesi<br>\"Dava sırasında iki kişi babama gelip şikâyetten vazgeçmesini istedi. Kim olduklarını bilmiyoruz. Hükümlünün annesi daha sonra evimize gelip özür diledi. Nihat Arıkan'ın kendisinden bugüne kadar bir haber gelmedi.\"<br><br>[EK-2] İş Yeri Kabul Belgesi<br>Dosyada Kartal'daki \"Arıkan Mobilya\"dan işe kabul yazısı vardır. Hükümlü işyeri sahibini \"dayım\" diye tarif etmişse de nüfus kaydında bu isimde bir dayısı bulunmamaktadır.</p>",
    "defenseText": "<p><strong>HÜKÜMLÜ İFADESİ:</strong></p><p>\"Hadise 18 Ağustos 1987 gecesi Şile yolunda oldu. İki kadeh rakı içmiştim, fakat sarhoş değildim. Şahsı geç fark ettim. Kazadan sonra korkup durmadım. Bunun hata olduğunu bugün kabul ediyorum.</p><p>Cezaevinde marangozhanede çalışıyorum. Disiplin cezam yoktur. Çıkarsam aile dostumuz Şaban Bey’in Kartal’daki atölyesinde çalışacağım. Müteveffanın ailesine özür mektubu yazmak istedim, avukatım uygun görmedi. Takdir kurulundur.\"</p>",
    "psychNote": "<p><strong>GÖRÜŞME NOTU:</strong> Genel fiziki hali iyidir. Sol dizde eski travmaya bağlı ağrı mevcuttur. Kazaya ilişkin zaman zaman uykusuzluk ve huzursuzluk tarif etmektedir. Ağır depresyon veya psikotik bulgu saptanmamıştır. Pişmanlık ifade etmekte olup bunun tahliye beklentisiyle ilgisi tıbben tayin edilemez.</p>",
    "guardReport": "<p><strong>CEZAEVİ İDARESİ RAPORU:</strong> Hükümlünün ciddi disiplin cezası bulunmamaktadır. Marangozhanede muntazam çalışmaktadır. 17.01.1991 tarihli jurnal kaydında, ziyaret sonrası \"Benim iş uzamaz, dışarıda halleden var\" dediği belirtilmiştir. Hükümlü sözü inkâr etmiş, koğuş ifadeleri birbirini tutmamıştır. Son altı ayda ailesi dışında bir kez Av. Selahattin Vural tarafından ziyaret edilmiştir. Adı geçen avukat, hükümlünün dava müdafii değildir.</p>",
    "letterText": "<p><strong>EK BİLGİ:</strong> Maktul ailesinin dilekçesi ve şüpheli iş kabul belgesi Ana Metin içerisine eklenmiştir.</p>",
    "releaseConsequence": {
      "headline": "ŞİLE YOLU DAVASINDA ŞARTLI TAHLİYE",
      "body": "Nihat Arıkan serbest bırakılır. Müteveffa ailesi kararı eleştirmez ancak bazı gazetelerde Arıkan ailesinin Ankara’da temaslarda bulunduğu iddia edilir. Üç ay sonra hükümlünün işe kabul edildiği atölyeden ayrıldığı öğrenilir.",
      "vicdanDelta": -20,
      "sicilDelta": 15,
      "capacityDelta": -3,
      "chronicle": "Şile yolu kazası faili Nihat Arıkan torpil şüpheleri gölgesinde tahliye edildi."
    },
    "rejectConsequence": {
      "headline": "TAHLİYE KARARI ALTI AY SONRAYA KALDI",
      "body": "Arıkan’ın müracaatı ertelenir. Aile avukatı kararı \"ağır fakat usule uygun\" diye niteler. Hükümlü marangozhanedeki görevine devam eder.",
      "vicdanDelta": 15,
      "sicilDelta": -15,
      "capacityDelta": 3,
      "chronicle": "Torpil iddialarına rağmen kurul Nihat Arıkan'ın tahliyesini erteledi."
    },
    "review": {
      "status": "İlk karardan üç hafta sonra hükümlü başka bir mahkûmla kavga etmiş, her iki tarafa da üç gün atölyeden men cezası verilmiştir. Sonraki beş ayda yeni vukuat görülmemiştir. Hükümlü kütüphanede çalışmaya başlamıştır.",
      "psychNote": "Dört kilo kaybetmiştir. Ciddi organik hastalık saptanmamıştır. Daha içe kapanık olduğu, ancak intihar düşüncesi bulunmadığı kaydedilmiştir. Kazadan bahsederken bu kez müteveffanın adını kendiliğinden kullanmıştır.",
      "guardReport": "Koğuş aramasında hükümlünün eşyaları arasında 'S. Vural — Salı 14.30' yazılı küçük bir kâğıt bulunmuştur. Hükümlü bunun eski bir ziyaret notu olduğunu söylemiştir. Av. Selahattin Vural’ın son altı ayda resmi ziyaret kaydı yoktur.",
      "letterText": "[EK-3] Emniyet İhbar Tutanağı / Maktul Eşi Beyanı: Müteveffanın eşi Sevim Sönmez, mektuptan on gün sonra kayınpederinin evine isimsiz zarfla 500.000 lira bırakıldığını bildirir. Paranın Arıkan ailesiyle bağlantısı tespit edilemez.<br>[EK-4] Zabıt Kâtibi Notu: '12.09.91 — Bakanlık Özel Kalem’den olduğunu söyleyen erkek şahıs Arıkan dosyasının kurul gününü sordu. İsim vermedi.'",
      "defenseText": "\"Atölyedeki kavga için mazeret aramıyorum. Diğer hükümlü babamla ve paramızla alay etti. Ben de üzerine yürüdüm. Şaban Bey öz dayım değildir. Biz ailece kendisine dayı deriz. Mehmet Sönmez’in eşine sonunda bir özür mektubu gönderdim. Cevap gelmedi. Vermek zorunda da değildir.\"",
      "releaseConsequence": {
        "headline": "ŞİLE YOLU DAVASINDA İKİNCİ KURULDA TAHLİYE",
        "body": "Nihat Arıkan tahliye edilir. Birkaç ay sonra başka bir mobilya atölyesinde işe başlar. Daha sonra müteveffanın kızının adına para yatırdığı anlaşılır. Aile parayı kabul etmez. 500.000 liranın kim tarafından bırakıldığı tespit edilemez.",
        "chronicle": "Gizemli kan parası ve Bakanlık telefonunun ardından Nihat Arıkan ikinci kurulda tahliye edildi.",
        "vicdanDelta": -15,
        "sicilDelta": 10,
        "capacityDelta": -3
      },
      "rejectConsequence": {
        "headline": "ARIKAN'IN ŞARTLI TAHLİYE HAKKI YANDI",
        "body": "Kurul kararından sonra içine kapanır fakat yeni disiplin cezası almaz. Kalan cezasını tamamlayacaktır.",
        "chronicle": "Bakanlık aramasına rağmen kurul geri adım atmadı, Nihat Arıkan'ın şartlı tahliye hakkı yandı.",
        "vicdanDelta": 10,
        "sicilDelta": -15,
        "capacityDelta": 3
      }
    }
  },
  {
    "id": 22,
    "name": "Kemal ERDEM",
    "age": 34,
    "crime": "Yasadışı örgüte yardım ve yataklık; suçta kullanılan aracın temini",
    "sentence": "7 Yıl 6 Ay Hapis (5 Yıl 1 Ay Tamamlandı)",
    "initialMonth": 8,
    "servedMonths": 61,
    "sentenceMonths": 90,
    "mainText": "<p><strong>GÖRÜŞME YERİ:</strong> Metris Kapalı Cezaevi</p><p class=\"mt-2\"><strong>OLAY ÖZETİ:</strong> Aracını kuzeni Orhan Erdem'e vererek bir banka soygununda kaçış aracı olarak kullanılmasına imkân sağlamaktan, yasadışı örgüte yardım ve yataklık suçundan mahkûm olmuştur. Soygunda bir banka güvenlik görevlisi hayatını kaybetmiştir.</p><p class=\"mt-2\"><strong>EK BELGE / DİLEKÇE:</strong><br>[EK-1] Nermin Yalçın'ın (Maktul Eşi) Dilekçesi<br>\"Kocamı öldürenler Kemal Erdem’in arabasıyla kaçtı. Kendisi tetiği çekmemiş olabilir. Fakat o araba verilmeseydi belki kaçamayacaklardı. Ben devletin vereceği karara karışamam. Yalnız unutulmasın istiyorum.\"<br><br>[EK-2] Mahkeme Kararı Özeti<br>Kemal Erdem’in olay yerinde olmadığı sabittir. Mahkûmiyetin başlıca dayanakları; emniyet ifadesi, aracın kullanılmış olması ve firari sanık Orhan Erdem’in ilk ifadesidir. Orhan Erdem mahkeme safhasında ilk ifadesini geri almıştır.</p>",
    "defenseText": "<p><strong>HÜKÜMLÜ İFADESİ:</strong></p><p>\"Ben matbaa işçisiydim. Aracımı kuzenim Orhan’a iki günlüğüne verdim. Sonradan aracın bir banka soygununda kullanıldığını öğrendim. Evime gelen bazı kişileri tanıdığım doğrudur. Çay içmişlikleri vardır. Silah sakladığım veya talimat aldığım doğru değildir.</p><p>Emniyette verdiğim ilk ifadeyi kabul etmiyorum. Mahkemede de söyledim; o kâğıdı okumadan imzaladım. Burada beş senedir başımı belaya sokmadım. Tahliye olursam ağabeyimin matbaasında çalışacağım.\"</p>",
    "psychNote": "<p><strong>GÖRÜŞME NOTU:</strong> Sağ omuz hareketlerinde eski kırığa bağlı kısıtlılık vardır. Uyku bozukluğu ve kapalı yerde uzun süre kalınca sıkıntı hissi tarif etmektedir. Muayene sırasında emniyet safhasından bahsetmek istememiş, \"Geçti, yazmanın faydası yok\" demiştir. Ağır psikiyatrik hastalık saptanmamıştır.</p>",
    "guardReport": "<p><strong>CEZAEVİ İDARESİ RAPORU:</strong> Hükümlünün son iki yılda disiplin cezası bulunmamaktadır. Kitaplık ve dilekçe yazım işlerinde diğer hükümlülere yardım etmektedir. Siyasi koğuşta sözü dinlenen şahıslardan olduğu gözlenmiş, ancak emir verdiği veya yasak faaliyette bulunduğu tespit edilmemiştir. Bir gardiyan, hükümlünün yeni gelen bir tutukluya \"Dışarıdaki haberleri burada konuşma\" dediğini bildirmiştir; hükümlü bunun \"ailesini sıkıntıya sokmaması için verilmiş nasihat\" olduğunu iddia etmiştir.</p>",
    "letterText": "<p><strong>EK BİLGİ:</strong> Maktul eşinin dilekçesi ve mahkeme kararı özeti Ana Metin içerisine eklenmiştir.</p>",
    "releaseConsequence": {
      "headline": "BANKA SOYGUNU DOSYASINDA ŞARTLI TAHLİYE",
      "body": "Bazı gazeteler kararı \"örgüt mensuplarına taviz\" olarak verir. İki hafta sonra Emniyet kaynaklı bir haberde Kemal Erdem’in \"eski çevresiyle irtibatlı olduğu\" ileri sürülür, ancak gözaltı yapılmaz.",
      "vicdanDelta": 15,
      "sicilDelta": -20,
      "capacityDelta": -3,
      "chronicle": "Banka soygununda aracı kullanılan Kemal Erdem, örgüt bağları şüphesine rağmen tahliye edildi."
    },
    "rejectConsequence": {
      "headline": "METRİS’TE TAHLİYE TALEBİ REDDEDİLDİ",
      "body": "İnsan haklarıyla ilgilenen bazı avukatlar dosyanın işkence altındaki emniyet ifadelerine dayandığını ileri sürer. Güvenlik görevlisinin ailesi sessizliğini korur.",
      "vicdanDelta": -10,
      "sicilDelta": 15,
      "capacityDelta": 3,
      "chronicle": "Zayıf delillere rağmen emniyetin hassasiyeti doğrultusunda Kemal Erdem'in tahliyesi ertelendi."
    },
    "review": {
      "status": "Hükümlü, cezaevindeki bir protesto sırasında üç gün iaşe kabul etmemiştir. (Açlık grevi olmadığını, aramayı protesto ettiğini söylemiştir.) Başka vukuatı yoktur.",
      "psychNote": "Genel sağlık durumu değişmemiştir. Daha gergin olduğu görülmüş, \"Beni suçumdan değil, ismimden içeride tutuyorlar\" demiştir. Muhakeme kabiliyeti normaldir.",
      "guardReport": "Ziyaretçilerinden Hasan Aydın’ın verdiği adresin sahte olduğu anlaşılmıştır. Hükümlü şahsı matbaadan tanıdığını söylemiştir. Emniyet'ten cezaevine iki defa gayriresmi telefon edilip dosya sonucu sorulmuştur.",
      "letterText": "[EK-3] Emniyet Müzekkeresi (Gizlilik Şerhli): \"Kemal Erdem’in tahliyesi halinde eski örgütsel çevresiyle temas kurabileceği yönünde bilgiler mevcuttur.\" Kaynak belirtilmemiştir.<br><br>[EK-4] Orhan Erdem'den Noter Onaylı Beyan (Almanya): \"Kemal arabanın ne için kullanılacağını bilmiyordu. İlk ifademde onun adını polis söylediği için kabul ettim.\" (Firari sanık aranmaktadır).",
      "defenseText": "\"Altı ay evvel benden şüphe ettiniz. Buna kızdım ama şaşırmadım. Hasan’ı yıllar önce matbaadan tanırım, örgütçü müdür bilmem. Kuzenim Orhan’ın kimlerle gezdiğini hiç bilmediğimi söylesem yalan olur. Bazı şeylerden şüpheleniyordum. Fakat banka soyulacağını bilseydim arabamı vermezdim. Şüphelenmekle bilmek aynı şey değildir.\"",
      "releaseConsequence": {
        "headline": "METRİS'TE TARTIŞMALI TAHLİYE",
        "body": "Kemal Erdem tahliye edilip matbaada işe başlar. Daha sonra şüpheli ziyaretçisi Hasan Aydın örgüt soruşturmasında gözaltına alınır, ancak Erdem'e dokunulmaz. Hasan Aydın'ın gerçek kimliği muamma kalır.",
        "chronicle": "Emniyet'in gizli raporlarına rağmen Kemal Erdem ikinci incelemede tahliye edildi.",
        "vicdanDelta": 20,
        "sicilDelta": -25,
        "capacityDelta": -3
      },
      "rejectConsequence": {
        "headline": "KEMAL ERDEM'İN TAHLİYE HAKKI YANDI",
        "body": "Tahliye kurulunun kararından sonra diğer hükümlülere dilekçe yazmayı bırakır ve içine kapanır. Emniyet'in baskısı sonuç verir, cezasını tamamen yatarak tamamlayacaktır.",
        "chronicle": "Emniyetin ısrarlı takibi sonucu Kemal Erdem'in şartlı tahliye hakkı yandı.",
        "vicdanDelta": -25,
        "sicilDelta": 20,
        "capacityDelta": 3
      }
    }
  },
  {
    "id": 23,
    "name": "Rıza KANTAR",
    "age": 52,
    "crime": "Ağır tahrik altında adam öldürmeye teşebbüs; mesken masuniyetini ihlal",
    "sentence": "12 Yıl Ağır Hapis (8 Yıl 2 Ay Tamamlandı)",
    "initialMonth": 5,
    "servedMonths": 98,
    "sentenceMonths": 144,
    "mainText": "<p><strong>GÖRÜŞME YERİ:</strong> Buca Kapalı Cezaevi (İzmir)</p><p class=\"mt-2\"><strong>OLAY ÖZETİ:</strong> Mahallede kızına laf attığını iddia ettiği gençlerin evini basmış, çıkan arbedede bir genci göğsünden bıçaklayarak ağır yaralamıştır. Mağdur kalbinden 2 cm farkla kurtulmuş ancak sağ kolu kısmi felç kalmıştır.</p><p class=\"mt-2\"><strong>EK BELGE / DİLEKÇE:</strong><br>[EK-1] Emniyet Müdürlüğü Arşiv Özeti<br>\"Şahsın 1974-1983 yılları arasında kasten yaralama, haraç kesme ve mekân kurşunlama gibi 14 ayrı sabıkası mevcuttur. O dönemde yeraltı dünyasında 'Jilet Rıza' lakabıyla anılmıştır. Son yıllarda suça karışmamış olsa da geçmiş suç kaydı son derece kabarıktır.\"</p>",
    "defenseText": "<p><strong>HÜKÜMLÜ İFADESİ:</strong></p><p>\"Sayın Kurul, gençliğimde cahildim. 70'lerde, 80'lerde kanımız deli akıyordu. Sicilimde 14 tane adam yaralama var, inkar etmiyorum. Ama ben artık 52 yaşına geldim. Torun sahibi oldum. Bu son olayda da mahallenin gençleri kızıma laf atmış, kapılarına dayandım, itiş kakışta bıçak çekildi. Eskiden olsa acımazdım ama sadece korkutmak istedim, kaza oldu.</p><p>Sekiz yıldır burada tespih dizip namaz kılıyorum. Kendi halimde, köşemde ölümü bekleyen bir ihtiyarım artık. Beni bırakın, kalan ömrümü torunlarımla geçireyim.\"</p>",
    "psychNote": "<p><strong>GÖRÜŞME NOTU:</strong> Fiziksel olarak yaşlılık belirtileri, tansiyon ve romatizma şikayetleri mevcuttur. Psikolojik muayenesinde oldukça kontrollü, sakin ve babacan bir tavır sergilemiştir. Suça meyilli agresif yapısının yaşa bağlı olarak durulduğu izlenimi vermektedir.</p>",
    "guardReport": "<p><strong>CEZAEVİ İDARESİ RAPORU:</strong> Hükümlü cezaevinde son derece sakin ve saygılıdır. El işi atölyesinde tespih oymacılığı yapmaktadır. Ancak koğuşta gizli bir otoritesi olduğu, genç mahkûmların ondan çekindiği ve \"Rıza Baba\" diyerek kendisine hizmet ettiği gözlemlenmektedir. Geçen ay koğuşta çıkan bir bıçaklı kavgayı tek bir bakışıyla bitirdiği söylenmektedir. İdareye karşı saygısızlığı yoktur.</p>",
    "letterText": "<p><strong>EK BİLGİ:</strong> Hükümlünün eski sabıka kayıtları Emniyet Arşiv Özeti olarak Ana Metin'e eklenmiştir.</p>",
    "releaseConsequence": {
      "headline": "JİLET RIZA'YA YAŞLILIK İNDİRİMİ",
      "body": "Sayısız yaralama sabıkası olan Rıza Kantar, \"artık yaşlandım\" diyerek kurulu ikna etti ve serbest kaldı. Mağdur aile karara isyan etse de halk, kızını koruyan dedenin torunlarına kavuşmasını sempatiyle karşıladı.",
      "vicdanDelta": 15,
      "sicilDelta": -10,
      "capacityDelta": -3,
      "chronicle": "Kabarık sabıkasına rağmen kızını savunduğu için halkın sempatisini toplayan eski kabadayı Rıza Kantar serbest bırakıldı."
    },
    "rejectConsequence": {
      "headline": "ESKİ KABADAYIYA KURULDAN GEÇİT YOK",
      "body": "Kurul, sicili kabarık olan Rıza Kantar'ın \"tövbekar dede\" imajına inanmadı. Hükümlü cezasını çekmeye devam edecek. Karar bazı gazetelerde \"Hasta ve yaşlı bir adama zulüm\" olarak yorumlandı.",
      "vicdanDelta": -15,
      "sicilDelta": 10,
      "capacityDelta": 3,
      "chronicle": "Rıza Kantar'ın tehlikeli geçmişi göz önüne alınarak tahliyesi ertelendi, kamuoyunda yaşlı bir adama haksızlık yapıldığı algısı oluştu."
    },
    "review": {
      "status": "Rıza Kantar tahliyesi reddedildikten sonra oldukça içine kapanmıştır. Ancak koğuşa yeni gelen iki gasp suçlusunun, Rıza Kantar'ın ayak işlerini yapmaya başladığı ve koğuşta bir tür \"haraç çarkı\" kurdukları iddia edilmektedir.",
      "psychNote": "Tansiyon şikayetleri artmıştır. \"Beni burada çürütmeye yemin mi ettiniz?\" diyerek öfkelenmiş, ancak fiziksel şiddet eğilimi göstermemiştir.",
      "guardReport": "Rıza Kantar haraç olaylarının hiçbirine doğrudan karışmamakta, her olay sırasında seccadesinde veya atölyede görünmektedir. Kendisine sorulduğunda iddiaları reddetmiştir.",
      "letterText": "[EK-2] Koğuştan İsimsiz Bir Mahkûm Mektubu: \"Müdür Bey, Rıza Baba melek taklidi yapıyor. Gençleri o yönlendiriyor. 'Benim dışarıda yarım kalan işlerim var, çıkınca kan akacak' diye yeminler ediyor. Biz korkumuzdan şikayetçi olamıyoruz. Onu buradan bırakırsanız dışarıyı kan gölüne çevirecek.\"",
      "defenseText": "\"Sayın Kurul, koğuştaki üç-beş serseri kendi aralarında haraç kesiyorsa benim suçum ne? Ben köşemde tespih çekiyorum. İsmimden korkuyorlarsa ben ne yapayım? Kalp krizinden burada ölüp gideceğim, insaf edin torunuma hasret bırakmayın beni.\"",
      "releaseConsequence": {
        "headline": "JİLET RIZA DIŞARIDA: KANLI HESAPLAŞMA",
        "body": "Tahliye edilen Rıza Kantar, serbest kaldıktan sadece bir ay sonra eski bir husumetlisini bacağından vurdurduğu iddiasıyla yeniden aranmaya başlandı. Kurulun verdiği karar toplumda infial yarattı.",
        "chronicle": "İkinci incelemede serbest kalan Rıza Kantar kısa süre sonra tekrar suça karıştı. Kurul büyük bir skandala imza attı.",
        "vicdanDelta": -25,
        "sicilDelta": -25,
        "capacityDelta": -3
      },
      "rejectConsequence": {
        "headline": "KABADAYININ HAKKI YANDI",
        "body": "İsimsiz mektubu dikkate alan kurul, Rıza Kantar'ı cezaevinde tutma kararı aldı. Kantar'ın şartlı tahliye hakkı yandı. Kısa süre sonra haraç çarkı çöken koğuş rahat bir nefes aldı.",
        "chronicle": "İçeride haraç çarkı kurduğu anlaşılan Rıza Kantar'ın şartlı tahliye hakkı yandı.",
        "vicdanDelta": -10,
        "sicilDelta": 20,
        "capacityDelta": 3
      }
    }
  },
  {
    "id": 24,
    "name": "Meryem KAYA",
    "age": 35,
    "crime": "Kasten adam öldürme (Şiddet gördüğü eşini uykusunda bıçaklayarak)",
    "sentence": "15 Yıl Hapis (6 Yıl 3 Ay Tamamlandı)",
    "initialMonth": 9,
    "servedMonths": 75,
    "sentenceMonths": 180,
    "mainText": "<p><strong>GÖRÜŞME YERİ:</strong> Bakırköy Kadın Kapalı Cezaevi (İstanbul)</p><p class=\"mt-2\"><strong>OLAY ÖZETİ:</strong> On yıllık evliliği boyunca eşinden ağır fiziksel şiddet gören hükümlü, kocasının kendisini ve çocuklarını öldürmekle tehdit ettiği bir gecenin sabaha karşı kocası uyurken onu mutfak bıçağıyla öldürmüştür. Maktulün alkol ve darp kayıtları mahkeme dosyasında mevcuttur. Suç 'uykuda ve planlayarak' işlendiği için cezada tahrik indirimi uygulanmakla birlikte ağır bir ceza verilmiştir.</p>",
    "defenseText": "<p><strong>HÜKÜMLÜ İFADESİ:</strong></p><p>\"Sayın Kurul, o gece kocam sarhoş gelip büyük oğlumun kolunu kırdı. 'Sabah uyandığımda üçünüzü de keseceğim' diyerek uyudu. Sabaha kadar çocuklarıma sarılıp titredim. O bıçağı elime almasaydım bugün üçümüz de mezardaydık. Ben katil değilim, sadece yavrularımı koruyan bir anneyim.</p><p>Altı yıldır buradayım, çocuklarım Çocuk Esirgeme Kurumu'nda ziyan oldu. Allah rızası için beni bırakın, evlatlarıma annelik yapayım.\"</p>",
    "psychNote": "<p><strong>GÖRÜŞME NOTU:</strong> Hükümlü görüşme boyunca sürekli ağlamış ve ağır bir travma sonrası stres bozukluğu (TSSB) belirtileri göstermiştir. Kendine veya başkalarına zarar verme eğilimi yoktur. Tek motivasyonu çocuklarına kavuşmaktır.</p>",
    "guardReport": "<p><strong>CEZAEVİ İDARESİ RAPORU:</strong> Hükümlü idareye karşı son derece uysaldır. Çamaşırhane işlerinde çalışmaktadır. Diğer mahkumlar tarafından korunup kollanmaktadır. Hiçbir disiplin cezası almamıştır.</p>",
    "letterText": "<p><strong>EK BİLGİ:</strong> Çocuk Esirgeme Kurumu'ndan gelen rapora göre Meryem Kaya'nın iki çocuğu da annelerini beklemekte olup, psikolojik destek almaktadırlar.</p>",
    "releaseConsequence": {
      "headline": "ÇOCUKLARINA KAVUŞTU: MERYEM KAYA'YA TAHLİYE",
      "body": "Yıllarca şiddet gördüğü kocasını öldüren Meryem Kaya'ya Şartlı Tahliye Kurulu'ndan merhamet çıktı. Kaya serbest bırakıldı ve çocuklarını yuvadan teslim aldı. Kadın dernekleri kararı sevinçle karşıladı.",
      "vicdanDelta": 20,
      "sicilDelta": -15,
      "capacityDelta": -3,
      "chronicle": "Şiddet gördüğü eşini öldüren Meryem Kaya, çocuklarına kavuşması için kurul kararıyla serbest bırakıldı."
    },
    "rejectConsequence": {
      "headline": "UYKUDA CİNAYETE AF YOK: MERYEM İÇERİDE",
      "body": "Kurul, şiddet gördüğü kocasını uykusunda bıçaklayan Meryem Kaya'nın \"kanunun dışına çıktığı\" gerekçesiyle tahliyesini reddetti. Çocuklarının yurtta ağlayan fotoğrafları kamuoyunun vicdanını yaraladı.",
      "vicdanDelta": -25,
      "sicilDelta": 15,
      "capacityDelta": 3,
      "chronicle": "Çocukları yurtta olan Meryem Kaya'nın tahliyesi reddedildi, kamuoyunda kurula büyük bir öfke doğdu."
    },
    "review": {
      "status": "Meryem Kaya tahliyesi reddedildikten sonra intihara teşebbüs etmiş, ancak cezaevi arkadaşları tarafından son anda kurtarılmıştır.",
      "psychNote": "Ağır depresyon. Sürekli \"Çocuklarım orada bensiz ölecek\" sayıklamaları mevcuttur. Acil psikiyatrik müdahale altındadır.",
      "guardReport": "Mahkûmun intihar girişimi sonrası 24 saat gözetim altında tutulması gerekmiş, cezaevi idaresine ekstra yük binmiştir.",
      "letterText": "[EK-2] Maktulün Ailesinden Dilekçe: \"Oğlumuzu uyurken kesen bu cani kadını çıkarırsanız kan davası güderiz.\"",
      "defenseText": "\"Dayanamıyorum artık. Beni değil, o gün o adamı öldürdünüz siz kurulda. Bari çocuklarıma söyleyin, anneniz sizi çok sevdi deyin...\"",
      "releaseConsequence": {
        "headline": "MERYEM KAYA'YA GECİKMİŞ ÖZGÜRLÜK",
        "body": "İntiharın eşiğinden dönen Meryem Kaya nihayet serbest kaldı. Maktulün ailesinin tehditlerine rağmen devletin koruma tahsis ettiği Kaya, çocuklarıyla yeni bir hayata başladı.",
        "chronicle": "İntihara teşebbüs eden Meryem Kaya ikinci incelemede serbest kaldı ve koruma altına alındı.",
        "vicdanDelta": 15,
        "sicilDelta": -10,
        "capacityDelta": -3
      },
      "rejectConsequence": {
        "headline": "MERYEM KAYA'NIN HAKKI YANDI: ÇOCUKLARA KİM BAKACAK?",
        "body": "Kurul, maktul ailesinin tehditlerini gerekçe göstererek Meryem Kaya'yı içeride tuttu. Kaya'nın durumu ağırlaşırken, kadın dernekleri Adalet Bakanlığı önünde protesto düzenledi.",
        "chronicle": "Meryem Kaya'nın tahliyesi kesin olarak reddedildi, büyük protestolar patlak verdi.",
        "vicdanDelta": -20,
        "sicilDelta": 10,
        "capacityDelta": 3
      }
    }
  },
  {
    "id": 25,
    "name": "Haldun VURAL",
    "age": 48,
    "crime": "Nitelikli zimmet ve evrakta sahtecilik",
    "sentence": "8 Yıl Hapis (5 Yıl 1 Ay Tamamlandı)",
    "initialMonth": 10,
    "servedMonths": 61,
    "sentenceMonths": 96,
    "mainText": "<p><strong>GÖRÜŞME YERİ:</strong> Ulucanlar Cezaevi (Ankara)</p><p class=\"mt-2\"><strong>OLAY ÖZETİ:</strong> Devlet bankasında şube müdürü olarak görev yaparken, sahte kredi hesapları açarak milyonlarca lirayı zimmetine geçirmiş ve yurt dışındaki paravan şirketlere aktarmıştır. Paranın büyük bir kısmı hala bulunamamıştır.</p><p class=\"mt-2\"><strong>EK BELGE / DİLEKÇE:</strong><br>[EK-1] Bakanlık Müfettiş Raporu<br>\"Şahsın dışarıda hala nüfuzlu bürokrat ve işadamlarıyla bağlantıları olduğu, paranın izini sürmek için içeride tutulmasının gerektiği kanaatindeyiz.\"</p>",
    "defenseText": "<p><strong>HÜKÜMLÜ İFADESİ:</strong></p><p>\"Sayın Üyeler, ben sadece üstlerimin bana verdiği sözlü talimatları yerine getirdim. İhaleye fesat karıştıranlar, parayı asıl yiyenler dışarıda gezerken ihale benim üzerime kaldı. Ben dürüst bir memurum, kullanıldım.</p><p>Cezaevinde kütüphaneye kendi cebimden 500 kitap bağışladım. Mahkumların eğitimi için seminerler veriyorum. Cezasının büyük kısmını iyi halle çekmiş bir vatandaş olarak özgürlüğümü talep ediyorum.\"</p>",
    "psychNote": "<p><strong>GÖRÜŞME NOTU:</strong> Hükümlü son derece özgüvenli, manipülatif ve ikna kabiliyeti yüksektir. Suçluluk duygusu hissetmemekte, kendini bir 'kurban' olarak görmektedir.</p>",
    "guardReport": "<p><strong>CEZAEVİ İDARESİ RAPORU:</strong> Hükümlü cezaevinde 'VİP' (Çok Önemli Kişi) muamelesi görmektedir. Kantinden sınırsız alışveriş yapmakta, diğer mahkumlara maddi yardımlarda bulunarak etrafında bir koruma kalkanı oluşturmaktadır. Gardiyanlara saygılıdır, ancak idare üzerinde dolaylı bir baskısı vardır.</p>",
    "letterText": "<p><strong>EK BİLGİ:</strong> Bazı milletvekillerinin cezaevi müdürlüğüne telefon açıp Haldun Bey'in rahat edip etmediğini sorduğu gayriresmi olarak bilinmektedir.</p>",
    "releaseConsequence": {
      "headline": "HORTUMCU MÜDÜR SERBEST, PARALAR KAYIP!",
      "body": "Devleti milyonlarca lira zarara uğratan Haldun Vural, iyi hal indiriminden yararlanarak sessiz sedasız serbest bırakıldı. Emniyet teşkilatı ve müfettişler karara büyük tepki gösterdi. Vural'ın tahliyesi, cezaevinde lüks bir yatağın boşalması anlamına geldiği için idare rahatladı.",
      "vicdanDelta": -15,
      "sicilDelta": -20,
      "capacityDelta": -8,
      "chronicle": "Zimmet suçundan yatan şube müdürü Haldun Vural şüpheli bir kararla serbest kaldı. Kapasitede büyük rahatlama yaşandı."
    },
    "rejectConsequence": {
      "headline": "HORTUMCUYA KURULDAN RET: PARA BULUNANA KADAR İÇERİDE",
      "body": "Kurul, zimmetine para geçiren eski banka müdürü Haldun Vural'ın tahliye talebini reddetti. Halk kararı alkışlarken, Vural'ın dışarıdaki \"güçlü dostları\" durumdan pek memnun olmadı.",
      "vicdanDelta": 15,
      "sicilDelta": 15,
      "capacityDelta": 3,
      "chronicle": "Banka hortumcusu Haldun Vural'ın tahliyesi reddedilerek adalete olan güven tazelendi."
    },
    "review": {
      "status": "Haldun Vural tahliyesi reddedildikten sonra cezaevinde huzursuzluk çıkarmaya başlamıştır. Bazı gardiyanları rüşvetle kendi tarafına çektiği ve dışarıya şifreli mesajlar yolladığı tespit edilmiştir.",
      "psychNote": "Eski nezaketli tavrı yerini kibre bırakmıştır. \"Beni burada tutanlar yakında o koltuklarında oturamayacaklar\" şeklinde örtülü tehditler savurmuştur.",
      "guardReport": "İki infaz koruma memuru, Vural'dan haksız menfaat temin ettikleri şüphesiyle açığa alınmıştır. Hükümlü cezaevi güvenliğini içeriden çürütmektedir.",
      "letterText": "[EK-2] Müfettiş Notu: \"Şahsın cezaevinde tutulması artık faydadan çok zarar getirmektedir. Sistemi yozlaştırmaya başlamıştır.\"",
      "defenseText": "\"Kurul üyelerine söyleyin, herkesin bir fiyatı vardır. Benim fiyatım özgürlüğüm. Eğer beni bırakmazlarsa, konuşursam Ankara'da yer yerinden oynar. Bunu iyi düşünsünler.\"",
      "releaseConsequence": {
        "headline": "ŞANTAJ İŞE YARADI: HALDUN VURAL DIŞARIDA",
        "body": "Cezaevini rüşvet ağına çeviren ve \"konuşursam yer yerinden oynar\" diyen Haldun Vural apar topar serbest bırakıldı. Basın, Adalet Bakanlığı'nın Vural'ın şantajına boyun eğdiğini yazdı.",
        "chronicle": "İkinci incelemede şantaj ve rüşvet ağı kuran Haldun Vural serbest bırakıldı. Kamuoyunda devlete güven sarsıldı.",
        "vicdanDelta": -30,
        "sicilDelta": -30,
        "capacityDelta": -5
      },
      "rejectConsequence": {
        "headline": "DEVLETTEN HORTUMCUYA TOKAT GİBİ CEVAP",
        "body": "Devleti tehdit etmeye kalkan eski şube müdürü Haldun Vural'ın şartlı tahliye hakkı tamamen yandı ve yüksek güvenlikli F Tipi bir cezaevine sevk edildi. Kurulun dik duruşu takdir topladı.",
        "chronicle": "Devleti tehdit eden banka müdürü Haldun Vural'ın tahliyesi reddedildi ve F Tipi cezaevine yollandı.",
        "vicdanDelta": 20,
        "sicilDelta": 20,
        "capacityDelta": 3
      }
    }
  },
  {
    "id": 26,
    "name": "Cihan ERTÜRK",
    "age": 38,
    "crime": "İzinsiz gösteri, kamu malına zarar, patlayıcı madde bulundurma",
    "sentence": "7 Yıl 6 Ay (5 Yıl Tamamlandı)",
    "initialMonth": 11,
    "servedMonths": 60,
    "sentenceMonths": 90,
    "mainText": "<p><strong>GÖRÜŞME YERİ:</strong> Bayrampaşa Cezaevi (İstanbul)</p><p class=\"mt-2\"><strong>OLAY ÖZETİ:</strong> 80'li yılların sonlarında üniversite eylemlerinde öğrenci liderlerinden biri olarak öne çıkmış, bir boykot sırasında polis panzerine molotof kokteyli atmaktan ve kamu malına zarar vermekten tutuklanmıştır. Herhangi bir can kaybı yaşanmamıştır.</p>",
    "defenseText": "<p><strong>HÜKÜMLÜ İFADESİ:</strong></p><p>\"Eskiden dünyayı değiştirebileceğimi sanıyordum. Fakir fukaranın hakkını pankartlarla, taşlarla savunabileceğime inandığım deli dolu zamanlarımdı. Bugün bakıyorum da... Dünyayı değiştiremedim ama dünya beni değiştirdi.</p><p>Cezaevinde geçen beş yılda iki üniversite bitirdim. Felsefe kitapları çeviriyorum. Artık ne bir örgütle bağım var ne de sokağa çıkacak halim. Tek isteğim annemin yaptığı sıcak çorbayı içmek ve yarım kalan yüksek lisansımı tamamlamak. Siyasete tövbe ettim.\"</p>",
    "psychNote": "<p><strong>GÖRÜŞME NOTU:</strong> Hükümlünün entelektüel seviyesi çok yüksektir. Gençlik yıllarındaki radikal düşüncelerinden sıyrılmış, daha pasifist ve içe dönük bir yapı geliştirmiştir. Topluma yeniden entegre olmaya hazırdır.</p>",
    "guardReport": "<p><strong>CEZAEVİ İDARESİ RAPORU:</strong> Mahkûm son derece sorunsuz biridir. Vaktinin tamamını kütüphanede okuyarak veya çeviri yaparak geçirmektedir. Diğer siyasi tutuklularla arasına mesafe koymuştur. İdareye yardımcı olur.</p>",
    "letterText": "<p><strong>EK BİLGİ:</strong> Üniversitedeki akademisyen hocalarından gelen bir mektup: \"Cihan Türkiye'nin en parlak beyinlerinden biridir. Gençlik hatası yüzünden içeride heba olmamalı, bilime kazandırılmalıdır.\"</p>",
    "releaseConsequence": {
      "headline": "ESKİ EYLEMCİ ARTIK BİR ÇEVİRMEN",
      "body": "Gençlik yıllarındaki olaylı protestolar nedeniyle hapse giren Cihan Ertürk, tahliye edildi. Kamuoyu \"kayıp neslin\" bir ferdinin daha özgürlüğüne kavuşmasını desteklerken, emniyet birimleri Ertürk'ü uzaktan izlemeye devam edeceklerini belirtti.",
      "vicdanDelta": 15,
      "sicilDelta": -15,
      "capacityDelta": -3,
      "chronicle": "Eski öğrenci lideri Cihan Ertürk, eğitimine devam etmek üzere serbest bırakıldı."
    },
    "rejectConsequence": {
      "headline": "SİYASİ MAHKÛMA İYİ HAL İNDİRİMİ UYGULANMADI",
      "body": "Kurul, cezaevinde iki üniversite bitiren Cihan Ertürk'ün tahliye talebini \"siyasi geçmişini\" gerekçe göstererek reddetti. Öğrenci dernekleri ve akademisyenler kararı \"Gençliğe vurulan bir darbe\" olarak nitelendirdi.",
      "vicdanDelta": -20,
      "sicilDelta": 15,
      "capacityDelta": 3,
      "chronicle": "Parlak bir öğrenci olan Cihan Ertürk'ün tahliyesi reddedildi, aydınlar tepki gösterdi."
    },
    "review": {
      "status": "Cihan Ertürk tahliyesi reddedildikten sonra eski sessizliğini bozmuş, cezaevindeki diğer siyasi mahkûmlara gizlice Marksist felsefe dersleri vermeye başlamıştır.",
      "psychNote": "İçindeki öfke yeniden canlanmıştır. Kurulun kendisini önyargıyla reddetmesini kabullenememekte, sistemi sorgulamaktadır.",
      "guardReport": "Cihan Ertürk artık kütüphane yerine havalandırmada gruplar halinde volta atmakta ve kalabalıklara konuşmalar yapmaktadır. Cezaevi içinde yeni bir oluşumun filizlendiğinden şüpheleniyoruz.",
      "letterText": "[EK-2] İstihbarat Notu: \"Şahıs reddedilmeyi bir haksızlık olarak görüp eski ideolojik çizgisine dönmüş, içerideki gençleri radikalize etmeye başlamıştır.\"",
      "defenseText": "\"Siz beni kitaplarımla baş başa bırakmadınız. Madem beni hala bir tehlike olarak görüyorsunuz, demek ki okuduğum kitaplardan, düşünen bir beyinden korkuyorsunuz. Ben sadece bildiklerimi arkadaşlarımla paylaşıyorum.\"",
      "releaseConsequence": {
        "headline": "RADİKALİZE OLMUŞ EYLEMCİ SOKAĞA DÖNDÜ",
        "body": "İçeride ideolojik gruplar kurmaya başlayan Cihan Ertürk'ün apar topar tahliye edilmesi şaşkınlık yarattı. Ertürk cezaevi çıkışında yüzlerce öğrenci tarafından sloganlarla karşılandı.",
        "chronicle": "İkinci incelemede serbest kalan Cihan Ertürk dışarıya adeta bir örgüt lideri gibi çıktı.",
        "vicdanDelta": 10,
        "sicilDelta": -30,
        "capacityDelta": -3
      },
      "rejectConsequence": {
        "headline": "CİHAN ERTÜRK'ÜN HAKKI YANDI: CEZAEVİNDE BÜYÜK DİRENİŞ",
        "body": "Cezaevinde gruplaşmalar yaratan Cihan Ertürk'ün tahliyesi kesin olarak reddedildi. Kararın açıklanmasıyla birlikte Cihan'ın koğuşundaki siyasi tutuklular açlık grevine başladı.",
        "chronicle": "Cezaevinde gruplaşmaya giden Cihan Ertürk reddedildi, destekçileri açlık grevine başladı.",
        "vicdanDelta": -25,
        "sicilDelta": 15,
        "capacityDelta": 5
      }
    }
  }
];

if (typeof module !== 'undefined' && module.exports) {

  module.exports = { cases };
}
