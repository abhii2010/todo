angular.module("todoApp",[])
    .controller("MainCtrl",['$scope','TodoService',function($scope,TodoService){

      $scope.todos = TodoService.todos;

      $scope.add=function(){
        console.log($scope.newTodo);
        TodoService.add($scope.newTodo);
        $scope.newTodo={};
      }

      $scope.delete=function(item){
        TodoService.delete(item);
      }

      $scope.clearCompleted=function(){
        TodoService.clearCompleted();
      }
    }])
    .service("TodoService",[function(){
      return {
        todos:[],
        add:function(todo){
          this.todos.push(todo);
        },
        delete:function(todo){
          this.todos.splice(this.todos.indexOf(todo),1);
        },
        clearCompleted:function(){
          for(var index=this.todos.length-1;index>=0;index--){
            if(this.todos[index].completed===true){
              this.todos.splice(this.todos.indexOf(this.todos[index]),1);
            }
          }
        }
      };
    }]);
