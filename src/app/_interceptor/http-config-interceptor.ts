import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpRequest, HttpResponse} from "@angular/common/http";
import {catchError, map, Observable, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HttpConfigInterceptor {

  constructor() { }

  public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          console.info(`INFO FROM INTERCEPTOR >>> ${event.statusText} > status: ${event.status} > ${event.url}`);
        }
        return event
      }), catchError((error: HttpErrorResponse) => {
        let data = {} // create error object to show necessary data
        data = {
          reason: error && error.error && error.error.reason ? error.error.reason : '',
          status: error.status
        };
        // pass the error data error page / popup
        // this.alert.open({message: `${error.error.reason}`, color:"error"})
        console.error(`ERROR FROM INTERCEPTOR >>> ${error.name} > status: ${error.status} > ${error.message} > ${error.url}`)
        return throwError(() => error)
      })
    )
  }
}
