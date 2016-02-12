import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
		return this.store.createRecord('invitation');
	},

	actions: {
		saveInvitation: function(newInvitation) {
			var self = this;
			newInvitation.save().then(function(response) {
				self.controller.set('responseMessage', true);
			});
		},
		willTransition: function(transition) {
			var model = this.controller.get('model');
			if(model.get('isNew')) {
				model.destroyRecord();
			}
			this.controller.set('responseMessage', false);
		}
	}
});