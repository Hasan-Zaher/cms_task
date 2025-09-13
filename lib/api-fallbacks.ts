// Fallback data when Strapi is not available
import type { TeamMember, Service, Testimonial, HeroSlide } from "./strapi";

export const fallbackTeamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Ahmed Al-Rashid",
    slug: "ahmed-team",
    position: "Senior Partner",
    image: "/images/personImage.png",
    bio: "Experienced legal professional with over 15 years in corporate law.",
    social: {
      email: "ahmed@lawfirm.com",
      phone: "+1-555-0101",
      linkedin: "linkedin.com/in/ahmed-alrashid",
    },
    services: [
      {
        id: 1,
        title: {
          en: "Corporate Law",
          ar: "القانون الشرعي",
        },
        description: {
          en: "Expert advice on corporate governance, mergers, and acquisitions.",
          ar: "نصائح الخبراء حول حوكمة الشركات والاندماج والاستحواذ.",
        },
        slug: "corporate-law",
      },
      {
        id: 2,
        title: {
          en: "Contract Negotiation",
          ar: "تفاوض العقود",
        },
        description: {
          en: "Skilled negotiation of complex business agreements.",
          ar: "تفاوض ماهر لاتفاقيات الأعمال المعقدة.",
        },
        slug: "contract-negotiation",
      },
    ],
  },
  {
    id: 2,
    name: "Sarah Johnson",
    slug: "sarah-team",
    position: "Associate Lawyer",
    image: "/images/productOne.jpg",
    bio: "Specializes in international business law and foreign investment.",
    social: {
      email: "sarah@lawfirm.com",
      phone: "+1-555-0102",
      linkedin: "linkedin.com/in/sarah-johnson",
    },
    services: [
      {
        id: 3,
        title: {
          en: "International Business",
          ar: "الأعمال الدولية",
        },
        description: {
          en: "Guidance on cross-border transactions and international regulations.",
          ar: "توجيه حول المعاملات عبر الحدود واللوائح الدولية.",
        },
        slug: "international-business",
      },
      {
        id: 4,
        title: {
          en: "Foreign Investment",
          ar: "الاستثمار الأجنبي",
        },
        description: {
          en: "Assistance with foreign investment regulations and compliance.",
          ar: "المساعدة في لوائح الاستثمار الأجنبي والامتثال.",
        },
        slug: "foreign-investment",
      },
    ],
  },
  {
    id: 3,
    name: "Ahmed Al-Rashid",
    slug: "ahmed-team",
    position: "Associate Lawyer",
    image: "/images/personImage.png",
    bio: "Specializes in international business law and foreign investment.",
    social: {
      email: "sarah@lawfirm.com",
      phone: "+1-555-0102",
      linkedin: "linkedin.com/in/sarah-johnson",
    },
    services: [
      {
        id: 3,
        title: {
          en: "International Business",
          ar: "الأعمال الدولية",
        },
        description: {
          en: "Guidance on cross-border transactions and international regulations.",
          ar: "توجيه حول المعاملات عبر الحدود واللوائح الدولية.",
        },
        slug: "international-business",
      },
      {
        id: 4,
        title: {
          en: "Foreign Investment",
          ar: "الاستثمار الأجنبي",
        },
        description: {
          en: "Assistance with foreign investment regulations and compliance.",
          ar: "المساعدة في لوائح الاستثمار الأجنبي والامتثال.",
        },
        slug: "foreign-investment",
      },
    ],
  },
  {
    id: 4,
    name: "Sarah Johnson",
    slug: "sarah-team",
    position: "Associate Lawyer",
    image: "/images/productOne.jpg",
    bio: "Specializes in international business law and foreign investment.",
    social: {
      email: "sarah@lawfirm.com",
      phone: "+1-555-0102",
      linkedin: "linkedin.com/in/sarah-johnson",
    },
    services: [
      {
        id: 3,
        title: {
          en: "International Business",
          ar: "الأعمال الدولية",
        },
        description: {
          en: "Guidance on cross-border transactions and international regulations.",
          ar: "توجيه حول المعاملات عبر الحدود واللوائح الدولية.",
        },
        slug: "international-business",
      },
      {
        id: 4,
        title: {
          en: "Foreign Investment",
          ar: "الاستثمار الأجنبي",
        },
        description: {
          en: "Assistance with foreign investment regulations and compliance.",
          ar: "المساعدة في لوائح الاستثمار الأجنبي والامتثال.",
        },
        slug: "foreign-investment",
      },
    ],
  },
];

