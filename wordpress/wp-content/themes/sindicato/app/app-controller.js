(function() {

    'use strict';

    angular
        .module('sindicato')
        .controller('sindicatoController', sindicatoController);

        /* @ngInject */
        sindicatoController.$inject = ['$scope'];

        function sindicatoController($scope) {
          console.log('inicio correcto');
        }
})();
