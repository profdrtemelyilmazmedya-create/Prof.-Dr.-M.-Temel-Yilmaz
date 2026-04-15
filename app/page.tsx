"use client";

import React, { useState, useEffect } from 'react';
import { 
  Menu, X, Phone, MessageCircle, MapPin, 
  ExternalLink, Play, Award, BookOpen, 
  User, ChevronRight, Globe, Award as AwardIcon
} from 'lucide-react';

// --- TÜM İÇERİK VERİSİ BURADAN YÖNETİLİR ---
const siteData = {
  personal: {
    name: "Prof. Dr. Mehmet Temel Yılmaz",
    title: "İç Hastalıkları, Endokrinoloji, Diyabet ve Metabolizma Uzmanı",
    heroImage: "https://images.unsplash.com/photo-1559839734-2b71f1e3c7e3?q=80&w=1000", // Kendi fotoğrafınızla değiştirin
    shortBio: "40 yılı aşkın akademik kariyeriyle diyabet teknolojileri, immünoloji ve metabolizma hastalıkları alanında uluslararası otorite.",
    phone: "+90 (212) 000 00 00",
    whatsapp: "905330000000", // Sadece rakam
    address: "Nişantaşı, Hakkı Yeten Cd. No:17, 34365 Şişli/İstanbul",
    mapsLink: "https://goo.gl/maps/example"
  },
  
  // Hakkında Bölümü Kategorileri
  cvCategories: [
    {
      id: "egitim",
      title: "Akademik Eğitim ve Unvanlar",
      content: [
        "1976 – İstanbul Üniversitesi Cerrahpaşa Tıp Fakültesi, Doktor",
        "1981 – Cerrahpaşa Tıp Fakültesi İç Hastalıkları, Uzman Doktor",
        "1985 – Brussels Free University, Fellowship",
        "1986 – İstanbul Tıp Fakültesi İç Hastalıkları, Doçent Doktor",
        "1993 – İstanbul Üniversitesi İstanbul Tıp Fakültesi, Profesör Doktor"
      ]
    },
    {
      id: "idari",
      title: "Akademik ve İdari Görevler",
      content: [
        "1994 – İ.Ü. Deneysel Tıp Araştırma Enstitüsü, İmmünoloji Bilim Dalı Başkanı",
        "1997 – University of London, Visiting Professor",
        "2005 – İ.Ü. İstanbul Tıp Fakültesi, Endokrinoloji ve Metabolizma Bilim Dalı, Prof. Dr.",
        "2010 – İstanbul Üniversitesi, Diyabet Uygulama ve Araştırma Merkezi Müdürü",
        "2024 – Acıbadem Üniversitesi, DİYAM Koordinatörü"
      ]
    },
    {
      id: "ulusal",
      title: "Ulusal Ek Görevler",
      content: [
        "İ.Ü. Deneysel Tıp Araştırma Enstitüsü Yönetim Kurulu Üyesi",
        "T.C. Sağlık Bakanlığı, Diyabet ve Obezite Danışma Kurulu Üyesi",
        "Türkiye Diyabet Vakfı Başkanı",
        "Ulusal Beslenme Platformu Başkanı"
      ]
    },
    {
      id: "yayinlar",
      title: "Bilimsel Yayınlar",
      isSpecial: true, // Farklı tasarım için
      description: "Prof. Dr. Mehmet Temel Yılmaz’ın SCI ve SCIE kapsamındaki dergilerde çok sayıda yayını bulunmaktadır.",
      tags: ["Diyabet", "Tip 1 & 2 Diyabet", "İmmünoloji", "Obezite", "İnsülin Tedavileri", "Diyabet Teknolojileri", "Epidemiyoloji"]
    }
    // ... Diğer 10 madde benzer yapıda buraya eklenebilir
  ],

  press: [
    {
      id: 1,
      title: "Diyabet Tedavisinde Yeni Dönem",
      date: "12 Mart 2024",
      source: "Hürriyet Sağlık",
      image: "https://images.unsplash.com/photo-1504813184591-01592fd03cfd?q=80&w=800",
      link: "#"
    },
    {
      id: 2,
      title: "Yılın Bilim İnsanı Ödülü",
      date: "05 Ocak 2024",
      source: "Medimagazin",
      image: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?q=80&w=800",
      link: "#"
    }
  ],

  youtube: [
    {
      id: 1,
      title: "Diyabet ve Beslenme Hakkında Doğru Bilinen Yanlışlar",
      thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/0.jpg",
      link: "https://youtube.com/..."
    },
    {
      id: 2,
      title: "Sensörlü Pompa Teknolojileri",
      thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/0.jpg",
      link: "https://youtube.com/..."
    }
  ]
};

