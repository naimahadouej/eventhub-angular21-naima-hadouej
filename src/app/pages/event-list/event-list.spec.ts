import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { EventList } from './event-list';

describe('EventList', () => {
  function setup() {
    TestBed.configureTestingModule({ providers: [provideRouter([])] });
    const fixture = TestBed.createComponent(EventList);
    fixture.detectChanges();
    return fixture;
  }

  it('affiche tous les événements au départ', () => {
    const fixture = setup();
    const cards = fixture.nativeElement.querySelectorAll('app-event-card');
    expect(cards.length).toBe(8);
  });

  it('filtre par catégorie', () => {
    const fixture = setup();
    fixture.componentInstance.selectCategory('Sport');
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelectorAll('app-event-card').length).toBe(2);
  });

  it('affiche le message @empty quand rien ne correspond', () => {
    const fixture = setup();
    fixture.componentInstance.search.set('zzzz');
    fixture.detectChanges();
    expect(fixture.nativeElement.textContent).toContain('Aucun événement disponible');
  });

  it('ajoute puis retire un favori', () => {
    const fixture = setup();
    fixture.componentInstance.toggleFavorite(1);
    expect(fixture.componentInstance.favoritesCount()).toBe(1);
    fixture.componentInstance.toggleFavorite(1);
    expect(fixture.componentInstance.favoritesCount()).toBe(0);
  });
});
