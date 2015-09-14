(function() {
    'use strict';
    angular.module('sindicato')
    .directive('breadCrum', BreadCrum);

    function BreadCrum() {
      return {
        restrict: 'E',
        templateUrl: '/sindicato-farmacias-sf/wordpress/wp-content/themes/sindicato/app/directives/breadcrum/breadcrum.directive.html',
        controller: BreadCrumCtrl,
        controllerAs: 'ciVm',
        scope: {
          // data to be pass from the scope will be defined here
        },
        bindToController: true
      };
    }

    BreadCrumCtrl.$inject = ['$scope'];
    // @ngInject
    function BreadCrumCtrl($scope) {
      //logic for the simulador will be placed here
    }
})();
