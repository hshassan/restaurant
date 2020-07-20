(function() {
    "use strict";

    /*
    * App Name: Glasgow Cuisine
    * Developer: Hassan Khaliq
    * Description: The developer has created a web app that will allow the user to
    * view the restaurants services. Including the menu, contact and ordering and booking services.
    * Date: 11/07/2020
    * --------------------------------------------------------------
    * This is the parent module and the public module is its dependency.
    */

    angular.module('restaurant', ['public'])
           .config(config);

    config.$inject = ['$urlRouterProvider'];
    function config($urlRouterProvider) {
        //redirect to home page if other views do no load.
        $urlRouterProvider.otherwise('/');
    }

})();