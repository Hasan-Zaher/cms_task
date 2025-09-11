import { type NextRequest, NextResponse } from "next/server"
import { strapiAPI, type ContactFormData } from "@/lib/strapi"

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json()

    // Validate required fields
    if (!body.name || !body.email || !body.subject || !body.message) {
      return NextResponse.json({ success: false, message: "Missing required fields" }, { status: 400 })
    }

    // Submit to Strapi
    const result = await strapiAPI.submitContactForm(body)

    return NextResponse.json(result)
  } catch (error) {
    console.error("Contact form API error:", error)
    return NextResponse.json({ success: false, message: "Internal server error" }, { status: 500 })
  }
}