export const fallbackServices: Service[] = [
  {
    id: 1,
    title: {
      en: "Legal Consultation Services",
      ar: "خدمات الاستشارات القانونية",
    },
    description: {
      en: "Law Firm is one of the leading legal offices that offer exceptional advisory services for both individuals and companies.",
      ar: "مكتب المحاماة هو أحد المكاتب القانونية الرائدة التي تقدم خدمات استشارية استثنائية لكل من الأفراد والشركات.",
    },
    slug: "legal-consultation-services",
    category: {
      en: "Consultation",
      ar: "استشارة",
    },
    icon: "Scale",
    content: [
      {
        type: "item",
        title: {
          en: "General Legal Consultations",
          ar: "استشارات قانونية عامة",
        },
        text: {
          en: "At Law Firm, we provide comprehensive legal consultations covering all legal aspects that our clients may encounter in their daily lives or business activities. Our goal is to offer accurate legal advice based on a deep understanding of local and international laws. Our advisory services about:",
          ar: "في مكتب المحاماة، نقدم استشارات قانونية شاملة تغطي جميع الجوانب القانونية التي قد يواجهها عملاؤنا في حياتهم اليومية أو أنشطتهم التجارية. هدفنا هو تقديم مشورة قانونية دقيقة بناءً على فهم عميق للقوانين المحلية والدولية. خدماتنا الاستشارية حول:",
        },
        list: {
          en: [
            "Establishing and registering companies.",
            "All kinds of contracts and agreements.",
            "Commercial disputes",
            "Compliance with local and international laws and regulations.",
          ],
          ar: [
            "إنشاء وتسجيل الشركات.",
            "جميع أنواع العقود والاتفاقيات.",
            "النزاعات التجارية",
            "الامتثال للقوانين واللوائح المحلية والدولية.",
          ],
        },
      },
      {
        type: "item",
        title: {
          en: "Individual Legal Consultations",
          ar: "استشارات قانونية للأفراد",
        },
        text: {
          en: "Law Firm offers customized advisory services for individuals, including:",
          ar: "يقدم مكتب المحاماة خدمات استشارية مخصصة للأفراد، بما في ذلك:",
        },
        list: {
          en: [
            "Family issues such as divorce, alimony, and custody",
            "Real estate matters like buying, selling, and renting properties",
            "Employment issues such as hiring and wrongful termination",
          ],
          ar: [
            "القضايا الأسرية مثل الطلاق والنفقة والحضانة",
            "المسائل العقارية مثل شراء وبيع وتأجير العقارات",
            "قضايا العمل مثل التوظيف والفصل غير المشروع",
          ],
        },
      },
      {
        type: "subData",
        text: {
          en: "At Law Firm, we aim to provide the best legal services to ensure your rights and offer effective legal solutions. Contact us today to receive professional and comprehensive legal consultation.",
          ar: "في مكتب المحاماة، نهدف إلى تقديم أفضل الخدمات القانونية لضمان حقوقك وتقديم حلول قانونية فعالة. اتصل بنا اليوم للحصول على استشارة قانونية مهنية وشاملة.",
        },
      },
    ],
  },
  {
    id: 2,
    title: {
      en: "Foreign Investment Services",
      ar: "خدمات الاستثمار الأجنبي",
    },
    description: {
      en: "Comprehensive support for foreign investors looking to establish businesses and navigate local regulations.",
      ar: "دعم شامل للمستثمرين الأجانب الراغبين في إنشاء businesses والتنقل في اللوائح المحلية.",
    },
    slug: "foreign-investment-services",
    category: {
      en: "Investment",
      ar: "استثمار",
    },
    icon: "Building2",
    content: [
      {
        type: "item",
        title: {
          en: "Business Establishment Services",
          ar: "خدمات إنشاء الأعمال",
        },
        text: {
          en: "We provide end-to-end support for foreign investors looking to establish their presence in the region, including:",
          ar: "نقدم دعماً شاملاً للمستثمرين الأجانب الراغبين في إنشاء وجودهم في المنطقة، بما في ذلك:",
        },
        list: {
          en: [
            "Company registration and licensing",
            "Legal structure advisory",
            "Foreign ownership regulations compliance",
            "Local partnership facilitation",
          ],
          ar: [
            "تسجيل الشركات والترخيص",
            "استشارات الهيكل القانوني",
            "الامتثال لأنظمة الملكية الأجنبية",
            "تسهيل الشراكات المحلية",
          ],
        },
      },
      {
        type: "item",
        title: {
          en: "Regulatory Compliance",
          ar: "الامتثال التنظيمي",
        },
        text: {
          en: "Our team ensures your business operations remain compliant with all local regulations:",
          ar: "يضمن فريقنا بقاء عملياتك التجارية متوافقة مع جميع اللوائح المحلية:",
        },
        list: {
          en: [
            "Regular compliance audits",
            "Labor law compliance",
            "Tax regulation advisory",
            "Industry-specific regulation guidance",
          ],
          ar: [
            "مراجعات الامتثال الدورية",
            "الامتثال لقوانين العمل",
            "استشارات اللوائح الضريبية",
            "توجيهات اللوائح الخاصة بالصناعة",
          ],
        },
      },
      {
        type: "subData",
        text: {
          en: "Our foreign investment services are designed to provide a seamless entry into the market while ensuring full compliance with all legal requirements. Contact us to discuss your investment plans.",
          ar: "تم تصميم خدمات الاستثمار الأجنبي لدينا لتوفير دخول سلس إلى السوق مع ضمان الامتثال الكامل لجميع المتطلبات القانونية. اتصل بنا لمناقشة خطط استثمارك.",
        },
      },
    ],
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
    title: {
      en: "Professional Legal Services",
      ar: "خدمات قانونية محترفة",
    },
    description: {
      en: "Comprehensive legal solutions with expertise and dedication to serve our clients' needs effectively",
      ar: "حلول قانونية شاملة مع الخبرة والتفاني لخدمة احتياجات عملائنا بشكل فعال",
    },
    profileImage: "/images/personImage.png",
    buttonText: {
      en: "Read More",
      ar: "اقرأ المزيد",
    },
    buttonLink: "/about",
    order: 1,
  },
  {
    id: 2,
    title: {
      en: "Expert Legal Consultation",
      ar: "استشارات قانونية متخصصة",
    },
    description: {
      en: "Professional legal advice and consultation services for individuals and corporations across various legal domains",
      ar: "نصائح واستشارات قانونية محترفة للأفراد والشركات عبر مختلف المجالات القانونية",
    },
    profileImage: "/images/productOne.jpg",
    buttonText: {
      en: "Learn More",
      ar: "تعلم المزيد",
    },
    buttonLink: "/services",
    order: 2,
  },
];
