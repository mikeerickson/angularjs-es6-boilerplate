# AngularJS ES6 Boilerplate

## Introduction

AngularJS ES6 Boilerplate contains all the tooling required to get up and running quickly using ES6 with AngularJS.  
  
This package uses Babel 6 to generate bundle.  
  
  

### Babel

Requires Babel 6.x or greater

## Examples

There a few examples supplied which will help you get started.  More examples will be added as this package evolves.  If you need assistance with something specific, please let us know by adding an issue (issue link here)

### Directive

```js
export default class NiceDirective {
  static $inject = ['$http'];

  constructor($http) {
    this.$http = $http;

    this.template = '<div>{{computeName('NICE')}}</div>';
    this.restrict = 'E';
    this.scope = {
      name: '=',
    };
  }

  link(scope) {
    this.scope = scope;
    scope.computeName = (suffix) => this.computeName(suffix);
  }

  computeName(suffix = '') {
    const { $http, scope } = this;

    return 'Mr.' + scope.name + ' ' +  suffix;
  }
}

```


### Controller

```js
export default class MainController {
  static $inject = ['$scope', '$http'];

  constructor($scope, $http) {
    this.$http = $http;

    $scope.doThis = () => this.doThis();
  }

  doThis() {
    const { $http } = this;
    ...
  }
}

```

### Class Inject

As you can see in the examples above. You need to store injected objects somehow.
There is a better solution. You can extend your class with class named Inject and then you can use variable named this.$inject.

In next example is called function doThis from the constructor.
You can use this.$inject because this object was initialized by Inject constructor.

Do not forget to use (...args). Inject class need to get all injected objects.

```js
import { Inject } from 'angular-es6';

export default class MainController extends Inject {
  static $inject = ['$http'];

  constructor(...args) {
    super(...args);

    this.doThis();
  }

  doThis() {
    const { $http } = this.$inject;
  }
}

```

### Directive Injection

You can use variables from the link function anywhere in your directive code.
This feature is available without extending Inject class. Here is small example

```js
export default class NiceDirective {
  static $inject = ['$http'];

  constructor($http) {
    this.$http = $http;

    this.template = '<div>{{computeName('NICE')}}</div>';
    this.restrict = 'E';
    this.scope = {
      name: '=',
    };
  }

  link(scope) {
    scope.computeName = (suffix) => this.computeName(suffix);
  }

  computeName(suffix = '') {
    const { scope, element } = this.link.$inject;

    element.text('Mr.' + scope.name + ' ' +  suffix);
  }
}

```


### Auto load directives

Each directory need to have file index.js with content like this:

```js
import { load } from 'angular-es6';
const MODULE_NAME = 'directives';

load.directives(require.context('./', true, /.*\.js$/));
export default MODULE_NAME;
```


More examples you can find in the example directory.
  

## Run build for production

```sh
npm run build
```


## Run build for development

```sh
npm run dev
```

### License

Copyright (c) 2016 Mike Erickson
Released under the MIT license

## Credits

angularjs-es6-boilerplate written by Mike Erickson

Issues: [https://github.com/mikeerickson/angularjs-es6-boilerplate/issues](https://github.com/mikeerickson/angularjs-es6-boilerplate/issues)

E-Mail: [codedungeon@gmail.com](mailto:codedungeon@gmail.com)

Twitter: [@codedungeon](http://twitter.com/codedungeon)

Website: [codedungeon.org](http://codedungeon.org)

