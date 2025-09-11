"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LanguageToggle } from "@/components/ui/language-toggle";
import { useTranslation } from "@/hooks/use-translation";
import { useLanguage } from "@/contexts/language-context";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { t } = useTranslation();
  const { isRTL } = useLanguage();

  const services = [
    { key: "legalConsultation", slug: "legal-consultation-services" },
    { key: "foreignInvestment", slug: "foreign-investment-services" },
    { key: "contracts", slug: "contracts" },
    { key: "notarization", slug: "notarization" },
    { key: "insurance", slug: "insurance" },
    { key: "banksFinancial", slug: "banks-and-financial-institutions" },
    { key: "corporateGovernance", slug: "corporate-governance-services" },
    { key: "companiesLiquidation", slug: "companies-liquidation" },
    { key: "internalRegulations", slug: "internal-regulations-for-companies" },
  ];

  return (
    <header className=" text-white absolute left-0 right-0 top-0 z-50">
      <div className="container mx-auto px-0 py-3">
        <div
          className={`flex items-center justify-between h-16 ${
            isRTL ? "flex-row-reverse" : ""
          }`}
        >
          {/* Logo */}
          <Link
            href="/"
            className={`flex items-center space-x-2 ${
              isRTL ? "space-x-reverse" : ""
            }`}
          >
            
            <span className="font-bold text-lg">Law Firm</span>
          </Link>

          {/* Desktop Navigation */}
          <nav
            className={`hidden md:flex items-center space-x-8 ${
              isRTL ? "space-x-reverse" : ""
            }`}
          >
            <Link href="/" className="hover:text-amber-200 transition-colors">
              {t("home")}
            </Link>
            <Link
              href="/about"
              className="hover:text-amber-200 transition-colors"
            >
              {t("about")}
            </Link>

            {/* Services Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger
                className={`flex items-center space-x-1 hover:text-amber-200 transition-colors ${
                  isRTL ? "space-x-reverse" : ""
                }`}
              >
                <span>{t("services")}</span>
                <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-amber-900 border-amber-800 text-white min-w-[300px]">
                {services.map((service) => (
                  <DropdownMenuItem
                    key={service.key}
                    className="hover:bg-amber-800 focus:bg-amber-800"
                  >
                    <Link href={`/services/${service.slug}`}>
                      {t(service.key as keyof typeof t)}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Link
              href="/blog"
              className="hover:text-amber-200 transition-colors"
            >
              {t("blog")}
            </Link>
            <Link
              href="/team"
              className="hover:text-amber-200 transition-colors"
            >
              {t("team")}
            </Link>
            <Link
              href="/contact"
              className="hover:text-amber-200 transition-colors"
            >
              {t("contact")}
            </Link>
          </nav>

          {/* Right side actions */}
          <div
            className={`flex items-center space-x-4 ${
              isRTL ? "space-x-reverse" : ""
            }`}
          >
            {/* Language Toggle */}
            <div className="hidden md:flex">
              <LanguageToggle />
            </div>

            {/* Search */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="text-white hover:bg-amber-800"
            >
              <Search className="w-4 h-4" />
            </Button>

            {/* Book Appointment */}
            <Button
              variant="outline"
              size="sm"
              className="hidden md:inline-flex border-white text-white hover:bg-white hover:text-amber-900 bg-transparent"
            >
              {t("bookAppointment")}
            </Button>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white hover:bg-amber-800"
            >
              {isMenuOpen ? (
                <X className="w-4 h-4" />
              ) : (
                <Menu className="w-4 h-4" />
              )}
            </Button>
          </div>
        </div>

        {/* Search Bar */}
        {isSearchOpen && (
          <div className="pb-4">
            <input
              type="text"
              placeholder={t("searchPlaceholder")}
              className="w-full px-4 py-2 rounded-lg bg-amber-800 text-white placeholder-amber-200 border border-amber-700 focus:outline-none focus:border-amber-500"
              dir={isRTL ? "rtl" : "ltr"}
            />
          </div>
        )}

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <nav className="flex flex-col space-y-2">
              <Link href="/" className="py-2 hover:text-amber-200">
                {t("home")}
              </Link>
              <Link href="/about" className="py-2 hover:text-amber-200">
                {t("about")}
              </Link>
              <Link href="/services" className="py-2 hover:text-amber-200">
                {t("services")}
              </Link>
              <Link href="/blog" className="py-2 hover:text-amber-200">
                {t("blog")}
              </Link>
              <Link href="/team" className="py-2 hover:text-amber-200">
                {t("team")}
              </Link>
              <Link href="/contact" className="py-2 hover:text-amber-200">
                {t("contact")}
              </Link>
              <div className="py-2">
                <LanguageToggle />
              </div>
              <Button
                variant="outline"
                size="sm"
                className="mt-2 border-white text-white hover:bg-white hover:text-amber-900 w-fit bg-transparent"
              >
                {t("bookAppointment")}
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
