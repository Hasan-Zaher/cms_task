"use client";

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useServices } from "@/hooks/use-strapi-data";
import { useParams } from "next/navigation";
import { StaticHero } from "@/components/layout/staticHero";
import { useAppSelector } from "@/store/hooks";
import { useTranslation } from "@/hooks/use-translation";

export default function ServicePage() {
  const { slug } = useParams();
  const locale = useAppSelector((state) => state.language.locale);
  const isRTL = useAppSelector((state) => state.language.isRTL);
  const { t } = useTranslation();

  const { services, loading, error } = useServices();

  if (loading) {
    return (
      <main className="min-h-screen bg-background">
        <Header />
        <StaticHero />
        <div className="container mx-auto px-4 py-8">
          <p className="text-gray-700"> {t("loadingService")}</p>
        </div>
        <Footer />
      </main>
    );
  }

  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return (
      <main className="min-h-screen bg-background">
        <Header />
        <StaticHero />
        <div className="container mx-auto px-4 py-8">
          <p className="text-gray-700">Service not found.</p>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen">
      <Header />
      <StaticHero />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <Link href="/">
            <Button
              variant="ghost"
              className="mb-6 p-0  text-md h-auto text-amber-900 hover:text-amber-700"
            >
              <ChevronLeft
                className="w-4 h-4 "
                style={{
                  transform: isRTL ? "rotate(180deg)" : "none",
                  width: "25px",
                  height: "25px",
                }}
              />
              {t("Back")}
            </Button>
          </Link>

          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-brown mb-4 ">
              {service.title[locale]}
            </h1>
            <p className="text-gray-600 leading-relaxed text-pretty">
              {service.description[locale]}
            </p>
          </div>

          {service.content.map((section, index) => {
            if (section.type === "item") {
              return (
                <div key={index} className="bg-gray-50 p-6 rounded-lg mb-6">
                  <p className="text-brown font-semibold mb-4">
                    {section.title?.[locale]}
                  </p>
                  <p className="flex gap-3 mb-4   ">
                    <span className="min-w-[14px] h-[14px] bg-brown mt-1 flex-shrink-0 border-[10ox]"></span>
                    <span className="   text-[#1E1E1E]  font-bold opacity-[0.7]">
                      {section.text?.[locale]}{" "}
                    </span>
                  </p>
                  <div className="#1E1E1E opacity-[0.8]">
                    {section.list?.[locale]?.map((item, i) => (
                      <p key={i}>- {item}</p>
                    ))}
                  </div>
                </div>
              );
            } else if (section.type === "subData") {
              return (
                <div key={index} className="mt-6  #1E1E1E opacity-[0.8]">
                  {section.text?.[locale]}
                </div>
              );
            }
            return null;
          })}
        </div>
      </div>

      <Footer />
    </main>
  );
}
