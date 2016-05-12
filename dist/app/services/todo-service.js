System.register(['angular2/core', '../models/todo', 'angular2/http'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, todo_1, http_1;
    var TodoService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (todo_1_1) {
                todo_1 = todo_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            TodoService = (function () {
                // private todos:Array<Todo> = [
                //   new Todo('Todo number 1', false),
                //   new Todo('Todo number 2', false),
                //   new Todo('Todo number 3', false)
                // ];
                function TodoService(http) {
                    this.http = http;
                    console.log('Todo Service Created.', http);
                }
                TodoService.prototype.getTodos = function () {
                    return this.http.get('http://localhost/todo')
                        .map(function (responseData) {
                        return responseData.json();
                    })
                        .map(function (todos) {
                        var result = [];
                        if (todos) {
                            todos.forEach(function (todo) {
                                result.push(new todo_1.Todo(todo.id, todo.description, todo.priority, todo.dueDate, todo.complete));
                            });
                        }
                        return result;
                    });
                };
                TodoService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], TodoService);
                return TodoService;
            }());
            exports_1("TodoService", TodoService);
        }
    }
});

//# sourceMappingURL=todo-service.js.map
