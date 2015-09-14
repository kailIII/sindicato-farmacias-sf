(function() {
    'use strict';

    angular
        .module('sindicato')
        .config(configuration);

    /* @ngInject */
    function configuration($routeProvider, $locationProvider) {
      // enable html5Mode for pushstate ('#'-less URLs)
      $locationProvider.html5Mode(true);

      $routeProvider
        .when('/', {
          templateUrl: '/sindicato-farmacias-sf/wordpress/wp-content/themes/sindicato/templates/main.html',
          controller: 'sindicatoController'
        })
        .when('/demo', {
          templateUrl: '/sindicato-farmacias-sf/wordpress/wp-content/themes/sindicato/templates/demo.html',
          controller: 'sindicatoController'
        })
        .when('/:slug', {
          templateUrl: '/sindicato-farmacias-sf/wordpress/wp-content/themes/sindicato/templates/posts.html',
          controller: 'Slug'
        });
    }
})();
