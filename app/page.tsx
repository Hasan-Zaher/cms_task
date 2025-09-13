import { Header } from "@/components/layout/header";
import { HeroSection } from "@/components/sections/hero-section";
import { TeamSection } from "@/components/sections/team-section";
import { ClientsSection } from "@/components/sections/clients-section";
import { Footer } from "@/components/layout/footer";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <TeamSection />
      <ClientsSection />
      <Footer />
    </main>
  );
}
