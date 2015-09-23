(function() {
    'use strict';
    angular.module('sindicato')
    .directive('navBar', NavBar);

    function NavBar() {
      return {
        restrict: 'E',
        templateUrl: '/atfsf.org/haberes/wordpress/wp-content/themes/sindicato/app/directives/nav-bar/nav-bar.directive.html',
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
            'home': [
                {
                    'link': 'Home',
                    'href': '/'
                }
            ],
            'institucional': [
                {
                    'link': 'Simulador',
                    'href': '/atfsf.org/haberes/wordpress/simulador'
                },
                {
                    'link': 'Personeria Gremial',
                    'href': '/atfsf.org/haberes/wordpress/personeria-gremial'
                },
                {
                    'link': 'Comision Directiva',
                    'href': '/atfsf.org/haberes/wordpress/comision-directiva'
                },
                {
                    'link': 'Estatuto',
                    'href': '/atfsf.org/haberes/wordpress/estatuto'
                }
            ],
            'escala-salarial': [
                {
                    'link': 'Escala Salarial',
                    'href': '/atfsf.org/haberes/wordpress/escala-salarial'
                },
                {
                    'link': 'Enero 2015',
                    'href': '/atfsf.org/haberes/wordpress/enero-2015'
                },
            ],
            'noticias': [
                {
                    'link': 'Noticias',
                    'href': '/atfsf.org/haberes/wordpress/noticias'
                }
            ],
            'prensa': [
                {
                    'link': 'Prensa y Difusion',
                    'href': '/atfsf.org/haberes/wordpress/prensa-y-difusion'
                }
            ],
            'capacitacion': [
                {
                    'link': 'Capacitacion',
                    'href': '/atfsf.org/haberes/wordpress/capacitacion'
                }
            ],
            'contacto': [
                {
                    'link': 'Contacto',
                    'href': '/atfsf.org/haberes/wordpress/contacto'
                }
            ]
        };
    }
})();
