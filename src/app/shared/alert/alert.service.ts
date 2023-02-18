import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {NavigationStart, Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  private subject = new BehaviorSubject<any>({});
  private keepAfterNavigationChange = false;

  constructor(private router: Router) {
    router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        if (this.keepAfterNavigationChange) {
          // only keep for a single location change
          this.keepAfterNavigationChange = false;
        } else {
          // clear alert
          this.subject.next('empty');
        }
      }
    });
  }

  open(value: AlertOptions) {
    this.keepAfterNavigationChange = !!value.keepOnceAfterRouteChange;
    this.subject.next(value)
  }

  clear() {
    this.subject.next('empty');
  }

  getMessage(): Observable<any> {
    return this.subject.asObservable();
  }
}

export interface AlertOptions {
  color?: 'success' | 'info' | 'warning' | 'error' | 'general';
  message: string;
  milliSecond?: number;
  keepOnceAfterRouteChange?: boolean
}
