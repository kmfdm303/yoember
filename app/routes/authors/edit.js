import Ember from 'ember';

export default Ember.Route.extend({
	model: function(params) {
		return this.store.findRecord('author', params.author_id);
	},

	setupController: function(controller, model) {
		this._super(controller, model);

		controller.set('title', 'Edit author');
		controller.set('buttonLabel', 'Save changes');
	},

	renderTemplate(controller, model) {
		this.render('authors/form');
	},

	actions: {
		saveAuthor: function(newAuthor) {
			var self=this;
			newAuthor.save().then(function(response) {
				self.transitionTo('authors');
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
