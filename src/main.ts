import {bootstrapApplication} from "@angular/platform-browser";
import {enableProdMode, importProvidersFrom} from "@angular/core";
import {AppComponent} from "./app/app.component";

import {environment} from './environments/environment';
import {AppRoutingModule} from "./app/app-routing.module";
import {MarkdownModule} from "ngx-markdown";

import 'prismjs';
import 'prismjs/components/prism-typescript.min.js';
import 'prismjs/plugins/line-numbers/prism-line-numbers.js';
import 'prismjs/plugins/line-highlight/prism-line-highlight.js';
import {HttpClientModule} from "@angular/common/http";

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [importProvidersFrom(AppRoutingModule, MarkdownModule.forRoot(), HttpClientModule)]
}).catch(err => console.error(err));
