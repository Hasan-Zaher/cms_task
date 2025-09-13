"use client";

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useTeamMembers } from "@/hooks/use-strapi-data";
import { useParams } from "next/navigation";
import { StaticHero } from "@/components/layout/staticHero";
import { useAppSelector } from "@/store/hooks";
import { useTranslation } from "@/hooks/use-translation";

export default function TeamServicePage() {
  const { slug } = useParams();
  const locale = useAppSelector((state) => state.language.locale);
  const isRTL = useAppSelector((state) => state.language.isRTL);
  const { t } = useTranslation();

  const { teamMembers, loading, error } = useTeamMembers();

  if (loading) {
    return (
      <main className="min-h-screen bg-background">
        <Header />
        <StaticHero />
        <div className="container mx-auto px-4 py-8">
          <p className="text-gray-700"> {t("loadingTeamService")}</p>
        </div>
        <Footer />
      </main>
    );
  }

  const teamMember = teamMembers.find((s) => s.slug === slug);

  if (!teamMember) {
    return (
      <main className="min-h-screen bg-background">
        <Header />
        <StaticHero />
        <div className="container mx-auto px-4 py-8">
          <p className="text-gray-700">{t("teamServiceNotFound")}</p>
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
          <div className="flex flex-col md:flex-row gap-8 md:gap-10">
            <div className="flex flex-col gap-3 justify-center min-w-[140px] h-[140px] bg-[#ede8e8] w-fit text-center text-brown font-bold p-6">
              {isRTL ? (
                <>
                  <p>{t("servicesTeam")}</p>
                  <p>{teamMember.name}</p>
                </>
              ) : (
                <>
                  <p>{teamMember.name}</p>
                  <p>{t("servicesTeam")}</p>
                </>
              )}
            </div>
            <div className="w-full">
              <Link href="/">
                <Button
                  variant="ghost"
                  className="mb-6 text-md p-0 h-auto text-amber-900 hover:text-amber-700"
                >
                  <ChevronLeft
                    className="w-4 h-4"
                    style={{
                      transform: isRTL ? "rotate(180deg)" : "none",
                      width: "25px",
                      height: "25px",
                    }}
                  />
                  {t("Back")}
                </Button>
              </Link>

              <div className="flex flex-col gap-8 mt-2">
                {teamMember.services.map((service, index) => (
                  <div
                    key={service.id}
                    className="flex flex-col gap-4 text-brown"
                  >
                    <h3 className="text-xl font-semibold">
                      {service.title[locale]}
                    </h3>
                    <p>{service.description[locale]}</p>
                    <p>
                      <Link
                        href={`/services/${service.slug}`}
                        className="text-brown underline font-medium hover:text-amber-700 transition-colors"
                      >
                        {locale === "ar" ? "اقرأ المزيد" : "Read more"}
                      </Link>
                    </p>
                    {index < teamMember.services.length - 1 && (
                      <div className="h-[2px] bg-[#97979780] mt-4"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
