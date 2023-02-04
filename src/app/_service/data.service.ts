import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {ArticlesModel} from "../_model/articles.model";
import {CoursesModel} from "../_model/courses.model";
import {DefaultResponseModel} from "../_model/subject-list.model";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getArticles(): Observable<ArticlesModel[]> {
    return this.http.get<DefaultResponseModel>(`${environment.BASE_URL}/articles`)
      .pipe(map(res => res.data))
  }

  createArticle(body: ArticlesModel): Observable<ArticlesModel[]> {
    return this.http.post<DefaultResponseModel>(`${environment.BASE_URL}/articles`, body)
      .pipe(map(res => res.data))
  }

  updateArticle(id: string, body: ArticlesModel): Observable<ArticlesModel[]> {
    return this.http.patch<DefaultResponseModel>(`${environment.BASE_URL}/articles/${id}`, body)
      .pipe(map(res => res.data))
  }

  removeArticle(id: string): Observable<ArticlesModel[]> {
    return this.http.delete<DefaultResponseModel>(`${environment.BASE_URL}/articles/${id}`)
      .pipe(map(res => res.data))
  }
}
