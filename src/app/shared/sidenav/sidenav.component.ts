import { Component } from '@angular/core';
import {SubjectRepository} from "../../_repository/subject.repository";
import {SubjectListModel} from "../../_model/subject-list.model";
import {RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";
import {ArticlesModel} from "../../_model/articles.model";

@Component({
  standalone: true,
  imports: [RouterModule,  CommonModule],
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {

  constructor(private repo: SubjectRepository) {
  }

  getSubjectMenu(): ArticlesModel[] {
    return this.repo.getArticles()
  }
}
