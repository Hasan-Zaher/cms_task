import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { ServicesBreadcrumb } from "@/components/ui/services-breadcrumb"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ForeignInvestmentServicesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <ServicesBreadcrumb currentPage="Foreign Investment Services" />

        <div className="max-w-4xl mx-auto">
          <Link href="/services">
            <Button variant="ghost" className="mb-6 p-0 h-auto text-amber-900 hover:text-amber-700">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
          </Link>

          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Foreign Investment Services</h1>
            <p className="text-gray-600 leading-relaxed text-pretty">
              We provide comprehensive legal support for foreign investors seeking to establish and expand their
              business presence. Our expertise covers all aspects of foreign investment law and regulatory compliance.
            </p>
          </div>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Investment Advisory Services</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-4">
                  Our team provides strategic legal advice for foreign investors, helping navigate complex regulatory
                  frameworks and ensuring compliance with local investment laws.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-amber-900 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Market entry strategies and legal structures
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-amber-900 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Regulatory compliance and licensing requirements
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-amber-900 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Tax optimization and incentive programs
                  </li>
                </ul>
              </div>
            </section>

            <section className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-900">
              <p className="text-gray-700 leading-relaxed">
                Contact our foreign investment specialists to discuss your expansion plans and receive tailored legal
                solutions for your international business ventures.
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
