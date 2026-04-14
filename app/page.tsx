"use client";

import { useState, useEffect } from "react";

// --- VERİ DEPOSU ---
const siteData = {
  personal: {
    name: "Prof. Dr. M. Temel Yılmaz",
    phone: "(0212) 296 91 59",
    whatsapp: "+90 533 220 20 10",
    address: "Teşvikiye, Hakkı Yeten Cd. No:17, Kat: 7, 34365 Şişli/İstanbul",
    mapsIframe: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3008.5!2d28.995!3d41.055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab7011e7eb363%3A0xe979be95eb787ec!2zAsc3x_R2xHUgUGxhemE!5e0!3m2!1str!2str!4v1712390000000!5m2!1str!2str"
  },
  
  heroSlides: [
    { id: 1, image: "/giris.jpg", title: "Endokrinoloji ve Metabolizma Hastalıkları Uzmanı" },
    { id: 2, image: "/slayt2.jpg", title: "İç Hastalıkları Uzmanı" },
    { id: 3, image: "/slayt3.jpg", title: "Endokrinoloji ve Metabolizma Hastalıkları Uzmanı" },
    { id: 4, image: "/slayt4.jpg", title: "İç Hastalıkları Uzmanı" }
  ],
  
  // 10 KATEGORİLİK ÖZGEÇMİŞ VERİSİ
  cvCategories: [
    {
      id: "egitim",
      title: "Akademik Eğitim ve Unvanlar",
      items: [
        "1976 – İstanbul Üniversitesi Cerrahpaşa Tıp Fakültesi, Doktor",
        "1981 – İstanbul Üniversitesi Cerrahpaşa Tıp Fakültesi İç Hastalıkları Anabilim Dalı, Uzman Doktor",
        "1985 – Brussels Free University, Fellowship",
        "1986 – İstanbul Üniversitesi İstanbul Tıp Fakültesi İç Hastalıkları Anabilim Dalı, Doçent Doktor",
        "1993 – İstanbul Üniversitesi İstanbul Tıp Fakültesi, Profesör Doktor"
      ]
    },
    {
      id: "idari",
      title: "Akademik ve İdari Görevler",
      items: [
        "1994 – İstanbul Üniversitesi Deneysel Tıp Araştırma Enstitüsü, İmmünoloji Anabilim Dalı Başkanı",
        "1997 – University of London, Visiting Professor",
        "2005 – İstanbul Üniversitesi İstanbul Tıp Fakültesi İç Hastalıkları Anabilim Dalı, Endokrinoloji ve Metabolizma Hastalıkları Bilim Dalı, Profesör Doktor",
        "2010 – İstanbul Üniversitesi, Diyabet Uygulama ve Araştırma Merkezi Müdürü",
        "2024– – Acıbadem Üniversitesi, DİYAM Koordinatörü"
      ]
    },
    {
      id: "ulusal",
      title: "Ulusal Ek Görevler",
      items: [
        "İstanbul Üniversitesi Deneysel Tıp Araştırma Enstitüsü, Yönetim Kurulu Üyesi",
        "T.C. Adalet Bakanlığı Adli Tıp Kurumu, 5. İhtisas Kurulu ve Genel Kurul Üyesi",
        "TTB İstanbul Tabip Odası, Onur Kurulu Üyesi",
        "T.C. Sağlık Bakanlığı, Diyabet Danışma Kurulu Üyesi",
        "T.C. Sağlık Bakanlığı, Obezite Danışma Kurulu Üyesi",
        "T.C. Sağlık Bakanlığı, Diyabet Eğitim Kurulu Üyesi",
        "Diyabet Araştırma ve Uygulamaları Derneği Başkanı",
        "Türkiye Diyabet Vakfı Başkanı",
        "Ulusal Beslenme Platformu Başkanı"
      ]
    },
    {
      id: "uluslararasi",
      title: "Uluslararası Görevler",
      items: [
        "1996 – BlackSeaDiab Union, Eş Başkan",
        "1997 – Kuzey Kıbrıs Ulusal Diyabet Programı, Koordinatör",
        "1998 – Azer-Turk Diab Twinning Program, Koordinatör",
        "1999 – V. St. Vincent Declaration Congress, Koordinatör",
        "1999 – European Diabetes Policy Group, Üye",
        "2020 – International Diabetes Federation European Region Executive Board"
      ]
    },
    {
      id: "editoryel",
      title: "Bilimsel Dergiler ve Editöryel Görevler",
      items: [
        "International Diabetes Monitor – Review Editor",
        "Dialogue, Diabetes Literature Review Service – Editorial Board",
        "Annals of Medical Sciences – Editorial Board",
        "Turkish Journal of Endocrinology – Editorial Board",
        "Turkish Journal of Endocrinology and Metabolism – Editorial Board",
        "Adli Tıp Bülteni – Editöryel Kurul",
        "Klinik Gelişim Bülteni – Review Editor",
        "Diabetes Forum – Editöryel Kurul",
        "Türkiye Klinikleri Dergisi – Danışma Kurulu",
        "TURKDİAB Diyabet Tanı ve Tedavi Rehberi – Editöryel ve Redaksiyon Kurulu",
        "Journal of Diabetes – Editorial Board"
      ]
    },
    {
      id: "uyelik-int",
      title: "Üyesi Olduğu Uluslararası Kuruluşlar",
      items: [
        "American Diabetes Association (ADA)",
        "European Association for the Study of Diabetes (EASD)",
        "International Diabetes Federation (IDF)",
        "International Diabetes Immunotherapy Group (IDIG)",
        "International Union of Immunology Societies",
        "International Endocrinology Society"
      ]
    },
    {
      id: "uyelik-nat",
      title: "Üyesi Olduğu Ulusal Kuruluşlar",
      items: [
        "Türk Tabipler Birliği",
        "Türkiye Diyabet Vakfı",
        "Türkiye Endokrinoloji ve Metabolizma Derneği",
        "Türk İmmünoloji Derneği",
        "Ulusal Beslenme Platformu",
        "Diyabet ve Beslenme Derneği",
        "Diyabet Araştırma ve Uygulamaları Derneği"
      ]
    },
    {
      id: "oduller",
      title: "Aldığı Ödüller",
      items: [
        "1987 – Eczacıbaşı Bilimsel Araştırma Ödülü",
        "1989 – WHO Regional Office for Europe Grant",
        "1995 – IDF / Eli Lilly Fund Grants",
        "2000 – TURDIAB 2000 Diyabet Proje Ödülü",
        "2000, 2002, 2006, 2007 – TURDIAB Diyabet Bilimsel Yayın Ödülü",
        "2012 – Lions Club International Presidents Awards",
        "2015 – International Diabetes Federation European Region Diabetes Award (Kanada)"
      ]
    },
    {
      id: "yayinlar",
      title: "Bilimsel Yayınlar",
      customContent: (
        <div className="space-y-10">
          <p className="text-[#333] leading-relaxed text-lg font-light tracking-wide">
            Prof. Dr. Mehmet Temel Yılmaz’ın <strong>SCI ve SCIE kapsamındaki</strong> dergilerde çok sayıda yayını ve uluslararası diğer dergilerde yayımlanmış makaleleri yer almaktadır.
          </p>
          <div>
            <h4 className="text-xl font-bold text-[#111] mb-6">Öne Çıkan Çalışma Alanları</h4>
            <ul className="space-y-4">
              {["Diyabet", "Tip 1 ve Tip 2 diyabet", "Endokrinoloji ve metabolizma", "İmmünoloji", "Obezite", "İnsülin tedavileri", "Diyabet teknolojileri", "Patch pump / sensör destekli sistemler", "Diyabet epidemiyolojisi", "Diyabet komplikasyonları ve klinik araştırmalar"].map((tag, i) => (
                <li key={i} className="flex items-start gap-4 text-[#333]">
                  <span className="mt-2.5 w-1.5 h-1.5 bg-[#111] rounded-full shrink-0"></span>
                  <span className="leading-relaxed tracking-wide font-light">{tag}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )
    },
    {
      id: "uzmanlik",
      title: "Akademik ve Mesleki Uzmanlık Alanları",
      items: [
        "İç Hastalıkları",
        "Endokrinoloji ve Metabolizma Hastalıkları",
        "Diyabet",
        "İmmünoloji",
        "Diyabet teknolojileri ve tedavi sistemleri",
        "Halk sağlığı ve diyabet epidemiyolojisi"
      ]
    }
  ],

  press: [
    { id: 1, title: "Yılın Bilim Adamı Ödülü Prof. Dr. M. Temel Yılmaz'a Verildi", source: "Medimagazin", link: "https://medimagazin.com.tr/hekim/yilin-bilim-adami-odulu-prof-dr-m-temel-yilmaza-verildi-67689", imageUrl: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?q=80&w=800" },
    { id: 2, title: "Diyabet ve Obezite Tedavisinde Çığır Açan Gelişme", source: "Haberler | Sağlık", link: "https://www.haberler.com/saglik/diyabet-ve-obezitenin-tedavisinde-cigir-acan-16454728-haberi/", imageUrl: "https://images.unsplash.com/photo-1576091160550-2173ff9e9e9c?q=80&w=800" }
  ],
  
  youtube: [
    { id: 1, title: "Diyabet ve Tedavisindeki Son Gelişmeler", videoId: "aXqOdeTjIkw", source: "Sağlığım İçin Herşey" },
    { id: 2, title: "Diyabet Teknolojilerinde Sensör Seçimi", videoId: "i2lICTizkYg", source: "Ok But First Insulin" },
    { id: 3, title: "Türkiye'de 12 milyon diyabetli var!", videoId: "T5BkPFfnI_M", source: "12'de Sağlık" },
    { id: 4, title: "İnsülinin keşfi kadar büyük bir başarı", videoId: "Jx0Ew7GvLdw", source: "HABERTÜRK" },
    { id: 5, title: "300'den fazla akademisyenin 10 yıllık çalışması", videoId: "h9iWfzpA4_Y", source: "HABERTÜRK TV" },
    { id: 6, title: "Brittle (Oynak) Diyabet Nedir?", videoId: "k7vnLkbw0KM", source: "Acıbadem Sağlık Grubu" },
    { id: 7, title: "Gün Ortası | Prof. Dr. Temel Yılmaz", videoId: "FWHMdHKLTJ0", source: "EKOTÜRK TV" },
    { id: 8, title: "14 Kasım Diyabet Günü", videoId: "l3oNE0JUtqc", source: "HABERTÜRK TV" },
    { id: 9, title: "Expo Channel - Profesyoneller", videoId: "PDPLWz_miGE", source: "Profesyoneller" },
    { id: 10, title: "Türk Diyabet Vakfı Başkanı CNN Türk'e Konuştu", videoId: "awJ8OntgrdY", source: "Hadi 7'le" },
    { id: 11, title: "Türk Diyabet Vakfı Başkanı Kanal D'ye Konuştu", videoId: "4otgLxrttOE", source: "Hadi 7'le" },
    { id: 12, title: "Gülay Üserbay ile Sağlıklı Yaşam", videoId: "x2jOgpITT8Y", source: "KRT TV" },
    { id: 13, title: "Diyabet Hastalığında Doğru Bilinen Yanlışlar", videoId: "jZOW4e6Rgos", source: "Sağlığım İçin Herşey" },
    { id: 14, title: "\"50 diyabetli kadın\" projesi", videoId: "9vOCiYidITA", source: "Habertürk" },
    { id: 15, title: "Derya Baykal ile Hayata Dair | 149. Bölüm", videoId: "kGubtVnLaAI", source: "TYT Türk" },
    { id: 16, title: "TRT Türkçe - Ayn el Alem / Röportaj", videoId: "VZ8zdmks7Jw", source: "Yusuf Sami Kamadan" }
  ]
};

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
  // null = Ana Sayfa, string = İlgili Alt Sayfa
  const [activePage, setActivePage] = useState<string | null>(null);

  useEffect(() => {
    if (activePage === null) {
      const timer = setInterval(() => {
        setCurrentSlide((prev) => (prev === siteData.heroSlides.length - 1 ? 0 : prev + 1));
      }, 5000);
      return () => clearInterval(timer);
    }
  }, [activePage]);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const navigateTo = (pageId: string | null, hash?: string) => {
    setActivePage(pageId);
    setIsMobileMenuOpen(false);
    setIsDropdownOpen(false);
    if (hash) {
      setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      scrollToTop();
    }
  };

  return (
    <main className="min-h-screen bg-white font-sans text-[#111] selection:bg-[#111] selection:text-white">
      
      {/* --- MİNİMALİST NAVBAR --- */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
          
          <button onClick={() => navigateTo(null)} className="text-left focus:outline-none">
            <h1 className="font-extrabold text-xl tracking-tight text-[#111]">
              PROF. DR. <br/>M. TEMEL YILMAZ
            </h1>
          </button>

          {/* Masaüstü Menü */}
          <div className="hidden lg:flex items-center gap-8">
            
            {/* DROPDOWN: Hakkında */}
            <div 
              className="relative group h-24 flex items-center"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button className="text-[15px] font-medium text-gray-500 hover:text-[#111] transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:h-[1px] after:bg-[#111] after:w-0 hover:after:w-full after:transition-all after:duration-300 flex items-center gap-1.5">
                Hakkında
                <svg className={`w-4 h-4 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" /></svg>
              </button>

              {/* Açılır Kutu (Beyaz, hafif gölge, yuvarlak köşe) */}
              <div className={`absolute top-[80px] left-0 w-80 bg-white border border-gray-100 shadow-[0_15px_40px_rgba(0,0,0,0.08)] rounded-[10px] py-3 transition-all duration-300 ${isDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-2'}`}>
                {siteData.cvCategories.map((cat) => (
                  <button 
                    key={cat.id} 
                    onClick={() => navigateTo(cat.id)}
                    className="block w-full text-left px-6 py-2.5 text-[14px] text-[#333] font-medium hover:bg-[#f5f5f5] transition-colors leading-relaxed"
                  >
                    {cat.title}
                  </button>
                ))}
              </div>
            </div>

            {/* Diğer Menüler */}
            <button onClick={() => navigateTo(null, '#basin')} className="text-[15px] font-medium text-gray-500 hover:text-[#111] transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:h-[1px] after:bg-[#111] after:w-0 hover:after:w-full after:transition-all after:duration-300">
              Basında Biz
            </button>
            <button onClick={() => navigateTo(null, '#youtube')} className="text-[15px] font-medium text-gray-500 hover:text-[#111] transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:h-[1px] after:bg-[#111] after:w-0 hover:after:w-full after:transition-all after:duration-300">
              YouTube
            </button>
            
            <button onClick={() => navigateTo(null, '#longevity')} className="flex flex-col items-center group">
              <span className="text-[15px] font-medium text-gray-500 group-hover:text-[#111] transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:h-[1px] after:bg-[#111] after:w-0 group-hover:after:w-full after:transition-all after:duration-300">
                Longevity
              </span>
              <span className="text-[10px] text-gray-400 font-medium mt-1 uppercase tracking-widest">(Pek Yakında)</span>
            </button>
            
            <button onClick={() => navigateTo(null, '#iletisim')} className="text-[15px] font-medium text-gray-500 hover:text-[#111] transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:h-[1px] after:bg-[#111] after:w-0 hover:after:w-full after:transition-all after:duration-300">
              İletişim
            </button>
          </div>

          {/* Mobil Hamburger İkonu */}
          <button className="lg:hidden p-2 text-[#111]" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 8h16M4 16h16" />}
            </svg>
          </button>
        </div>

        {/* Mobil Menü İçeriği */}
        <div className={`lg:hidden overflow-hidden bg-white transition-all duration-300 ${isMobileMenuOpen ? "max-h-[80vh] border-t border-gray-100" : "max-h-0"}`}>
          <div className="flex flex-col p-6 space-y-6 overflow-y-auto">
            <div className="space-y-4">
              <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest border-b border-gray-100 pb-2">Hakkında</p>
              {siteData.cvCategories.map((cat) => (
                <button key={cat.id} onClick={() => navigateTo(cat.id)} className="block w-full text-left text-[15px] text-[#333] font-medium py-1">
                  {cat.title}
                </button>
              ))}
            </div>
            <div className="space-y-4 border-t border-gray-100 pt-6">
              <button onClick={() => navigateTo(null, '#basin')} className="block w-full text-left text-lg font-bold text-[#111]">Basında Biz</button>
              <button onClick={() => navigateTo(null, '#youtube')} className="block w-full text-left text-lg font-bold text-[#111]">YouTube</button>
              <button onClick={() => navigateTo(null, '#longevity')} className="block w-full text-left text-lg font-bold text-[#111]">Longevity <span className="text-xs font-normal text-gray-400 ml-2 uppercase tracking-wider">(Pek Yakında)</span></button>
              <button onClick={() => navigateTo(null, '#iletisim')} className="block w-full text-left text-lg font-bold text-[#111]">İletişim</button>
            </div>
          </div>
        </div>
      </nav>

      {/* ==================================================== */}
      {/* DURUM 1: ANA SAYFA                                   */}
      {/* ==================================================== */}
      {activePage === null && (
        <div className="animate-fade-in">
          
          {/* HERO */}
          <section className="relative h-[100vh] lg:h-[90vh] bg-black pt-24 flex items-center justify-center overflow-hidden">
            {siteData.heroSlides.map((slide, index) => (
              <div key={slide.id} className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? "opacity-100" : "opacity-0"}`}>
                <img src={slide.image} className="w-full h-full object-cover object-top opacity-80" alt="" />
                {/* Siyah Gradiyent Maske */}
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-10" />
                
                <div className="absolute inset-0 z-20 flex flex-col items-center justify-center px-4 text-center">
                  <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 drop-shadow-lg tracking-tight">
                    {siteData.personal.name}
                  </h1>
                  <p className="text-lg md:text-2xl font-light tracking-wide text-white/90 drop-shadow-md">
                    {slide.title}
                  </p>
                </div>
              </div>
            ))}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30 flex gap-4">
              {siteData.heroSlides.map((_, i) => (
                <button key={i} onClick={() => setCurrentSlide(i)} className={`h-[2px] rounded-full transition-all duration-300 ${i === currentSlide ? "bg-white w-12" : "bg-white/30 w-6 hover:bg-white/60"}`} />
              ))}
            </div>
          </section>

          {/* BASINDA BİZ */}
          <section id="basin" className="py-32 bg-white">
            <div className="max-w-6xl mx-auto px-6">
              <div className="mb-16">
                <h2 className="text-4xl font-bold text-[#111] tracking-tight mb-4">Basında Biz</h2>
                <div className="w-12 h-[1px] bg-black"></div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-12">
                {siteData.press.map((item) => (
                  <a key={item.id} href={item.link} target="_blank" rel="noopener noreferrer" className="group block">
                    <div className="aspect-[16/9] overflow-hidden bg-gray-100 mb-6">
                      <img src={item.imageUrl} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" alt="" />
                    </div>
                    <p className="text-[11px] font-bold tracking-widest uppercase text-gray-400 mb-2">{item.source}</p>
                    <h3 className="text-2xl font-medium text-[#111] leading-snug group-hover:text-gray-500 transition-colors">{item.title}</h3>
                  </a>
                ))}
              </div>
            </div>
          </section>

          {/* YOUTUBE */}
          <section id="youtube" className="py-32 bg-[#fafafa]">
            <div className="max-w-7xl mx-auto px-6">
              <div className="mb-16">
                <h2 className="text-4xl font-bold text-[#111] tracking-tight mb-4">YouTube</h2>
                <div className="w-12 h-[1px] bg-black"></div>
              </div>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {siteData.youtube.map((video) => (
                  <div key={video.id} className="group">
                    <div className="relative pt-[56.25%] overflow-hidden bg-black mb-4">
                      <iframe 
                        className="absolute top-0 left-0 w-full h-full"
                        src={`https://www.youtube.com/embed/${video.videoId}`} 
                        title={video.title}
                        loading="lazy"
                        allowFullScreen
                      ></iframe>
                    </div>
                    <p className="text-[10px] font-bold tracking-widest uppercase text-gray-400 mb-1">{video.source}</p>
                    <h3 className="text-sm font-medium text-[#111] leading-snug line-clamp-2 group-hover:text-gray-500 transition-colors">{video.title}</h3>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* LONGEVITY (MİNİMAL) */}
          <section id="longevity" className="py-40 bg-white text-center flex flex-col items-center justify-center border-y border-gray-100">
            <h2 className="text-4xl md:text-5xl font-light text-[#111] mb-2 tracking-wider">Longevity</h2>
            <p className="text-gray-400 text-xs tracking-[0.3em] uppercase mb-8">Pek Yakında</p>
            <div className="w-16 h-[1px] bg-gray-300 mb-8"></div>
            <p className="text-gray-500 font-light text-lg tracking-wide">Bu bölüm çok yakında aktif olacaktır.</p>
          </section>

          {/* İLETİŞİM (MİNİMAL FORM) */}
          <section id="iletisim" className="py-32 bg-white">
            <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-20">
              
              {/* İletişim Bilgileri */}
              <div>
                <h2 className="text-4xl font-bold text-[#111] tracking-tight mb-4">İletişim</h2>
                <div className="w-12 h-[1px] bg-black mb-12"></div>
                
                <div className="space-y-10">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Adres</p>
                    <p className="text-[#333] font-light leading-relaxed max-w-sm">{siteData.personal.address}</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Telefon & WhatsApp</p>
                    <p className="text-[#333] font-light mb-1">{siteData.personal.phone}</p>
                    <a href={`https://wa.me/${siteData.personal.whatsapp.replace(/\s+/g, '')}`} target="_blank" className="text-[#111] font-medium hover:text-gray-500 transition-colors border-b border-[#111] pb-0.5">
                      {siteData.personal.whatsapp}
                    </a>
                  </div>
                </div>
              </div>

              {/* Minimal Form */}
              <div>
                <form className="flex flex-col gap-8">
                  <input type="text" placeholder="Ad Soyad" className="w-full border-b border-gray-300 py-3 text-[#111] placeholder-gray-400 outline-none focus:border-black transition-colors bg-transparent font-light" />
                  <input type="email" placeholder="E-posta" className="w-full border-b border-gray-300 py-3 text-[#111] placeholder-gray-400 outline-none focus:border-black transition-colors bg-transparent font-light" />
                  <textarea placeholder="Mesaj" rows={4} className="w-full border-b border-gray-300 py-3 text-[#111] placeholder-gray-400 outline-none focus:border-black transition-colors bg-transparent font-light resize-none"></textarea>
                  <button type="button" className="bg-[#111] text-white px-10 py-4 self-start hover:bg-[#333] transition-colors font-medium tracking-wide">
                    Gönder
                  </button>
                </form>
              </div>
            </div>
          </section>
        </div>
      )}

      {/* ==================================================== */}
      {/* DURUM 2: ÖZGEÇMİŞ ALT SAYFASI (CLEAN TYPOGRAPHY)     */}
      {/* ==================================================== */}
      {activePage !== null && (
        <div className="animate-fade-in min-h-screen bg-white pt-40 pb-32">
          <div className="max-w-4xl mx-auto px-6">
            
            {/* Minimal Geri Butonu */}
            <button onClick={() => navigateTo(null)} className="group flex items-center gap-2 text-gray-400 hover:text-[#111] transition-colors text-sm font-medium uppercase tracking-widest mb-16">
              <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
              Ana Sayfa
            </button>

            {siteData.cvCategories.filter(c => c.id === activePage).map((category) => (
              <div key={category.id}>
                <h1 className="text-4xl md:text-5xl font-bold text-[#111] mb-8 tracking-tight">{category.title}</h1>
                <div className="w-16 h-[2px] bg-[#111] mb-16"></div>

                <div className="prose prose-lg max-w-none">
                  
                  {/* Kısa, net, boşluklu liste formatı */}
                  {(category.items || category.list) && (
                    <ul className="space-y-8 list-none pl-0">
                      {(category.items || category.list || []).map((item, i) => (
                        <li key={i} className="flex items-start gap-5 text-[#333] text-lg font-light leading-relaxed">
                          {/* İsviçre tarzı minimal madde işareti */}
                          <span className="mt-3 w-1.5 h-1.5 bg-[#111] shrink-0"></span> 
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {category.customContent && category.customContent}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* --- MİNİMAL FOOTER --- */}
      <footer className="bg-white py-12 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#111] font-bold tracking-tight">{siteData.personal.name}</p>
          <p className="text-gray-400 text-xs tracking-widest uppercase">© {new Date().getFullYear()} Tüm Hakları Saklıdır.</p>
        </div>
      </footer>
      
    </main>
  );
}
