import { NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Store } from '@ngrx/store';
import { createPlaceAction } from '../../../store/application.actions';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [NgIf, ReactiveFormsModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateComponent {
  createForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(5)]),
    address: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
    lat: new FormControl('', [
      Validators.required,
      Validators.min(-90),
      Validators.max(90),
    ]),
    lng: new FormControl('', [
      Validators.required,
      Validators.min(-90),
      Validators.max(90),
    ]),
  });

  get f() {
    return this.createForm.controls;
  }

  onSubmit(): void {
    this.store.dispatch(
      createPlaceAction({
        place: {
          name: this.createForm.value.name as string,
          lat_lng: {
            type: 'Point',
            coordinates: [this.createForm.value.lat, this.createForm.value.lng],
          },
          status: 'draft',
        },
      })
    );
  }

  constructor(private store: Store) {}
}
