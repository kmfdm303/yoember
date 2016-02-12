import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
		return this.store.createRecord('library');
	},

	setupController: function(controller, model) {
		this._super(controller, model);

		controller.set('title', 'Create a new Library');
		controller.set('buttonLabel', 'Create');
	},

	renderTemplate(controller, model) {
		this.render('libraries/form');
	},

	actions: {
		saveLibrary: function(newLibrary) {
			var self = this;
			newLibrary.save().then(function(response) {
				self.transitionTo('libraries');
			});
		},
		willTransition: function(transition) {
			var model = this.controller.get('model');
			if(model.get('isNew')) {
				model.destroyRecord();
			}
		}
	}
});