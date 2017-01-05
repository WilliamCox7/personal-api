angular.module('app').controller('skillzCtrl', function($scope, homeSvc) {
  homeSvc.getSkillz().then(function(result) {
    $scope.skillz = result.data.skillz;
  });
});
