import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BirthdayWishComponent } from './birthday-wish/birthday-wish.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BirthdayWishComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Shalubirth';
}
