"use client";

import type React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useTranslation } from "@/hooks/use-translation";
import { useAppSelector } from "@/store/hooks";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");
  const { t } = useTranslation();
  const isRTL = useAppSelector((state) => state.language.isRTL);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setIsSubmitted(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
        setTimeout(() => setIsSubmitted(false), 3000);
      } else {
        setError(result.message || "Failed to send message");
      }
    } catch (error) {
      setError("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle
          className={`text-xl font-semibold text-gray-900 ${
            isRTL ? "text-right" : "text-left"
          }`}
        >
          {t("sendMessage")}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="name"
                className={`block text-sm font-medium text-gray-700 mb-1 ${
                  isRTL ? "text-right" : "text-left"
                }`}
              >
                {t("fullName")} *
              </label>
              <Input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder={t("fullName")}
                dir={isRTL ? "rtl" : "ltr"}
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className={`block text-sm font-medium text-gray-700 mb-1 ${
                  isRTL ? "text-right" : "text-left"
                }`}
              >
                {t("emailAddress")} *
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder={t("emailAddress")}
                dir={isRTL ? "rtl" : "ltr"}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="phone"
                className={`block text-sm font-medium text-gray-700 mb-1 ${
                  isRTL ? "text-right" : "text-left"
                }`}
              >
                {t("phoneNumber")}
              </label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder={t("phoneNumber")}
                dir={isRTL ? "rtl" : "ltr"}
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className={`block text-sm font-medium text-gray-700 mb-1 ${
                  isRTL ? "text-right" : "text-left"
                }`}
              >
                {t("subject")} *
              </label>
              <Input
                id="subject"
                name="subject"
                type="text"
                required
                value={formData.subject}
                onChange={handleChange}
                placeholder={t("subject")}
                dir={isRTL ? "rtl" : "ltr"}
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="message"
              className={`block text-sm font-medium text-gray-700 mb-1 ${
                isRTL ? "text-right" : "text-left"
              }`}
            >
              {t("message")} *
            </label>
            <Textarea
              id="message"
              name="message"
              required
              value={formData.message}
              onChange={handleChange}
              placeholder={t("message")}
              rows={5}
              dir={isRTL ? "rtl" : "ltr"}
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-amber-900 hover:bg-amber-800 text-white"
            disabled={isSubmitting}
          >
            {isSubmitting
              ? t("sending")
              : isSubmitted
              ? t("messageSent")
              : t("sendMessage")}
          </Button>

          {error && <p className="text-red-600 text-sm text-center">{error}</p>}
        </form>
      </CardContent>
    </Card>
  );
}
