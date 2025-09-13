"use client";

import { useEffect, useState } from "react";
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

import { useAppSelector } from "@/store/hooks";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { t } = useTranslation();
  const isRTL = useAppSelector((state) => state.language.isRTL);

  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // change 50 to any pixel threshold where you want it to become sticky
      setIsSticky(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const services = [
    { key: "legalConsultation", slug: "legal-consultation-services" },
    { key: "foreignInvestment", slug: "foreign-investment-services " },
    { key: "contracts", slug: "legal-consultation-services" },
    { key: "legalConsultation", slug: "legal-consultation-services" },
    { key: "foreignInvestment", slug: "foreign-investment-services" },
    { key: "notarization", slug: "legal-consultation-services" },
    { key: "insurance", slug: "foreign-investment-services" },
    { key: "allCases", slug: "legal-consultation-services" },
    { key: "legalConsultation", slug: "legal-consultation-services" },
    { key: "foreignInvestment", slug: "foreign-investment-services" },
    { key: "banksFinancial", slug: "legal-consultation-services" },
    { key: "corporateGovernance", slug: "foreign-investment-services" },
    { key: "companiesLiquidation", slug: "legal-consultation-services" },
    { key: "internalRegulations", slug: "foreign-investment-services" },
  ];

  return (
    <header
      className={`text-white left-0 right-0 top-0 z-50 transition-all duration-300 ${
        isSticky ? "fixed bg-brown shadow-md" : "absolute bg-transparent"
      }`}
    >
      <div className="container mx-auto px-0 py-3">
        <div className={`flex items-center justify-between h-16`}>
          {/* Logo */}
          <Link href="/" className={`flex items-center space-x-2  `}>
            <span className="font-bold text-lg mx-[16px]">Law Firm</span>
          </Link>

          {/* Desktop Navigation */}
          <nav
            className={`hidden md:flex items-center ${
              isRTL ? "space-x-reverse  gap-10" : " gap-8"
            }`}
          >
            <Link href="/" className=" hover:text-mainHover transition-colors">
              {t("home")}
            </Link>
            <Link href="/" className=" hover:text-mainHover transition-colors">
              {t("about")}
            </Link>

            {/* Services Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger
                className={`flex items-center space-x-1  hover:text-mainHover transition-colors cursor-pointer ${
                  isRTL ? "space-x-reverse" : ""
                }`}
              >
                <span>{t("services")}</span>
                <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="bg-brown border-brown  mx-[5vw] text-white min-w-[90vw] "
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(4, 1fr)",
                  gap: "1.2rem",
                  padding: "1rem",
                }}
              >
                {services.map((service) => (
                  <DropdownMenuItem
                    key={service.key}
                    className="hover:bg-brown focus:bg-brown "
                  >
                    <Link href={`/services/${service.slug}`}>
                      {t(service.key as keyof typeof t)}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Link href="/ " className=" hover:text-mainHover transition-colors">
              {t("blog")}
            </Link>
            <Link
              href="/team"
              className=" hover:text-mainHover transition-colors"
            >
              {t("team")}
            </Link>
            <Link href="/ " className=" hover:text-mainHover transition-colors">
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
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="text-white hover:bg-brown  "
            >
              <Search className="w-14 h-14" />
            </Button>

            {/* Book Appointment */}
            <Button
              variant="outline"
              size="sm"
              className="hidden px-2 py-4 md:inline-flex border-white text-white hover:bg-white hover:text-amber-900 bg-transparent"
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
              className="w-full px-4 py-2 rounded-lg bg-browntext-white placeholder-amber-200 border border-amber-700 focus:outline-none focus:border-amber-500"
              dir={isRTL ? "rtl" : "ltr"}
            />
          </div>
        )}

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 bg-brown p-3">
            <nav className="flex flex-col space-y-2">
              <Link href="/" className="py-2 hover:text-amber-200">
                {t("home")}
              </Link>
              <Link href="/ " className="py-2 hover:text-amber-200">
                {t("about")}
              </Link>
              <Link href="/services" className="py-2 hover:text-amber-200">
                {t("services")}
              </Link>
              <Link href="/ " className="py-2 hover:text-amber-200">
                {t("blog")}
              </Link>
              <Link href="/team" className="py-2 hover:text-amber-200">
                {t("team")}
              </Link>
              <Link href="/ " className="py-2 hover:text-amber-200">
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
