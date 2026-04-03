"use client";

import { useState } from "react";
import { siteData } from "../lib/data";

export default function Navbar() {
  // Bu kısım mobilde menünün açılıp kapanmasını kontrol eder
  const [isOpen, setIsOpen] = useState(false);

  // Menüdeki linklerimiz
  const navLinks = [
    { name: "Ana Sayfa", href: "#" },
    { name: "Hakkında", href: "#" },
    { name: "Özgeçmiş", href: "#" },
    { name: "İletişim", href: "#" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Sol Taraf: Logo / İsim */}
          <div className="flex-shrink-0">
            <a href="#" className="text-2xl font-bold text-slate-800 tracking-tight">
              Prof. Dr. <span className="text-blue-600">Temel Yılmaz</span>
            </a>
          </div>

          {/* Sağ Taraf: Masaüstü Menü */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a href="#" className="bg-blue-600 text-white px-5 py-2 rounded-full font-medium hover:bg-blue-700 transition-colors">
              Randevu Al
            </a>
          </nav>

          {/* Mobil Menü Butonu (3 Çizgi) */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-blue-600 focus:outline-none text-3xl"
            >
              {isOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>
      </div>

      {/* Mobil Menü Açılır Kısmı */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-3 py-3 text-gray-600 hover:text-blue-600 font-medium border-b border-gray-100"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}