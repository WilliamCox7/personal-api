angular.module('app').controller('meCtrl', function($scope, homeSvc) {
  homeSvc.getHobbies().then(function(result) {
    $scope.hobbies = result.data.hobbies;
  });
  homeSvc.getFamily().then(function(result) {
    $scope.family = result.data.family;
  });
  homeSvc.getRestaurants().then(function(result) {
    $scope.restaurants = result.data.restaurants;
  });
});
