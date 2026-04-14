"use client";

import { useState, useEffect } from "react";

// --- VERİ DEPOSU ---
const siteData = {
  personal: {
    name: "Prof. Dr. M. Temel Yılmaz",
    titles: [
      "Endokrinoloji ve Metabolizma Hastalıkları Uzmanı",
      "İç Hastalıkları Uzmanı"
    ],
    phone: "(0212) 296 91 59",
    whatsapp: "+90 533 220 20 10",
    address: "Teşvikiye, Hakkı Yeten Cd. No:17, Kat: 7, 34365 Şişli/İstanbul",
    mapsIframe: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3008.5!2d28.995!3d41.055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab7011e7eb363%3A0xe979be95eb787ec!2zAsc3x_R2xHUgUGxhemE!5e0!3m2!1str!2str!4v1712390000000!5m2!1str!2str"
  },
  // Üst menüde sadeleştirilmiş gruplar
  menu: [
    { name: "Kariyer & Eğitim", link: "#kariyer", icon: <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0v6" /></svg> },
    { name: "Görevler & Üyelikler", link: "#gorevler", icon: <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg> },
    { name: "Ödüller", link: "#oduller", icon: <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg> },
    { name: "Yayınlar", link: "#yayinlar", icon: <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg> },
    { name: "Medyada Biz", link: "#medya", icon: <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" /></svg> },
    { name: "Longevity", link: "#longevity", icon: <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg> },
    { name: "İletişim", link: "#iletisim", icon: <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg> }
  ],
  heroSlides: [
    { id: 1, image: "/giris.jpg", title: "Endokrinoloji ve Metabolizma Hastalıkları Uzmanı" },
    { id: 2, image: "/slayt2.jpg", title: "İç Hastalıkları Uzmanı" },
    { id: 3, image: "/slayt3.jpg", title: "Endokrinoloji ve Metabolizma Hastalıkları Uzmanı" },
    { id: 4, image: "/slayt4.jpg", title: "İç Hastalıkları Uzmanı" }
  ],
  
  // --- YENİ DETAYLI İÇERİKLER ---
  cv: {
    specialties: ["İç Hastalıkları", "Endokrinoloji ve Metabolizma Hastalıkları", "Diyabet", "İmmünoloji", "Diyabet teknolojileri ve tedavi sistemleri", "Halk sağlığı ve diyabet epidemiyolojisi"],
    education: [
      { year: "1976", desc: "İstanbul Üniversitesi Cerrahpaşa Tıp Fakültesi, Doktor" },
      { year: "1981", desc: "İstanbul Üniversitesi Cerrahpaşa Tıp Fakültesi İç Hastalıkları Anabilim Dalı, Uzman Doktor" },
      { year: "1985", desc: "Brussels Free University, Fellowship" },
      { year: "1986", desc: "İstanbul Üniversitesi İstanbul Tıp Fakültesi İç Hastalıkları Anabilim Dalı, Doçent Doktor" },
      { year: "1993", desc: "İstanbul Üniversitesi İstanbul Tıp Fakültesi, Profesör Doktor" }
    ],
    academicRoles: [
      { year: "1994", desc: "İ.Ü. Deneysel Tıp Araştırma Enstitüsü, İmmünoloji Anabilim Dalı Başkanı" },
      { year: "1997", desc: "University of London, Visiting Professor" },
      { year: "2005", desc: "İ.Ü. İstanbul Tıp Fakültesi, Endokrinoloji ve Metabolizma Hastalıkları Bilim Dalı Başkanı" },
      { year: "2010", desc: "İstanbul Üniversitesi, Diyabet Uygulama ve Araştırma Merkezi Müdürü" },
      { year: "2024–", desc: "Acıbadem Üniversitesi, DİYAM Koordinatörü" }
    ],
    nationalRoles: [
      "İstanbul Üniversitesi Deneysel Tıp Araştırma Enstitüsü, Yönetim Kurulu Üyesi",
      "T.C. Adalet Bakanlığı Adli Tıp Kurumu, 5. İhtisas Kurulu ve Genel Kurul Üyesi",
      "TTB İstanbul Tabip Odası, Onur Kurulu Üyesi",
      "T.C. Sağlık Bakanlığı, Diyabet Danışma Kurulu Üyesi",
      "T.C. Sağlık Bakanlığı, Obezite Danışma Kurulu Üyesi",
      "T.C. Sağlık Bakanlığı, Diyabet Eğitim Kurulu Üyesi",
      "Diyabet Araştırma ve Uygulamaları Derneği Başkanı",
      "Türkiye Diyabet Vakfı Başkanı",
      "Ulusal Beslenme Platformu Başkanı"
    ],
    internationalRoles: [
      { year: "1996", desc: "BlackSeaDiab Union, Eş Başkan" },
      { year: "1997", desc: "Kuzey Kıbrıs Ulusal Diyabet Programı, Koordinatör" },
      { year: "1998", desc: "Azer-Turk Diab Twinning Program, Koordinatör" },
      { year: "1999", desc: "V. St. Vincent Declaration Congress, Koordinatör" },
      { year: "1999", desc: "European Diabetes Policy Group, Üye" },
      { year: "2020", desc: "International Diabetes Federation European Region Executive Board" }
    ],
    editorial: [
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
    ],
    membershipsInt: [
      "American Diabetes Association (ADA)",
      "European Association for the Study of Diabetes (EASD)",
      "International Diabetes Federation (IDF)",
      "International Diabetes Immunotherapy Group (IDIG)",
      "International Union of Immunology Societies",
      "International Endocrinology Society"
    ],
    membershipsNat: [
      "Türk Tabipler Birliği",
      "Türkiye Diyabet Vakfı",
      "Türkiye Endokrinoloji ve Metabolizma Derneği",
      "Türk İmmünoloji Derneği",
      "Ulusal Beslenme Platformu",
      "Diyabet ve Beslenme Derneği",
      "Diyabet Araştırma ve Uygulamaları Derneği"
    ],
    awards: [
      { year: "1987", title: "Eczacıbaşı Bilimsel Araştırma Ödülü" },
      { year: "1989", title: "WHO Regional Office for Europe Grant" },
      { year: "1995", title: "IDF / Eli Lilly Fund Grants" },
      { year: "2000", title: "TURDIAB 2000 Diyabet Proje Ödülü" },
      { year: "2000, '02, '06, '07", title: "TURDIAB Diyabet Bilimsel Yayın Ödülü" },
      { year: "2012", title: "Lions Club International Presidents Awards" },
      { year: "2015", title: "IDF European Region Diabetes Award (Kanada)" }
    ],
    researchAreas: [
      "Diyabet (Tip 1 ve Tip 2)", "Endokrinoloji ve Metabolizma", "İmmünoloji", 
      "Obezite", "İnsülin Tedavileri", "Diyabet Teknolojileri", 
      "Patch Pump / Sensör Destekli Sistemler", "Diyabet Epidemiyolojisi", "Diyabet Komplikasyonları ve Klinik Araştırmalar"
    ]
  },
  
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

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === siteData.heroSlides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="min-h-screen bg-white font-sans text-gray-900 scroll-smooth">
      
      {/* --- NAVİGASYON --- */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between xl:flex-col xl:gap-4">
            <div className="font-bold text-lg md:text-xl text-blue-900 leading-tight flex-shrink-0 z-50">
              PROF. DR.<br/>M. TEMEL YILMAZ
            </div>
            <button className="xl:hidden p-2 text-gray-600 focus:outline-none z-50" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
              </svg>
            </button>
            <div className="hidden xl:flex flex-wrap justify-center gap-x-6 gap-y-2">
              {siteData.menu.map((item) => (
                <a key={item.name} href={item.link} className="flex items-center text-sm font-semibold text-gray-700 hover:text-blue-600 transition-colors py-1">
                  {item.icon}{item.name}
                </a>
              ))}
            </div>
          </div>
          <div className={`xl:hidden transition-all duration-300 ease-in-out overflow-hidden ${isMobileMenuOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"}`}>
            <div className="flex flex-col gap-4 pb-4 border-t pt-4">
              {siteData.menu.map((item) => (
                <a key={item.name} href={item.link} onClick={() => setIsMobileMenuOpen(false)} className="flex items-center text-base font-semibold text-gray-800 hover:text-blue-600 px-2">
                  <span className="text-blue-600 mr-3">{item.icon}</span>{item.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* --- HERO / SLIDER --- */}
      <section className="relative h-[100vh] lg:h-[85vh] overflow-hidden pt-20">
        {siteData.heroSlides.map((slide, index) => (
          <div key={slide.id} className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? "opacity-100" : "opacity-0"}`}>
            <img src={slide.image} className="w-full h-full object-cover z-0" alt="" />
            <div className="absolute inset-0 bg-black/40 z-10" />
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-white text-center px-4 relative">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)] leading-tight mt-10">
                {siteData.personal.name}
              </h1>
              <div className="space-y-2 bg-black/30 backdrop-blur-md p-4 sm:p-5 md:p-6 rounded-3xl border border-white/10 shadow-2xl max-w-sm sm:max-w-xl lg:max-w-3xl w-full transition-all duration-500">
                  <p className="text-lg sm:text-xl md:text-2xl font-bold drop-shadow-md text-blue-100 leading-tight">
                    {slide.title}
                  </p>
              </div>
              <p className="absolute bottom-6 right-6 z-30 text-xs font-medium text-white/80 tracking-widest uppercase border border-white/30 bg-black/20 px-4 py-1.5 rounded-full backdrop-blur-sm transition-all duration-300 shadow-lg">
                Arateus Sağlık
              </p>
            </div>
          </div>
        ))}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-3">
          {siteData.heroSlides.map((_, i) => (
            <button key={i} onClick={() => setCurrentSlide(i)} className={`w-3 h-3 rounded-full transition-all duration-300 ${i === currentSlide ? "bg-white w-8" : "bg-white/40 hover:bg-white/60"}`} />
          ))}
        </div>
      </section>

      {/* --- 1. & 10. BÖLÜM: EĞİTİM & UZMANLIK ALANLARI --- */}
      <section id="kariyer" className="py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-1 bg-blue-600 rounded-full"></div>
            <h2 className="text-3xl font-bold text-gray-800">Akademik Eğitim ve Kariyer</h2>
          </div>
          
          {/* Uzmanlık Alanları Etiketleri (Pills) */}
          <div className="flex flex-wrap gap-3 mb-12">
            {siteData.cv.specialties.map((spec, i) => (
              <span key={i} className="bg-blue-50 text-blue-700 border border-blue-100 px-4 py-2 rounded-full text-sm font-semibold shadow-sm">
                {spec}
              </span>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
            {/* Eğitim Zaman Çizelgesi */}
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-8 flex items-center gap-3">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /></svg>
                Eğitim ve Unvanlar
              </h3>
              <div className="space-y-6 border-l-2 border-blue-100 ml-3 pl-6 relative">
                {siteData.cv.education.map((edu, i) => (
                  <div key={i} className="relative">
                    <span className="absolute -left-[35px] top-1 w-4 h-4 rounded-full bg-blue-600 border-4 border-white shadow"></span>
                    <div className="text-blue-600 font-bold text-sm mb-1">{edu.year}</div>
                    <div className="text-gray-700 leading-relaxed font-medium">{edu.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Akademik Görevler Zaman Çizelgesi */}
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-8 flex items-center gap-3">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                Akademik ve İdari Görevler
              </h3>
              <div className="space-y-6 border-l-2 border-blue-100 ml-3 pl-6 relative">
                {siteData.cv.academicRoles.map((role, i) => (
                  <div key={i} className="relative">
                    <span className="absolute -left-[35px] top-1 w-4 h-4 rounded-full bg-blue-600 border-4 border-white shadow"></span>
                    <div className="text-blue-600 font-bold text-sm mb-1">{role.year}</div>
                    <div className="text-gray-700 leading-relaxed font-medium">{role.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 3. 4. 6. 7. BÖLÜM: GÖREVLER & ÜYELİKLER --- */}
      <section id="gorevler" className="py-20 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-4 mb-12 text-center justify-center">
            <h2 className="text-3xl font-bold text-gray-800">Görevler ve Ulusal/Uluslararası Üyelikler</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            
            {/* SOL KOLON: Ulusal */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-blue-900 mb-6 border-b pb-3">Ulusal Ek Görevler</h3>
              <ul className="space-y-4 mb-10">
                {siteData.cv.nationalRoles.map((role, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700">
                    <svg className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                    <span className="leading-snug">{role}</span>
                  </li>
                ))}
              </ul>

              <h3 className="text-xl font-bold text-blue-900 mb-6 border-b pb-3">Ulusal Kuruluş Üyelikleri</h3>
              <div className="flex flex-wrap gap-2">
                {siteData.cv.membershipsNat.map((org, i) => (
                  <span key={i} className="bg-gray-100 text-gray-700 px-3 py-1.5 rounded-lg text-sm font-medium">{org}</span>
                ))}
              </div>
            </div>

            {/* SAĞ KOLON: Uluslararası */}
            <div className="bg-blue-900 rounded-3xl p-8 shadow-lg text-white">
              <h3 className="text-xl font-bold text-blue-100 mb-6 border-b border-blue-700 pb-3">Uluslararası Görevler</h3>
              <div className="space-y-5 mb-10">
                {siteData.cv.internationalRoles.map((role, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="text-blue-300 font-bold text-sm w-12 flex-shrink-0 pt-0.5">{role.year}</div>
                    <div className="text-white leading-snug">{role.desc}</div>
                  </div>
                ))}
              </div>

              <h3 className="text-xl font-bold text-blue-100 mb-6 border-b border-blue-700 pb-3">Uluslararası Kuruluş Üyelikleri</h3>
              <ul className="space-y-3">
                {siteData.cv.membershipsInt.map((org, i) => (
                  <li key={i} className="flex items-center gap-3 text-blue-50">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                    <span className="leading-snug">{org}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* --- 8. BÖLÜM: ÖDÜLLER --- */}
      <section id="oduller" className="py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-1 bg-yellow-500 rounded-full"></div>
            <h2 className="text-3xl font-bold text-gray-800">Ödüller ve Başarılar</h2>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {siteData.cv.awards.map((award, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex flex-col items-start group">
                <div className="bg-yellow-50 text-yellow-600 p-3 rounded-xl mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 2a1 1 0 011 1v1.323l3.954 1.582 1.599-.8a1 1 0 01.894 1.79l-1.233.616 1.738 5.42a1 1 0 01-.285 1.05A3.989 3.989 0 0115 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.715-5.349L11 6.477V16h2a1 1 0 110 2H7a1 1 0 110-2h2V6.477L6.237 7.583l1.715 5.349a1 1 0 01-.285 1.05A3.989 3.989 0 015 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.738-5.42-1.233-.617a1 1 0 01.894-1.788l1.599.799L9 4.323V3a1 1 0 011-1z" clipRule="evenodd" /></svg>
                </div>
                <div className="text-yellow-600 font-bold text-sm mb-2">{award.year}</div>
                <h3 className="font-bold text-gray-800 leading-snug">{award.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 5. & 9. BÖLÜM: YAYINLAR & EDİTÖRYEL GÖREVLER --- */}
      <section id="yayinlar" className="py-20 md:py-24 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-1 bg-blue-600 rounded-full"></div>
            <h2 className="text-3xl font-bold text-gray-800">Bilimsel Yayınlar ve Editöryel Görevler</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Yayınlar & Çalışma Alanları */}
            <div>
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 h-full">
                <h3 className="text-2xl font-bold text-blue-900 mb-4">Uluslararası Literatür</h3>
                <p className="text-gray-700 leading-relaxed mb-8">
                  Prof. Dr. Mehmet Temel Yılmaz’ın <strong>SCI ve SCIE</strong> kapsamındaki dergilerde çok sayıda yayını ve uluslararası diğer prestijli tıp dergilerinde yayımlanmış makaleleri tıp literatüründe önemli bir yer tutmaktadır.
                </p>
                
                <h4 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-4">Öne Çıkan Çalışma Alanları</h4>
                <div className="flex flex-wrap gap-2">
                  {siteData.cv.researchAreas.map((area, i) => (
                    <span key={i} className="bg-blue-100 text-blue-800 px-3 py-1.5 rounded-lg text-sm font-medium">
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Editöryel Kurullar */}
            <div>
               <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                  Bilimsel Dergiler ve Editöryel Kurullar
               </h3>
               <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
                  <ul className="space-y-3">
                    {siteData.cv.editorial.map((item, i) => {
                      const parts = item.split('–');
                      return (
                        <li key={i} className="text-sm md:text-base text-gray-700 border-b border-gray-50 pb-3 last:border-0 last:pb-0">
                          <strong>{parts[0]}</strong> <br className="sm:hidden" />
                          <span className="text-gray-500 italic hidden sm:inline"> – </span>
                          <span className="text-blue-600 font-medium">{parts[1]}</span>
                        </li>
                      );
                    })}
                  </ul>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- MEDYADA BİZ (BASIN & YOUTUBE) --- */}
      <section id="medya" className="py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          
          {/* Basın Başlık */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Basında Biz</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
          </div>
          
          {/* Basın Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
            {siteData.press.map((item) => (
              <a key={item.id} href={item.link} target="_blank" rel="noopener noreferrer" className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all group border border-gray-100 flex flex-col h-full">
                <div className="h-48 overflow-hidden flex-shrink-0">
                  <img src={item.imageUrl} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="" />
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <span className="text-blue-600 text-xs font-bold uppercase tracking-widest">{item.source}</span>
                  <h3 className="font-bold text-base mt-3 leading-snug text-gray-800 group-hover:text-blue-700 transition-colors line-clamp-3">
                    {item.title}
                  </h3>
                </div>
              </a>
            ))}
          </div>

          {/* YouTube Başlık */}
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-1 bg-red-600 rounded-full"></div>
            <h2 className="text-3xl font-bold text-gray-800">YouTube Videoları</h2>
          </div>
          
          {/* YouTube Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {siteData.youtube.map((video) => (
              <div key={video.id} className="rounded-2xl overflow-hidden shadow-md border border-gray-100 bg-white group flex flex-col h-full">
                <div className="relative pt-[56.25%] overflow-hidden flex-shrink-0">
                  <iframe 
                    className="absolute top-0 left-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${video.videoId}`} 
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="p-5 flex-grow flex flex-col bg-gray-50">
                  <p className="text-xs font-bold text-red-600 uppercase tracking-wider mb-2 flex-shrink-0">
                    {video.source}
                  </p>
                  <h3 className="font-bold text-gray-800 text-sm leading-snug group-hover:text-blue-700 transition-colors line-clamp-3 flex-grow">
                    {video.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* --- LONGEVITY --- */}
      <section id="longevity" className="py-20 md:py-24 bg-blue-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-800 rounded-full -mr-32 -mt-32 opacity-20"></div>
        <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Longevity ve Sağlıklı Yaşlanma</h2>
          <p className="text-lg md:text-xl text-blue-100 leading-relaxed max-w-3xl mx-auto mb-10">
            Bilimsel temelli Longevity protokolleri ile yaşlanma sürecini yönetmek ve yaşam kalitesini zirvede tutmak üzerine uzmanlaşmış yaklaşımlar çok yakında burada paylaşılacaktır.
          </p>
          <div className="inline-block px-8 py-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 font-semibold tracking-wider">
            YAKINDA SİZLERLE
          </div>
        </div>
      </section>

      {/* --- İLETİŞİM --- */}
      <section id="iletisim" className="py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-blue-900 leading-tight">İletişim &<br/>Rezervasyon</h2>
            
            <div className="space-y-8 md:space-y-10">
              <div className="flex gap-5 items-center">
                <div className="bg-blue-100 p-4 rounded-full text-blue-600 flex-shrink-0">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase font-bold tracking-widest mb-1">Klinik Telefon</p>
                  <p className="text-2xl font-extrabold text-gray-900">{siteData.personal.phone}</p>
                </div>
              </div>

              <div className="flex gap-5 items-center">
                <div className="bg-green-100 p-4 rounded-full text-green-600 flex-shrink-0">
                  <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase font-bold tracking-widest mb-1">WhatsApp Rezervasyon</p>
                  <a href={`https://wa.me/${siteData.personal.whatsapp.replace(/\s+/g, '')}`} target="_blank" className="text-xl md:text-2xl font-extrabold text-green-600 hover:text-green-700 hover:underline transition-colors block">
                    {siteData.personal.whatsapp}
                  </a>
                </div>
              </div>

              <div className="flex gap-5 items-start">
                <div className="bg-gray-100 p-4 rounded-full text-gray-600 flex-shrink-0 mt-1">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase font-bold tracking-widest mb-1">Klinik Adresi</p>
                  <p className="text-gray-700 leading-relaxed text-sm md:text-base max-w-sm">{siteData.personal.address}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 h-[350px] md:h-[450px] lg:h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl border-4 md:border-8 border-white ring-1 ring-gray-100">
            <iframe src={siteData.personal.mapsIframe} width="100%" height="100%" style={{border:0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </section>

      {/* --- ALT BİLGİ --- */}
      <footer className="bg-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-lg md:text-xl font-bold mb-3 tracking-wide">{siteData.personal.name}</p>
          <p className="text-blue-200 text-xs md:text-sm opacity-90 max-w-md mx-auto leading-relaxed px-4">
            © {new Date().getFullYear()} Tüm Hakları Saklıdır.<br className="hidden md:block" />
            Web sitesinde yer alan tıbbi içerikler yalnızca genel bilgilendirme amacı taşır.
          </p>
        </div>
      </footer>
    </main>
  );
}
