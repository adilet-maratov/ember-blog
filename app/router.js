import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('blogs', function() {
    this.route('new', {path: '/new'});

    this.resource('blog', {path: '/:blog_id'}, function() {
      this.route('details', {path: '/details'});
      this.route('edit', {path: '/edit'});
      this.route('delete', {path: '/delete'});

      this.resource('posts', function() {
        this.route('new', {path: '/new'});

        this.resource('post', {path: '/:post_id'}, function() {
          this.route('details', {path: '/details'});
          this.route('edit', {path: '/edit'});
          this.route('delete', {path: '/delete'});
        });
      });
    });
  })
});

export default Router;
