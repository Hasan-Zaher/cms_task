// Fallback data when Strapi is not available
import type {
  TeamMember,
  Service,
  Testimonial,
  HeroSlide,
  BlogPost,
} from "./strapi";

export const fallbackTeamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Ahmed Al-Rashid",
    position: "Senior Partner",
    image: "/images/personImage.png",
    bio: "Experienced legal professional with over 15 years in corporate law.",
    social: {
      email: "ahmed@lawfirm.com",
      phone: "+1-555-0101",
      linkedin: "linkedin.com/in/ahmed-alrashid",
    },
  },
  {
    id: 2,
    name: "Sarah Johnson",
    position: "Associate Lawyer",
    image: "/images/productOne.jpg",
    bio: "Specializes in international business law and foreign investment.",
    social: {
      email: "sarah@lawfirm.com",
      phone: "+1-555-0102",
      linkedin: "linkedin.com/in/sarah-johnson",
    },
  },
  {
    id: 3,
    name: "Mohammed Saif",
    position: "Legal Consultant",
    image: "/images/productTwo.jpg",
    bio: "Expert in contract law and corporate governance.",
    social: {
      email: "mohammed@lawfirm.com",
      phone: "+1-555-0103",
      linkedin: "linkedin.com/in/mohammed-saif",
    },
  },
  {
    id: 4,
    name: "Johnson Hasasn",
    position: "Legal Consultant",
    image: "/images/productFour.jpg",
    bio: "Expert in contract law and corporate governance.",
    social: {
      email: "mohammed@lawfirm.com",
      phone: "+1-555-0103",
      linkedin: "linkedin.com/in/mohammed-saif",
    },
  },
  {
    id: 5,
    name: "Saif Ali",
    position: "Legal Consultant",
    image: "/images/personImage.png",
    bio: "Expert in contract law and corporate governance.",
    social: {
      email: "mohammed@lawfirm.com",
      phone: "+1-555-0103",
      linkedin: "linkedin.com/in/mohammed-saif",
    },
  },
];

export const fallbackServices: Service[] = [
  {
    id: 1,
    title: "Legal Consultation Services",
    description:
      "Law Firm is one of the leading legal offices that offer exceptional advisory services for both individuals and companies.",
    content: "Comprehensive legal consultation covering all aspects of law...",
    slug: "legal-consultation-services",
    category: "Consultation",
    icon: "Scale",
  },
  {
    id: 2,
    title: "Foreign Investment Services",
    description:
      "Comprehensive support for foreign investors looking to establish businesses and navigate local regulations.",
    content: "Expert guidance for international business expansion...",
    slug: "foreign-investment-services",
    category: "Investment",
    icon: "Building2",
  },
  {
    id: 3,
    title: "Contracts",
    description:
      "Expert contract drafting, review, and negotiation services for all types of business and personal agreements.",
    content: "Professional contract services for all your legal needs...",
    slug: "contracts",
    category: "Legal Documents",
    icon: "FileText",
  },
];

export const fallbackTestimonials: Testimonial[] = [
  {
    id: 1,
    name: "Mohammed Saif",
    nameAr: "محمد سيف",
    position: "CEO",
    positionAr: "الرئيس التنفيذي",
    company: "Tech Solutions Inc.",
    companyAr: "شركة الحلول التقنية",
    testimonial:
      "With the help of the hospitable staff of Al Safar and Partners I was able to get my work done without any hassle. The help I received helped me a great deal to overcome the issues that I faced. I was always updated about my case and my queries never went unanswered.",
    testimonialAr:
      "بمساعدة فريق العمل الودود في السفار وشركائه تمكنت من إنجاز عملي دون أي متاعب. ساعدني الدعم الذي تلقيته كثيرًا على تجاوز المشاكل التي واجهتها. كنت دائمًا مطلعًا على حالة قضيتي واستفساراتي لم تُترك بدون إجابة.",
    image: "/images/personImage.png",
    rating: 5,
  },
  {
    id: 2,
    name: "Sarah Johnson",
    nameAr: "سارة جونسون",
    position: "Managing Director",
    positionAr: "المدير الإداري",
    company: "Global Enterprises",
    companyAr: "الشركات العالمية",
    testimonial:
      "Exceptional legal services with professional expertise. The team provided comprehensive support throughout our corporate restructuring process.",
    testimonialAr:
      "خدمات قانونية استثنائية بخبرة احترافية. قدم الفريق دعمًا شاملاً طوال عملية إعادة هيكلة شركتنا.",
    image: "/images/productFour.jpg",
    rating: 5,
  },
];

export const fallbackHeroSlides: HeroSlide[] = [
  {
    id: 1,
    title: "Professional Legal Services",
    description:
      "Comprehensive legal solutions with expertise and dedication to serve our clients' needs effectively",
    backgroundImage:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-W4lqJ3ormq8OpARlTjAauk9dAU9XgL.png",
    profileImage:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-E17mkYc9ZHJXzJtpN7BVkyApQWFr70.png",
    buttonText: "Read More",
    buttonLink: "/about",
    order: 1,
  },
  {
    id: 2,
    title: "Expert Legal Consultation",
    description:
      "Professional legal advice and consultation services for individuals and corporations across various legal domains",
    backgroundImage:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-W4lqJ3ormq8OpARlTjAauk9dAU9XgL.png",
    profileImage:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-E17mkYc9ZHJXzJtpN7BVkyApQWFr70.png",
    buttonText: "Learn More",
    buttonLink: "/services",
    order: 2,
  },
];

export const fallbackBlogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Understanding Corporate Law in 2024",
    excerpt:
      "A comprehensive guide to the latest developments in corporate law and their implications for businesses.",
    content: "Corporate law continues to evolve...",
    slug: "understanding-corporate-law-2024",
    publishedAt: "2024-01-15T10:00:00Z",
    featuredImage: "/corporate-law-office.jpg",
    author: "Ahmed Al-Rashid",
  },
  {
    id: 2,
    title: "Foreign Investment Opportunities",
    excerpt:
      "Exploring the legal framework for foreign investment and the opportunities it presents.",
    content: "Foreign investment regulations...",
    slug: "foreign-investment-opportunities",
    publishedAt: "2024-01-10T14:30:00Z",
    featuredImage: "/international-business.png",
    author: "Sarah Johnson",
  },
];
