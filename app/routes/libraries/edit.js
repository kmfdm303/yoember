import Ember from 'ember';

export default Ember.Route.extend({
	model: function(params) {
		return this.store.findRecord('library', params.library_id);
	},

	setupController: function(controller, model) {
		this._super(controller, model);

		controller.set('title', 'Edit library');
		controller.set('buttonLabel', 'Save changes');
	},

	renderTemplate(controller, model) {
		this.render('libraries/form');
	},

	actions: {
		saveLibrary: function(newLibrary) {
			var self=this;
			newLibrary.save().then(function(response) {
				self.transitionTo('libraries');
			});
		},
		willTransition: function(transition) {
			var model=this.controller.get('model');

			if(model.get('hasDirtyAttributes')) {
				var confirmation = confirm("Your change haven't been saved yet. Discard Changes?");

				if(confirmation) {
					model.rollbackAttributes();
				} else {
					transition.abort();
				}
			}
		}
	}
});
