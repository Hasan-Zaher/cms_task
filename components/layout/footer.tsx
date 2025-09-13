"use client";

import type React from "react";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Twitter, Chrome } from "lucide-react";
import { strapiAPI } from "@/lib/strapi";
import { useTranslation } from "@/hooks/use-translation";
import { useAppSelector } from "@/store/hooks";

export function Footer() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const { t } = useTranslation();

  const isRTL = useAppSelector((state) => state.language.isRTL);

  const navLinks = [
    { href: "/about", label: t("about") },
    { href: "/services", label: t("ourStrategy") },
    { href: "/advantages", label: t("ourAdvantages") },
    { href: "/responsibility", label: t("socialResponsibility") },
    { href: "/services", label: t("ourServices") },
  ];

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address");
      setIsLoading(false);
      return;
    }

    try {
      const result = await strapiAPI.subscribeToNewsletter(email);

      if (result.success) {
        setIsSubscribed(true);
        setEmail("");
        setTimeout(() => setIsSubscribed(false), 3000);
      } else {
        setError(result.message);
      }
    } catch (error) {
      setError("Failed to subscribe. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <footer className="bg-brown text-white mt-2  md:mt-8 py-5">
      <div
        className={`container mx-auto px-4 py-8 flex flex-col  lg:flex-row items-center justify-between 
         `}
      >
        <div />

        {/* Newsletter & Social */}
        <div
          className={`flex  flex-row items-center flex-wrap   gap-10 w-full lg:w-auto `}
        >
          <form
            onSubmit={handleSubscribe}
            className="w-full lg:w-auto relative max-w-[320px]"
          >
            <input
              type="email"
              placeholder={t("emailAddress")}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-white   text-black placeholder-black px-3 py-2 rounded w-full pr-28 focus:outline-none focus:border-black"
              dir={isRTL ? "rtl" : "ltr"}
              disabled={isLoading}
            />
            <button
              type="submit"
              className="absolute top-1/2 right-1 transform -translate-y-1/2 bg-brown text-white px-5 py-1 rounded-lg
               hover:bg-faint  cursor-pointer  disabled:opacity-50"
              disabled={isLoading || isSubscribed}
            >
              {isLoading
                ? "Loading..."
                : isSubscribed
                ? t("subscribed")
                : t("subscribe")}
            </button>
          </form>

          <p>{t("contactUs")}</p>
          <div className="flex space-x-3  lg:mt-0">
            <Button
              variant="ghost"
              size="sm"
              className="w-8 h-8 p-0 hover:bg-faint cursor-pointer "
            >
              <Twitter
                style={{
                  width: "20px",
                  height: "20px",
                }}
              />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="w-8 h-8 p-0 hover:bg-faint cursor-pointer"
            >
              <Facebook
                style={{
                  width: "20px",
                  height: "20px",
                }}
              />
            </Button>

            <Button
              variant="ghost"
              size="sm"
              className="w-8 h-8 p-0 hover:bg-faint cursor-pointer"
            >
              <Chrome
                style={{
                  width: "20px",
                  height: "20px",
                }}
              />
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className=" container    mx-auto border-t border-white mt-6 pb-4 pt-8   flex flex-col lg:flex-row items-center justify-between ">
        {/* Quick Links */}
        <nav className="flex flex-wrap gap-6 mt-6 lg:mt-0">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="text-white hover:text-mainHover text-sm"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <p className="text-white text-sm">© 2025. {t("allRightsReserved")}</p>
      </div>
    </footer>
  );
}
