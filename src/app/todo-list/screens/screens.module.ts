import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoManagerComponent } from './todo-manager/todo-manager.component';
import { ComponentsModule } from '../components/components.module';



@NgModule({
  declarations: [
    TodoManagerComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ],
  exports:[
    TodoManagerComponent
  ]
})
export class ScreensModule { }
