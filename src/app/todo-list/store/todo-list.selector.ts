import { createFeatureSelector, createSelector } from '@ngrx/store';
import { todoList } from './todo-list.reducer';

//Selecciona la feature de la que queremos extraer su estado
const getTodoListState =  createFeatureSelector<todoList>('todoList')

//Devuelve los todos que se encuentran en el estado actual de la app
export const getAllTodos = createSelector(
    getTodoListState,
    state => state.todos
)