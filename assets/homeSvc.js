angular.module('app').service('homeSvc',function($http) {
  this.getName = function() {
    return $http ({
      method: 'GET',
      url: '/name'
    });
  }
  this.getLocation = function() {
    return $http ({
      method: 'GET',
      url: '/location'
    });
  }
  this.getHobbies = function() {
    return $http ({
      method: 'GET',
      url: '/hobbies'
    });
  }
  this.getFamily = function() {
    return $http ({
      method: 'GET',
      url: '/family'
    });
  }
  this.getRestaurants = function() {
    return $http ({
      method: 'GET',
      url: '/restaurants'
    });
  }
  this.getSkillz = function() {
    return $http ({
      method: 'GET',
      url: '/skillz'
    });
  }
});
