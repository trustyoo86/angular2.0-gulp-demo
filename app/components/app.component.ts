import {Component, OnInit} from 'angular2/core';
import {RouteConfig, RouterLink, ROUTER_DIRECTIVES} from 'angular2/router';

import {AboutComponent} from './about/about.component';
import {TodoListComponent} from './todo/todo-list.component';

@Component({
  selector : 'app',
  templateUrl : './app/views/app.html',
  directives : [AboutComponent, TodoListComponent, RouterLink, ROUTER_DIRECTIVES]
})

@RouteConfig([
  {path : '/about', component : AboutComponent, as : 'About'},
  {path : '/todos', component : TodoListComponent, as : 'TodoList'}
])

export class AppComponent implements OnInit {
  ngOnInit() {
    console.log('Application component initialized..!!');
  }
}
