(function() {

    'use strict';

    angular
        .module('sindicato')
        .controller('sindicatoController', sindicatoController);

        /* @ngInject */
        sindicatoController.$inject = ['$scope', '$http', '$routeParams'];

        function sindicatoController($scope, $http, $routeParams) {
          $http.get('/atfsf.org/haberes/wordpress/api/get_posts').success(function(res) {
            $scope.postss = res.posts;
          });
        }
})();
