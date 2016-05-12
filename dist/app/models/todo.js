System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Todo;
    return {
        setters:[],
        execute: function() {
            Todo = (function () {
                function Todo(name, done) {
                    this.name = name;
                    this.done = done;
                }
                Todo.prototype.toggleDone = function () {
                    this.done = !this.done;
                };
                return Todo;
            }());
            exports_1("Todo", Todo);
        }
    }
});

//# sourceMappingURL=todo.js.map
