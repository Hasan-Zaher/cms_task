"use client";

import type React from "react";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/next";
import { Suspense, useEffect, useState } from "react";
import { Provider } from "react-redux";
import { store } from "@/store/store";
import { useAppSelector } from "@/store/hooks";
import "./globals.css";

function useLanguage() {
  const locale = useAppSelector((state) => state.language.locale);
  const isRTL = useAppSelector((state) => state.language.isRTL);
  return { locale, isRTL };
}

function ClientLayout({ children }: { children: React.ReactNode }) {
  const { locale, isRTL } = useLanguage();
  const [dir, setDir] = useState<"ltr" | "rtl">(isRTL ? "rtl" : "ltr");

  useEffect(() => {
    setDir(isRTL ? "rtl" : "ltr");

    if (isRTL) {
      document.body.classList.add("rtl");
    } else {
      document.body.classList.remove("rtl");
    }
  }, [isRTL, locale]);
  console.log("locale");
  console.log(locale);
  console.log("locale");
  return (
    <html lang={locale} dir={dir}>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  );
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <Provider store={store}>
      <ClientLayout>{children}</ClientLayout>
    </Provider>
  );
}
