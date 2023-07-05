import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { TodoItem } from "../interfaces/TodoItem";
import { todoList } from "./todo-list.reducer";
import * as todoListSelector from './todo-list.selector'
import { todoListActions } from "./todo-list.action-types";
import { loadTodosActions } from "./todo-list.actions";

@Injectable()
export class TodoListFacade{
    constructor(private store: Store<todoList>) {}
    //Utilizamos un selector para obtener una propiedad concreta del store
    todos : Observable<TodoItem[]> = this.store.select(
        todoListSelector.getAllTodos
    )

    //Con el dispatch llamamos a las acciones, las cuales estan siendo
    //escuchadas por los reducers o effects y estos son ejecutados
    addTodo(text:string):void{
        const todoItem:TodoItem = {
            id: 50,
            user_id: 0,
            text,
            complete: false,
            created_at: "",
            updated_at: ""
        }
        this.store.dispatch(todoListActions.createTodo({todoItem}))
    }
    completeTodo(todoItem:TodoItem){
        this.store.dispatch(todoListActions.completeTodo({todoItem}))
    }
    loadTodosData():void{
        this.store.dispatch(loadTodosActions.load())
    }
}