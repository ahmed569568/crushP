import { NotificationService } from './../services/notification.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  notificationMessage: string;
  employee = {
    name: 'ahmed',
    age: '20',
  };
  constructor(private notificationService: NotificationService) {}

  ngOnInit(): void {
    console.log(this.employee);
    const newEmp = { ...this.employee };
    console.log(newEmp);
  }
}
