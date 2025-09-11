"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTestimonials } from "@/hooks/use-strapi-data"
import { useTranslation } from "@/hooks/use-translation"
import { useLanguage } from "@/contexts/language-context"

export function ClientsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const { testimonials, loading } = useTestimonials()
  const { t } = useTranslation()
  const { isRTL } = useLanguage()

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  if (loading) {
    return (
      <section className="py-16 bg-amber-900 text-white">
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
    )
  }

  if (testimonials.length === 0) {
    return null
  }

  const currentTestimonialData = testimonials[currentTestimonial]

  return (
    <section className="py-16 bg-amber-900 text-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("clientsTitle")}</h2>
          <p className="text-amber-100 max-w-2xl text-pretty">{t("clientsDescription")}</p>
        </div>

        {/* Testimonial */}
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${isRTL ? "lg:grid-flow-col-dense" : ""}`}>
          {/* Client Image */}
          <div className={`flex justify-center ${isRTL ? "lg:justify-end lg:col-start-2" : "lg:justify-start"}`}>
            <div className="relative">
              <img
                src={
                  currentTestimonialData.image || "/placeholder.svg?height=400&width=320&query=professional headshot"
                }
                alt={currentTestimonialData.name}
                className="w-80 h-96 object-cover rounded-lg shadow-2xl"
              />
            </div>
          </div>

          {/* Testimonial Content */}
          <div className={`space-y-6 ${isRTL ? "lg:col-start-1 text-right" : "text-left"}`}>
            <blockquote className="text-lg md:text-xl leading-relaxed text-pretty">
              "{currentTestimonialData.testimonial}"
            </blockquote>

            <div>
              <h4 className="text-xl font-semibold">{currentTestimonialData.name}</h4>
              <p className="text-amber-200">
                {currentTestimonialData.position}
                {currentTestimonialData.company && `, ${currentTestimonialData.company}`}
              </p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        {testimonials.length > 1 && (
          <div className="flex justify-center mt-12 space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={prevTestimonial}
              className="bg-amber-800 hover:bg-amber-700 text-white w-10 h-10 p-0 rounded-full"
            >
              {isRTL ? <ChevronRight className="w-5 h-5" /> : <ChevronLeft className="w-5 h-5" />}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={nextTestimonial}
              className="bg-amber-800 hover:bg-amber-700 text-white w-10 h-10 p-0 rounded-full"
            >
              {isRTL ? <ChevronLeft className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
