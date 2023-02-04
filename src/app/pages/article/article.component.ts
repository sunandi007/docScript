import {Component, OnInit} from '@angular/core';
import {AttributeShareComponent} from "./component/attribute-share/attribute-share.component";
import {RelatedArticlesComponent} from "../tutorial/component/related-articles/related-articles.component";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {MarkdownModule} from "ngx-markdown";
import {CommonModule} from "@angular/common";
import {ArticlesModel} from "../../_model/articles.model";
import {SubjectRepository} from "../../_repository/subject.repository";
import {ActivatedRoute} from "@angular/router";

@Component({
  standalone: true,
  imports: [
    AttributeShareComponent,
    RelatedArticlesComponent,
    MarkdownModule,
    HttpClientModule,
    CommonModule],
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent {

  slugParam: string = ''

  constructor(private repo: SubjectRepository,
              private route: ActivatedRoute) {
    this.slugParam = route.snapshot.params['slug']
  }

  get getArticle(): ArticlesModel | undefined {
    return this.repo.getArticleBySlug(this.slugParam)
  }

}
