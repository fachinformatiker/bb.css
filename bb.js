var app = angular.module('bbApp', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider

    .when('/', {
    templateUrl: 'pages/home.html',
    controller: 'HomeController'
  })

  .when('/style', {
    templateUrl: 'pages/style.html',
    controller: 'StyleController'
  })

  .when('/download', {
    templateUrl: 'pages/download.html',
    controller: 'DownloadController'
  })

  .otherwise({
    redirectTo: '/'
  });
});

app.controller('HomeController', function($scope) {
  $scope.message = 'Hello from HomeController';
});

app.controller('StyleController', function($scope) {
  $scope.message = 'Hello from BlogController';
});

app.controller('AboutController', function($scope) {
  $scope.message = 'Hello from DownloadController';
});
