"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslation } from "@/hooks/use-translation";
import { useAppSelector } from "@/store/hooks";
import Image from "next/image";

const heroSlides = [
  {
    id: 1,
    titleKey: "heroTitle1",
    descriptionKey: "heroDescription1",
    backgroundImage:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-W4lqJ3ormq8OpARlTjAauk9dAU9XgL.png",
    profileImage:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-E17mkYc9ZHJXzJtpN7BVkyApQWFr70.png",
  },
  {
    id: 2,
    titleKey: "heroTitle2",
    descriptionKey: "heroDescription2",
    backgroundImage:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-W4lqJ3ormq8OpARlTjAauk9dAU9XgL.png",
    profileImage:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-E17mkYc9ZHJXzJtpN7BVkyApQWFr70.png",
  },
];

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { t } = useTranslation();
  const isRTL = useAppSelector((state) => state.language.isRTL);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + heroSlides.length) % heroSlides.length
    );
  };

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
        className="relative z-10   container mx-auto px-4 h-full flex items-center"
        dir={isRTL ? "ltr" : ""}
      >
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center w-full ${
            isRTL ? "text-right   " : "text-left"
          }`}
        >
          {/* Left Content */}
          <div className={`text-white space-y-6 ${isRTL ? "lg:order-2" : ""}`}>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight text-balance">
              {t(heroSlides[currentSlide].titleKey as keyof typeof t)}
            </h1>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed text-pretty">
              {t(heroSlides[currentSlide].descriptionKey as keyof typeof t)}
            </p>
            <Button
              size="lg"
              className="bg-white text-amber-900 hover:bg-gray-100 font-semibold px-8 py-3"
            >
              {t("readMore")}
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
                src="/images/personImage.png"
                alt="person"
                width={320}
                height={384}
                className="object-cover bg-main   "
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
