import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ArticlesModel} from "../../../../_model/articles.model";
import {SubjectRepository} from "../../../../_repository/subject.repository";

@Component({
  selector: 'app-related-articles',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './related-articles.component.html',
  styleUrls: ['./related-articles.component.scss']
})
export class RelatedArticlesComponent {

  constructor(private repo: SubjectRepository) {
  }

  get getNewArticleRelated(): ArticlesModel[] | undefined {
    return this.repo.getNewArticle()
  }
}
