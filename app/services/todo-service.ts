import {Injectable} from 'angular2/core';
import {Todo} from '../models/todo';

import {Http} from 'angular2/http';

@Injectable()
export class TodoService {
  private todos:Array<Todo> = [
    new Todo('Todo number 1', false),
    new Todo('Todo number 2', false),
    new Todo('Todo number 3', false)
  ];

  getTodos():Array<Todo> {
    return this.todos;
  }

  addTodo(name:string) {
    this.todos.push(new Todo(name, false));
  }
}
