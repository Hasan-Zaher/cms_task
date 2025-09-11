"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react"
import { strapiAPI } from "@/lib/strapi"
import { useTranslation } from "@/hooks/use-translation"
import { useAppSelector } from "@/store/hooks";

export function Footer() {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const { t } = useTranslation()

 const isRTL = useAppSelector((state) => state.language.isRTL);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setIsLoading(true)

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address")
      setIsLoading(false)
      return
    }

    try {
      const result = await strapiAPI.subscribeToNewsletter(email)

      if (result.success) {
        setIsSubscribed(true)
        setEmail("")
        setTimeout(() => setIsSubscribed(false), 3000)
      } else {
        setError(result.message)
      }
    } catch (error) {
      setError("Failed to subscribe. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <footer className="bg-amber-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ${isRTL ? "text-right" : "text-left"}`}>
          {/* Company Info */}
          <div className="space-y-4">
            <div
              className={`flex items-center space-x-2 ${isRTL ? "space-x-reverse justify-end md:justify-start" : ""}`}
            >
              <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                <span className="text-amber-900 font-bold text-sm">LF</span>
              </div>
              <span className="font-bold text-lg">Law Firm</span>
            </div>
            <p className="text-amber-100 text-sm leading-relaxed">
              Providing comprehensive legal solutions with expertise and dedication to serve our clients' needs
              effectively across various legal domains.
            </p>
            <div className={`flex space-x-3 ${isRTL ? "space-x-reverse justify-end md:justify-start" : ""}`}>
              <Button variant="ghost" size="sm" className="w-8 h-8 p-0 hover:bg-amber-800">
                <Facebook className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="w-8 h-8 p-0 hover:bg-amber-800">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="w-8 h-8 p-0 hover:bg-amber-800">
                <Linkedin className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">{t("quickLinks")}</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/about" className="text-amber-100 hover:text-white transition-colors text-sm">
                {t("about")}
              </Link>
              <Link href="/services" className="text-amber-100 hover:text-white transition-colors text-sm">
                {t("ourStrategy")}
              </Link>
              <Link href="/advantages" className="text-amber-100 hover:text-white transition-colors text-sm">
                {t("ourAdvantages")}
              </Link>
              <Link href="/responsibility" className="text-amber-100 hover:text-white transition-colors text-sm">
                {t("socialResponsibility")}
              </Link>
              <Link href="/services" className="text-amber-100 hover:text-white transition-colors text-sm">
                {t("ourServices")}
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">{t("contact")}</h3>
            <div className="space-y-3">
              <div className={`flex items-center space-x-3 ${isRTL ? "space-x-reverse" : ""}`}>
                <Mail className="w-4 h-4 text-amber-200" />
                <span className="text-amber-100 text-sm">info@lawfirm.com</span>
              </div>
              <div className={`flex items-center space-x-3 ${isRTL ? "space-x-reverse" : ""}`}>
                <Phone className="w-4 h-4 text-amber-200" />
                <span className="text-amber-100 text-sm">+1 (555) 123-4567</span>
              </div>
              <div className={`flex items-start space-x-3 ${isRTL ? "space-x-reverse" : ""}`}>
                <MapPin className="w-4 h-4 text-amber-200 mt-0.5" />
                <span className="text-amber-100 text-sm">
                  123 Legal Street, Business District
                  <br />
                  City, State 12345
                </span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">{t("newsletter")}</h3>
            <p className="text-amber-100 text-sm">{t("newsletterDescription")}</p>
            <form onSubmit={handleSubscribe} className="space-y-3">
              <Input
                type="email"
                placeholder={t("emailAddress")}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-amber-800 border-amber-700 text-white placeholder-amber-200 focus:border-amber-500"
                dir={isRTL ? "rtl" : "ltr"}
                disabled={isLoading}
              />
              <Button
                type="submit"
                className="w-full bg-white text-amber-900 hover:bg-gray-100"
                disabled={isLoading || isSubscribed}
              >
                {isLoading ? "Loading..." : isSubscribed ? t("subscribed") : t("subscribe")}
              </Button>
              {error && <p className="text-red-300 text-xs">{error}</p>}
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-amber-800 mt-8 pt-8 text-center">
          <p className="text-amber-200 text-sm">© 2024. {t("allRightsReserved")}</p>
        </div>
      </div>
    </footer>
  )
}
