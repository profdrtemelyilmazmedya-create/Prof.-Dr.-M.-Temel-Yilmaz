"use client";

import { useState } from "react";
import {
  Menu,
  X,
  ChevronDown,
  Phone,
  MessageCircle,
  MapPin,
  Play,
} from "lucide-react";

type CvCategory = {
  id: string;
  title: string;
  items: string[];
};

const cvCategories: CvCategory[] = [
  {
    id: "akademik-egitim",
    title: "Akademik Eğitim",
    items: [
      "1976 – İstanbul Üniversitesi Cerrahpaşa Tıp Fakültesi, Doktor",
      "1981 – İstanbul Üniversitesi Cerrahpaşa Tıp Fakültesi İç Hastalıkları Anabilim Dalı, Uzman Doktor",
      "1985 – Brussels Free University, Fellowship",
      "1986 – İstanbul Üniversitesi İstanbul Tıp Fakültesi İç Hastalıkları Anabilim Dalı, Doçent Doktor",
      "1993 – İstanbul Üniversitesi İstanbul Tıp Fakültesi, Profesör Doktor",
    ],
  },
  {
    id: "akademik-gorevler",
    title: "Akademik Görevler",
    items: [
      "1994 – İstanbul Üniversitesi Deneysel Tıp Araştırma Enstitüsü, İmmünoloji Anabilim Dalı Başkanı",
      "1997 – University of London, Visiting Professor",
      "2005 – İstanbul Üniversitesi İstanbul Tıp Fakültesi İç Hastalıkları Anabilim Dalı, Endokrinoloji ve Metabolizma Hastalıkları Bilim Dalı, Profesör Doktor",
      "2010 – İstanbul Üniversitesi, Diyabet Uygulama ve Araştırma Merkezi Müdürü",
      "2024 – Acıbadem Üniversitesi, DİYAM Koordinatörü",
    ],
  },
  {
    id: "oduller",
    title: "Ödüller",
    items: [
      "1987 – Eczacıbaşı Bilimsel Araştırma Ödülü",
      "1989 – WHO Regional Office for Europe Grant",
      "1995 – IDF / Eli Lilly Fund Grants",
      "2000 – TURDIAB 2000 Diyabet Proje Ödülü",
      "2000, 2002, 2006, 2007 – TURDIAB Diyabet Bilimsel Yayın Ödülü",
      "2012 – Lions Club International Presidents Awards",
      "2015 – International Diabetes Federation European Region Diabetes Award (Kanada)",
    ],
  },
  {
    id: "uluslararasi-kuruluslar",
    title: "Üyesi Olduğu Uluslararası Kuruluşlar",
    items: [
      "American Diabetes Association (ADA)",
      "European Association for the Study of Diabetes (EASD)",
      "International Diabetes Federation (IDF)",
      "International Diabetes Immunotherapy Group (IDIG)",
      "International Union of Immunology Societies",
      "International Endocrinology Society",
    ],
  },
  {
    id: "editoryel-gorevler",
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
      "Journal of Diabetes – Editorial Board",
    ],
  },
  {
    id: "uzmanlik-alanlari",
    title: "Uzmanlık Alanları",
    items: [
      "Diyabet",
      "Tip 1 ve Tip 2 diyabet tedavisi",
      "İnsülin direnci tedavisi",
      "Obezite ve Tip 1A tedavisi",
      "Sağlıklı yaşam ve longevity",
      "Endokrinoloji ve Metabolizma Hastalıkları",
      "Metabolik hastalıkların tedavisi",
    ],
  },
];

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openCategory, setOpenCategory] = useState<string | null>(
    "akademik-egitim"
  );

  const toggleCategory = (id: string) => {
    setOpenCategory(openCategory === id ? null : id);
  };

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <header className="fixed left-0 top-0 z-50 w-full border-b border-slate-100 bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          <a href="#anasayfa" className="font-extrabold leading-tight tracking-tight">
            Prof. Dr. <br />
            M. Temel Yılmaz
          </a>

          <nav className="hidden items-center gap-8 text-sm font-semibold md:flex">
            <a href="#anasayfa" className="hover:text-blue-700">Ana Sayfa</a>
            <a href="#hakkinda" className="hover:text-blue-700">Hakkında</a>
            <a href="#basinda-biz" className="hover:text-blue-700">Basında Biz</a>
            <a href="#youtube" className="hover:text-blue-700">YouTube</a>
            <a href="#longevity" className="hover:text-blue-700">Longevity</a>
            <a href="#iletisim" className="rounded-full bg-slate-900 px-5 py-2.5 text-white hover:bg-blue-700">
              İletişim
            </a>
          </nav>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden"
            aria-label="Menü"
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="border-t border-slate-100 bg-white px-6 py-5 md:hidden">
            <div className="flex flex-col gap-4 font-semibold">
              <a href="#anasayfa" onClick={() => setMobileMenuOpen(false)}>Ana Sayfa</a>
              <a href="#hakkinda" onClick={() => setMobileMenuOpen(false)}>Hakkında</a>
              <a href="#basinda-biz" onClick={() => setMobileMenuOpen(false)}>Basında Biz</a>
              <a href="#youtube" onClick={() => setMobileMenuOpen(false)}>YouTube</a>
              <a href="#longevity" onClick={() => setMobileMenuOpen(false)}>Longevity</a>
              <a href="#iletisim" onClick={() => setMobileMenuOpen(false)}>İletişim</a>
            </div>
          </div>
        )}
      </header>

      <section
        id="anasayfa"
        className="flex min-h-screen items-center bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 px-6 pt-24 text-white"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-blue-300">
              Endokrinoloji • Diyabet • Metabolizma
            </p>
            <h1 className="mb-6 text-5xl font-extrabold leading-tight md:text-7xl">
              Prof. Dr. M. Temel Yılmaz
            </h1>
            <p className="mb-8 max-w-xl text-lg leading-relaxed text-slate-300">
              İç Hastalıkları, Endokrinoloji, Diyabet ve Metabolizma Hastalıkları
              alanında akademik deneyim ve bilimsel birikim.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#hakkinda"
                className="rounded-xl bg-white px-7 py-4 font-bold text-slate-900 hover:bg-blue-100"
              >
                Özgeçmişi İncele
              </a>
              <a
                href="#iletisim"
                className="rounded-xl border border-white/30 px-7 py-4 font-bold text-white hover:bg-white/10"
              >
                Randevu / İletişim
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/10 p-8 shadow-2xl backdrop-blur-md">
            <h2 className="mb-4 text-2xl font-bold">Akademik Profil</h2>
            <p className="leading-relaxed text-slate-300">
              Diyabet, obezite, insülin direnci, metabolik hastalıklar ve
              sağlıklı yaşam alanlarında uzmanlaşmış akademik ve klinik kariyer.
            </p>
          </div>
        </div>
      </section>

      <section id="hakkinda" className="bg-slate-50 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-14 text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-blue-700">
              Hakkında
            </p>
            <h2 className="text-4xl font-extrabold md:text-5xl">
              Akademik Özgeçmiş
            </h2>
          </div>

          <div className="grid gap-5">
            {cvCategories.map((category) => {
              const isOpen = openCategory === category.id;

              return (
                <div
                  key={category.id}
                  className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
                >
                  <button
                    onClick={() => toggleCategory(category.id)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-6 text-left"
                  >
                    <span className="text-xl font-extrabold text-slate-900">
                      {category.title}
                    </span>
                    <ChevronDown
                      className={`shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180 text-blue-700" : "text-slate-500"
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="border-t border-slate-100 px-6 pb-6 pt-2">
                      <ul className="space-y-4">
                        {category.items.map((item, index) => (
                          <li
                            key={index}
                            className="flex gap-3 text-base leading-relaxed text-slate-700"
                          >
                            <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-blue-700" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="basinda-biz" className="bg-white px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-6 text-4xl font-extrabold">Basında Biz</h2>
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-10">
            <p className="text-lg text-slate-600">
              Haberler, röportajlar ve basın içerikleri bu bölümde listelenecektir.
            </p>
          </div>
        </div>
      </section>

      <section id="youtube" className="bg-slate-950 px-6 py-24 text-white">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-6 text-4xl font-extrabold">YouTube</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/10 p-6"
              >
                <div className="mb-4 flex aspect-video items-center justify-center rounded-xl bg-black/40">
                  <Play />
                </div>
                <h3 className="font-bold">Video İçeriği {item}</h3>
                <p className="mt-2 text-sm text-slate-400">
                  Video bağlantısı daha sonra eklenecektir.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="longevity" className="bg-white px-6 py-24 text-center">
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-blue-700">
          Pek Yakında
        </p>
        <h2 className="text-5xl font-extrabold">Longevity</h2>
      </section>

      <section id="iletisim" className="bg-slate-50 px-6 py-24">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-3">
          <a
            href="tel:+902122969159"
            className="rounded-2xl bg-white p-8 shadow-sm hover:shadow-md"
          >
            <Phone className="mb-4 text-blue-700" />
            <h3 className="mb-2 font-extrabold">Telefon</h3>
            <p className="text-slate-600">(0212) 296 91 59</p>
          </a>

          <a
            href="https://wa.me/905332202010"
            target="_blank"
            className="rounded-2xl bg-white p-8 shadow-sm hover:shadow-md"
          >
            <MessageCircle className="mb-4 text-green-600" />
            <h3 className="mb-2 font-extrabold">WhatsApp</h3>
            <p className="text-slate-600">+90 533 220 20 10</p>
          </a>

          <div className="rounded-2xl bg-white p-8 shadow-sm">
            <MapPin className="mb-4 text-orange-600" />
            <h3 className="mb-2 font-extrabold">Adres</h3>
            <p className="text-slate-600">
              Teşvikiye, Hakkı Yeten Cd. No:17, Kat: 7, Şişli / İstanbul
            </p>
          </div>
        </div>
      </section>

      <footer className="bg-slate-950 px-6 py-10 text-center text-sm text-slate-400">
        © {new Date().getFullYear()} Prof. Dr. M. Temel Yılmaz. Tüm hakları saklıdır.
      </footer>
    </main>
  );
}
