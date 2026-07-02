export const siteConfig = {
  name: "Study Insights",
  tagline: "Educational Consultancy Firm",
  description:
    "We are not selling dreams — we build trust, and we provide trust. Study Insights helps students find the right country, university, application, visa, and scholarship for studying abroad.",
  whatsappNumber: "8801635484798",
  phone: "01318-485287",
  email: "info@studyinsights.com",
  address: "Dhaka Trade Center (13th Floor, L Block), Karwan Bazar, Commercial Area, 99 Kazi Nazrul Islam Avenue, Dhaka-1215",
  mapLink: "https://maps.app.goo.gl/g68GkHz5CjVXQFqg6",
  social: {
    facebook: "https://www.facebook.com/profile.php?id=61589279008543",
    instagram: "https://www.instagram.com/studyinsightsbd/",
  },
  nav: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/#services" },
    { label: "Community", href: "/community" },
    { label: "Apply", href: "/apply" },
  ],
  team: [
    {
      name: "Sadman Bin Arif",
      role: "Managing Director",
      image: "/images/team/sadman-bin-arif.jpg",
    },
    {
      name: "Mahir Shariar Mahin",
      role: "Head of Operation",
      image: "/images/team/mahir-shariar-mahin.jpg",
    },
    {
      name: "Shah Sadad Ahmed",
      role: "Head of Admission",
      image: "/images/team/shah-sadad-ahmed.jpg",
    },
    {
      name: "Dewan Abdullah Fahad",
      role: "Head of Creatives",
      image: "/images/team/dewan-abdullah-fahad.jpg",
    },
  ],
  services: [
    {
      title: "Country & University Selection",
      description:
        "We help you find the right country and university, then manage your application, visa application, and admission process end to end.",
    },
    {
      title: "Scholarship Management",
      description:
        "Dedicated, real scholarship management for students — Erasmus, DAAD, and all major scholarship segments.",
    },
  ],
} as const;

export function whatsappLink(message?: string) {
  const base = `https://wa.me/${siteConfig.whatsappNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
