import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  todos = [
    { id: 1, text: 'test 1', completed: true },
    { id: 2, text: 'test 2', completed: false },
    { id: 3, text: 'test 3', completed: false },
    { id: 4, text: 'test 4', completed: true },
    { id: 5, text: 'test 5', completed: false },
  ];
  constructor() {}

  ngOnInit(): void {}
  toggleTodo(todo: any) {
    this.todos = this.todos.map((item) => {
      if (todo.id === item.id) {
        item.completed = !item.completed;
      }
      return item;
    });
  }
  deleteTodo(todo: any) {
    this.todos = this.todos.filter((item) => {
      return item.id !== todo.id;
    });
  }
  addTodo(todo: any) {
    this.todos.push(todo);
  }
}
