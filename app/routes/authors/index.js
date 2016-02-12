import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
		return this.store.findAll('author');
	},

	actions: {
		deleteAuthor: function(author) {
			var confirmation = confirm("Are you sure?");

			if(confirmation) {
				author.destroyRecord();
			}
		}
	}
});