import Ember from 'ember';

export default Ember.Route.extend({
	// Redirects to one route to another.
	// beforeModel(){
	// 	this.transitionTo('teachers');
	// },
	model(){
		return [1,2,3,4,5,6,7,8,9];
	},
	afterModel(){
		return this.transitionTo('teachers');
	}
});
