import {Component, OnInit} from '@angular/core';
import {RouteConfig, RouterLink, ROUTER_DIRECTIVES} from '@angular/router-deprecated';

@Component({
  selector : 'app',
  templateUrl : './app/app.html',
  directives : []
})
@RouteConfig([
])

export class AppComponent implements OnInit {
  ngOnInit() {
    console.log('Application component initialized...');
  }
}
