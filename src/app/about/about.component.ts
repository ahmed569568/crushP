import { NotificationService } from './../services/notification.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  currentMessage: string;
  constructor(private notificationService: NotificationService) {}
  ngOnInit(): void {
    this.notificationService.notificationSubject.subscribe((res) => {
      this.currentMessage = res;
    });
  }
  sendMessage(message: any) {
    this.notificationService.sendNotification(message.value);
  }
}
