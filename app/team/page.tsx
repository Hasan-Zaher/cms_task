import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { TeamSection } from "@/components/sections/team-section"

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="py-16">
        <TeamSection />
      </div>
      <Footer />
    </main>
  )
}
