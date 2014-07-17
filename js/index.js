
/**
 * Created by wang on 2014/7/14.
 */
$(function () {
  var todos = new ToDos()
    , add = new ToDoAdd({ //进行初始化
      el: 'form',
      collection: todos
    })
    , list = new ToDoList({
      el: 'ul',
      collection: todos
    })
    , amount = new ToDoAmount({
      el:'#amount',
      collection:todos
    });
});