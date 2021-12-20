import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { ToDo } from './todo';
import { AddTodo, DeleteTodo, DeleteAllTodos, ToggleTodo } from './todo.actions';


interface TodoStateModel {
    todoList: ToDo[];
}

let defaultTodos: ToDo[] = [
    { description: 'my first ToDo', done: true },
    { description: 'my second ToDo', done: true },
    { description: 'my third ToDo', done: false },
    { description: 'my forth ToDo', done: false },
    { description: 'my fifth ToDo', done: false },
];

@State<TodoStateModel>({
    name: 'todo',
    defaults: {
        todoList: defaultTodos,
    }
})

@Injectable()

export class TodoState {

    @Selector()
    static getTodoList(state: TodoStateModel): ToDo[] {
        return state.todoList;
    }

    @Action(AddTodo)
    addTodo(ctx: StateContext<TodoStateModel>, action: AddTodo) {
        const todo = { description: action.payload, done: false };
        ctx.patchState({
            todoList: [todo, ...ctx.getState().todoList]
        });
    }

    @Action(ToggleTodo)
    toggleTodo(ctx: StateContext<TodoStateModel>, action: ToggleTodo) {
        const todo = action.payload;
        todo.done = !todo.done;
        ctx.patchState({
            todoList: [...ctx.getState().todoList],
        });
    }

    @Action(DeleteTodo)
    deleteTodo(ctx: StateContext<TodoStateModel>, action: DeleteTodo) {
        const { todoList } = ctx.getState();
        ctx.patchState({
            todoList: todoList.filter(todo => todo !== action.payload)
        });
    }

    @Action(DeleteAllTodos)
    deleteAllTodos({ patchState }: StateContext<TodoStateModel>): void {
        patchState({ todoList: [] });
    }
}