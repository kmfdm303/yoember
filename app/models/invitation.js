import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
	emailAddress: DS.attr('string'),
	isValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
});
