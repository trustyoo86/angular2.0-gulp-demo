System.register(['angular2/core', '../../services/todo-service'], function(exports_1, context_1) {
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
    var core_1, todo_service_1;
    var TodoListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (todo_service_1_1) {
                todo_service_1 = todo_service_1_1;
            }],
        execute: function() {
            TodoListComponent = (function () {
                function TodoListComponent(todoService) {
                    this.todoService = todoService;
                    this.getTodos();
                }
                TodoListComponent.prototype.getTodos = function () {
                    var _this = this;
                    this.todoService.getTodos()
                        .subscribe(function (res) { return _this.todos = res; });
                };
                TodoListComponent.prototype.toggleComplete = function (comp, todo) {
                    console.log(comp);
                    console.log('toggle complete', todo);
                };
                TodoListComponent.prototype.ngOnInit = function () {
                    console.log('todo list page initialized');
                };
                TodoListComponent = __decorate([
                    core_1.Component({
                        selector: 'TodoList',
                        templateUrl: './app/views/todo-list.html',
                        providers: [todo_service_1.TodoService],
                        bindings: [todo_service_1.TodoService]
                    }), 
                    __metadata('design:paramtypes', [todo_service_1.TodoService])
                ], TodoListComponent);
                return TodoListComponent;
            }());
            exports_1("TodoListComponent", TodoListComponent);
        }
    }
});

//# sourceMappingURL=todo-list.component.js.map
