import {Component, OnInit} from 'angular2/core';

@Component({
  templateUrl : './app/views/about.html'
})

export class AboutComponent implements OnInit {
  ngOnInit() {
    console.log('about page initialized');
  }
}
