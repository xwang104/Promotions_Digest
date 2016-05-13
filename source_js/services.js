var mp4Services = angular.module('mp4Services', []);
/*
var PDServices = angular.module('PDServices', []);

var baseUrl = "http://www.catemail.tk";

PDServices.factory('CrawlerStatus', function($http) {
  return {
    get : function(email) {
      return $http.get(baseUrl + '/crawlerstatus', {
                        params: {'email': email}
                      })
    }
  }    
});


PDServices.factory('Promotions', function($http) {
  return {
    
  }    
});
*/
mp4Services.factory('CommonData', function(){
    var data = "";
    return{
        getData : function(){
            return data;
        },
        setData : function(newData){
            data = newData;
        }
    }
});

mp4Services.factory('Llamas', function($http, $window) {
    return {
        get : function() {
            var baseUrl = $window.sessionStorage.baseurl;
            return $http.get(baseUrl+'/api/llamas');
        }
    }
});
