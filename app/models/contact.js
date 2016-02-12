import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
	emailAddress: DS.attr('string'),
	message: DS.attr('string'),
	isValidEmail: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
	isValidMessage: Ember.computed.gte('message.length', 5),
	isValid: Ember.computed.and('isValidEmail','isValidMessage'),
});
