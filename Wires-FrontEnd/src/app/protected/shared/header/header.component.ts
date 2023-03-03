import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['../../protected.component.css'],
})
export class HeaderComponent {
  constructor(private authService: AuthService, private router: Router) {}

  username = this.authService.getUserName();
  showOptions: boolean = false;

  // Methods to navigate to the different pages
  toCreateMsg(): void {
    this.closeOptions();
    this.router.navigateByUrl('/dashboard/create');
  }

  toMyMsgs(): void {
    this.closeOptions();
    this.router.navigateByUrl('/dashboard/me');
  }

  toAllMsgs(): void {
    this.closeOptions();
    this.router.navigateByUrl('/dashboard/all');
  }

  logout(): void {
    this.router.navigateByUrl('/auth');
    this.authService.logout();
  }

  // Methods to open and close the options menu
  openOptions(): void {
    this.showOptions = !this.showOptions;
  }

  closeOptions(): void {
    this.showOptions = false;
  }

  // Identify a click outside the options menu
  @HostListener('document:click', ['$event'])
  clickout(event: { target: { id: string } }) {
    if (this.showOptions) {
      event.target.id !== 'options' && event.target.id !== 'opt-icon'
        ? this.closeOptions()
        : null;
    }
  }
}
