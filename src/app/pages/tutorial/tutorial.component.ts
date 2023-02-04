import {Component} from '@angular/core';
import {SidenavComponent} from "../../shared/sidenav/sidenav.component";
import {RelatedArticlesComponent} from "./component/related-articles/related-articles.component";

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.scss'],
  standalone: true,
  imports: [SidenavComponent, RelatedArticlesComponent]
})
export class TutorialComponent {

}
