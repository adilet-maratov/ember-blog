import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),
  author: DS.belongsTo('author', {async: true}),
  posts: DS.hasMany('post', {async: true})
});
