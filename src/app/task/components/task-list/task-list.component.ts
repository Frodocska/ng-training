import { Component, OnInit, ElementRef } from '@angular/core';

import {
  Task,
  TaskService,
TaskListItemComponent
} from '../../task.barrel';
declare var jQuery: any;
@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  public tasks: Task[];
  public loading = true;
  public selectedValue: Task;

  public constructor(private _taskService: TaskService) {
  }

  public ngOnInit() {
    this.loadTasks();
    //jquery ui sortable-t nem tudtam rákötni, h maguk a task-ok észrevegyék h bármi is változott :(
    //jQuery( "#sortable" ).sortable();
    //jQuery( "#sortable" ).disableSelection();    
  }

  public loadTasks() {
    this.loading = true;
    this._taskService.list({
      success: response => {
          this.tasks = response;
        },
      finally: () => this.loading = false
    });
  }

  public addNewTask() {
    this.loading = true;
    const task = new Task();
    task.name = 'New Task';
    task.position = 100;
    this._taskService.create(
      task,
      {
        finally: () => this.loadTasks()
      }
    );
  }

  public removeTask(task: Task) {
    const index: number = this.tasks.indexOf(task);
    if (index !== -1) {
      this.tasks.splice(index, 1);
    }
  }

  public transferDataSuccess($event: any) {
    console.log('on drop successfull');
    this.loading = true;
    this.loading = !this._taskService.saveTasks(this.tasks);
  }
}

