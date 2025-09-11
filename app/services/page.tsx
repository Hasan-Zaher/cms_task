import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { ServicesGrid } from "@/components/sections/services-grid"
import { ServicesBreadcrumb } from "@/components/ui/services-breadcrumb"

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <ServicesBreadcrumb />
        <ServicesGrid />
      </div>
      <Footer />
    </main>
  )
}
