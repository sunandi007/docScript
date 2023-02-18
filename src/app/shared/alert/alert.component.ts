import { Component } from '@angular/core';
import {AlertOptions, AlertService} from "./alert.service";
import {Subscription} from "rxjs";
import {CommonModule} from "@angular/common";

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent {
  subscriptions: Subscription[] = [];
  datas: AlertOptions[];
  away: {
    bgColor: 'bg-green-400' | 'bg-blue-400' | 'bg-yellow-400' | 'bg-red-400' | 'bg-white-400';
    show: boolean;
  }[];
  constructor(private service: AlertService) {
    this.away = [];
    this.datas = [];
  }

  ngOnDestroy() {
    this.away = [];
    this.datas = [];
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

  ngOnInit(): void {
    let alertSubs: Subscription;
    alertSubs = this.service.getMessage()
      .subscribe({
        next: value => {
          this.away = [];
          this.datas = [];
          // console.log('value :', value);
          // get array length to make sure new alert stay on top
          const j = this.datas.length;
          if (value) {
            this.datas[j] = value;
            if (value.color === 'success') {
              this.away[j] = {
                bgColor: 'bg-green-400',
                show: true,
              };
            } else if (value.color === 'info') {
              this.away[j] = {
                bgColor: 'bg-blue-400',
                show: true,
              };
            } else if (value.color === 'warning') {
              this.away[j] = {
                bgColor: 'bg-yellow-400',
                show: true,
              };
            } else if(value.color === 'error') {
              this.away[j] = {
                bgColor: 'bg-red-400',
                show: true,
              };
            } else {
              this.away[j] = {
                bgColor: 'bg-white-400',
                show: false,
              };
            }
            if (this.datas[j].milliSecond) {
              // @ts-ignore
              this.removeAuto(j, this.datas[j].milliSecond);
            } else {
              this.removeAuto(j, 2400);
            }
          } else {
            this.clearAlert();
          }
        },
      });
    this.subscriptions.push(alertSubs);
  }

  removeAuto(i: number, yoi: number) {
    setTimeout(() => {
      // console.log('Alert is gone after ', yoi / 1000, 'second');
      this.removeAlert(i);
      // this.service.clear();
    }, yoi);
  }

  removeAlert(i: number) {
    if (this.away[i] && this.away[i].show) {
      this.away[i].show = false;
      // setTimeout(() => {
      this.datas.splice(i, 1);
      this.away.splice(i, 1);
      // }, 100);
    }
  }
  // all alert at once
  clearAlert() {
    this.away = [];
    this.datas = [];
  }
}
