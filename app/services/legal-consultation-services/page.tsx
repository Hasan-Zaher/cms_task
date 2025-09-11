import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { ServicesBreadcrumb } from "@/components/ui/services-breadcrumb"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function LegalConsultationServicesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <ServicesBreadcrumb currentPage="Legal Consultation Services" />

        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Link href="/services">
            <Button variant="ghost" className="mb-6 p-0 h-auto text-amber-900 hover:text-amber-700">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
          </Link>

          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Legal Consultation Services</h1>
            <p className="text-gray-600 leading-relaxed text-pretty">
              Law Firm is one of the leading legal offices that offer exceptional advisory services for both individuals
              and companies. Our mission is to provide comprehensive and specialized legal support to meet our clients'
              needs and offer the best legal solutions in various cases and legal matters. We offer the best legal
              consultations services as follows.
            </p>
          </div>

          {/* Services Sections */}
          <div className="space-y-8">
            {/* General Legal Consultations */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">General Legal Consultations</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-4">
                  We at Law Firm offer comprehensive legal consultations covering all legal aspects that our clients may
                  encounter in their daily lives or business activities. Our goal is to offer accurate legal advice
                  based on a deep understanding of local and international laws.
                </p>
              </div>
            </section>

            {/* Corporate Legal Consultations */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Corporate Legal Consultations</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-4">
                  We at Law Firm understand the importance of legal consultations for companies in building and
                  enhancing their businesses.
                </p>
                <p className="text-gray-700 mb-4 font-medium">Our advisory services about:</p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-amber-900 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Establishing and registering companies
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-amber-900 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    All kinds of contracts and agreements
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-amber-900 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Commercial disputes
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-amber-900 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Compliance with local and international laws and regulations
                  </li>
                </ul>
              </div>
            </section>

            {/* Individual Legal Consultations */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Individual Legal Consultations</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-4">
                  Law Firm offers customized advisory services for individuals, including:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-amber-900 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Family issues such as divorce, alimony, and custody
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-amber-900 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Real estate matters like buying, selling, and renting properties
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-amber-900 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Employment issues such as hiring and wrongful termination
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-amber-900 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Criminal cases and defending personal rights
                  </li>
                </ul>
              </div>
            </section>

            {/* Closing Statement */}
            <section className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-900">
              <p className="text-gray-700 leading-relaxed">
                At Law Firm, we aim to provide the best legal services to ensure your rights and offer effective legal
                solutions. Contact us today to receive professional and comprehensive legal consultation.
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
