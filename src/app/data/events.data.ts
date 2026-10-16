import { EventItem } from '../models/event.model';

export const EVENTS: EventItem[] = [
  {
    id: 1,
    title: 'Atelier TypeScript',
    category: 'Atelier',
    date: '2026-11-15',
    place: 'Campus',
    price: 0,
    imageUrl: 'images/typescript.svg',
    description:
      'Découverte de TypeScript : types, interfaces et génériques, avec des exercices pratiques pour bien démarrer avec Angular.',
  },
  {
    id: 2,
    title: 'Atelier Angular Signals',
    category: 'Atelier',
    date: '2026-11-22',
    place: 'Salle B12',
    price: 15,
    imageUrl: 'images/signals.svg',
    description:
      'Maîtrisez signal(), computed() et effect() pour construire des interfaces réactives sans Zone.js.',
  },
  {
    id: 3,
    title: 'Conférence IA & Société',
    category: 'Conférence',
    date: '2026-12-02',
    place: 'Amphi A',
    price: 0,
    imageUrl: 'images/ia.svg',
    description:
      "Intervenants et débat autour de l'impact de l'intelligence artificielle sur les métiers et la société.",
  },
  {
    id: 4,
    title: 'Conférence Cybersécurité',
    category: 'Conférence',
    date: '2026-12-10',
    place: 'Amphi B',
    price: 20,
    imageUrl: 'images/cyber.svg',
    description:
      'Retours d’expérience de professionnels : menaces actuelles, bonnes pratiques et parcours de carrière en sécurité.',
  },
  {
    id: 5,
    title: 'Tournoi de Futsal',
    category: 'Sport',
    date: '2026-11-29',
    place: 'Terrain de sport',
    price: 10,
    imageUrl: 'images/futsal.svg',
    description:
      'Tournoi inter-classes en équipes de 5. Inscription par équipe, trophées et ambiance garantis.',
  },
  {
    id: 6,
    title: 'Course solidaire 5 km',
    category: 'Sport',
    date: '2026-12-14',
    place: 'Parc de la ville',
    price: 5,
    imageUrl: 'images/course.svg',
    description:
      'Course ouverte à tous au profit d’une association locale. Ravitaillement et médailles à l’arrivée.',
  },
  {
    id: 7,
    title: 'Hackathon EventHub',
    category: 'Compétition',
    date: '2027-01-17',
    place: 'Espace Innovation',
    price: 30,
    imageUrl: 'images/hackathon.svg',
    description:
      '24 heures pour concevoir un prototype en équipe. Mentors, repas et prix pour les meilleurs projets.',
  },
  {
    id: 8,
    title: 'Rencontre avec les anciens',
    category: 'Rencontre',
    date: '2027-01-24',
    place: 'Cafétéria',
    price: 0,
    imageUrl: 'images/anciens.svg',
    description:
      'Échangez avec d’anciens étudiants sur leur parcours, les stages et les conseils pour réussir.',
  },
];
