angular.module('app').controller('skillzCtrl', function($scope, homeSvc) {
  homeSvc.getSkillz().then(function(result) {
    $scope.skillz = result.data.skillz;
  });
  $scope.sknm = true;
  $scope.skex = true;
  $scope.updateSkillz = function(val, type, id) {
    if (type === 'skill') { $scope.sknm = true; }
    else if (type === 'experience') { $scope.skex = true; }
    homeSvc.updateSkillz(val, type, id);
  }
});
