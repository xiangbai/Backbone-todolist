/**
 * Created by wang on 2014/7/14.
 */
var ToDos = Backbone.Collection.extend({
  KEY: 'todo',
  initialize:function(){
    var store = localStorage.getItem(this.KEY);
    if(store){
      this.set(JSON.parse(store));
    }
    this.on('add remove change', this.changeHandler, this);
  },
  changeHandler:function(){
    var data = JSON.stringify(this.toJSON());
    localStorage.setItem(this.KEY, data);
  }
});