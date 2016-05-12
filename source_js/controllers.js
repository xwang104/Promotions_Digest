var PDControllers = angular.module('PDControllers', []);

PDControllers.controller('SearchController', ['$scope', function($scope) {
  $('header').animate({'padding-top': '5%'}, 200);

}]);

PDControllers.controller('RecommendController', ['$scope', function($scope) {
  $('header').animate({'padding-top': '5%'}, 200);

}]);


PDControllers.controller('SettingsController', ['$scope' , '$window' , function($scope, $window) {
  $scope.url = $window.sessionStorage.baseurl;

  $scope.setUrl = function(){
    $window.sessionStorage.baseurl = $scope.url;
    $scope.displayText = "URL set";

  };

}]);
