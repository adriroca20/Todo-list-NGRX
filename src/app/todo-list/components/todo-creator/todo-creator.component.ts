import { Component, OnInit } from '@angular/core';
import { TodoItem } from '../../interfaces/TodoItem';
import { TodoListFacade } from '../../store/todo-list.facade';
import { Observable } from 'rxjs';
import { TodoListService } from '../../services/todo-list.service';
import { todoList } from '../../store/todo-list.reducer';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-todo-creator',
  templateUrl: './todo-creator.component.html',
  styleUrls: ['./todo-creator.component.css']
})
export class TodoCreatorComponent implements OnInit {
  constructor(public todoListFacade: TodoListFacade) { }
  text!: string;

  //Crea un todo llamando al facade
  addTodo(text: string) {
    this.todoListFacade.addTodo(text)
  }
  ngOnInit(): void {
    
  }
}
