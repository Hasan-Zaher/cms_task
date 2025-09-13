"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslation } from "@/hooks/use-translation";
import { useAppSelector } from "@/store/hooks";
import Image from "next/image";
import { useHeroSlides } from "@/hooks/use-strapi-data";
import Link from "next/link";

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { t } = useTranslation();
  const isRTL = useAppSelector((state) => state.language.isRTL);
  const locale = useAppSelector((state) => state.language.locale);

  const { heroSlides, loading, error } = useHeroSlides();

  useEffect(() => {
    if (heroSlides.length === 0) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroSlides]);

  const nextSlide = () => {
    if (heroSlides.length === 0) return;
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    if (heroSlides.length === 0) return;
    setCurrentSlide(
      (prev) => (prev - 1 + heroSlides.length) % heroSlides.length
    );
  };

  if (heroSlides.length === 0) {
    return null;
  }

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
        style={{
          backgroundImage:
            "linear-gradient(rgba(165, 42, 42, 0.4), rgba(165, 42, 42, 0.4)), url('/images/heroImage.jpg')",
          filter: "sepia(20%) saturate(100%) brightness(100%)",
        }}
      >
        <div
          className={`absolute inset-0 ${
            isRTL ? "bg-gradient-to-l" : "bg-gradient-to-r"
          } from-black/70 via-black/50 to-transparent`}
        ></div>
      </div>

      {/* Content */}
      <div
        className="relative z-10 container mx-auto px-4 h-full flex items-center"
        dir={isRTL ? "ltr" : ""}
      >
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center w-full text-left`}
        >
          {/* Left Content */}
          <div className={`text-white space-y-6 ${isRTL ? "lg:order-2" : ""}`}>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight text-balance">
              {heroSlides[currentSlide].title[locale]}
            </h1>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed text-pretty">
              {heroSlides[currentSlide].description[locale]}
            </p>
            <Button
              size="lg"
              className="bg-white text-amber-900 hover:bg-gray-100 font-semibold px-8 py-3"
              asChild
            >
              <Link href={heroSlides[currentSlide].buttonLink}>
                {heroSlides[currentSlide].buttonText[locale]}
              </Link>
            </Button>
          </div>

          {/* Right Content - Profile Image */}
          <div
            className={`flex justify-center ${
              isRTL ? "lg:justify-start lg:order-1" : "lg:justify-end"
            }`}
          >
            <div className="relative">
              <Image
                src={
                  heroSlides[currentSlide].profileImage ||
                  "/images/personImage.png"
                }
                alt="Hero profile"
                width={320}
                height={384}
                className="object-cover bg-main"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Dots */}
      <div
        className={`absolute ${
          isRTL ? "right-8" : "left-8"
        } top-4/6 transform -translate-y-1/2 z-20`}
      >
        <div className="flex flex-col space-y-3">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? "bg-white" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className={`absolute ${
          isRTL ? "right-4" : "left-4"
        } top-1/2 transform -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors`}
      >
        {isRTL ? (
          <ChevronRight className="w-6 h-6" />
        ) : (
          <ChevronLeft className="w-6 h-6" />
        )}
      </button>
      <button
        onClick={nextSlide}
        className={`absolute ${
          isRTL ? "left-4" : "right-4"
        } top-1/2 transform -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors`}
      >
        {isRTL ? (
          <ChevronLeft className="w-6 h-6" />
        ) : (
          <ChevronRight className="w-6 h-6" />
        )}
      </button>
    </section>
  );
}
