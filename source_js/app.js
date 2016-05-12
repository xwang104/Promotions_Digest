var app = angular.module('Promotions', ['ngRoute', 'PDControllers']);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
    when('/search', {
    templateUrl: 'partials/search.html',
    controller: 'SearchController'
  }).
  when('/recommend', {
    templateUrl: 'partials/recommend.html',
    controller: 'RecommendController'
  }).
  otherwise({
    redirectTo: '/search'
  });
}]);
