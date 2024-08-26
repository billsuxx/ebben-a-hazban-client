import { Component, OnInit } from '@angular/core';

import { Places } from '../../types/places.type';
import { createDirectus, readItems, rest } from '@directus/sdk';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {
    this.loadPlaces();
  }

  async loadPlaces() {
    const client = createDirectus<Places>('http://localhost:8055').with(rest());

    const restResult = await client.request(readItems('Places'));
  }
}
