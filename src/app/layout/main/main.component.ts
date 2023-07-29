import { ChangeDetectionStrategy, Component,inject } from '@angular/core';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { RouterOutlet } from '@angular/router';
import { AuthStore } from 'src/app/shared/store';
import { RouterLink, RouterLinkActive } from '@angular/router';
@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule,FooterComponent,HeaderComponent,RouterOutlet,RouterLink, NgFor, RouterLinkActive, NgIf],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default  class MainComponent {
  readonly #authStore = inject(AuthStore);
  readonly currentUser = this.#authStore.selectors.user;
  logout(): void {
    this.#authStore.logout();
  }
}
