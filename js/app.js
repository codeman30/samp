app = angular.module('app', ['ngRoute', 'ngAnimate']);
app.config(function($routeProvider, $locationProvider) {
  $routeProvider
  .when('/potterpics',{
    templateUrl: "../pages/potter.html"
  })
  .when('/events',{
    templateUrl: "../pages/events.html"
  })
  .when('/blaster',{
    templateUrl: "../pages/blaster.html"
  })
  .when('/bayberry',{
    templateUrl: "../pages/bayberry.html"
  })
  .when('/barberry',{
    templateUrl: "../pages/barberry.html"
  })
  .when('/mares',{
    templateUrl: "../pages/mars.html"
  })
  .when('/loxe',{
    templateUrl: "../pages/loxe.html"
  })
  .when('/rizikitoto',{
    templateUrl: "../pages/rizikitoto.html"
  })
  .when('/bilberry',{
    templateUrl: "../pages/bilberry.html"
  })
  .when('/vaporposter',{
    templateUrl: "../pages/vaporposter.html"
  })
  .when('/interaction',{
    templateUrl: "../pages/interactions.html"
  })
  .when('/photogram',{
    templateUrl: "../pages/photogram.html"
  })
  .when('/weeklymotion',{
    templateUrl: "../pages/weeklymotion.html"
  })
  .when('/stitch',{
    templateUrl: "../pages/stitch.html"
  })
  .when('/',{
   templateUrl: "../pages/grid.html"
  })
  .otherwise({redirectTo: '/'});
}).animation('.reveal-animation', function() {
  return {
    enter: function(element, done) {
      element.css('display', 'none');
      element.fadeIn(500, done);
      return function() {
        element.stop();
      }
    },
    leave: function(element, done) {
      element.fadeOut(500, done);
      return function() {
        element.stop();
      }
    }
  }
});

app.controller('ctrl', function($scope, $rootScope){
  $rootScope.$on('$routeChangeStart', function(event, currRoute, prevRoute){
  $rootScope.animation = currRoute.animation;
  });
});
