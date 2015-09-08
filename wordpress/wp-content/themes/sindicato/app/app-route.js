(function() {
    'use strict';

    angular
        .module('sindicato')
        .config(configuration);

    /* @ngInject */
    function configuration($routeProvider, $locationProvider) {
      $routeProvider
        .when('/', {
          templateUrl: '/sindicato-farmacias-sf/wordpress/wp-content/themes/sindicato/templates/main.html',
          controller: 'sindicatoController'
        })
        .when('/demo', {
          templateUrl: '/sindicato-farmacias-sf/wordpress/wp-content/themes/sindicato/templates/demo.html',
          controller: 'sindicatoController'
        });
    }
})();
