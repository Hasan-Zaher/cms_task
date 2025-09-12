interface StrapiResponse<T> {
  data: T;
  meta: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

interface StrapiItem {
  id: number;
  attributes: Record<string, any>;
  createdAt: string;
  updatedAt: string;
}

class StrapiAPI {
  private baseURL: string;
  private apiToken: string;

  constructor() {
    this.baseURL =
      process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";
    this.apiToken = process.env.STRAPI_API_TOKEN || "";
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<T> {
    const url = `${this.baseURL}/api${endpoint}`;

    const config: RequestInit = {
      headers: {
        "Content-Type": "application/json",
        ...(this.apiToken && { Authorization: `Bearer ${this.apiToken}` }),
        ...options.headers,
      },
      ...options,
    };

    try {
      const response = await fetch(url, config);

      if (!response.ok) {
        throw new Error(
          `Strapi API error: ${response.status} ${response.statusText}`
        );
      }

      return await response.json();
    } catch (error) {
      console.error("Strapi API request failed:", error);
      throw error;
    }
  }

  // Team Members
  async getTeamMembers(): Promise<TeamMember[]> {
    const response = await this.request<StrapiResponse<StrapiItem[]>>(
      "/team-members?populate=*"
    );
    return response.data.map((item) => ({
      id: item.id,
      name: item.attributes.name,
      position: item.attributes.position,
      image: item.attributes.image?.data?.attributes?.url || null,
      bio: item.attributes.bio || "",
      social: {
        email: item.attributes.email || "",
        phone: item.attributes.phone || "",
        linkedin: item.attributes.linkedin || "",
      },
    }));
  }

  // Services
  async getServices(): Promise<Service[]> {
    const response = await this.request<StrapiResponse<StrapiItem[]>>(
      "/services?populate=*"
    );
    return response.data.map((item) => ({
      id: item.id,
      title: item.attributes.title,
      description: item.attributes.description,
      content: item.attributes.content || "",
      slug: item.attributes.slug,
      category: item.attributes.category || "General",
      icon: item.attributes.icon || "Scale",
    }));
  }

  async getServiceBySlug(slug: string): Promise<Service | null> {
    try {
      const response = await this.request<StrapiResponse<StrapiItem[]>>(
        `/services?filters[slug][$eq]=${slug}&populate=*`
      );
      if (response.data.length === 0) return null;

      const item = response.data[0];
      return {
        id: item.id,
        title: item.attributes.title,
        description: item.attributes.description,
        content: item.attributes.content || "",
        slug: item.attributes.slug,
        category: item.attributes.category || "General",
        icon: item.attributes.icon || "Scale",
      };
    } catch (error) {
      console.error("Error fetching service by slug:", error);
      return null;
    }
  }

  // Blog Posts
  async getBlogPosts(): Promise<BlogPost[]> {
    const response = await this.request<StrapiResponse<StrapiItem[]>>(
      "/blog-posts?populate=*&sort=createdAt:desc"
    );
    return response.data.map((item) => ({
      id: item.id,
      title: item.attributes.title,
      excerpt: item.attributes.excerpt,
      content: item.attributes.content,
      slug: item.attributes.slug,
      publishedAt: item.attributes.publishedAt,
      featuredImage:
        item.attributes.featuredImage?.data?.attributes?.url || null,
      author: item.attributes.author || "Law Firm",
    }));
  }

  // Testimonials
  async getTestimonials(): Promise<Testimonial[]> {
    const response = await this.request<StrapiResponse<StrapiItem[]>>(
      "/testimonials?populate=*"
    );
    return response.data.map((item) => ({
      id: item.id,
      name: item.attributes.name,
      nameAr: item.attributes.nameAr,
      position: item.attributes.position,
      positionAr: item.attributes.positionAr,
      company: item.attributes.company || "",
      companyAr: item.attributes.companyAr || "",
      testimonial: item.attributes.testimonial,
      testimonialAr: item.attributes.testimonialAr,
      image: item.attributes.image?.data?.attributes?.url || null,
      rating: item.attributes.rating || 5,
    }));
  }

  // Newsletter Subscription
  async subscribeToNewsletter(
    email: string
  ): Promise<{ success: boolean; message: string }> {
    try {
      // Check if email already exists
      const existingResponse = await this.request<StrapiResponse<StrapiItem[]>>(
        `/subscribers?filters[email][$eq]=${email}`
      );

      if (existingResponse.data.length > 0) {
        return { success: false, message: "Email already subscribed" };
      }

      // Create new subscription
      await this.request("/subscribers", {
        method: "POST",
        body: JSON.stringify({
          data: {
            email,
            subscribedAt: new Date().toISOString(),
          },
        }),
      });

      return {
        success: true,
        message: "Successfully subscribed to newsletter",
      };
    } catch (error) {
      console.error("Newsletter subscription error:", error);
      return {
        success: false,
        message: "Failed to subscribe. Please try again.",
      };
    }
  }

  // Contact Form Submission
  async submitContactForm(
    formData: ContactFormData
  ): Promise<{ success: boolean; message: string }> {
    try {
      await this.request("/contact-submissions", {
        method: "POST",
        body: JSON.stringify({
          data: {
            ...formData,
            submittedAt: new Date().toISOString(),
          },
        }),
      });

      return { success: true, message: "Message sent successfully" };
    } catch (error) {
      console.error("Contact form submission error:", error);
      return {
        success: false,
        message: "Failed to send message. Please try again.",
      };
    }
  }

  // Hero Slides
  async getHeroSlides(): Promise<HeroSlide[]> {
    const response = await this.request<StrapiResponse<StrapiItem[]>>(
      "/hero-slides?populate=*&sort=order:asc"
    );
    return response.data.map((item) => ({
      id: item.id,
      title: item.attributes.title,
      description: item.attributes.description,
      backgroundImage:
        item.attributes.backgroundImage?.data?.attributes?.url || null,
      profileImage: item.attributes.profileImage?.data?.attributes?.url || null,
      buttonText: item.attributes.buttonText || "Read More",
      buttonLink: item.attributes.buttonLink || "#",
      order: item.attributes.order || 0,
    }));
  }
}

export const strapiAPI = new StrapiAPI();

// Type definitions
export interface TeamMember {
  id: number;
  name: string;
  position: string;
  image: string | null;
  bio: string;
  social: {
    email: string;
    phone: string;
    linkedin: string;
  };
}

export interface Service {
  id: number;
  title: string;
  description: string;
  content: string;
  slug: string;
  category: string;
  icon: string;
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  slug: string;
  publishedAt: string;
  featuredImage: string | null;
  author: string;
}

export interface Testimonial {
  id: number;
  name: string;
  nameAr: string;
  position: string;
  positionAr: string;
  company: string;
  companyAr: string;
  testimonial: string;
  testimonialAr: string;
  image: string | null;
  rating: number;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

export interface HeroSlide {
  id: number;
  title: string;
  description: string;
  backgroundImage: string | null;
  profileImage: string | null;
  buttonText: string;
  buttonLink: string;
  order: number;
}
