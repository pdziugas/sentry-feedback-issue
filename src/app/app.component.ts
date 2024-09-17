import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FeedbackButtonComponent} from "./components/feedback-button/feedback-button.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FeedbackButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'sentry-feedback-issue';
}
