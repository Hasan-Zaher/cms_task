import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">About Us</h1>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 leading-relaxed mb-6">
              Law Firm is a leading legal practice dedicated to providing exceptional legal services to individuals and
              corporations. With years of experience and a commitment to excellence, we have established ourselves as a
              trusted partner in the legal community.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Our team of experienced attorneys specializes in various areas of law, ensuring that our clients receive
              comprehensive and expert legal representation across all their needs.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We pride ourselves on our client-focused approach, attention to detail, and commitment to achieving the
              best possible outcomes for those we serve.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
