import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodoListModule } from './todo-list/todo-list.module';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from "@angular/common/http";
import {EffectsModule} from "@ngrx/effects"
//NGRX
import { todoListReducer } from './todo-list/store/todo-list.reducer';

//LOS EFECTOS SE IMPORTAN CON LA ESTRELLITA Y 
// LLAMAR AL ARCHIVO DE EFFECTS SIN -
import * as todoEffects from './todo-list/store/todo.effects';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TodoListModule,
    HttpClientModule,
    StoreModule.forRoot({todoList : todoListReducer}),
    EffectsModule.forRoot([todoEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
