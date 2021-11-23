import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  @Input() todo: any;
  @Output() toggleEvent = new EventEmitter();
  @Output() deleteEvent = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
  toggle(todo: any) {
    this.toggleEvent.emit(todo);
  }
  delete(todo: any) {
    this.deleteEvent.emit(todo);
  }
}
