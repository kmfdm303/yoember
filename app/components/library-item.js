import Ember from 'ember';

export default Ember.Component.extend({
	isBooksShowing: false,

	actions: {
		booksShow: function() {
			this.set("isBooksShowing", true);
		},
		booksHide: function() {
			this.set("isBooksShowing", false);
		}
	}
});
