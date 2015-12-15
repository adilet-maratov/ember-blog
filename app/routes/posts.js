import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('post');
  },

  actions: {
    createPost() {
      var controller = this.get('controller');

      var title = controller.get('title');
      var body = controller.get('body');
      var date = controller.get('date');

      var post = this.store.createRecord("post", {
        "title": title,
        "body": body,
        "date": date
      });

      post.save();

      controller.set('title');
      controller.set('body');
      controller.set('date');
    },

    deletePost(post) {
      post.destroyRecord();
    }

  }
});
