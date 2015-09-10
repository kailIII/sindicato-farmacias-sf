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
          templateUrl: '/sindicato-farmacias-sf/wordpress/wp-content/themes/sindicato/templates/main.php',
          controller: 'sindicatoController'
        })
        .when('/demo', {
          templateUrl: '/sindicato-farmacias-sf/wordpress/wp-content/themes/sindicato/templates/demo.php',
          controller: 'sindicatoController'
        })
        .when('/:slug', {
          templateUrl: '/sindicato-farmacias-sf/wordpress/wp-content/themes/sindicato/templates/posts.php',
          controller: 'Slug'
        });
    }
})();
