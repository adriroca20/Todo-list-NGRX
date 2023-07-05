import {inject} from '@angular/core'
import {Actions, createEffect, ofType} from '@ngrx/effects'
import {catchError, map, of, switchMap} from 'rxjs'
import { TodoListService } from '../services/todo-list.service'
import { TodoItem } from '../interfaces/TodoItem'
import { loadTodosActions } from './todo-list.actions'


export const todoListEffect = createEffect(
  (actions$ = inject(Actions), todoService = inject(TodoListService)) => {
    return actions$.pipe(
    //Cuando se le hace dispatch a load, se activa todo. Es un listener.
      ofType(loadTodosActions.load),
      //Permite cambiar el valor de un observable por otro de manera asincrona
      switchMap(() => {
        return todoService.getAllTodos().pipe(
          map((items: TodoItem[]) => {
            return loadTodosActions.loadSuccess({todos: items})
          }),
          catchError(() => {
            return of(loadTodosActions.loadFailure({messageError: ""}))
          })
        )
      })
    )
  },
  {functional: true}
)