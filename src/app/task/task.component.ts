import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  changeStyle() {
    // var element = document.getElementById("myBox");
    // element.classList.add("opacityClicked");
    // console.log('done');
    var element = document.getElementById('myBox');
    element.classList.toggle('mystyle');
  }
}
