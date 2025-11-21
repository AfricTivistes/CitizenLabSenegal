import { getPermalink, getBlogPermalink } from "~/utils/permalinks";

export const headerData = {
  links: [
    { text: "Accueil", href: getPermalink("/") },
    {
      text: "Qui nous sommes",
      links: [
        { text: "A propos", href: getPermalink("/a-propos") },
        { text: "Equipe", href: getPermalink("/equipe") },
        { text: "Partenaires", href: getPermalink("/partenaires") },
        { text: "FAQ", href: getPermalink("/faq") },
      ],
    },
    {
      text: "Projets & Réalisations",
      links: [
        { text: "Projets en cours", href: "#" },
        { text: "Projets réalisés", href: "#" },
      ],
    },
    {
      text: "Médias & Actualités",
      links: [
        { text: "Actualités", href: getPermalink("/news") },
        { text: "Campagnes", href: getPermalink("campagnes", "category") },
        { text: "Blog / Opinions", href: getPermalink("blog", "category") },
        { text: "Podcasts", href: getPermalink("podcast", "category") },
        { text: "Vidéos", href: getPermalink("videos", "category") },
      ],
    },
    {
      text: "Formations & Ressources",
      links: [
        { text: "Bootcamps / Ateliers", href: getPermalink("/bootcamp") },
        {
          text: "Modules en ligne",
          href: getPermalink("campagnes", "category"),
        },
        {
          text: "Ressources pédagogiques",
          href: getPermalink("blog", "category"),
        },
      ],
    },
    // {
    //   text: "Participez / Implications",
    //   links: [
    //     { text: "Devenir partenaire", href: getPermalink("/news") },
    //     {
    //       text: "Appels à candidatures",
    //       href: getPermalink("campagnes", "category"),
    //     },
    //   ],
    // },
    { text: "Contact", href: getPermalink("/contact") },
  ],
};

export const footerData = {
  links: [
    {
      title: "CitizenLab",
      links: [
        {
          text: "A Propos",
          href: getPermalink("/a-propos"),
        },
        { text: "Equipe", href: getPermalink("/equipe") },
      ],
    },
    {
      title: "Actualités",
      links: [
        { text: "Actualités", href: getBlogPermalink() },
        { text: "Blog", href: getPermalink("blog", "category") },
        { text: "Campagnes", href: "#" },
        { text: "Podcasts", href: getPermalink("podcast", "category") },
        { text: "Vidéos", href: getPermalink("videos", "category") },
        { text: "Formations", href: getPermalink("formations", "category") },
      ],
    },

    {
      title: "Nous Contacter",
      links: [
        {
          text: "citizenlabsenegal@africtivistes.org",
          href: "mailto:citizenlabsenegal@africtivistes.org ",
        },
        { text: "+221 77 777 77 77", href: "tel:+221777777777" },
        { text: " Dakar, Sénégal ", href: "#" },
      ],
    },
  ],
  secondaryLinks: [
    {
      text: "Termes et Conditions",
      href: getPermalink("/termes-et-conditions"),
    },
    //{ text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { icon: "tabler:brand-x", href: "https://twitter.com/SenegalCitizenlab" },
    {
      icon: "tabler:brand-instagram",
      href: "https://www.instagram.com/citizenlabsenegal/",
    },
    {
      icon: "tabler:brand-facebook",
      href: "https://www.facebook.com/profile.php?id=61553614994311",
    },
    {
      icon: "tabler:brand-linkedin",
      href: "https://www.linkedin.com/company/citizen-lab-senegal/about/",
    },
    {
      icon: "tabler:brand-github",
      href: "https://github.com/AfricTivistes/citizenlabsenegal",
    },
  ],
  footNote: `
  <a href="https://www.africtivistes.com" target= '_blank'>
  <img src="https://update.africtivistes.org/wp-content/uploads/2023/10/Logo-Africtivistes.png" alt="AfricTivistes" class="h-8" />
  </a>
    <a target= '_blank' class="text-green-600 hover:underline dark:text-gray-200" href="https://www.africtivistes.com"> AfricTivistes</a> · All rights reserved.
  `,
};