export default function WebSite() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(siteData.cvCategories[0].id);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900">
      
      {/* --- HEADER --- */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex flex-col">
            <span className={`font-bold text-xl tracking-tight transition-colors ${scrolled ? 'text-slate-900' : 'text-slate-900 md:text-white'}`}>
              Prof. Dr. M. Temel Yılmaz
            </span>
            <span className={`text-[10px] uppercase tracking-widest font-semibold ${scrolled ? 'text-blue-600' : 'text-blue-400'}`}>
              Endokrinoloji & Diyabet
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 text-sm font-bold uppercase tracking-wider">
            {['Ana Sayfa', 'Hakkında', 'Basında Biz', 'YouTube', 'İletişim'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase().replace(' ', '')}`} 
                className={`transition-colors hover:text-blue-600 ${scrolled ? 'text-slate-700' : 'text-slate-800 md:text-white/90'}`}
              >
                {item}
              </a>
            ))}
            <a href={`tel:${siteData.personal.phone}`} className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition-all shadow-lg shadow-blue-200">
              Randevu Al
            </a>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden p-2 text-slate-900" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white border-t border-slate-100 p-6 flex flex-col gap-4 shadow-xl animate-in slide-in-from-top">
            {['Ana Sayfa', 'Hakkında', 'Basında Biz', 'YouTube', 'İletişim'].map((item) => (
              <a key={item} href={`#${item.toLowerCase().replace(' ', '')}`} onClick={() => setIsMenuOpen(false)} className="text-lg font-bold text-slate-800">
                {item}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* --- HERO SECTION --- */}
      <section id="anasayfa" className="relative h-screen flex items-center pt-20 overflow-hidden bg-slate-50">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />
          <img src={siteData.personal.heroImage} className="w-full h-full object-cover object-center" alt="Academic Background" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 w-full relative z-20">
          <div className="max-w-2xl">
            <h2 className="text-blue-600 font-bold tracking-[0.2em] uppercase mb-4 animate-fade-in">Hoş Geldiniz</h2>
            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-tight mb-6">
              {siteData.personal.name}
            </h1>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed font-medium">
              {siteData.personal.title}
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#hakkında" className="bg-slate-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-slate-800 transition-all flex items-center gap-2 group">
                Özgeçmişi İncele <ChevronRight className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#iletişim" className="bg-white text-slate-900 border-2 border-slate-200 px-8 py-4 rounded-xl font-bold hover:bg-slate-50 transition-all">
                İletişime Geç
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* --- HAKKINDA (TABBED SYSTEM) --- */}
      <section id="hakkında" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold mb-4">Temel Yılmaz Hakkında</h2>
            <div className="h-1.5 w-20 bg-blue-600 mx-auto rounded-full" />
          </div>

          <div className="flex flex-col lg:flex-row gap-12 min-h-[500px]">
            {/* Sidebar Tabs */}
            <div className="lg:w-1/3 flex flex-col gap-2">
              {siteData.cvCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`text-left px-6 py-4 rounded-xl font-bold transition-all flex items-center justify-between group ${
                    activeTab === cat.id 
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-200' 
                    : 'bg-slate-50 text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  {cat.title}
                  <ChevronRight className={`w-4 h-4 transition-transform ${activeTab === cat.id ? 'translate-x-1' : 'opacity-0'}`} />
                </button>
              ))}
            </div>

            {/* Content Area */}
            <div className="lg:w-2/3 bg-slate-50 rounded-3xl p-8 md:p-12 border border-slate-100 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <BookOpen size={120} />
              </div>
              
              {siteData.cvCategories.map((cat) => activeTab === cat.id && (
                <div key={cat.id} className="animate-in fade-in slide-in-from-right-4 duration-500">
                  <h3 className="text-2xl font-bold mb-8 text-blue-900 border-b border-blue-100 pb-4">
                    {cat.title}
                  </h3>
                  
                  {cat.isSpecial ? (
                    <div className="space-y-6">
                      <p className="text-lg text-slate-700 leading-relaxed font-medium">{cat.description}</p>
                      <div className="flex flex-wrap gap-3">
                        {cat.tags?.map(tag => (
                          <span key={tag} className="bg-white text-blue-700 px-4 py-2 rounded-lg text-sm font-bold border border-blue-100 shadow-sm">
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <ul className="space-y-4">
                      {cat.content?.map((item, i) => (
                        <li key={i} className="flex items-start gap-4 text-slate-700">
                          <div className="w-2 h-2 mt-2.5 rounded-full bg-blue-500 shrink-0" />
                          <span className="text-lg leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- BASINDA BİZ --- */}
      <section id="basındabiz" className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-4xl font-extrabold mb-4">Basında Biz</h2>
              <p className="text-slate-400 max-w-xl text-lg">Güncel röportajlar, akademik görüşler ve tıp dünyasındaki gelişmelere dair haber arşivi.</p>
            </div>
            <a href="#" className="text-blue-400 font-bold flex items-center gap-2 hover:text-blue-300 border-b border-blue-400/30 pb-1">
              Tüm Haberleri Gör <ExternalLink size={18} />
            </a>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {siteData.press.map((news) => (
              <div key={news.id} className="group bg-slate-800/50 rounded-3xl overflow-hidden border border-slate-700 hover:border-blue-500/50 transition-all">
                <div className="flex flex-col md:flex-row h-full">
                  <div className="md:w-2/5 overflow-hidden">
                    <img src={news.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={news.title} />
                  </div>
                  <div className="md:w-3/5 p-8 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-blue-400 text-xs font-bold uppercase tracking-widest">{news.source}</span>
                        <span className="text-slate-500 text-xs">{news.date}</span>
                      </div>
                      <h3 className="text-xl font-bold mb-4 leading-snug group-hover:text-blue-300 transition-colors">
                        {news.title}
                      </h3>
                    </div>
                    <a href={news.link} className="flex items-center gap-2 font-bold text-sm text-white/80 group-hover:text-white transition-colors">
                      Haber Detayı <ChevronRight size={16} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- YOUTUBE --- */}
      <section id="youtube" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold mb-4">YouTube Videoları</h2>
            <p className="text-slate-500 max-w-xl mx-auto">Bilgilendirici video içerikleri ve TV programları.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {siteData.youtube.map((video) => (
              <div key={video.id} className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all">
                <img src={video.thumbnail} className="w-full aspect-video object-cover" alt="" />
                <div className="absolute inset-0 bg-slate-900/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white shadow-xl scale-90 group-hover:scale-100 transition-transform">
                    <Play fill="currentColor" size={20} />
                  </div>
                </div>
                <div className="p-4 bg-white border-x border-b border-slate-100 rounded-b-2xl">
                  <h4 className="font-bold text-sm line-clamp-2 text-slate-800">{video.title}</h4>
                  <p className="text-[10px] font-bold text-red-600 mt-2 uppercase tracking-tighter">{video.source}</p>
                </div>
                <a href={video.link} target="_blank" className="absolute inset-0" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- ILETISIM --- */}
      <section id="iletişim" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Contact Info */}
            <div className="space-y-12">
              <div>
                <h2 className="text-4xl font-extrabold mb-6 text-slate-900">İletişime Geçin</h2>
                <p className="text-lg text-slate-600 font-medium">Muayenehane randevusu ve sorularınız için bize ulaşabilirsiniz.</p>
              </div>

              <div className="space-y-6">
                <a href={`tel:${siteData.personal.phone}`} className="flex items-center gap-6 p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all group">
                  <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all">
                    <Phone />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Telefon</p>
                    <p className="text-xl font-bold">{siteData.personal.phone}</p>
                  </div>
                </a>

                <a href={`https://wa.me/${siteData.personal.whatsapp}`} target="_blank" className="flex items-center gap-6 p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all group">
                  <div className="w-14 h-14 bg-green-50 text-green-600 rounded-full flex items-center justify-center group-hover:bg-green-600 group-hover:text-white transition-all">
                    <MessageCircle />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">WhatsApp</p>
                    <p className="text-xl font-bold">Hızlı İletişim Hattı</p>
                  </div>
                </a>

                <div className="flex items-center gap-6 p-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
                  <div className="w-14 h-14 bg-orange-50 text-orange-600 rounded-full flex items-center justify-center">
                    <MapPin />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Adres</p>
                    <p className="text-lg font-bold">{siteData.personal.address}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-2xl shadow-slate-200 border border-white">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase ml-1">Ad Soyad</label>
                    <input type="text" className="w-full bg-slate-50 border-none rounded-xl p-4 focus:ring-2 focus:ring-blue-600 outline-none transition-all font-medium" placeholder="Mehmet Yılmaz" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase ml-1">Telefon</label>
                    <input type="tel" className="w-full bg-slate-50 border-none rounded-xl p-4 focus:ring-2 focus:ring-blue-600 outline-none transition-all font-medium" placeholder="0555 --- -- --" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase ml-1">E-Posta</label>
                  <input type="email" className="w-full bg-slate-50 border-none rounded-xl p-4 focus:ring-2 focus:ring-blue-600 outline-none transition-all font-medium" placeholder="e-posta@adresiniz.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase ml-1">Mesajınız</label>
                  <textarea rows={4} className="w-full bg-slate-50 border-none rounded-xl p-4 focus:ring-2 focus:ring-blue-600 outline-none transition-all font-medium resize-none" placeholder="Randevu talebi veya sorunuz..." />
                </div>
                <button className="w-full bg-blue-600 text-white py-5 rounded-xl font-extrabold text-lg shadow-xl shadow-blue-200 hover:bg-blue-700 hover:scale-[1.02] active:scale-[0.98] transition-all">
                  Mesajı Gönder
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-slate-950 text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 border-b border-slate-800 pb-12 mb-12">
            <div className="text-center md:text-left">
              <h3 className="font-bold text-2xl mb-2">{siteData.personal.name}</h3>
              <p className="text-slate-500 max-w-sm">Tıp dünyasındaki akademik birikim ve tecrübe ile sağlığınız emin ellerde.</p>
            </div>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-all"><Globe size={20} /></a>
              {/* Diğer sosyal medya ikonları */}
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
            <p>© 2024 {siteData.personal.name}. Tüm Hakları Saklıdır.</p>
            <div className="flex gap-6 font-semibold">
              <a href="#" className="hover:text-white">KVKK</a>
              <a href="#" className="hover:text-white">Çerez Politikası</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
