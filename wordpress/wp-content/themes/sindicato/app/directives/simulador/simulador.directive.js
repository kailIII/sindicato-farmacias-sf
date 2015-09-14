(function() {
    'use strict';
    angular.module('sindicato')
    .directive('simulador', Simulador);

    function Simulador() {
      return {
        restrict: 'E',
        templateUrl: '/sindicato-farmacias-sf/wordpress/wp-content/themes/sindicato/app/directives/simulador/simulador.directive.html',
        controller: SimuladorCtrl,
        controllerAs: 'ciVm',
        scope: {
          // data to be pass from the scope will be defined here
        },
        bindToController: true
      };
    }

    SimuladorCtrl.$inject = ['$scope'];
    // @ngInject
    function SimuladorCtrl($scope) {
      //logic for the simulador will be placed here
    }
})();
