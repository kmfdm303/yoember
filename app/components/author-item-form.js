import Ember from 'ember';

export default Ember.Component.extend({
	buttonLabel: 'Save',
	libraries: [],

	actions: {
		buttonClicked: function(param) {
			this.sendAction('action', param);
		}
	}
});

