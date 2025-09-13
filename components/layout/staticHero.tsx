"use client";

import { useTranslation } from "@/hooks/use-translation";
import { useAppSelector } from "@/store/hooks";

export function StaticHero() {
  const { t } = useTranslation();
  const isRTL = useAppSelector((state) => state.language.isRTL);

  return (
    <section className="relative h-[300px] md:h-screen bg-brown text-white overflow-hidden  ">
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
