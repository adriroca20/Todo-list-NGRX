import { Component, Input } from '@angular/core';
import { TodoItem } from '../../interfaces/TodoItem';
import { TodoListFacade } from '../../store/todo-list.facade';
import { TodoListService } from '../../services/todo-list.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
  @Input() todoData!: TodoItem;
  constructor(public todoListFacade:TodoListFacade, public serv:TodoListService){}
  
  toggleDone() {
    this.todoListFacade.completeTodo(this.todoData)
  }
}
