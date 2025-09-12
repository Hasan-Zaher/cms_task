"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTestimonials } from "@/hooks/use-strapi-data";
import { useTranslation } from "@/hooks/use-translation";
import { useAppSelector } from "@/store/hooks";
import Image from "next/image";

export function ClientsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const { testimonials, loading } = useTestimonials();
  const { t } = useTranslation();
  const isRTL = useAppSelector((state) => state.language.isRTL);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  if (loading) {
    return (
      <section className="py-16 bg-brown text-white">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <div className="h-8 bg-amber-800 rounded w-64 mb-4 animate-pulse"></div>
            <div className="h-4 bg-amber-800 rounded w-96 animate-pulse"></div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="w-80 h-96 bg-amber-800 rounded-lg animate-pulse mx-auto lg:mx-0"></div>
            <div className="space-y-6">
              <div className="h-6 bg-amber-800 rounded animate-pulse"></div>
              <div className="h-6 bg-amber-800 rounded animate-pulse"></div>
              <div className="h-4 bg-amber-800 rounded w-48 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (testimonials.length === 0) {
    return null;
  }

  const currentTestimonialData = testimonials[currentTestimonial];

  return (
    <section className="py-16 bg-brown text-white  ">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t("clientsTitle")}
          </h2>
          <p className=" max-w-2xl opacity-[0.6]">{t("clientsDescription")}</p>
        </div>

        {/* Testimonial */}
        <div
          className={`flex flex-col lg:flex-row items-center ${
            isRTL ? "lg:flex-row-reverse" : ""
          }`}
        >
          {/* Image */}
          <div
            className={`flex justify-center ${
              isRTL ? "lg:justify-end" : "lg:justify-start"
            }`}
          >
            <div className="relative my-10 md:my-0">
              <Image
                src={
                  currentTestimonialData.image ||
                  "/placeholder.svg?height=400&width=320&query=professional headshot"
                }
                alt={currentTestimonialData.name}
                width={100}
                height={100}
                className=" w-100 md:min-w-120 h-100  object-cover  shadow-2xl  "
              />
            </div>
          </div>

          {/* Content */}
          <div
            className={` space-y-6 px-6 ${isRTL ? "text-right" : "text-left"}`}
          >
            <blockquote className="text-lg md:text-xl leading-relaxed opacity-[0.6]">
              "
              {isRTL
                ? currentTestimonialData.testimonialAr
                : currentTestimonialData.testimonial}
              "
            </blockquote>
            <div>
              <h4 className="text-xl font-semibold">
                {isRTL
                  ? currentTestimonialData.nameAr
                  : currentTestimonialData.name}
              </h4>
              <p className="mt-5">
                {isRTL
                  ? currentTestimonialData.positionAr
                  : currentTestimonialData.position}
                {isRTL
                  ? `, ${currentTestimonialData.companyAr}`
                  : `, ${currentTestimonialData.company}`}
              </p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        {testimonials.length > 1 && (
          <div className="flex justify-end mt-12 space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={prevTestimonial}
              className="bg-white shadow-lg   hover:bg-faint  hover:shadow-xl text-black  cursor-pointer  w-10 h-10 p-0 rounded-full"
            >
              {isRTL ? (
                <ChevronRight className="w-5 h-5" />
              ) : (
                <ChevronLeft className="w-5 h-5" />
              )}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={nextTestimonial}
              className=" bg-white shadow-lg    hover:bg-faint  hover:shadow-xl text-black  cursor-pointer  w-10 h-10 p-0 rounded-full"
            >
              {isRTL ? (
                <ChevronLeft className="w-5 h-5" />
              ) : (
                <ChevronRight className="w-5 h-5" />
              )}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
