import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  TaskRoutingModule,
  TaskListComponent,
  TaskListItemComponent,
  TaskService,
  AgePipe
} from './task.barrel';
import {DndModule} from 'ng2-dnd';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TaskRoutingModule,
    DndModule.forRoot()
  ],
  declarations: [
    TaskListComponent,
    TaskListItemComponent,
    AgePipe
  ],
  providers: [
    TaskService
  ]
})
export class TaskModule { }
