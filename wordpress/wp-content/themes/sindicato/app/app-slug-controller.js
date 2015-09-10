(function() {

    'use strict';

    angular
        .module('sindicato')
        .controller('Slug', slugController);

        /* @ngInject */
        slugController.$inject = ['$scope', '$http', '$routeParams'];

        function slugController($scope, $http, $routeParams) {
          $http.get(
              '/sindicato-farmacias-sf/wordpress/api/get_post/?slug=' + $routeParams.slug)
              .success(function(res) {
                $scope.post = res.post;
          });
        }
})();
