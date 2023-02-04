import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {ArticlesModel} from "../../../../_model/articles.model";
import {SubjectRepository} from "../../../../_repository/subject.repository";
import {environment} from "../../../../../environments/environment";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-attribute-share',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './attribute-share.component.html',
  styleUrls: ['./attribute-share.component.scss']
})
export class AttributeShareComponent {

  @Input() slug!: string

  onTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

  share(link: string) {
    window.open(link + encodeURIComponent(environment.BASE_URL + '/article/' + this.slug));
  }
}
