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
          templateUrl: '/atfsf.org/haberes/wordpress/wp-content/themes/sindicato/templates/main.html',
          controller: 'sindicatoController'
        })
        .when('/demo', {
          templateUrl: '/atfsf.org/haberes/wordpress/wp-content/themes/sindicato/templates/demo.html',
          controller: 'sindicatoController'
        })
        .when('/simulador', {
          templateUrl: '/atfsf.org/haberes/wordpress/wp-content/themes/sindicato/templates/simulador.html',
          controller: 'sindicatoController'
        })
        .when('/bono', {
          templateUrl: '/atfsf.org/haberes/wordpress/wp-content/themes/sindicato/templates/bonos.html',
          controller: 'sindicatoController'
        })
        .when('/:slug', {
          templateUrl: '/atfsf.org/haberes/wordpress/wp-content/themes/sindicato/templates/posts.html',
          controller: 'Slug'
        });
    }
})();
