(function() {
    'use strict';
    angular.module('sindicato')
    .directive('rightSide', RightSide);

    function RightSide() {
      return {
        restrict: 'E',
        templateUrl: '/sindicato-farmacias-sf/wordpress/wp-content/themes/sindicato/app/directives/right-side/right-side.directive.html',
        controller: RightSideCtrl,
        controllerAs: 'ciVm',
        scope: {
          navigationLinks: '='
        },
        bindToController: true
      };
    }

    RightSideCtrl.$inject = ['$scope'];
    // @ngInject
    function RightSideCtrl($scope) {
      $scope.bonosForm = function() {

      };
    }
})();
