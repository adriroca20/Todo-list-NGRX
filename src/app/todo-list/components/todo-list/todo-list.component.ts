import { Component, OnInit } from '@angular/core';
import { TodoItem } from '../../interfaces/TodoItem';
import { TodoListFacade } from '../../store/todo-list.facade';
import { Observable } from 'rxjs';
import { TodoListService } from '../../services/todo-list.service';
import { todoList } from '../../store/todo-list.reducer';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit{

  constructor(public todoListFacade:TodoListFacade){}
  todos!:TodoItem[]


  ngOnInit(): void {
    this.todoListFacade.todos.subscribe(res=>this.todos = res)
    this.todoListFacade.loadTodosData()
  }
}
