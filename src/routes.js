angular.module('app')
.config(function ($routeProvider, $locationProvider) {
  $locationProvider.html5Mode(true)
  $routeProvider
  .when('/words', {controller: 'WordsCtrl', templateUrl: '/templates/words.html'})
})
