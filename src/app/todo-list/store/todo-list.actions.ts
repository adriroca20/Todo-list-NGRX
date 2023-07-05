import { createAction, createActionGroup, emptyProps, props } from "@ngrx/store";
import { TodoItem } from "../interfaces/TodoItem";

//Las actions son una especie de interfaz que permite crear todas las acciones que van a cambiar
//el estado de la aplicación

//Lo que esta entre [] puede ser el componente o servicio que vaya a realizar la acción
export const CREATE_TODO = "[Todo Creator] create"
export const COMPLETE_TODO = "[Todo Item] complete"

export const LOAD_TODOS = "[Todo List] load todos"

//Las props se añaden cuando necesitas que esa acción tenga algún parámetro
export const createTodo = createAction(CREATE_TODO, props<{todoItem: TodoItem}>());
export const completeTodo = createAction(COMPLETE_TODO, props<{todoItem: TodoItem}>());

//Forma "errónea" de crear actions para effects
// export const loadTodosSuccess = createAction(LOAD_TODOS_SUCCESS, props<{todos: TodoItem[]}>());
// export const loadTodosFailure = createAction(LOAD_TODOS_FAILURE, props<{messageError: string}>());

//Las props no son siempre necesarias 
// export const loadTodos = createAction(LOAD_TODOS);

//Alternativa mejor para effects (llamadas a API)
export const loadTodosActions = createActionGroup(
    {
        source: LOAD_TODOS,
        events:{
            "Load": emptyProps(),
            "Load failure":props<{messageError: string}>() ,
            "Load success": props<{todos: TodoItem[]}>()
        }
    }
)

