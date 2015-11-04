/**
 * Created by sqliang on 2015/11/2.
 */
var indexApp = angular.module("indexApp",["ui.router"]);
indexApp.run(function ($rootScope,$state,$stateParams) {
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
});
