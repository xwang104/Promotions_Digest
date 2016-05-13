var PDControllers = angular.module('PDControllers', []);

var baseUrl = 'http://www.catemail.tk'

PDControllers.controller('SearchController', 
    ['$scope', '$http', function($scope, $http) {
  $('header').animate({'padding-top': '5%'}, 200);

  $scope.allProducts = ['acce', 'food', 'beau', 'clot', 
                 'elec', 'home', 'shoe', 'trav']

  $scope.allCategory = ['trend', 'discount']
  $scope.allIds = $scope.allCategory.concat($scope.allProducts)
  $scope.curCategory = 'discount';
  $scope.curProduct = 'acce';

  if (email !== "") {
    $scope.email = email
    alert(email);
  }

  $scope.notifyEmail = function (email) {
    alert('controler got email ' + email);
    $scope.email = email;

    $http.get(baseUrl + '/crawler_status', {
      params: {'email': email}
    })
    .success(function (data, status) {
      $scope.crawlerStatus = data.status
    })
  }

  $scope.stopCrawler = function (email) {
    alert('stopping crawler');
    $http.get(baseUrl + '/stop_crawler', {
      params: {'email': email}
    })
    .success(function (data, status) {
      $scope.crawlerStatus = 'stopped'
    })
  }

  $scope.getPromotions = function (category, product) {
    $scope.curCategory = category;
    $scope.curProduct = product;
    for (i in $scope.allIds) {
      $('#div-'+$scope.allIds[i]).css('background-color', '#092337');
    }
    $('#div-'+category).css('background-color', 'red');
    $('#div-'+product).css('background-color', 'red');
    alert('getting promotions');
    $http.get(baseUrl + '/get_promotions', {
      params: {
        'category': category,
        'products': product
      }
    })
    .success(function (data, status) {
      $scope.promotions = data['data'];
    })
  }

}]);

PDControllers.controller('RecommendController', ['$scope', function($scope) {
  $('header').animate({'padding-top': '5%'}, 200);

}]);



