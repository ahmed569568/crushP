import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  myName = 'ahmed ezzat';
  myLists: any = ['An item', 'A second item', 'A third item', 'A fourth item', 'And a fifth one'];

  constructor() {}

  ngOnInit() {
    this.myLists = this.myLists.map((item: string) => ({ title: item, isClosed: true }));
  }

  toggleContent(i: number) {
    this.myLists.map((item: any, index: number) => {
      if (i === index) {
        item.isClosed = !item.isClosed;
      } else {
        item.isClosed = true;
      }
      return item;
    });
  }

  toggleClass(item: any, first: string, second: string): string {
    return item.isClosed ? first : second;
  }
}
