
class Erickson {
	constructor() {
		this.surname = 'Erickson'
		console.log('userService factory')
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

angular.module('ng-es6').service('ericksonFactory', Erickson);
