import { Action, createReducer, on } from '@ngrx/store';
import { todoListActions } from './todo-list.action-types';
import { TodoItem } from '../interfaces/TodoItem';
import { loadTodosActions } from './todo-list.actions';


export interface todoList {
    todos: TodoItem[],
    selectedTodo: TodoItem,
    isLoading: boolean,
    messageError : string
}

//Se implementa una interfaz con los datos relevantes del estado
export const InitialTodoListState: todoList = {
    todos: [],
    selectedTodo: {
        id: 0,
        user_id: 0,
        text: '',
        complete: false,
        created_at: '',
        updated_at: ''
    },
    isLoading: false,
    messageError:""
}
//El reducer tiene la lógica de cada acción dentro del on()
export const todoListReducer = createReducer(
    //Añades el estado inicial
    InitialTodoListState,
    on(todoListActions.createTodo, (state, action) => (
        {
        //Obtiene una copia del estado previo
        ...state,
        //Modifica los parámetros del estado que desea
        todos: [...state.todos, action.todoItem],
        selectedTodo: action.todoItem
        })),
    on(todoListActions.completeTodo, (state, action) => {
        const updatedTodos = state.todos.
        map(todo => {
        //Deberia comprobarlo por ID
            if (todo.text === action.todoItem.text) {
                return { ...todo, complete: !todo.complete };
            }
                return todo;
        });
        
        return { ...state, todos: updatedTodos };
    }),

    on(loadTodosActions.load, (state) => ({
        ...state,
        isLoading:true
    })),
    on(loadTodosActions.loadSuccess, (state, action) => ({
        ...state,
        todos: action.todos,
        isLoading:false,
    })),
    on(loadTodosActions.loadFailure, (state, action) => ({
        ...state,
        isLoading:false,
        messageError:action.messageError
    })),
);
