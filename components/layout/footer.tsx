"use client";

import type React from "react";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

import { Facebook, Twitter, Chrome } from "lucide-react";
import { strapiAPI } from "@/lib/strapi";
import { useTranslation } from "@/hooks/use-translation";
import { useAppSelector } from "@/store/hooks";
import { useFormik } from "formik";
import * as Yup from "yup";

export function Footer() {
  const { t } = useTranslation();
  const isRTL = useAppSelector((state) => state.language.isRTL);
  const [isSubscribed, setIsSubscribed] = useState(false);

  //  validation schema
  const subscriptionSchema = Yup.object().shape({
    email: Yup.string()
      .email(t("invalidEmail") || "Please enter a valid email address")
      .required(t("emailRequired") || "Email is required"),
  });

  // Initialize Formik
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: subscriptionSchema,
    onSubmit: async (values, { setSubmitting, setStatus, resetForm }) => {
      try {
        const result = await strapiAPI.subscribeToNewsletter(values.email);

        if (result.success) {
          setIsSubscribed(true);
          resetForm();
          setStatus({ success: true });
          setTimeout(() => setIsSubscribed(false), 3000);
        } else {
          setStatus({ error: result.message || t("subscribeError") });
        }
      } catch (error) {
        setStatus({
          error:
            t("subscribeError") || "Failed to subscribe. Please try again.",
        });
      } finally {
        setSubmitting(false);
      }
    },
  });

  const navLinks = [
    { href: "/about", label: t("about") },
    { href: "/services", label: t("ourStrategy") },
    { href: "/advantages", label: t("ourAdvantages") },
    { href: "/responsibility", label: t("socialResponsibility") },
    { href: "/services", label: t("ourServices") },
  ];

  return (
    <footer className="bg-brown text-white mt-2 md:mt-8 py-5">
      <div className="container mx-auto px-4 py-8 flex flex-col lg:flex-row items-center justify-between">
        <div />

        {/* Newsletter & Social */}
        <div className="flex flex-row items-center flex-wrap gap-10 w-full lg:w-auto">
          <form
            onSubmit={formik.handleSubmit}
            className="w-full lg:w-auto relative max-w-[320px]"
          >
            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                placeholder={t("emailAddress")}
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`bg-white text-black placeholder-black px-3 py-2 rounded w-full pr-28 focus:outline-none focus:border-black ${
                  formik.touched.email && formik.errors.email
                    ? "border-red-500"
                    : ""
                }`}
                dir={isRTL ? "rtl" : "ltr"}
                disabled={formik.isSubmitting || isSubscribed}
              />
              <button
                type="submit"
                className="absolute top-1/2 right-1 transform -translate-y-1/2 bg-brown text-white px-5 py-1 rounded-lg hover:bg-faint cursor-pointer disabled:opacity-50"
                disabled={
                  formik.isSubmitting || isSubscribed || !formik.isValid
                }
              >
                {formik.isSubmitting
                  ? t("loading") || "Loading..."
                  : isSubscribed
                  ? t("subscribed")
                  : t("subscribe")}
              </button>
            </div>

            {/* Error messages */}
            {formik.touched.email && formik.errors.email && (
              <div className="text-red-500 text-sm mt-1">
                {formik.errors.email}
              </div>
            )}

            {formik.status?.error && (
              <div className="text-red-500 text-sm mt-1">
                {formik.status.error}
              </div>
            )}

            {formik.status?.success && (
              <div className="text-green-500 text-sm mt-1">
                {t("subscribeSuccess") || "Successfully subscribed!"}
              </div>
            )}
          </form>

          <p>{t("contactUs")}</p>
          <div className="flex space-x-3 lg:mt-0">
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
      <div className="container mx-auto border-t border-white mt-6 pb-4 pt-8 flex flex-col lg:flex-row items-center justify-between">
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
