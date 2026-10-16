import { Routes } from '@angular/router';
import { EventDetails } from './pages/event-details/event-details';
import { EventList } from './pages/event-list/event-list';
import { NotFound } from './pages/not-found/not-found';

export const routes: Routes = [
  { path: '', redirectTo: 'events', pathMatch: 'full' },
  { path: 'events', component: EventList, title: 'EventHub · Événements' },
  { path: 'events/:id', component: EventDetails, title: 'EventHub · Détail' },
  {
    path: 'about',
    // Lazy loading : le code de About est téléchargé à la première navigation
    loadComponent: () => import('./pages/about/about').then((m) => m.About),
    title: 'EventHub · À propos',
  },
  { path: '**', component: NotFound, title: 'EventHub · Page introuvable' },
];
