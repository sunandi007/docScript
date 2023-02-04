import {Component} from '@angular/core';
import {RouterModule} from "@angular/router";
import {LandingPageComponent} from "./pages/landing-page/landing-page.component";
import {TutorialComponent} from "./pages/tutorial/tutorial.component";
import {HeaderComponent} from './shared/header/header.component';
import {FooterComponent} from "./shared/footer/footer.component";
import {WriteComponent} from "./pages/write/write.component";
import {MarkdownModule} from "ngx-markdown";


@Component({
  standalone: true,
  selector: 'app-root',
  template: `
    <div class="relative">
      <app-header></app-header>
      <main class="w-full mx-auto bg-gray-900">
        <router-outlet></router-outlet>
      </main>
      <app-footer class="absolute bottom-0"></app-footer>
    </div>`,
  imports: [
    HeaderComponent,
    FooterComponent,
    RouterModule
  ]
})
export class AppComponent {
}
