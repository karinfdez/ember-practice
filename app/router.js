import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('about', function() {
    this.route('location');
    this.route('job');
  });
  this.route('page-not-found',{path: '/*wildcard'});
  this.route('students', {path: '/students/:student_id'});
});

export default Router;
