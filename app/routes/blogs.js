import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('blog');
  },

  actions: {
    createBlog: function() {
      var controller = this.get('controller');

      var author = controller.get('authorName');
      var title = controller.get('title');
      var description = controller.get('description');

      var blog = this.store.createRecord("blog", {
        "author": author,
        "name": title,
        "description": description
      });

      blog.save();

      controller.set('authorName');
      controller.set('title');
      controller.set('description');
    },

    editBlog: function(blog) {
      blog.save();
    },

    deleteBlog: function(blog) {
      blog.destroyRecord();
    }

  }
});
