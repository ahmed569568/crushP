import { TaskService } from './../../services/task.service';
import { Component, OnInit } from '@angular/core';
import { Task } from '@app/task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];
  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.Tasks();
  }
  Tasks() {
    this.taskService.getTasks().subscribe((res) => {
      this.tasks = res;
      console.log(res);
    });
  }
  deleteTask(task: Task) {
    this.taskService.deleteTask(task).subscribe(() => (this.tasks = this.tasks.filter((t) => t.id !== task.id)));
  }
  ToggleReminder(task: Task) {
    task.reminder = !task.reminder;
    this.taskService.updateTaskReminder(task).subscribe((res) => {
      console.log(res);
    });
    console.log(task.reminder);
  }
  addTask(task: Task) {
    this.taskService.addTask(task).subscribe((res) => {
      this.tasks.push(task);
      console.log(res);
    });
  }
}
