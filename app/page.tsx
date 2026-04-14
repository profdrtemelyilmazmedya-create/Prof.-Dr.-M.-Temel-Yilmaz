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
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5zm0 0v6" /></svg>,
      items: [
        { year: "1976", desc: "İstanbul Üniversitesi Cerrahpaşa Tıp Fakültesi, Doktor" },
        { year: "1981", desc: "İstanbul Üniversitesi Cerrahpaşa Tıp Fakültesi İç Hastalıkları Anabilim Dalı, Uzman Doktor" },
        { year: "1985", desc: "Brussels Free University, Fellowship" },
        { year: "1986", desc: "İstanbul Üniversitesi İstanbul Tıp Fakültesi İç Hastalıkları Anabilim Dalı, Doçent Doktor" },
        { year: "1993", desc: "İstanbul Üniversitesi İstanbul Tıp Fakültesi, Profesör Doktor" }
      ]
    },
    {
      id: "idari",
      title: "Akademik ve İdari Görevler",
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>,
      items: [
        { year: "1994", desc: "İstanbul Üniversitesi Deneysel Tıp Araştırma Enstitüsü, İmmünoloji Anabilim Dalı Başkanı" },
        { year: "1997", desc: "University of London, Visiting Professor" },
        { year: "2005", desc: "İstanbul Üniversitesi İstanbul Tıp Fakültesi İç Hastalıkları Anabilim Dalı, Endokrinoloji ve Metabolizma Hastalıkları Bilim Dalı, Profesör Doktor" },
        { year: "2010", desc: "İstanbul Üniversitesi, Diyabet Uygulama ve Araştırma Merkezi Müdürü" },
        { year: "2024–", desc: "Acıbadem Üniversitesi, DİYAM Koordinatörü" }
      ]
    },
    {
      id: "ulusal",
      title: "Ulusal Ek Görevler",
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" /></svg>,
      list: [
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
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
      items: [
        { year: "1996", desc: "BlackSeaDiab Union, Eş Başkan" },
        { year: "1997", desc: "Kuzey Kıbrıs Ulusal Diyabet Programı, Koordinatör" },
        { year: "1998", desc: "Azer-Turk Diab Twinning Program, Koordinatör" },
        { year: "1999", desc: "V. St. Vincent Declaration Congress, Koordinatör" },
        { year: "1999", desc: "European Diabetes Policy Group, Üye" },
        { year: "2020", desc: "International Diabetes Federation European Region Executive Board" }
      ]
    },
    {
      id: "editoryel",
      title: "Bilimsel Dergiler ve Editöryel Görevler",
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>,
      list: [
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
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>,
      list: [
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
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>,
      list: [
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
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>,
      items: [
        { year: "1987", desc: "Eczacıbaşı Bilimsel Araştırma Ödülü" },
        { year: "1989", desc: "WHO Regional Office for Europe Grant" },
        { year: "1995", desc: "IDF / Eli Lilly Fund Grants" },
        { year: "2000", desc: "TURDIAB 2000 Diyabet Proje Ödülü" },
        { year: "2000, 2002, 2006, 2007", desc: "TURDIAB Diyabet Bilimsel Yayın Ödülü" },
        { year: "2012", desc: "Lions Club International Presidents Awards" },
        { year: "2015", desc: "International Diabetes Federation European Region Diabetes Award (Kanada)" }
      ]
    },
    {
      id: "yayinlar",
      title: "Bilimsel Yayınlar",
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>,
      customContent: (
        <div className="space-y-6">
          <p className="text-lg text-gray-700 leading-relaxed">
            Prof. Dr. Mehmet Temel Yılmaz’ın <strong>SCI ve SCIE</strong> kapsamındaki dergilerde çok sayıda yayını ve uluslararası diğer dergilerde yayımlanmış makaleleri yer almaktadır.
          </p>
          <h4 className="font-bold text-blue-900 mt-8 mb-4 text-xl">Öne Çıkan Çalışma Alanları:</h4>
          <div className="flex flex-wrap gap-3">
            {["Diyabet", "Tip 1 ve Tip 2 diyabet", "Endokrinoloji ve metabolizma", "İmmünoloji", "Obezite", "İnsülin tedavileri", "Diyabet teknolojileri", "Patch pump / sensör destekli sistemler", "Diyabet epidemiyolojisi", "Diyabet komplikasyonları ve klinik araştırmalar"].map((tag, i) => (
               <span key={i} className="bg-blue-50 text-blue-700 px-4 py-2 rounded-xl text-sm font-medium border border-blue-100">{tag}</span>
            ))}
          </div>
        </div>
      )
    },
    {
      id: "uzmanlik",
      title: "Akademik ve Mesleki Uzmanlık Alanları",
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>,
      list: [
        "İç Hastalıkları",
        "Endokrinoloji ve Metabolizma Hastalıkları",
        "Diyabet",
        "İmmünoloji",
        "Diyabet teknolojileri ve tedavi sistemleri",
        "Halk sağlığı ve diyabet epidemiyolojisi"
      ]
    }
  ],

  // Medya ve Youtube (Kısmı)
  press: [
    { id: 1, title: "Yılın Bilim Adamı Ödülü Prof. Dr. M. Temel Yılmaz'a Verildi", source: "Medimagazin", link: "https://medimagazin.com.tr/hekim/yilin-bilim-adami-odulu-prof-dr-m-temel-yilmaza-verildi-67689", imageUrl: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?q=80&w=800" },
    { id: 2, title: "Diyabet ve Obezite Tedavisinde Çığır Açan Gelişme", source: "Haberler | Sağlık", link: "https://www.haberler.com/saglik/diyabet-ve-obezitenin-tedavisinde-cigir-acan-16454728-haberi/", imageUrl: "https://images.unsplash.com/photo-1576091160550-2173ff9e9e9c?q=80&w=800" }
  ],
  youtube: [
    { id: 1, title: "Diyabet ve Tedavisindeki Son Gelişmeler", videoId: "aXqOdeTjIkw", source: "Sağlığım İçin Herşey" },
    { id: 2, title: "Diyabet Teknolojilerinde Sensör Seçimi", videoId: "i2lICTizkYg", source: "Ok But First Insulin" },
    { id: 3, title: "Türkiye'de 12 milyon diyabetli var!", videoId: "T5BkPFfnI_M", source: "12'de Sağlık" },
    { id: 4, title: "İnsülinin keşfi kadar büyük bir başarı", videoId: "Jx0Ew7GvLdw", source: "HABERTÜRK" }
  ]
};

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // SAYFA YÖNETİMİ İÇİN STATE (null ise ana sayfa, değilse kategori id'si)
  const [activePage, setActivePage] = useState<string | null>(null);

  useEffect(() => {
    // Slayt zamanlayıcısı sadece ana sayfadaysak çalışsın
    if (activePage === null) {
      const timer = setInterval(() => {
        setCurrentSlide((prev) => (prev === siteData.heroSlides.length - 1 ? 0 : prev + 1));
      }, 5000);
      return () => clearInterval(timer);
    }
  }, [activePage]);

  // Ekranın en üstüne kaydırma fonksiyonu
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Kategori değiştirme fonksiyonu
  const handleCategoryClick = (id: string) => {
    setActivePage(id);
    scrollToTop();
    setIsMobileMenuOpen(false);
  };

  // Ana Sayfaya dönme fonksiyonu
  const goHome = () => {
    setActivePage(null);
    scrollToTop();
    setIsMobileMenuOpen(false);
  };

  return (
    <main className="min-h-screen bg-gray-50 font-sans text-gray-900">
      
      {/* --- ORTAK NAVİGASYON --- */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <button onClick={goHome} className="text-left focus:outline-none group">
            <div className="font-extrabold text-xl md:text-2xl text-blue-900 leading-none group-hover:text-blue-700 transition-colors">
              PROF. DR. <br/>M. TEMEL YILMAZ
            </div>
          </button>

          {/* Menü İkonu (Mobil) */}
          <button className="lg:hidden p-2 text-gray-600 focus:outline-none" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>

          {/* Masaüstü Menü */}
          <div className="hidden lg:flex items-center gap-8">
            <button onClick={goHome} className={`font-semibold hover:text-blue-600 transition-colors ${activePage === null ? 'text-blue-600' : 'text-gray-600'}`}>Ana Sayfa</button>
            <a href="#iletisim" onClick={goHome} className="font-semibold text-gray-600 hover:text-blue-600 transition-colors">İletişim</a>
            <a href={`https://wa.me/${siteData.personal.whatsapp.replace(/\s+/g, '')}`} target="_blank" className="bg-green-500 hover:bg-green-600 text-white px-5 py-2.5 rounded-full font-bold shadow-md transition-all flex items-center gap-2">
               <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
               Randevu
            </a>
          </div>
        </div>

        {/* Mobil Açılır Menü */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden bg-white ${isMobileMenuOpen ? "max-h-96 border-t" : "max-h-0"}`}>
          <div className="flex flex-col p-4 gap-4">
            <button onClick={goHome} className="text-left font-bold text-lg text-blue-600">Ana Sayfa</button>
            <div className="border-t border-gray-100 pt-4">
               <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Özgeçmiş Kategorileri</p>
               {siteData.cvCategories.map((cat) => (
                 <button key={cat.id} onClick={() => handleCategoryClick(cat.id)} className="block w-full text-left py-2 font-semibold text-gray-700 hover:text-blue-600">
                   {cat.title}
                 </button>
               ))}
            </div>
          </div>
        </div>
      </nav>

      {/* ========================================= */}
      {/* DURUM 1: ANA SAYFA GÖRÜNÜMÜ               */}
      {/* ========================================= */}
      {activePage === null && (
        <div className="animate-fade-in pt-20">
          
          {/* HERO SLIDER */}
          <section className="relative h-[85vh] overflow-hidden bg-gray-900">
            {siteData.heroSlides.map((slide, index) => (
              <div key={slide.id} className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? "opacity-100" : "opacity-0"}`}>
                {/* object-top kullanıldı, mobilde kafanın kesilmemesi için */}
                <img src={slide.image} className="w-full h-full object-cover object-top z-0" alt="" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-10" />
                
                <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-white text-center px-4">
                  <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold mb-6 drop-shadow-xl leading-tight">
                    {siteData.personal.name}
                  </h1>
                  <div className="bg-black/30 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/20 shadow-2xl transition-all duration-500">
                      <p className="text-xl md:text-3xl font-bold text-blue-50 tracking-wide">
                        {slide.title}
                      </p>
                  </div>
                  <p className="absolute bottom-8 right-8 text-xs font-bold tracking-[0.2em] uppercase border border-white/30 bg-black/40 px-4 py-2 rounded-full backdrop-blur-md">
                    Arateus Sağlık
                  </p>
                </div>
              </div>
            ))}
            {/* Slayt Noktaları */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex gap-3">
              {siteData.heroSlides.map((_, i) => (
                <button key={i} onClick={() => setCurrentSlide(i)} className={`h-2.5 rounded-full transition-all duration-300 ${i === currentSlide ? "bg-white w-10" : "bg-white/40 w-2.5 hover:bg-white/70"}`} />
              ))}
            </div>
          </section>

          {/* KATEGORİ KARTLARI (Özgeçmiş Menüsü) */}
          <section className="py-24 bg-gray-50 relative -mt-10 z-30 rounded-t-[3rem] shadow-[0_-10px_40px_rgba(0,0,0,0.1)]">
            <div className="max-w-7xl mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-extrabold text-blue-900 mb-4">Akademik Özgeçmiş</h2>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto">Detaylı bilgi almak istediğiniz başlığa tıklayarak içeriği inceleyebilirsiniz.</p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
                {siteData.cvCategories.map((category) => (
                  <button 
                    key={category.id}
                    onClick={() => handleCategoryClick(category.id)}
                    className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-blue-200 hover:-translate-y-1 transition-all duration-300 text-left group flex flex-col items-start h-full"
                  >
                    <div className="bg-blue-50 text-blue-600 p-4 rounded-xl mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      {category.icon}
                    </div>
                    <h3 className="font-bold text-gray-800 text-lg leading-snug group-hover:text-blue-700 transition-colors">
                      {category.title}
                    </h3>
                    <div className="mt-auto pt-6 flex items-center text-blue-600 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                      İncele <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </section>

          {/* BASINDA BİZ & YOUTUBE */}
          <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4">
              <h2 className="text-3xl font-extrabold text-blue-900 mb-12 flex items-center gap-4">
                Basın ve Medya <div className="flex-1 h-px bg-gray-200"></div>
              </h2>
              
              <div className="grid lg:grid-cols-2 gap-16">
                {/* YouTube */}
                <div>
                  <h3 className="text-xl font-bold mb-6 text-gray-800 flex items-center gap-2">
                    <span className="w-3 h-3 bg-red-600 rounded-full"></span> YouTube
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-6">
                    {siteData.youtube.slice(0,4).map((video) => (
                      <div key={video.id} className="rounded-xl overflow-hidden bg-gray-50 border border-gray-100">
                        <div className="relative pt-[56.25%]">
                          <iframe className="absolute top-0 left-0 w-full h-full" src={`https://www.youtube.com/embed/${video.videoId}`} title={video.title} allowFullScreen></iframe>
                        </div>
                        <div className="p-4">
                          <p className="text-[10px] font-bold text-red-600 uppercase mb-1">{video.source}</p>
                          <h4 className="font-bold text-sm text-gray-800 line-clamp-2">{video.title}</h4>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Haberler */}
                <div>
                  <h3 className="text-xl font-bold mb-6 text-gray-800 flex items-center gap-2">
                    <span className="w-3 h-3 bg-blue-600 rounded-full"></span> Haberler
                  </h3>
                  <div className="space-y-6">
                    {siteData.press.map((item) => (
                      <a key={item.id} href={item.link} target="_blank" className="flex gap-4 group">
                        <img src={item.imageUrl} className="w-24 h-24 rounded-xl object-cover" alt="" />
                        <div className="flex flex-col justify-center">
                          <span className="text-blue-600 text-xs font-bold uppercase">{item.source}</span>
                          <h4 className="font-bold text-gray-800 mt-1 group-hover:text-blue-600 transition-colors">{item.title}</h4>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* İLETİŞİM */}
          <section id="iletisim" className="py-24 bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-extrabold mb-10">İletişim & Randevu</h2>
                <div className="space-y-8">
                  <div className="flex items-center gap-5">
                    <div className="bg-blue-600/20 p-4 rounded-full text-blue-400">
                       <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 uppercase tracking-widest mb-1">Klinik Telefon</p>
                      <p className="text-2xl font-bold">{siteData.personal.phone}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-5">
                    <div className="bg-green-500/20 p-4 rounded-full text-green-400">
                       <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 uppercase tracking-widest mb-1">WhatsApp Randevu</p>
                      <a href={`https://wa.me/${siteData.personal.whatsapp.replace(/\s+/g, '')}`} target="_blank" className="text-2xl font-bold text-green-400 hover:text-green-300">{siteData.personal.whatsapp}</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-5">
                    <div className="bg-gray-800 p-4 rounded-full text-gray-400 mt-1">
                       <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 uppercase tracking-widest mb-1">Adres</p>
                      <p className="text-gray-300 leading-relaxed">{siteData.personal.address}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-[400px] rounded-3xl overflow-hidden border-4 border-gray-800">
                <iframe src={siteData.personal.mapsIframe} width="100%" height="100%" style={{border:0}} allowFullScreen loading="lazy"></iframe>
              </div>
            </div>
          </section>
        </div>
      )}

      {/* ========================================= */}
      {/* DURUM 2: ALT SAYFA (KATEGORİ) GÖRÜNÜMÜ    */}
      {/* ========================================= */}
      {activePage !== null && (
        <div className="animate-fade-in min-h-screen bg-gray-50 pt-32 pb-24">
          <div className="max-w-4xl mx-auto px-4">
            
            {/* Geri Dön Butonu */}
            <button onClick={goHome} className="group flex items-center gap-2 text-blue-600 font-bold mb-10 hover:text-blue-800 transition-colors bg-white px-5 py-2.5 rounded-full shadow-sm border border-blue-100">
              <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
              Ana Sayfaya Dön
            </button>

            {siteData.cvCategories.filter(c => c.id === activePage).map((category) => (
              <div key={category.id} className="bg-white rounded-[2rem] shadow-lg border border-gray-100 overflow-hidden">
                {/* Sayfa Başlığı */}
                <div className="bg-blue-900 px-8 py-10 flex items-center gap-6">
                  <div className="bg-white/10 p-4 rounded-2xl text-white">
                    {category.icon}
                  </div>
                  <h1 className="text-3xl md:text-4xl font-extrabold text-white">{category.title}</h1>
                </div>

                {/* Sayfa İçeriği */}
                <div className="p-8 md:p-12">
                  
                  {/* Eğer Zaman Çizelgesi (Yıl ve Açıklama) ise */}
                  {category.items && (
                    <div className="space-y-8 relative before:absolute before:inset-0 before:ml-[11px] before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-200 before:to-transparent">
                      {category.items.map((item, i) => (
                        <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                          <div className="flex items-center justify-center w-6 h-6 rounded-full border-4 border-white bg-blue-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 relative z-10"></div>
                          <div className="w-[calc(100%-2.5rem)] md:w-[calc(50%-1.5rem)] p-6 rounded-2xl bg-gray-50 border border-gray-100 shadow-sm group-hover:shadow-md transition-shadow">
                            <div className="flex items-center justify-between mb-2">
                              <span className="font-bold text-blue-600 text-lg">{item.year}</span>
                            </div>
                            <p className="text-gray-700 leading-relaxed font-medium">{item.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Eğer Sadece Düz Liste ise */}
                  {category.list && (
                    <ul className="space-y-4">
                      {category.list.map((item, i) => (
                        <li key={i} className="flex items-start gap-4 p-4 rounded-xl hover:bg-blue-50 transition-colors">
                          <div className="bg-blue-100 text-blue-600 p-1.5 rounded-full mt-0.5 shrink-0">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                          </div>
                          <span className="text-gray-700 leading-relaxed font-medium">{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Eğer Özel Tasarım İçerik ise (Yayınlar bölümü gibi) */}
                  {category.customContent && category.customContent}

                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </main>
  );
}
