import { Component, computed, signal } from '@angular/core';
import { EventCard } from '../../components/event-card/event-card';
import { EVENTS } from '../../data/events.data';
import { EventItem } from '../../models/event.model';

@Component({
  selector: 'app-event-list',
  imports: [EventCard],
  templateUrl: './event-list.html',
  styleUrl: './event-list.css',
})
export class EventList {
  /** Liste dans un Signal */
  readonly events = signal<EventItem[]>(EVENTS);

  /** ids des fav */
  readonly favorites = signal<number[]>([]);

  /** nbr de fav */
  readonly favoritesCount = computed(() => this.favorites().length);

  /** selected categ and search text */
  readonly selectedCategory = signal<string>('Tous');
  readonly search = signal<string>('');

  /** tous + categ uniques */
  readonly categories = computed(() => [
    'Tous',
    ...new Set(this.events().map((e) => e.category)),
  ]);

  /**  affichage : filtre par categorie et par recherche */
  readonly filteredEvents = computed(() => {
    const category = this.selectedCategory();
    const term = this.search().trim().toLowerCase();
    return this.events().filter(
      (e) =>
        (category === 'Tous' || e.category === category) &&
        (term === '' || e.title.toLowerCase().includes(term)),
    );
  });

  selectCategory(category: string): void {
    this.selectedCategory.set(category);
  }

  onSearch(event: Event): void {
    this.search.set((event.target as HTMLInputElement).value);
  }

  isFavorite(id: number): boolean {
    return this.favorites().includes(id);
  }

  /** add or delete an event from fav (output() de EventCard) */
  toggleFavorite(id: number): void {
    this.favorites.update((list) =>
      list.includes(id) ? list.filter((x) => x !== id) : [...list, id],
    );
  }
}
