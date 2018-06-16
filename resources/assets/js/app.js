import angular from 'angular';

import 'angular-animate';
import 'angular-aria';
import 'angular-material';

import AppController from './AppController';
import Products from './products/Products';

export default angular.module('key-management-app', ['ngMaterial', Products.name])
    .constant('csrfToken', document.head.querySelector('meta[name="csrf-token"]'))
    .config(['$mdIconProvider', '$mdThemingProvider', ($mdIconProvider, $mdThemingProvider) => {
        // Register the user `avatar` icons
        // $mdIconProvider
        //   .defaultIconSet("./assets/svg/avatars.svg", 128)
        //   .icon("menu", "./assets/svg/menu.svg", 24)
        //   .icon("share", "./assets/svg/share.svg", 24)
        //   .icon("google_plus", "./assets/svg/google_plus.svg", 24)
        //   .icon("hangouts", "./assets/svg/hangouts.svg", 24)
        //   .icon("twitter", "./assets/svg/twitter.svg", 24)
        //   .icon("phone", "./assets/svg/phone.svg", 24);

        // $mdThemingProvider.theme('default')
        //   .primaryPalette('brown')
        //   .accentPalette('red');
    }])
    .run(['$http', $http => {
        let token = document.head.querySelector('meta[name="csrf-token"]');
        if (token) {
            $http.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
        } else {
            console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
        }
    }])
    .controller('AppController', AppController);
