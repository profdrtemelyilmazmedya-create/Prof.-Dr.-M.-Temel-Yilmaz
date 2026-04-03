"use client";

import { useState, useEffect } from "react";
import { siteData } from "../lib/data";

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = siteData.heroSlides;

  // Bu kısım resimlerin 5 saniyede bir otomatik değişmesini sağlar
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000); 
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-slate-900">
      
      {/* Arka Plan Slaytları (Resimler) */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Resmin üzerine yazılar okunsun diye hafif siyah bir tül perde çekiyoruz */}
          <div className="absolute inset-0 bg-black/50 z-10"></div> 
          <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
        </div>
      ))}

      {/* Ön Plandaki Yazılar */}
      <div className="relative z-20 text-center text-white px-4">
        <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold bg-blue-600 rounded-full shadow-lg">
          {slides[currentSlide].title}
        </span>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-tight">
          {siteData.personal.name}
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-blue-100 font-medium">
          {siteData.personal.title}
        </p>
        <p className="max-w-2xl mx-auto text-lg text-gray-200 mb-8 leading-relaxed">
          {slides[currentSlide].description}
        </p>
      </div>
      
    </section>
  );
}