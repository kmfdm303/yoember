import DS from 'ember-data';
import Faker from 'faker';

export default DS.Model.extend({
	title: DS.attr('string'),
	releaseYear: DS.attr('number'),
	library: DS.belongsTo('library', {inverse: 'books', async: true}),
	author: DS.belongsTo('author', {inverse: 'books', async: true}),

	isValidTitle: Ember.computed.notEmpty('title'),
	isValidReleaseYear: Ember.computed.gte('releaseYear', 1900),
	isValidLibrary: Ember.computed.notEmpty('library'),
	isValid: Ember.computed.and('isValidTitle','isValidReleaseYear', 'isValidLibrary'),

	randomize(author, library) {
		this.set('title', this._bookTitle());
		this.set('author', author);
		this.set('releaseYear', this._randomYear());
		this.set('library', library);

		return this;
	},

	_bookTitle() {
		return `${Faker.commerce.productName()} Cookbook`;
	},

	_randomYear() {
		return this._getRandomArbitrary(1900, 2015);
	},

	_getRandomArbitrary(min, max) {
		return Math.floor(Math.random() * (max - min) + min);
	}
});
