import {Component, OnInit} from 'angular2/core';

import {Todo} from '../../models/todo';
import {TodoService} from '../../services/todo-service';

@Component({
  selector : 'TodoList',
  templateUrl : './app/views/todo-list.html',
  providers : [TodoService],
  bindings : [TodoService]
})

export class TodoListComponent implements OnInit {

  todoCount : number;
  selectedTodo : Todo;
  todos : Array<Todo>;

  constructor(public todoService:TodoService) {
    this.todos = todoService.getTodos();
    this.calculateTodoCount();
  }
  ngOnInit() {
    console.log('todo list page initialized');
  }

  calculateTodoCount() {
    this.todoCount = this.todos.filter(t => !t.done).length;
  }

  select(todo:Todo) {
    this.selectedTodo = todo;
  }
}
