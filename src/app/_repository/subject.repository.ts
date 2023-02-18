import {Injectable} from "@angular/core";
import {DataService} from "../_service/data.service";
import {ArticlesModel} from "../_model/articles.model";
import {CommonApiServiceService} from "../_service/common-api.service";
import {DefaultResponseModel} from "../_model/subject-list.model";
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class SubjectRepository {
  private mainData: any
  private articles: ArticlesModel[] = [];
  private locator = (p: ArticlesModel, slug?: string) => p.slug == slug
  private locatorId = (p: ArticlesModel, id?: string) => p._id == id

  constructor(private commonService: CommonApiServiceService,
              private router: Router) {
    commonService.get<ArticlesModel[]>('articles', true).subscribe(res => {
      this.mainData = res
      this.articles = this.mainData?.data
    })
  }

  getArticles(): ArticlesModel[] {
    return this.articles
  }

  getArticleBySlug(slug: string): ArticlesModel | undefined {
    if (this.articles) {
      return this.articles.find(an => this.locator(an, slug))
    }
    return undefined
  }

  getArticleById(id: string): ArticlesModel | undefined {
    if (this.articles) {
      return this.articles.find(an => this.locatorId(an, id))
    }
    return undefined
  }

  getNewArticle(): ArticlesModel[] | undefined {
    if (this.articles) {
      return this.articles.slice(0, 3)
    }
    return undefined
  }

  async saveArticle(article: ArticlesModel) {
    if (article) {
      await this.commonService.post<ArticlesModel>('articles', article, true, true).subscribe()
      this.router.navigateByUrl('/article').then()
    }
  }

  updateArticle(id: string, article: ArticlesModel) {
    if (article) {
      this.commonService.patch<ArticlesModel>(`articles/${id}`, article, true, true).subscribe()
    }
  }

  removeArticleById(articleId: string) {
    if (articleId) {
      this.commonService.delete(`articles/${articleId}`, false, true).subscribe()
    }
  }
}
