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
import Image from "next/image";

export function StaticHero() {
  const { t } = useTranslation();
  const isRTL = useAppSelector((state) => state.language.isRTL);

  return (
    <section className="py-16 bg-brown text-white  ">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
        style={{
          backgroundImage:
            "linear-gradient(rgba(165, 42, 42, 0.4), rgba(165, 42, 42, 0.4)), url('/images/heroImage.jpg')",
          filter: "sepia(20%) saturate(100%) brightness(100%)",
        }}
      >
        <div
          className={`absolute inset-0 ${
            isRTL ? "bg-gradient-to-l" : "bg-gradient-to-r"
          } from-black/70 via-black/50 to-transparent`}
        ></div>
      </div>
    </section>
  );
}
