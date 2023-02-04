import { Component } from '@angular/core';
import {SubjectRepository} from "../../_repository/subject.repository";
import {ArticlesModel} from "../../_model/articles.model";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule],
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent {

  constructor(private repo: SubjectRepository) {
  }

  get getArticles(): ArticlesModel[] {
    return this.repo.getArticles()
  }
}
