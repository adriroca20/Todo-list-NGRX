import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScreensModule } from './screens/screens.module';
import { ComponentsModule } from './components/components.module';
import { TodoManagerComponent } from './screens/todo-manager/todo-manager.component';
import { TodoListService } from './services/todo-list.service';
import { TodoListFacade } from './store/todo-list.facade';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ScreensModule,
    ComponentsModule
  ],
  exports:[
    TodoManagerComponent
  ],
  providers:[
    TodoListService,
    TodoListFacade
  ]
})
export class TodoListModule { }
