import { NgFor } from '@angular/common';

import { Component, Input } from '@angular/core';

@Component({
  selector: 'place-list',
  standalone: true,
  imports: [NgFor],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent {
  @Input({ required: true })
  places: any[] = [];

  JSON = JSON;
}
