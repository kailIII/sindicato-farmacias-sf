(function() {
    'use strict';
    angular.module('sindicato')
    .directive('navBar', NavBar);

    function NavBar() {
      return {
        restrict: 'E',
        templateUrl: '/sindicato-farmacias-sf/wordpress/wp-content/themes/sindicato/app/directives/nav-bar/nav-bar.directive.html',
        controller: NavBarCtrl,
        controllerAs: 'ciVm',
        scope: {
          navigationLinks: '='
        },
        bindToController: true
      };
    }

    NavBarCtrl.$inject = ['$scope'];
    // @ngInject
    function NavBarCtrl($scope) {
      
    }
})();
