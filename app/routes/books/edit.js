import Ember from 'ember';

export default Ember.Route.extend({
	model: function(params) {
		return this.store.findRecord('book', params.book_id)
	},

	setupController: function(controller, model) {
		this._super(controller, model);

		controller.set('title', 'Edit book');
		controller.set('buttonLabel', 'Save changes');
	},

	renderTemplate(controller, model) {
		this.render('books/form');
	},

	actions: {
		saveBook: function(newBook) {
			var self=this;
			newBook.save().then(function(response) {
				self.transitionTo('books');
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
