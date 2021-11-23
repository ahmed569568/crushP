import { Subject } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss'],
})
export class EventComponent implements OnInit {
  sub = new Subject<any>();
  constructor() {
    this.sub.subscribe((res) => {
      console.log(res);
    });
    this.sub.next('im value');
  }

  ngOnInit(): void {
    let i = document.getElementById('one');
    i.style.background = 'gray';
    i.style.color = 'red';
    i.style.cssText = 'background: green; padding:20px;color:red';
    i.focus();
    ////
    let l = document.getElementById('two');
    l.onblur = function () {
      document.links[0].click();
    };
    ////
    let element = document.getElementById('element');
    element.after('hello boy');
    element.prepend('hhhhhh');
  }
}
