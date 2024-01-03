export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Meu Portifólio",
  description:
    "Beautifully designed components built with Radix UI and Tailwind CSS.",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Tecnologias",
      href: "/techs",
    },
    {
      title: "Projetos",
      href: "/projects",
    },
  ],
  links: {
    github: "https://github.com/viniciussakai",
    linkedin: "https://www.linkedin.com/in/vinicius-sakai",
    email: "mailto:vinicius.sakai@tuta.io",
  },
}
