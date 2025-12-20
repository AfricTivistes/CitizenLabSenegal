export type ProjectData = {
  [key: string]: {
    title: string;
    category: string;
    client: string;
    date: string;
    heroImage: string;
    description: string;
    challenge: string;
    solution: string;
    technologies: string[];
    features: Array<{ title: string; description: string; icon: string }>;
    results: string[];
    testimonial?: {
      quote: string;
      author: string;
      role: string;
      image: string;
    };
    gallery: string[];
  };
};

export const projetsData: ProjectData = {
  'budget-participatif': {
    title: 'Plateforme de Budget Participatif',
    category: 'Développement Web',
    client: 'Mairie de Dakar',
    date: 'Janvier - Juin 2023',
    heroImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
    description: 'Développement d\'une plateforme digitale innovante permettant aux citoyens de Dakar de participer activement au processus budgétaire de leur commune.',
    challenge: 'La municipalité de Dakar souhaitait moderniser son processus de budget participatif et augmenter l\'engagement citoyen dans les décisions budgétaires locales.',
    solution: 'Nous avons développé une plateforme web responsive avec une interface intuitive permettant aux citoyens de proposer des projets, voter pour leurs initiatives préférées et suivre en temps réel l\'avancement des projets retenus.',
    technologies: ['React', 'Node.js', 'PostgreSQL'],
    features: [
      { title: 'Proposition de projets', description: 'Interface simple pour soumettre des idées de projets', icon: 'tabler:bulb' },
      { title: 'Vote citoyen', description: 'Système de vote sécurisé avec authentification', icon: 'tabler:checkbox' },
      { title: 'Suivi en temps réel', description: 'Tableau de bord d\'avancement', icon: 'tabler:chart-line' },
      { title: 'Notifications', description: 'Alertes par email et SMS', icon: 'tabler:bell' },
      { title: 'Modération', description: 'Outils de validation pour administrateurs', icon: 'tabler:shield-check' },
      { title: 'Rapports', description: 'Génération automatique de rapports', icon: 'tabler:file-analytics' },
    ],
    results: [
      '5000+ citoyens inscrits',
      '120 projets proposés',
      '85% de satisfaction utilisateur',
      '40 projets validés',
      'Taux d\'engagement multiplié par 4',
    ],
    testimonial: {
      quote: 'La plateforme a révolutionné notre processus de budget participatif.',
      author: 'Fatou Diop',
      role: 'Maire adjointe, Commune de Dakar',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    },
    gallery: [
      'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    ],
  },
  'open-data-observatory': {
    title: 'Observatoire des données ouvertes',
    category: 'Data & Visualisation',
    client: 'Gouvernement du Sénégal',
    date: 'Mars - Décembre 2023',
    heroImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
    description: 'Portail national centralisant les données publiques sénégalaises.',
    challenge: 'Données publiques dispersées et difficiles d\'accès.',
    solution: 'Portail moderne avec visualisation interactive et APIs publiques.',
    technologies: ['Vue.js', 'D3.js', 'Python', 'PostgreSQL'],
    features: [
      { title: 'Catalogue intégré', description: 'Accès centralisé aux données', icon: 'tabler:database' },
      { title: 'Visualisations interactives', description: 'Graphiques et cartes dynamiques', icon: 'tabler:chart-bar' },
      { title: 'APIs publiques', description: 'Interfaces pour développeurs', icon: 'tabler:api' },
    ],
    results: [
      '200+ jeux de données',
      '10K+ utilisateurs mensuels',
      '50+ applications créées',
      'Première place Open Data Afrique',
    ],
    testimonial: {
      quote: 'Transformé l\'accès aux informations publiques au Sénégal.',
      author: 'Dr. Aïssatou Dibba',
      role: 'Directrice Open Data',
      image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    },
    gallery: [
      'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    ],
  },
  'civic-engagement-tool': {
    title: 'Outil d\'engagement civique',
    category: 'Application Mobile',
    client: 'Communes du Sénégal',
    date: 'Octobre 2023 - Juin 2024',
    heroImage: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
    description: 'Système mobile de suivi des consultations publiques.',
    challenge: 'Communication limitée entre communes et citoyens.',
    solution: 'Application mobile pour notifications et recueil d\'avis.',
    technologies: ['React Native', 'Firebase', 'Node.js'],
    features: [
      { title: 'Notifications', description: 'Alertes temps réel', icon: 'tabler:bell' },
      { title: 'Commentaires', description: 'Participation citoyenne', icon: 'tabler:message-circle' },
      { title: 'Dashboard', description: 'Suivi pour communes', icon: 'tabler:chart-bar' },
    ],
    results: [
      '15 communes équipées',
      '8000+ notifications envoyées',
      '92% satisfaction utilisateur',
    ],
    testimonial: {
      quote: 'Engagement citoyen doublé grâce à cette application.',
      author: 'Madame Ndioro Fall',
      role: 'Directrice Affaires Sociales',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    },
    gallery: [
      'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    ],
  },
  'youth-bootcamp': {
    title: 'Bootcamps Innovation Jeunesse',
    category: 'Formation & Accompagnement',
    client: 'Ministère de la Jeunesse',
    date: '2023-2024',
    heroImage: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
    description: 'Programme de formation intensive pour jeunes en innovation sociale.',
    challenge: 'Jeunes sénégalais manquent de compétences techniques.',
    solution: '3 bootcamps intensifs avec théorie et pratique.',
    technologies: ['JavaScript', 'React', 'Node.js'],
    features: [
      { title: 'Formation théorique', description: 'Apprentissage concepts', icon: 'tabler:book' },
      { title: 'Ateliers pratiques', description: 'Projets réels', icon: 'tabler:tool' },
      { title: 'Mentoring', description: 'Accompagnement personnalisé', icon: 'tabler:user-plus' },
    ],
    results: [
      '150 jeunes formés',
      '30 prototypes développés',
      '4 entreprises créées',
    ],
    testimonial: {
      quote: 'Potentiel innovateur de notre jeunesse révélé.',
      author: 'Cheikh Fall',
      role: 'Directeur Initiatives Jeunesse',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    },
    gallery: [
      'https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    ],
  },
  'media-campaign': {
    title: 'Campagne Médias & Données Ouvertes',
    category: 'Sensibilisation',
    client: 'Médias Sénégalais',
    date: 'Janvier - Juillet 2023',
    heroImage: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
    description: 'Formation de journalistes à l\'utilisation des données ouvertes.',
    challenge: 'Presse non familiarisée avec outils données ouvertes.',
    solution: 'Programme complet de formation et projets.',
    technologies: ['Google Sheets', 'Datawrapper'],
    features: [
      { title: 'Formation technique', description: 'Outils d\'analyse', icon: 'tabler:school' },
      { title: 'Visualisation', description: 'Graphiques et cartes', icon: 'tabler:chart-pie' },
      { title: 'Projets pratiques', description: 'Application réelle', icon: 'tabler:flag' },
    ],
    results: [
      '50 journalistes formés',
      '20 articles publiés',
      '50 000+ vues cumulées',
    ],
    testimonial: {
      quote: 'Couverture thématique révolutionnée.',
      author: 'Aïnatou Dieng',
      role: 'Rédaction Le Soleil',
      image: 'https://images.unsplash.com/photo-1594824804734-a1671b5b43b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    },
    gallery: [
      'https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    ],
  },
  'hackathon-open-data': {
    title: 'Hackathon Open Data Sénégal',
    category: 'Événement',
    client: 'Africtivistes',
    date: 'Mai 2024',
    heroImage: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
    description: 'Hackathon dédié aux données ouvertes au Sénégal.',
    challenge: 'Données ouvertes sous-utilisées localement.',
    solution: 'Événement de 48h avec défis concrets.',
    technologies: ['APIs', 'Open Data'],
    features: [
      { title: 'Mentoring', description: 'Accompagnement expert', icon: 'tabler:user-check' },
      { title: 'Prix', description: 'Récompenses et soutien', icon: 'tabler:gift' },
      { title: 'Présentations', description: 'Démonstrations publiques', icon: 'tabler:presentation' },
    ],
    results: [
      '100 participants',
      '15 projets finaux',
      '+200 articles médias',
    ],
    testimonial: {
      quote: 'Innovation citoyenne catalysée au Sénégal.',
      author: 'Modou Diop',
      role: 'Coordinateur Africtivistes',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    },
    gallery: [
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    ],
  },
};