'use strict';

class AppController {

	constructor(userService) {
		this.userService = userService

		console.log('hello world from AppController constructor');
		this.model = {
			name: "",
			power: ""
		};

		this.init()

		this.add({name: 'Mike Erickson', power: 'Super Coder'})
		this.add({name: 'Kira Erickson', power: 'Super Stylist'})

		this.writeToConsole()
	}

	init() {
		console.log('daddy', this.userService.getDaddy())
		console.log('dogs', this.userService.getDogs())
		this.heros = []
	}

	reset() {
		this.heros = [];
	};

	writeToConsole() {
		this.heros.forEach(function(hero) { console.log(hero.name + ' is a super hero with the power of ' + hero.power); })
	};

	add(hero) {
		this.heros.push(hero);
		this.model = {
			name: "",
			power: ""
		}
	};

	removeHero(index) {
		this.heros.splice(index, 1);
	}
}

AppController.$inject = ['userService']

angular.module('ng-es6')
	.controller('AppController', AppController);


