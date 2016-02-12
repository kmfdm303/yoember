import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
		return this.store.createRecord('author');
	},

	setupController: function(controller, model) {
		this._super(controller, model);

		controller.set('title', 'Create a new Author');
		controller.set('buttonLabel', 'Create');
	},

	renderTemplate(controller, model) {
		this.render('authors/form');
	},

	actions: {
		saveAuthor: function(newAuthor) {
			var self = this;
			newAuthor.save().then(function(response) {
				self.transitionTo('authors');
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