
class UserService {
	constructor($http) {
		this.surname = 'Erickson'
		console.log('userService constructor')
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

UserService.$inject = ['$http'];

angular.module('ng-es6').service('userService', UserService);
