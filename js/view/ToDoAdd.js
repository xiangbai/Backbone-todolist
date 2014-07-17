/**
 * Created by wang on 2014/7/14.
 */
var ToDoAdd = Backbone.View.extend({
  events: {
    'keydown':'input_keyDownHandler',  //回车所触发的事件
    'submit':'submitHandler'    //提交事件
  },
  //将数据添加到数据集合中
  input_keyDownHandler:function(event){
    if(event.keyCode === 13 && event.target.value !== ''){   //当事件触发的时候，并且input不为空时，触发的事件
      this.collection.add({  //将内容添加到数据集合中
        title : event.target.value  //赋值操作
      });
      event.target.value= '';
    }
  },
  submitHandler:function(event){
    event.preventDefault();   //防止事件的发生
  }

});