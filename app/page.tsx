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
    mapsIframe: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3008.261623862734!2d28.991533476555197!3d41.06314811634591!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab70701048b61%3A0x6b4c10c1f513909!2zQcWfxI_EsW_En2x1IFBsYXph!5e0!3m2!1str!2str!4v1712136000000!5m2!1str!2str"
  },
  menu: [
    { name: "Akademik Kariyer", link: "#kariyer" },
    { name: "Ödüller", link: "#oduller" },
    { name: "Bilimsel Yayınlar", link: "#yayinlar" },
    { name: "Basında Biz", link: "#basin" },
    { name: "YouTube", link: "#youtube" },
    { name: "Longevity", link: "#longevity" },
    { name: "İletişim", link: "#iletisim" }
  ],
  heroSlides: [
    { id: 1, image: "/slayt1.jpg" },
    { id: 2, image: "/slayt2.jpg" },
    { id: 3, image: "/slayt3.jpg" },
    { id: 4, image: "/slayt4.jpg" }
  ],
  press: [
    {
      id: 1,
      title: "Yılın Bilim Adamı Ödülü Prof. Dr. M. Temel Yılmaz'a Verildi",
      source: "Medimagazin",
      link: "https://medimagazin.com.tr/hekim/yilin-bilim-adami-odulu-prof-dr-m-temel-yilmaza-verildi-67689",
      imageUrl: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?q=80&w=800"
    },
    {
      id: 2,
      title: "Diyabet ve Obezite Tedavisinde Çığır Açan Gelişme",
      source: "Haberler | Sağlık",
      link: "https://www.haberler.com/saglik/diyabet-ve-obezitenin-tedavisinde-cigir-acan-16454728-haberi/",
      imageUrl: "https://images.unsplash.com/photo-1576091160550-2173ff9e9e9c?q=80&w=800"
    }
  ]
};

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === siteData.heroSlides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="min-h-screen bg-white font-sans text-gray-900">
      
      {/* --- MENÜ --- */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          <div className="font-bold text-xl text-blue-900 leading-tight">
            PROF. DR.<br/>M. TEMEL YILMAZ
          </div>
          <div className="hidden lg:flex gap-6">
            {siteData.menu.map((item) => (
              <a key={item.name} href={item.link} className="text-sm font-semibold text-gray-700 hover:text-blue-600 transition-colors">
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* --- HERO / SLAYT --- */}
      <section className="relative h-[85vh] overflow-hidden pt-20">
        {siteData.heroSlides.map((slide, index) => (
          <div key={slide.id} className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? "opacity-100" : "opacity-0"}`}>
            <img src={slide.image} className="w-full h-full object-cover" alt="" />
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-white text-center px-4">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-xl">{siteData.personal.name}</h1>
              <div className="space-y-1">
                {siteData.personal.titles.map((title, i) => (
                  <p key={i} className="text-xl md:text-2xl font-medium drop-shadow-lg">{title}</p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* --- BASINDA BİZ --- */}
      <section id="basin" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Basında Biz</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {siteData.press.map((item) => (
              <a key={item.id} href={item.link} target="_blank" rel="noopener noreferrer" className="bg-white p-4 rounded-2xl shadow-sm hover:shadow-md transition-all flex gap-4 border border-gray-100">
                <img src={item.imageUrl} className="w-24 h-24 rounded-xl object-cover" alt="" />
                <div>
                  <span className="text-blue-600 text-xs font-bold uppercase">{item.source}</span>
                  <h3 className="font-bold text-sm mt-1 line-clamp-2">{item.title}</h3>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* --- İLETİŞİM & HARİTA --- */}
      <section id="iletisim" className="py-24">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-bold mb-10 text-blue-900">İletişim & Rezervasyon</h2>
            
            <div className="space-y-8">
              <div className="flex gap-4 items-start">
                <div className="bg-blue-50 p-3 rounded-full text-blue-600">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                </div>
                <div>
                  <p className="text-sm text-gray-500 uppercase font-bold tracking-wider">Klinik Telefon</p>
                  <p className="text-2xl font-bold text-gray-800">{siteData.personal.phone}</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="bg-green-50 p-3 rounded-full text-green-600">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                </div>
                <div>
                  <p className="text-sm text-gray-500 uppercase font-bold tracking-wider">WhatsApp Rezervasyon</p>
                  <a href={`https://wa.me/${siteData.personal.whatsapp.replace(/\s+/g, '')}`} target="_blank" className="text-2xl font-bold text-green-600 hover:underline">
                    {siteData.personal.whatsapp}
                  </a>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="bg-gray-50 p-3 rounded-full text-gray-600">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <div>
                  <p className="text-sm text-gray-500 uppercase font-bold tracking-wider">Adres</p>
                  <p className="text-gray-700 leading-relaxed">{siteData.personal.address}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="h-[500px] rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
            <iframe src={siteData.personal.mapsIframe} width="100%" height="100%" style={{border:0}} allowFullScreen loading="lazy"></iframe>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-blue-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-lg font-bold mb-2">{siteData.personal.name}</p>
          <p className="text-blue-200 text-sm opacity-80">© {new Date().getFullYear()} Tüm Hakları Saklıdır. Bu site bilgilendirme amaçlıdır.</p>
        </div>
      </footer>
    </main>
  );
}
