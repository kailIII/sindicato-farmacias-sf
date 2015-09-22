(function() {
    'use strict';
    angular.module('sindicato')
    .directive('simulador', Simulador);

    function Simulador() {
      return {
        restrict: 'E',
        templateUrl: '/atfsf.org/haberes/wordpress/wp-content/themes/sindicato/app/directives/simulador/simulador.directive.html',
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
      $scope.formData = {
        antiguedad: null,
        periodo: null,
        categoria: null,
        extras50: null,
        extras100: null,
        nocturnas: null,
        futurosAumentos: null,
        presentismo: null,
        asistencia: null,
        comisiones: null,
        otrosRemunerativos: null
      }

      var vm = this;
      vm.antiguedadOpt = {
        'meses': [
          {
            'year': '1 mes',
            'value': 1
          },
          {
            'year': '2 meses',
            'value': 2
          },
          {
            'year': '3 meses',
            'value': 3
          },
          {
            'year': '4 meses',
            'value': 4
          },
          {
            'year': '5 meses',
            'value': 5
          },
          {
            'year': '6 meses',
            'value': 6
          },
          {
            'year': '7 meses',
            'value': 7
          },
          {
            'year': '8 meses',
            'value': 8
          },
          {
            'year': '9 meses',
            'value': 8
          }
        ]
      };
      vm.periodosOpt = {
        'meses': [
          {
            'year': '1 mes',
            'value': 1
          },
          {
            'year': '2 meses',
            'value': 2
          },
          {
            'year': '3 meses',
            'value': 3
          },
          {
            'year': '4 meses',
            'value': 4
          },
          {
            'year': '5 meses',
            'value': 5
          },
          {
            'year': '6 meses',
            'value': 6
          },
          {
            'year': '7 meses',
            'value': 7
          },
          {
            'year': '8 meses',
            'value': 8
          },
          {
            'year': '9 meses',
            'value': 8
          }
        ]
      };
      vm.categoria = {
        'tipo': [
          {
            'categoria': 'Inicial A',
            'value': 1
          },
          {
            'categoria': 'Inicial B',
            'value': 2
          },
          {
            'categoria': 'Cajero, Perfumeria, Administrativo',
            'value': 3
          },
          {
            'categoria': 'Empleado de Farmacia',
            'value': 4
          },
          {
            'categoria': 'Empleado Especializado de Farmacia',
            'value': 5
          },
          {
            'categoria': 'Farmaceutico Director Tecnico',
            'value': 6
          },
          {
            'categoria': 'Farmaceutico Auxiliar con bloqueo de Titulo',
            'value': 7
          },
          {
            'categoria': 'Farmaceutico Auxiliar sin bloqueo de Titulo',
            'value': 8
          }
        ]
      };

      $scope.processForm = function() {
        console.log($scope.formData);
      }
    }
})();
