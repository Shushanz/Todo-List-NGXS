import { Component } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { ToDo } from './todo/todo';
import { AddTodo, DeleteTodo, DeleteAllTodos, ToggleTodo } from './todo/todo.actions';
import { TodoState } from './todo/todo.state';
import * as fromFilter from './filter/filter.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @Select(TodoState.getTodoList)
  todoList: Observable<ToDo[]>;
  currentFilter: string;
  newTodo = '';

  constructor(private store: Store) {
    this.store.select(state => state.filter).subscribe(filter => {
      this.currentFilter = filter;
    })
  }

  addTodo(): void {
    if (this.newTodo.length > 0) {
      this.store.dispatch(new AddTodo(this.newTodo));
    }
    this.newTodo = '';
  }

  toggleTodo(todo: ToDo) {
    this.store.dispatch(new ToggleTodo(todo));
  }

  deleteTodo(todo: ToDo) {
    this.store.dispatch(new DeleteTodo(todo));
  }

  deleteAllTodos(): void {
    this.store.dispatch(new DeleteAllTodos());
  }

  filterTodos(filter) {
    this.store.dispatch(
      new fromFilter.SetCurrentFilter({ filter })
    );
  }
}