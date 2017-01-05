angular.module('app').controller('homeCtrl', function($scope, homeSvc) {
  homeSvc.getName().then(function(result) {
    $scope.name = result.data.name;
  });
  homeSvc.getLocation().then(function(result) {
    $scope.location = result.data.location;
  });
});
