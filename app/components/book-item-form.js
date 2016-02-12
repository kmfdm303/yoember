import Ember from 'ember';

export default Ember.Component.extend({
	buttonLabel: 'Save',
	libraries: [],
	store: Ember.inject.service(),

	pullLibraries: Ember.on('didInsertElement', function() {
		var self=this;
		
		this.get('store').findAll('library').then((libraries) => {
			self.set('libraries', libraries);
		});
	}),

	actions: {
		buttonClicked: function(param) {
			this.sendAction('action', param);
		},
		libraryChanged: function(param) {
			//console.log(this.item.get('library').get('name'));
			console.log(param);
			this.item.set('library', param);
		}
	}
});
