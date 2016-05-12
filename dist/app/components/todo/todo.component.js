System.register(['angular2/core', '../../models/todo'], function(exports_1, context_1) {
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
    var core_1, core_2, todo_1, core_3, core_4;
    var TodoComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
                core_3 = core_1_1;
                core_4 = core_1_1;
            },
            function (todo_1_1) {
                todo_1 = todo_1_1;
            }],
        execute: function() {
            TodoComponent = (function () {
                function TodoComponent() {
                    this.statusChanged = new core_4.EventEmitter();
                }
                TodoComponent.prototype.toggleDone = function () {
                    this.todo.toggleDone();
                    this.statusChanged.emit(null);
                };
                __decorate([
                    core_2.Input(), 
                    __metadata('design:type', todo_1.Todo)
                ], TodoComponent.prototype, "todo", void 0);
                __decorate([
                    core_3.Output(), 
                    __metadata('design:type', Object)
                ], TodoComponent.prototype, "statusChanged", void 0);
                TodoComponent = __decorate([
                    core_1.Component({
                        selector: 'todo',
                        templateUrl: './app/views/todo.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], TodoComponent);
                return TodoComponent;
            }());
            exports_1("TodoComponent", TodoComponent);
        }
    }
});

//# sourceMappingURL=todo.component.js.map
