// Single source of truth for identity, links, and copy used across the site.
// Update here once — every component reads from this.
export const site = {
  name: "Sabter Iqbal",
  brand: "SabterTech",
  // TODO: replace with your custom domain (e.g. https://sabter.tech) once purchased
  url: "https://sabter-tech.vercel.app",
  title: "Sabter Iqbal | Full-Stack Developer — AI Apps & E-commerce",
  description:
    "Full-stack developer building AI-powered applications and e-commerce platforms with Next.js. Multiple live products in production, including stores serving real customers.",
  email: "sabterrazaqadri@gmail.com",
  phone: "+923232714932",
  github: "https://github.com/sabterrazaqadri",
  linkedin: "https://www.linkedin.com/in/sabter-iqbal-4a3b702b4/",
  whatsapp: "https://wa.me/923232714932",
} as const;
