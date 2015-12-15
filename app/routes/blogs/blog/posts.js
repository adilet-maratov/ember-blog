import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    var blogID = +params.id;
    return this.store.findAll('blog');
  }
});
