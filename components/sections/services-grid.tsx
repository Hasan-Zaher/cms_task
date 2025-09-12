import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Scale, Building2, FileText, Stamp, Shield, Landmark, Users, Briefcase, Settings } from "lucide-react"

const services = [
  {
    id: "legal-consultation-services",
    title: "Legal Consultation Services",
    description:
      "Law Firm is one of the leading legal offices that offer exceptional advisory services for both individuals and companies.",
    icon: Scale,
    category: "Consultation",
  },
  {
    id: "foreign-investment-services",
    title: "Foreign Investment Services",
    description:
      "Comprehensive support for foreign investors looking to establish businesses and navigate local regulations.",
    icon: Building2,
    category: "Investment",
  },
  {
    id: "contracts",
    title: "Contracts",
    description:
      "Expert contract drafting, review, and negotiation services for all types of business and personal agreements.",
    icon: FileText,
    category: "Legal Documents",
  },
  {
    id: "notarization",
    title: "Notarization",
    description: "Professional notarization services for legal documents, ensuring authenticity and legal compliance.",
    icon: Stamp,
    category: "Documentation",
  },
  {
    id: "allCases",
    title: ".....and Defense in All Cases",
    description: "Professional notarization services for legal documents, ensuring authenticity and legal compliance.",
    icon: Stamp,
    category: "Documentation",
  },
  {
    id: "insurance",
    title: "Insurance",
    description: "Legal guidance on insurance matters, claims processing, and policy interpretation.",
    icon: Shield,
    category: "Protection",
  },
  {
    id: "banks-and-financial-institutions",
    title: "Banks and Financial Institutions",
    description: "Specialized legal services for banking sector compliance, regulations, and financial law.",
    icon: Landmark,
    category: "Financial",
  },
  {
    id: "corporate-governance-services",
    title: "Corporate Governance Services",
    description: "Comprehensive corporate governance solutions to ensure compliance and best practices.",
    icon: Users,
    category: "Corporate",
  },
  {
    id: "companies-liquidation",
    title: "Companies Liquidation",
    description: "Expert guidance through the complex process of company dissolution and asset distribution.",
    icon: Briefcase,
    category: "Corporate",
  },
  {
    id: "internal-regulations-for-companies",
    title: "Internal Regulations for Companies",
    description: "Development and implementation of internal policies and regulatory frameworks.",
    icon: Settings,
    category: "Compliance",
  },
]

export function ServicesGrid() {
  return (
    <div className="py-8">
      <div className="mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h1>
        <p className="text-gray-600 max-w-3xl text-pretty">
          We provide comprehensive legal services across various domains to meet the diverse needs of our clients, from
          individual consultation to complex corporate matters.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => {
          const IconComponent = service.icon
          return (
            <Card key={service.id} className="group hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center group-hover:bg-amber-200 transition-colors">
                    <IconComponent className="w-5 h-5 text-amber-900" />
                  </div>
                  <span className="text-xs font-medium text-amber-900 bg-amber-50 px-2 py-1 rounded-full">
                    {service.category}
                  </span>
                </div>
                <CardTitle className="text-lg font-semibold text-gray-900 group-hover:text-amber-900 transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 mb-4 leading-relaxed">{service.description}</CardDescription>
                <Link href={`/services/${service.id}`}>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full border-amber-900 text-amber-900 hover:bg-amber-900 hover:text-white bg-transparent"
                  >
                    Read more
                  </Button>
                </Link>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
