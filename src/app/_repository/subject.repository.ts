import {Injectable} from "@angular/core";
import {SubjectListModel} from "../_model/subject-list.model";
import {StaticDataSource} from "../_model/dataSource";
import {DataService} from "../_service/data.service";
import {Observable} from "rxjs";
import {ArticlesModel} from "../_model/articles.model";

@Injectable({
  providedIn: 'root'
})
export class SubjectRepository {
  private articles: ArticlesModel[] = [];
  private locator = (p: ArticlesModel, slug?: string) => p.slug == slug
  private locatorId = (p: ArticlesModel, id?: string) => p._id == id

  constructor(private service: DataService) {
    service.getArticles().subscribe(res => {
      this.articles = res
    })
  }

  getArticles(): ArticlesModel[]  {
    return this.articles
  }

  getArticleBySlug(slug: string): ArticlesModel | undefined  {
    return this.articles.find(an =>  this.locator(an, slug))
  }

  getArticleById(id: string): ArticlesModel | undefined  {
    return this.articles.find(an =>  this.locatorId(an, id))
  }

  getNewArticle(): ArticlesModel[] {
    return this.articles.slice(0, 3)
  }

  saveArticle(article: ArticlesModel) {
    if (article) {
      this.service.createArticle(article).subscribe()
    }
  }

  updateArticle(id: string, article: ArticlesModel) {
    if (article) {
      this.service.updateArticle(id, article).subscribe()
    }
  }

  removeArticleById(articleId: string) {
    this.service.removeArticle(articleId).subscribe()
  }
}
