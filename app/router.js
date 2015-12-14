import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('blogs', function() {
    this.route('new', {path: '/new'});

    this.route('blog', {path: '/:blog_id'}, function() {
      this.route('edit', {path: '/edit'});
      this.route('delete', {path: '/delete'});

      this.route('posts', function() {
        this.route('new', {path: '/new'});

        this.route('post', {path: '/:post_id'}, function() {
          this.route('edit', {path: '/edit'});
          this.route('delete', {path: '/delete'});
        });
      });
    });
  });
});

export default Router;
