import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {LandingPageComponent} from "./pages/landing-page/landing-page.component";
import {TutorialComponent} from "./pages/tutorial/tutorial.component";
import {ArticleComponent} from "./pages/article/article.component";
import {WriteComponent} from "./pages/write/write.component";


const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent
  },
  {
    path: 'tutorial/:id',
    component: TutorialComponent
  },
  {
    path: 'article/:slug',
    component: ArticleComponent
  },
  {
    path: 'write',
    component: WriteComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
