
import { Component, input, output } from '@angular/core';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';

interface CardEvent {
  id: number;
  title: string;
  category: string;
  date: string | Date;
  place: string;
  price: number;
  imageUrl: string;
  description: string;
}

@Component({
  selector: 'app-event-card',
  imports: [RouterLink, DatePipe, CurrencyPipe],
  templateUrl: './event-card.html',
  styleUrl: './event-card.css',
})
export class EventCard {
  /** event from parent (list) */
  readonly event = input.required<CardEvent>();

  /** event dans fav ou non */
  readonly favorite = input(false);

  /** signals to the parent the fav action  */
  readonly toggleFavorite = output<number>();

  protected onToggle(): void {
    this.toggleFavorite.emit(this.event().id);
  }
}