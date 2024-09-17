import {Component, ElementRef, OnInit, viewChild} from '@angular/core';
import * as Sentry from '@sentry/angular';

@Component({
  selector: 'app-feedback-button',
  standalone: true,
  imports: [],
  templateUrl: './feedback-button.component.html',
  styleUrl: './feedback-button.component.scss'
})
export class FeedbackButtonComponent implements OnInit {
  feedbackButton = viewChild('feedbackButton', {read: ElementRef});

  ngOnInit(): void {
    const feedbackIntegration = Sentry.feedbackIntegration({
      colorScheme: 'light',
      enableScreenshot: true,
      showName: false,
      showEmail: false,
      showBranding: false,
      autoInject: false,
    });

    Sentry.addIntegration(feedbackIntegration);

    Sentry.setUser({
      username: 'uesrname',
      email: 'email'
    });

    feedbackIntegration.attachTo(this.feedbackButton()?.nativeElement);
  }
}
