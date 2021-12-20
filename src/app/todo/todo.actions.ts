import { ToDo } from "./todo";

export class AddTodo {
    static readonly type = '[Todo] Add';
    constructor(public payload: string) { }
}

export class ToggleTodo {
    static readonly type = '[Todo] Toggle Todo';
    constructor(public payload: ToDo) { }
}

export class DeleteTodo {
    static readonly type = '[Todo] Delete Todo';
    constructor(public payload: ToDo) { }
}

export class DeleteAllTodos {
    static readonly type = '[Todo] Delete All';
}