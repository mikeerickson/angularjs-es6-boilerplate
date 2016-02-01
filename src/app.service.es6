
class UserService {
	constructor($http) {
		console.log('userService constructor')
	}

	getDaddy() {
		return 'Mr Mike Erickson'
	}

	getDogs() {
		return ['Shilo','Honu','Gunner']
	}
}

UserService.$inject = ['$http'];

angular.module('ng-es6').service('userService', UserService);