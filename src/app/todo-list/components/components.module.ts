import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoCreatorComponent } from './todo-creator/todo-creator.component';



@NgModule({
  declarations: [
    TodoItemComponent,
    TodoListComponent,
    TodoCreatorComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    TodoItemComponent,
    TodoListComponent,
    TodoCreatorComponent
  ]
})
export class ComponentsModule { }
