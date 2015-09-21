(function() {
    'use strict';
    angular.module('sindicato')
    .directive('cartilla', Cartilla);

    function Cartilla() {
      return {
        restrict: 'E',
        templateUrl: '/sindicato-farmacias-sf/wordpress/wp-content/themes/sindicato/app/directives/cartilla/cartilla.directive.html',
        controller: CartillaCtrl,
        controllerAs: 'ciVm',
        scope: {},
        bindToController: true
      };
    }

    CartillaCtrl.$inject = ['$scope'];
    // @ngInject
    function CartillaCtrl($scope) {
        
    }
})();
