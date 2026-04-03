"use client";

import { useState, useEffect } from "react";

// --- VERİ DEPOSU (Tüm yazılar ve resimler burada) ---
const siteData = {
  personal: {
    name: "Prof. Dr. M. Temel Yılmaz",
    title: "Endokrinoloji ve Metabolizma Hastalıkları Uzmanı",
    phone: "+90 (212) 000 00 00",
    email: "iletisim@temelyilmaz.com",
    address: "Valikonağı Cad. No: 123 Nişantaşı, Şişli / İstanbul",
  },
  heroSlides: [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=1920&auto=format&fit=crop", 
      title: "Uzman Klinik Deneyimi",
      description: "Hastalıkların kök nedenlerine inen bütüncül ve kanıta dayalı tedavi yaklaşımı.",
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1581595220887-f4099b24cd5f?q=80&w=1920&auto=format&fit=crop",
      title: "Akademik Liderlik",
      description: "Diyabet ve metabolizma alanında uluslararası araştırmalar ve modern tıp eğitimi.",
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1920&auto=format&fit=crop",
      title: "Hasta Odaklı Yaklaşım",
      description: "Her hasta için özel, güvenli ve sürdürülebilir sağlıklı yaşam çözümleri.",
    },
  ],
  about: {
    paragraph1: "Prof. Dr. M. Temel Yılmaz, tıp eğitimini İstanbul Üniversitesi'nde tamamladıktan sonra, iç hastalıkları ve endokrinoloji alanlarında üst ihtisasını yapmıştır. Kariyeri boyunca hem klinik pratikte binlerce hastanın hayatına dokunmuş hem de akademik dünyada sayısız hekimin yetişmesine katkı sağlamıştır.",
    paragraph2: "Özellikle diyabet, tiroid hastalıkları, obezite ve metabolik sendrom alanlarında ulusal ve uluslararası platformlarda kabul görmüş birçok bilimsel araştırmaya imza atmıştır. Hastalıkların tedavisinde yalnızca semptomları değil, kök nedenleri de ele alan bütüncül ve kanıta dayalı tıp yaklaşımını benimsemektedir."
  },
  resume: {
    education: [
      { year: "1988", title: "Endokrinoloji ve Metabolizma Üst İhtisası", institution: "İstanbul Üniversitesi Cerrahpaşa Tıp Fakültesi" },
      { year: "1983", title: "İç Hastalıkları İhtisası", institution: "İstanbul Üniversitesi Cerrahpaşa Tıp Fakültesi" },
      { year: "1978", title: "Tıp Eğitimi", institution: "İstanbul Üniversitesi Tıp Fakültesi" },
    ],
    experience: [
      { year: "1996 - Günümüz", title: "Profesör Doktor", institution: "İstanbul Üniversitesi" },
      { year: "2000 - 2015", title: "Bölüm Başkanı", institution: "Endokrinoloji ve Metabolizma Hastalıkları Bilim Dalı" },
      { year: "1989 - 1995", title: "Doçent Doktor", institution: "İstanbul Üniversitesi" },
    ]
  },
  press: [
    {
      id: 1,
      title: "Diyabet Tedavisinde Yeni Yaklaşımlar",
      source: "Sağlık Dergisi",
      date: "Ekim 2023",
      summary: "Prof. Dr. M. Temel Yılmaz, diyabet yönetiminde yapay zeka destekli cihazların hastaların yaşam kalitesine etkilerini değerlendirdi.",
      imageUrl: "https://images.unsplash.com/photo-1576091160550-2173ff9e9e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      title: "Obezite ile Mücadelede Altın Kurallar",
      source: "Ulusal Haber Kanalı",
      date: "Eylül 2023",
      summary: "Obezitenin bir halk sağlığı sorunu olduğuna dikkat çeken Yılmaz, modern tedavi yöntemleri hakkında önemli açıklamalarda bulundu.",
      imageUrl: "https://images.unsplash.com/photo-1584308666744-24d5e454ec2f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      title: "Tiroid Hastalıklarında Erken Tanı",
      source: "Tıp Dünyası Haberleri",
      date: "Ağustos 2023",
      summary: "Tiroid nodüllerinin teşhisi ve takibi konusunda hastaların dikkat etmesi gereken kritik semptomlar ve kontrol süreçleri.",
      imageUrl: "https://images.unsplash.com/photo-1551076805-e1869043e560?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    }
  ],
  gallery: [
    "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1581595220887-f4099b24cd5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1551076805-e1869043e560?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  ]
};

// --- ANA SAYFA BİLEŞENİ ---
export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = siteData.heroSlides;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000); 
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <main className="min-h-screen font-sans text-gray-800">
      
      {/* 1. ÜST MENÜ */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20 md:h-24">
            <div className="flex-shrink-0">
              <a href="#" className="text-xl md:text-2xl font-bold text-slate-800 tracking-tight">
                Prof. Dr. <span className="text-blue-600">Temel Yılmaz</span>
              </a>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">Ana Sayfa</a>
              <a href="#hakkinda" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">Hakkında</a>
              <a href="#ozgecmis" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">Özgeçmiş</a>
              <a href="#basinda-biz" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">Basında Biz</a>
              <a href="#galeri" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">Galeri</a>
              <a href="#iletisim" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">İletişim</a>
            </nav>
            <div className="md:hidden flex items-center">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-600 hover:text-blue-600 focus:outline-none p-2">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* 2. GİRİŞ BÖLÜMÜ (HERO) */}
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-slate-900 pt-20">
        {slides.map((slide, index) => (
          <div key={slide.id} className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? "opacity-100" : "opacity-0"}`}>
            <div className="absolute inset-0 bg-slate-900/60 z-10"></div> 
            <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
          </div>
        ))}
        <div className="relative z-20 container mx-auto px-4 md:px-6 text-center text-white">
          <div className="max-w-4xl mx-auto">
            <span className="inline-block px-5 py-2 mb-6 text-sm md:text-base font-semibold bg-blue-600/90 backdrop-blur-sm rounded-full shadow-lg">
              {slides[currentSlide].title}
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight drop-shadow-lg text-balance">
              {siteData.personal.name}
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl mb-8 text-blue-100 font-medium drop-shadow-md">
              {siteData.personal.title}
            </p>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-200 mb-10 leading-relaxed text-balance drop-shadow-md">
              {slides[currentSlide].description}
            </p>
          </div>
        </div>
      </section>

      {/* 3. HAKKINDA BÖLÜMÜ */}
      <section id="hakkinda" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Hakkında</h2>
            <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>
          <div className="prose prose-lg text-gray-600 leading-relaxed text-justify md:text-left mx-auto">
            <p className="mb-6">{siteData.about.paragraph1}</p>
            <p>{siteData.about.paragraph2}</p>
          </div>
        </div>
      </section>

      {/* 4. ÖZGEÇMİŞ BÖLÜMÜ */}
      <section id="ozgecmis" className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Özgeçmiş</h2>
            <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-8 flex items-center gap-3">
                <span className="w-8 h-px bg-blue-600 block"></span>Eğitim Bilgileri
              </h3>
              <div className="space-y-8 border-l-2 border-blue-100 ml-3 pl-6">
                {siteData.resume.education.map((item, index) => (
                  <div key={index} className="relative">
                    <div className="absolute -left-[33px] top-1 w-4 h-4 rounded-full bg-white border-2 border-blue-600"></div>
                    <span className="text-sm font-bold text-blue-600 block mb-1">{item.year}</span>
                    <h4 className="text-lg font-semibold text-slate-800">{item.title}</h4>
                    <p className="text-gray-500 mt-1">{item.institution}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-8 flex items-center gap-3">
                <span className="w-8 h-px bg-blue-600 block"></span>Akademik Görevler
              </h3>
              <div className="space-y-8 border-l-2 border-blue-100 ml-3 pl-6">
                {siteData.resume.experience.map((item, index) => (
                  <div key={index} className="relative">
                    <div className="absolute -left-[33px] top-1 w-4 h-4 rounded-full bg-white border-2 border-blue-600"></div>
                    <span className="text-sm font-bold text-blue-600 block mb-1">{item.year}</span>
                    <h4 className="text-lg font-semibold text-slate-800">{item.title}</h4>
                    <p className="text-gray-500 mt-1">{item.institution}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. BASINDA BİZ BÖLÜMÜ */}
      <section id="basinda-biz" className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Basında Biz</h2>
            <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {siteData.press.map((article) => (
              <div key={article.id} className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm flex flex-col">
                <div className="relative aspect-video overflow-hidden">
                  <img src={article.imageUrl} alt={article.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <span className="text-blue-600 font-semibold text-sm mb-2">{article.source}</span>
                  <h3 className="text-xl font-bold text-slate-800 mb-3">{article.title}</h3>
                  <p className="text-gray-500 text-sm mb-4 flex-grow">{article.summary}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. GALERİ BÖLÜMÜ */}
      <section id="galeri" className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Galeri</h2>
            <div className="w-16 h-1 bg-blue-500 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {siteData.gallery.map((imgUrl, index) => (
              <div key={index} className="relative aspect-square overflow-hidden rounded-xl bg-slate-800">
                <img src={imgUrl} alt={`Galeri ${index + 1}`} className="w-full h-full object-cover opacity-90" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. YENİ: İLETİŞİM BÖLÜMÜ */}
      <section id="iletisim" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">İletişim</h2>
            <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 bg-slate-50 rounded-3xl p-8 md:p-12 border border-slate-100">
            {/* İletişim Bilgileri */}
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-slate-800 mb-6">Randevu & Bilgi</h3>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Telefon</p>
                  <p className="text-xl font-medium text-slate-800 mt-1">{siteData.personal.phone}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">E-Posta</p>
                  <p className="text-lg font-medium text-slate-800 mt-1">{siteData.personal.email}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Klinik Adresi</p>
                  <p className="text-lg font-medium text-slate-800 mt-1 leading-relaxed max-w-xs">{siteData.personal.address}</p>
                </div>
              </div>
            </div>

            {/* Harita / Form Alanı Yer Tutucu */}
            <div className="bg-slate-200 rounded-2xl min-h-[300px] flex items-center justify-center p-6 text-center border border-slate-300">
              <div className="text-slate-500">
                <svg className="w-12 h-12 mx-auto mb-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" /></svg>
                <p className="font-medium text-lg">Google Haritalar</p>
                <p className="text-sm mt-2">Daha sonra buraya kliniğin Google harita konumu (iFrame) eklenecek.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 8. YENİ: FOOTER (Alt Bilgi) */}
      <footer className="bg-slate-900 border-t border-slate-800 py-12 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-xl font-bold text-white mb-2">{siteData.personal.name}</h2>
          <p className="text-slate-400 text-sm mb-8">{siteData.personal.title}</p>
          <div className="w-full max-w-md mx-auto h-px bg-slate-800 mb-8"></div>
          <p className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} Tüm hakları saklıdır. Bu web sitesindeki içerikler bilgilendirme amaçlıdır.
          </p>
        </div>
      </footer>

    </main>
  );
}