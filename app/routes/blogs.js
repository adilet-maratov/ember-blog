import Ember from 'ember';

var blogs = [
  {
    id: 1,
    name: "Awesome blog",
    description: "Awesome description for awesome blog",
    author: 1,
    posts: [1, 2]
  },
  {
    id: 2,
    name: "Second Awesome blog",
    description: "Second Awesome description for second awesome blog",
    author: 2,
    posts: [3, 4]
  }
];

export default Ember.Route.extend({
  model() {
    return blogs
  }
});
