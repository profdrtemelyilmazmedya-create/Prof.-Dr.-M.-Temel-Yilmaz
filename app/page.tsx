"use client";

import { useState, useEffect } from "react";

// --- VERİ DEPOSU ---
const siteData = {
  personal: {
    name: "Prof. Dr. M. Temel Yılmaz",
    title: "Endokrinoloji ve Metabolizma Hastalıkları Uzmanı",
    phone: "+90 (212) 000 00 00",
    email: "iletisim@temelyilmaz.com",
    address: "Teşvikiye, Hakkı Yeten Cd. No:17, Kat: 7, 34365 Şişli/İstanbul",
    // Aşçıoğlu Plaza için güncel harita konumu
    mapsIframe: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3008.972237070366!2d28.99187317655029!3d41.04781491733675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab7080351f509%3A0x6b63c9b74051a8d0!2zQcWfxI_EsW_En2x1IFBsYXph!5e0!3m2!1str!2str!4v1712140000000!5m2!1str!2str"
  },
  heroSlides: [
    { id: 1, image: "/slayt1.jpg", title: "Uzman Klinik Deneyimi", description: "Hastalıkların kök nedenlerine inen bütüncül ve kanıta dayalı tedavi yaklaşımı." },
    { id: 2, image: "/slayt2.jpg", title: "Akademik Liderlik", description: "Diyabet ve metabolizma alanında uluslararası araştırmalar ve modern tıp eğitimi." },
    { id: 3, image: "/slayt3.jpg", title: "Hasta Odaklı Yaklaşım", description: "Her hasta için özel, güvenli ve sürdürülebilir sağlıklı yaşam çözümleri." },
    { id: 4, image: "/slayt4.jpg", title: "Bilimsel Araştırmalar", description: "Modern tıp dünyasındaki en güncel tedavi protokolleri ve akademik çalışmalar." }
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
    },
    {
      id: 3,
      title: "Diyabet Tedavisi Hakkında Röportaj",
      source: "YouTube / Video",
      link: "https://youtu.be/Jx0Ew7GvLdw?si=UEh-bQ9qUY2PUksz",
      imageUrl: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?q=80&w=800"
    },
    {
      id: 4,
      title: "Metabolizma ve Sağlıklı Yaşam",
      source: "YouTube / Video",
      link: "https://youtu.be/T5BkPFfnI_M?si=zbLymp6B7lkABbUB",
      imageUrl: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800"
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
    <main className="min-h-screen bg-white font-sans text-gray-900 pt-20">
      {/* --- SLAYT BÖLÜMÜ --- */}
      <section className="relative h-[80vh] overflow-hidden">
        {siteData.heroSlides.map((slide, index) => (
          <div key={slide.id} className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? "opacity-100" : "opacity-0"}`}>
            <div className="absolute inset-0 bg-black/40 z-10" />
            <img src={slide.image} className="w-full h-full object-cover" alt={slide.title} />
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-white text-center px-4">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">{siteData.personal.name}</h1>
              <p className="text-xl md:text-2xl mb-8 drop-shadow-md">{siteData.personal.title}</p>
              <div className="bg-blue-600 px-10 py-3 rounded-full font-bold shadow-xl">{slide.title}</div>
            </div>
          </div>
        ))}
        {/* Slayt Noktaları */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-2">
          {siteData.heroSlides.map((_, i) => (
            <div key={i} className={`w-3 h-3 rounded-full transition-all ${i === currentSlide ? "bg-white w-8" : "bg-white/40"}`} />
          ))}
        </div>
      </section>

      {/* --- BASINDA BİZ --- */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Basında Biz</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {siteData.press.map((item) => (
              <a key={item.id} href={item.link} target="_blank" rel="noopener noreferrer" className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all group border border-gray-100">
                <div className="h-48 overflow-hidden">
                  <img src={item.imageUrl} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="" />
                </div>
                <div className="p-6">
                  <span className="text-blue-600 text-xs font-extrabold uppercase tracking-widest">{item.source}</span>
                  <h3 className="font-bold text-base mt-3 leading-tight text-gray-800 group-hover:text-blue-600 transition-colors line-clamp-3">{item.title}</h3>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* --- İLETİŞİM & HARİTA --- */}
      <section id="iletisim" className="py-24">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-10">Bize Ulaşın</h2>
            <div className="space-y-8">
              <div className="flex gap-4 items-start">
                <div className="bg-blue-100 p-3 rounded-lg text-blue-600">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <div>
                  <p className="font-bold text-gray-900 mb-1">Klinik Adresi</p>
                  <p className="text-gray-600 leading-relaxed max-w-sm">{siteData.personal.address}</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="bg-blue-100 p-3 rounded-lg text-blue-600">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                </div>
                <div>
                  <p className="font-bold text-gray-900 mb-1">Telefon</p>
                  <p className="text-gray-600">{siteData.personal.phone}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[450px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white ring-1 ring-gray-100">
            <iframe 
              src={siteData.personal.mapsIframe} 
              width="100%" height="100%" style={{border:0}} allowFullScreen loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
    </main>
  );
}
