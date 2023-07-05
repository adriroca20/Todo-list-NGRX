import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs/internal/Observable';
import { TodoItem } from '../interfaces/TodoItem';
import { map } from 'rxjs';


const API_TODOS:string = "https://one-list-api.herokuapp.com/items?access_token=illustriousvoyage"
@Injectable({
  providedIn: 'root'
})

export class TodoListService {
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json;charset=UTF-8;",
    }),
  }
  listaTodos!:TodoItem[];
  constructor(public http: HttpClient) { }

  getAllTodos(): Observable<TodoItem[]> {
    return this.http.get<TodoItem[]>(API_TODOS, this.httpOptions).pipe(
      map((res: TodoItem[]) => {
        return res
      }
      )
    );
  }

  getTodosHttp(){ 
    this.http.get<TodoItem[]>(API_TODOS).subscribe((res:TodoItem[])=>{
      this.listaTodos = res;
    })
  }
}
