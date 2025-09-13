export type Locale = "en" | "ar";

export const locales: Locale[] = ["en", "ar"];
export const defaultLocale: Locale = "en";

export interface Translations {
  // Navigation
  home: string;
  about: string;
  services: string;
  blog: string;
  team: string;
  contact: string;
  bookAppointment: string;

  // Hero Section
  heroTitle1: string;
  heroDescription1: string;
  heroTitle2: string;
  heroDescription2: string;
  readMore: string;

  // Team Section
  ourTeam: string;
  teamDescription: string;

  // Client Section
  clientsTitle: string;
  clientsDescription: string;

  // Footer

  ourStrategy: string;
  ourAdvantages: string;
  socialResponsibility: string;
  ourServices: string;
  subscribe: string;
  subscribed: string;
  allRightsReserved: string;

  // Services
  legalConsultation: string;
  foreignInvestment: string;
  contracts: string;
  notarization: string;
  allCases: string;
  insurance: string;
  banksFinancial: string;
  corporateGovernance: string;
  companiesLiquidation: string;
  internalRegulations: string;

  // Contact
  contactUs: string;
  getInTouch: string;
  email: string;
  phone: string;
  address: string;
  officeHours: string;
  sendMessage: string;
  fullName: string;
  emailAddress: string;
  phoneNumber: string;
  subject: string;
  message: string;
  sending: string;
  messageSent: string;

  // Search
  searchPlaceholder: string;
  Back: string;
  loadingService: string;
  loadingTeamService: string;
  teamServiceNotFound: string;
  Team: string;
  servicesTeam: string;
}

export const translations: Record<Locale, Translations> = {
  en: {
    // Navigation
    home: "Home",
    about: "About us",
    services: "Services",
    blog: "Blog",
    team: "Our Team",
    contact: "Contact us",
    bookAppointment: "Book Appointment",

    // Hero Section
    heroTitle1: "Lorem Ipsum",
    heroTitle2: "Another Headline",
    heroDescription1:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    readMore: "Read More",
    heroDescription2:
      "This is tting  printing and typesetting industry. Lorem Ipsum has been the i description for the second slide",

    // Team Section
    ourTeam: "Our Team",
    teamDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",

    // Client Section
    clientsTitle: "What our clients are saying",
    clientsDescription:
      "Our clients range from individual investors to local international as well as fortune 500 companies. Our clients range from individual investors to local international as well as fortune 500 companies.",

    // Footer

    ourStrategy: "Our Strategy",
    ourAdvantages: "Our Advantages",
    socialResponsibility: "Social Responsibility",
    ourServices: "Our Services",
    subscribe: "Subscribe",
    subscribed: "Subscribed!",
    allRightsReserved: "All rights reserved.",

    // Services
    legalConsultation: "Legal Consultation Services",
    foreignInvestment: "Foreign Investment Services",
    contracts: "Contracts",
    notarization: "Notarization",
    allCases: ".....and Defense in All Cases",
    insurance: "Insurance",
    banksFinancial: "Banks and Financial Institutions",
    corporateGovernance: "Corporate Governance Services",
    companiesLiquidation: "Companies Liquidation",
    internalRegulations: "Internal Regulations for Companies",

    // Contact
    contactUs: "Contact Us",
    getInTouch: "Get in Touch",
    email: "Email",
    phone: "Phone",
    address: "Address",
    officeHours: "Office Hours",
    sendMessage: "Send us a Message",
    fullName: "Full Name",
    emailAddress: "Email",
    phoneNumber: "Phone Number",
    subject: "Subject",
    message: "Message",
    sending: "Sending...",
    messageSent: "Message Sent!",

    // Search
    searchPlaceholder: "Search services, team members...",
    Back: "Back",
    loadingService: "Loading service…",
    loadingTeamService: "Loading team service…",
    teamServiceNotFound: "team Service not found",
    Team: "Team",
    servicesTeam: "Services",
  },
  ar: {
    // Navigation
    home: "الرئيسية",
    about: "من نحن",
    services: "الخدمات",
    blog: "المدونة",
    team: "فريقنا",
    contact: "اتصل بنا",
    bookAppointment: "احجز موعد",

    // Hero Section
    heroTitle1: "لوريم إيبسوم",
    heroTitle2: "عنوان الصناعة  ",
    heroDescription1:
      "لوريم إيبسوم هو ببساطة نص وهمي من صناعة الطباعة والتنضيد. لقد كان لوريم إيبسوم النص الوهمي القياسي في الصناعة منذ القرن الخامس عشر",
    readMore: "اقرأ المزيد",
    heroDescription2:
      "  . يتراوح عملاؤنا من المستثمرين الأفراد إلى الشركات المحلية والدولية وكذلك",

    // Team Section
    ourTeam: "فريقنا",
    teamDescription:
      "لوريم إيبسوم هو ببساطة نص وهمي من صناعة الطباعة والتنضيد. لقد كان لوريم إيبسوم النص الوهمي القياسي في الصناعة منذ القرن الخامس عشر",

    // Client Section
    clientsTitle: "ماذا يقول عملاؤنا",
    clientsDescription:
      "يتراوح عملاؤنا من المستثمرين الأفراد إلى الشركات المحلية والدولية وكذلك شركات فورتشن 500. يتراوح عملاؤنا من المستثمرين الأفراد إلى الشركات المحلية والدولية وكذلك شركات فورتشن 500.",

    // Footer
    ourStrategy: "استراتيجيتنا",
    ourAdvantages: "مزايانا",
    socialResponsibility: "المسؤولية الاجتماعية",
    ourServices: "خدماتنا",
    subscribe: "اشترك",
    subscribed: "تم الاشتراك!",
    allRightsReserved: "جميع الحقوق محفوظة.",

    // Services
    legalConsultation: "خدمات الاستشارات القانونية",
    foreignInvestment: "خدمات الاستثمار الأجنبي",
    contracts: "العقود",
    notarization: "التوثيق",
    allCases: ".....والدفاع في جميع القضايا",
    insurance: "التأمين",
    banksFinancial: "البنوك والمؤسسات المالية",
    corporateGovernance: "خدمات الحوكمة المؤسسية",
    companiesLiquidation: "تصفية الشركات",
    internalRegulations: "اللوائح الداخلية للشركات",

    // Contact
    contactUs: "اتصل بنا",
    getInTouch: "تواصل معنا",
    email: "البريد الإلكتروني",
    phone: "الهاتف",
    address: "العنوان",
    officeHours: "ساعات العمل",
    sendMessage: "أرسل لنا رسالة",
    fullName: "الاسم الكامل",
    emailAddress: "عنوان البريد الإلكتروني",
    phoneNumber: "رقم الهاتف",
    subject: "الموضوع",
    message: "الرسالة",
    sending: "جاري الإرسال...",
    messageSent: "تم إرسال الرسالة!",

    // Search
    searchPlaceholder: "البحث في الخدمات وأعضاء الفريق...",
    Back: "عودة",
    loadingService: "جارٍ تحميل الخدمة…",
    loadingTeamService: "جاري تحميل خدمة الفريق…",
    teamServiceNotFound: "لم يتم العثور على خدمة الفريق",
    Team: "فريق",
    servicesTeam: "خدمات",
  },
};

export function getTranslation(
  locale: Locale,
  key: keyof Translations
): string {
  return translations[locale][key] || translations[defaultLocale][key];
}
