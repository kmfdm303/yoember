import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
		return this.store.createRecord('book');
	},

	setupController: function(controller, model) {
		this._super(controller, model);

		controller.set('title', 'Create a new Book');
		controller.set('buttonLabel', 'Create');
	},

	renderTemplate(controller, model) {
		this.render('books/form');
	},

	actions: {
		saveBook: function(newBook) {
			var self = this;
			newBook.save().then(function(response) {
				self.transitionTo('books');
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