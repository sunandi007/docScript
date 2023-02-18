import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpRequest} from "@angular/common/http";
import {catchError, filter, map, Observable, tap, throwError} from "rxjs";
import {environment} from "../../environments/environment";
import {AlertService} from "../shared/alert/alert.service";

@Injectable({
  providedIn: 'root'
})
export class CommonApiServiceService {

  constructor(private http: HttpClient,
              private alert: AlertService) { }

  get<T>(url: string, model?: boolean, isAlert?: boolean): Observable<T> {
    return this.requests(`${environment.BASE_URL}/${url}`, "GET", null, model, isAlert);
  }

  post<T>(url: string, body: object, model?: boolean, isAlert?: boolean): Observable<T> {
    return this.requests(`${environment.BASE_URL}/${url}`, "POST", body, isAlert);
  }

  put<T>(url: string, body: object, model?: boolean, isAlert?: boolean): Observable<T> {
    return this.requests(`${environment.BASE_URL}/${url}`, "PUT", body, isAlert);
  }

  patch<T>(url: string, body: object, model?: boolean, isAlert?: boolean): Observable<T> {
    return this.requests(`${environment.BASE_URL}/${url}`, "PATCH", body, isAlert);
  }

  delete<T>(url: string, model?: boolean, isAlert?: boolean): Observable<T> {
    return this.requests(`${environment.BASE_URL}/${url}`, "DELETE", isAlert);
  }

  requests<T>(url: string, reqMethod: any, body?: any, model?: boolean, isAlert?: boolean): Observable<T> {
    const method: "POST" | "PUT" | "PATCH" = reqMethod;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    let request: HttpRequest<any>;

    if (method === 'POST' || method === 'PUT' || method === 'PATCH') {
      request = new HttpRequest(method, url, body, { headers: headers });
    } else {
      request = new HttpRequest(method, url, { headers: headers });
    }

    return this.http.request<T>(request).pipe(
      filter((res: any) => !!res),
      map((res: any) => {
        if (model) {
          return res.body as T;
        } else {
          return res.body;
        }
      }),
      tap((res: any) => {
        if (res?.successCode && isAlert) {
          this.alert.open({message: `${res?.message}`, color: "success"});
        } else if (res?.errorCode && isAlert) {
          this.alert.open({message: `${res?.message}`, color: "error"});
        }
      }),
      catchError((error: HttpErrorResponse) => {
        return throwError(() => error.error.json());
      })
    );
  }
}

