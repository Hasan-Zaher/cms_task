"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, MessageCircle, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTeamMembers } from "@/hooks/use-strapi-data"
import { useTranslation } from "@/hooks/use-translation"
import { useLanguage } from "@/contexts/language-context"

export function TeamSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const { teamMembers, loading } = useTeamMembers()
  const { t } = useTranslation()
  const { isRTL } = useLanguage()
  const itemsPerPage = 3

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + itemsPerPage >= teamMembers.length ? 0 : prev + itemsPerPage))
  }

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? Math.max(0, teamMembers.length - itemsPerPage) : Math.max(0, prev - itemsPerPage),
    )
  }

  const visibleMembers = teamMembers.slice(currentIndex, currentIndex + itemsPerPage)

  if (loading) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="h-8 bg-gray-200 rounded w-48 mx-auto mb-4 animate-pulse"></div>
            <div className="h-4 bg-gray-200 rounded w-96 mx-auto animate-pulse"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="aspect-square bg-gray-200 animate-pulse"></div>
                <div className="p-6">
                  <div className="h-6 bg-gray-200 rounded mb-2 animate-pulse"></div>
                  <div className="h-4 bg-gray-200 rounded mb-4 animate-pulse"></div>
                  <div className="flex justify-center space-x-3">
                    {[1, 2, 3].map((j) => (
                      <div key={j} className="w-8 h-8 bg-gray-200 rounded animate-pulse"></div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className={`text-center mb-12 ${isRTL ? "text-right" : "text-left"}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">{t("ourTeam")}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-pretty text-center">{t("teamDescription")}</p>
        </div>

        {/* Team Members */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visibleMembers.map((member) => (
              <div
                key={member.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition-shadow"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image || "/placeholder.svg?height=400&width=400&query=professional headshot"}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-sm text-gray-500 mb-4 tracking-wide">{member.position}</p>
                  <div className={`flex justify-center space-x-3 ${isRTL ? "space-x-reverse" : ""}`}>
                    {member.social.email && (
                      <Button
                        variant="ghost"
                        size="sm"
                        className="w-8 h-8 p-0 hover:bg-red-50 hover:text-red-600"
                        asChild
                      >
                        <a href={`mailto:${member.social.email}`}>
                          <Mail className="w-4 h-4" />
                        </a>
                      </Button>
                    )}
                    {member.social.phone && (
                      <Button
                        variant="ghost"
                        size="sm"
                        className="w-8 h-8 p-0 hover:bg-green-50 hover:text-green-600"
                        asChild
                      >
                        <a href={`tel:${member.social.phone}`}>
                          <Phone className="w-4 h-4" />
                        </a>
                      </Button>
                    )}
                    {member.social.linkedin && (
                      <Button
                        variant="ghost"
                        size="sm"
                        className="w-8 h-8 p-0 hover:bg-blue-50 hover:text-blue-600"
                        asChild
                      >
                        <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer">
                          <MessageCircle className="w-4 h-4" />
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          {teamMembers.length > itemsPerPage && (
            <>
              <Button
                variant="ghost"
                size="sm"
                onClick={prevSlide}
                className={`absolute ${isRTL ? "right-0 translate-x-4" : "left-0 -translate-x-4"} top-1/2 transform -translate-y-1/2 bg-white shadow-lg hover:shadow-xl w-10 h-10 p-0 rounded-full`}
              >
                {isRTL ? <ChevronRight className="w-5 h-5" /> : <ChevronLeft className="w-5 h-5" />}
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={nextSlide}
                className={`absolute ${isRTL ? "left-0 -translate-x-4" : "right-0 translate-x-4"} top-1/2 transform -translate-y-1/2 bg-white shadow-lg hover:shadow-xl w-10 h-10 p-0 rounded-full`}
              >
                {isRTL ? <ChevronLeft className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
              </Button>
            </>
          )}
        </div>
      </div>
    </section>
  )
}
