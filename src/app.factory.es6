// TODO: This is not working, reference this post for details
// TODO: http://www.michaelbromley.co.uk/blog/350/exploring-es6-classes-in-angularjs-1-x

class Erickson {
	constructor() {
		this.surname = 'Erickson'
		console.log('Erickson factory')
	}

	getSurname() {
		return this.surname;
	}

	getDaddy() {
		return 'Mr Mike Erickson'
	}

	getMommy() {
		return 'Mrs Kira Erickson'
	}

	getParents() {
		return ['Mike','Kira']
	}

	getDogs() {
		return ['Shilo','Honu','Gunner']
	}

	getKids() {
		return ['Joelle (Nate)', 'Brady (Bella)','Bailey (Payton)','Trevor (Mayzee)']
	}

	getGrandkids() {
		return ['Alaya','Aseria']
	}
}

Erickson.$inject = [];

angular.module('ng-es6').factory('ericksonFactory', Erickson);
