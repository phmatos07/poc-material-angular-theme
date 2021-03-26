import { Component } from '@angular/core';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss']
})
export class BadgeComponent {

  hidden = false;

  toggleBadgeVisibility(): void {
    this.hidden = !this.hidden;
  }
}
