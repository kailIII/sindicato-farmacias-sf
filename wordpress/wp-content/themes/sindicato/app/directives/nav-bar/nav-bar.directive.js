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
        scope: {},
        bindToController: true
      };
    }

    NavBarCtrl.$inject = ['$scope'];
    // @ngInject
    function NavBarCtrl($scope) {
        $scope.navigationLinks = {
            'institucional': [
                {
                    'link': 'test-url',
                    'href': '/sindicato-farmacias-sf/wordpress/test-url'
                },
                {
                    'link': 'test-url-2',
                    'href': '/sindicato-farmacias-sf/wordpress/test-url-2'
                }
            ],
            'simulador': [
                {
                    'link': 'simulador',
                    'href': '/sindicato-farmacias-sf/wordpress/simulador'
                },
            ],
            'demo': [
                {
                    'link': 'demo',
                    'href': '/sindicato-farmacias-sf/wordpress/demo'
                },
            ]
        };
    }
})();
