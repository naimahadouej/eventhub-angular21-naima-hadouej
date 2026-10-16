import { CurrencyPipe, DatePipe, UpperCasePipe } from '@angular/common';
import { Component, computed, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { EVENTS } from '../../data/events.data';

@Component({
  selector: 'app-event-details',
  imports: [DatePipe, CurrencyPipe, UpperCasePipe, RouterLink],
  templateUrl: './event-details.html',
  styleUrl: './event-details.css',
})
export class EventDetails {
  /**  receive the id  (/events/3) */
  readonly id = input<string>();

  /** finds the id / undefined  */
  readonly event = computed(() => EVENTS.find((e) => e.id === Number(this.id())));
}
