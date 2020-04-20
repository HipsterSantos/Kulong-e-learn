import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pc-nh-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  openNotification = false;
  constructor() { }

  ngOnInit(): void {
  }

}
