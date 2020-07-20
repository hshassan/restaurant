(function () {
    "use strict";

    angular.module('common')
        .service('MenuService', MenuService);


    MenuService.$inject = ['$http'];
    function MenuService($http) {
        var service = this;

        service.getCategories = function () {
            return $http.get('../../data/categories.json').then(function (response) {
                return response.data;
            });
        };


        service.getMenuItems = function (category) {
            var config = {};
            if (category) {
                config.params = {'category': category};
            }

            return $http.get('../../data/menu_items'+config.params.category+'.json' ).then(function (response) {
                return response.data;
            });
        };

    }



})();