import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {RouterModule} from "@angular/router";
import {SharedModule} from "./shared/shared.module";
import {PagesComponent} from "./pages/pages.component";
import {pagesRouting} from "./pages/pages.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    RouterModule.forRoot([
      {
        path: '',
        component: PagesComponent,
        children: pagesRouting
      }
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
