import { getPermalink, getBlogPermalink } from '~/utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'CitizenLab',
      links: [
        {
          text: 'A Propos',
          href: getPermalink('/a-propos'),
        },
        {
          text: 'Equipe',
          href: getPermalink('/equipe'),
        },
      ],
    },
    {
      text: 'Actualités',
      href: getBlogPermalink(),
    },
    {
      text: 'Campagnes',
      href: getPermalink('campagnes', 'category'),
    },
    {
      text: 'Blog',
      href: getPermalink('blog', 'category')
    },
    {
      text: 'Formations',
      href: getPermalink('formations', 'category')
    },
    {
      text: 'Contact',
      href: getPermalink('/contact'),
    },
  ],
};

export const footerData = {
  links: [
    {
      title: 'CitizenLab',
      links: [
        {
          text: 'A Propos', href: getPermalink('/a-propos') },
        { text: 'Equipe', href: getPermalink('/equipe') },
      ],
    },
    {
      title: 'Actualités',
      links: [
        { text: "Actualités", href: getBlogPermalink() },
        { text: "Blog", href: getPermalink('blog', 'category') },
        { text: 'Campagnes', href:'#' },
        { text: 'Podcasts', href: getPermalink('podcast', 'category') },
        { text: 'Vidéos', href: getPermalink('videos', 'category') },
        { text: 'Formations', href: getPermalink('formations', 'category') },
      ],
    },

    {
      title: "Nous Contacter",
      links:[
        { text: "citizenlabsenegal@africtivistes.org", href:'mailto:citizenlabsenegal@africtivistes.org ' },
        { text: "+221 37 646 16 64", href: 'tel:+221376461664'},
        {text: " Dakar, Sénégal ", href: '#'}
      ]
    }
  ],
  secondaryLinks: [
    { text: 'Termes et Conditions', href: getPermalink('/termes-et-conditions') },
    //{ text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { icon: 'tabler:brand-x', href: 'https://twitter.com/SenegalCitizenlab' },
    { icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/citizenlabsenegal/' },
    { icon: 'tabler:brand-facebook', href: 'https://www.facebook.com/profile.php?id=61553614994311' },
    { icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/company/citizen-lab-senegal/about/' },
    { icon: 'tabler:brand-github', href: 'https://github.com/AfricTivistes/citizenlabsenegal' },
  ],
  footNote: `
  <a href="https://www.africtivistes.com" target= '_blank'>
  <img src="https://update.africtivistes.org/wp-content/uploads/2023/10/Logo-Africtivistes.png" alt="AfricTivistes" class="h-8" />
  </a>
    <a target= '_blank' class="text-green-600 hover:underline dark:text-gray-200" href="https://www.africtivistes.com"> AfricTivistes</a> · All rights reserved.
  `,
};
