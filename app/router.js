import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
    location: config.locationType
});

Router.map(function() {
  this.route('about');
  this.route('contact');

  this.route('admin', function() {
      this.route('invitations');
      this.route('contacts');
      this.route('seeder');
  });

  this.route('libraries', function() {
      this.route('new');
      this.route('edit', {path: '/:library_id/edit'});
  });

  this.route('authors', function() {
      this.route('new');
      this.route('edit', {path: '/:author_id/edit'});
  });

  this.route('books', function() {
    this.route('new');
    this.route('edit', {path: '/:book_id/edit'});
  });
});

export default Router;
