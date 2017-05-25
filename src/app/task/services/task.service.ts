import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

import { ApiService, ApiResponseConfig } from '../../shared/shared.barrel';
import { Task } from '../task.barrel';

@Injectable()
export class TaskService {
  private _counter = 0;
  public constructor(private _apiService: ApiService) {
    //
  }

  public list(responseConfig: ApiResponseConfig): void {
    this._apiService.request(
      {
        method: 'Get',
        url: 'task'
      },
      responseConfig
    );
  }

  public create(task: Task, responseConfig: ApiResponseConfig): void {
    this._apiService.request(
      {
        method: 'Post',
        url: 'task',
        body: task
      },
      responseConfig
    )
  }

  public update(task: Task, responseConfig: ApiResponseConfig): void {
    this._apiService.request(
      {
        method: 'Patch',
        url: 'task/' + task.id,
        body: task
      },
      responseConfig
    )
  }

  public delete(task: Task, responseConfig: ApiResponseConfig): void {
    this._apiService.request(
      {
        method: 'Delete',
        url: 'task/' + task.id
      },
      responseConfig
    );
  }
  
  public saveTasks(tasks: Task[]) {
    this._counter++;
    for (const task of tasks) {
        console.log(task);
        this.update(task,
        {
          success: updatedTask => {this._counter--;},
          error: error => {},
          finally: () => {}
        }
      );
    }
    return true;
  };

}
