export interface Tech {
  title: string
  link: string
  image: string
}

const frontendTechs = [
  {
    title: "React",
    link: "https://reactjs.org/",
    image: "/techs/react.svg",
  },
  {
    title: "Next.js",
    link: "https://nextjs.org/",
    image: "/techs/nextjs.svg",
  },
  {
    title: "TypeScript",
    link: "https://www.typescriptlang.org/",
    image: "/techs/typescript.svg",
  },
  {
    title: "Tailwind CSS",
    link: "https://tailwindcss.com/",
    image: "/techs/tailwindcss.svg",
  },

  {
    title: "Vercel",
    link: "https://vercel.com/",
    image: "/techs/vercel.svg",
  },

  {
    title: "HTML",
    link: "https://developer.mozilla.org/pt-BR/docs/Web/HTML",
    image: "/techs/html.svg",
  },

  {
    title: "CSS",
    link: "https://developer.mozilla.org/pt-BR/docs/Web/CSS",
    image: "/techs/css.svg",
  },

  {
    title: "JavaScript",
    link: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript",
    image: "/techs/javascript.svg",
  },

  {
    title: "Jquery",
    link: "https://jquery.com/",
    image: "/techs/jquery.svg",
  },

  {
    title: "Bootstrap",
    link: "https://getbootstrap.com/",
    image: "/techs/bootstrap.svg",
  },

  {
    title: "Sass",
    link: "https://sass-lang.com/",
    image: "/techs/sass.svg",
  },

  {
    title: "Turbo",
    link: "https://turbo.hotwire.dev/",
    image: "/techs/turbo.svg",
  },

  {
    title: "Framer Motion",
    link: "https://www.framer.com/motion/",
    image: "/techs/framer-motion.svg",
  },
]

const backendTechs = [
  {
    title: "Ruby",
    link: "https://www.ruby-lang.org/pt/",
    image: "/techs/ruby.svg",
  },

  {
    title: "Ruby on Rails",
    link: "https://rubyonrails.org/",
    image: "/techs/rails.svg",
  },

  {
    title: "Php",
    link: "https://www.php.net/",
    image: "/techs/php.svg",
  },

  {
    title: "Laravel",
    link: "https://laravel.com/",
    image: "/techs/laravel.svg",
  },

  {
    title: "Node.js",
    link: "https://nodejs.org/en/",
    image: "/techs/nodejs.svg",
  },
  {
    title: "Express",
    link: "https://expressjs.com/",
    image: "/techs/express.svg",
  },

  {
    title: "TypeScript",
    link: "https://www.typescriptlang.org/",
    image: "/techs/typescript.svg",
  },
  {
    title: "Rust",
    link: "https://www.rust-lang.org/",
    image: "/techs/rust.svg",
  },
  {
    title: "Java",
    link: "https://www.java.com/pt-BR/",
    image: "/techs/java.svg",
  },
  {
    title: "Python",
    link: "https://www.python.org/",
    image: "/techs/python.svg",
  },
]

const databaseTechs = [
  {
    title: "PostgreSQL",
    link: "https://www.postgresql.org/",
    image: "/techs/postgresql.svg",
  },
  {
    title: "MySQL",
    link: "https://www.mysql.com/",
    image: "/techs/mysql.svg",
  },
  {
    title: "SQLite",
    link: "https://www.sqlite.org/index.html",
    image: "/techs/sqlite.svg",
  },

  {
    title: "MongoDB",
    link: "https://www.mongodb.com/",
    image: "/techs/mongodb.svg",
  },
]

const devopsTechs = [
  {
    title: "Docker",
    link: "https://www.docker.com/",
    image: "/techs/docker.svg",
  },
  {
    title: "firebase",
    link: "https://firebase.google.com/",
    image: "/techs/firebase.svg",
  },
  {
    title: "Cloudflare",
    link: "https://www.cloudflare.com/",
    image: "/techs/cloudflare.svg",
  },
]

const versionControlTechs = [
  {
    title: "Git",
    link: "https://git-scm.com/",
    image: "/techs/git.svg",
  },

  {
    title: "GitHub",
    link: "github.com",
    image: "/techs/github.svg",
  },
]

export const techs = {
  frontendTechs,
  backendTechs,
  databaseTechs,
  devopsTechs,
  versionControlTechs,
}
