/**
 * Created by wang on 2014/7/17.
 */
var ToDoAmount = Backbone.View.extend({
  initialize:function(){
    this.template=Handlebars.compile(this.$('script').remove().html());
    this.collection.on('add change', this.collection_changeHandler, this);
    this.render();
  },
  render:function(){
    var total = this.collection.length
      , completed=this.collection.filter(function(model){
        return model.get('status');
      }).length;
    this.$el.text(this.template({
      total:total,
      completed:completed
    }));
  },
  //传递参数的规则，渲染的作用体现在哪里？
  collection_changeHandler:function(collection){
    this.render();
  }
});