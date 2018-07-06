import angular from 'angular';

import 'angular-animate';
import 'angular-aria';
import 'angular-material';

import AppController from './AppController';
import Products from './products/Products';

export default angular.module('key-management-app', ['ngMaterial', Products.name])
    .constant('csrfToken', document.head.querySelector('meta[name="csrf-token"]'))
    .run(['$http', $http => {
        let token = document.head.querySelector('meta[name="csrf-token"]');
        if (token) {
            $http.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
        } else {
            console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
        }
    }])
    .controller('AppController', AppController);
