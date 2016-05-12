///<reference path="../node_modules/angular2/typings/browser.d.ts"/>

import {bootstrap} from 'angular2/platform/browser';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';
import {HashLocationStrategy, LocationStrategy} from 'angular2/platform/common';
import {AppComponent} from './components/app.component';
import {provide} from 'angular2/core';

bootstrap(AppComponent, [
  ROUTER_PROVIDERS,
  HTTP_PROVIDERS,
  provide(LocationStrategy, {useClass : HashLocationStrategy})
]);
