import { BehaviorSubject, Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  // public notificationSubject = new Subject<string>()
  public notificationSubject = new BehaviorSubject<string>('');

  constructor() {}
  sendNotification(data: string) {
    this.notificationSubject.next(data);
  }
}
