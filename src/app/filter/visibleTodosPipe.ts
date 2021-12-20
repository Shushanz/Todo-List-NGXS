import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'visibleTodos'
})

export class VisibleTodosPipe implements PipeTransform {
  transform(todos, filter){
    if (!todos) return;
    return this.getVisibleTodos(todos, filter);
  }

  private getVisibleTodos(todos, filter){
    let todo = todos;
    switch (filter) {
      case 'active':
        return todo.filter(todo => !todo.done);
      case 'completed':
        return todo.filter(todo => todo.done);
      case 'all':
      default:
        return todo;
    }
  };
}