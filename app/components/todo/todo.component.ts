import {Component} from 'angular2/core';
import {Input} from 'angular2/core';

import {Todo} from '../../models/todo';
import {Output} from 'angular2/core';
import {EventEmitter} from 'angular2/core';

@Component({
  selector : 'todo',
  templateUrl : './app/views/todo.html'
})

export class TodoComponent {
  @Input() todo:Todo;
  @Output() statusChanged:any = new EventEmitter<any>();

  toggleDone() {
    this.todo.toggleDone();
    this.statusChanged.emit(null);
  }
}
