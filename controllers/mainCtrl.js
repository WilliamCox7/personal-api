var userInfo = require('../models/user.js');
var skillz = require('../models/skillz.js');
var secrets = require('../models/secrets.js');

module.exports = {
  getName: function(req, res, next) {
    res.status(200).json({ name: userInfo.name });
  },
  getLocation: function(req, res, next) {
    res.status(200).json({ location: userInfo.location });
  },
  getOccupations: function(req, res, next) {
    if (req.query.order) {
      if (req.query.order === 'asc') {
        userInfo.occupations.sort();
      } else if (req.query.order === 'desc') {
        userInfo.occupations.sort().reverse();
      }
    }
    res.status(200).json({ occupations: userInfo.occupations });
  },
  getLatestOccupation: function(req, res, next) {
    res.status(200).json({ latestOccupation: userInfo.occupations[userInfo.occupations.length - 1]});
  },
  getHobbies: function(req, res, next) {
    res.status(200).json({ hobbies: userInfo.hobbies });
  },
  getHobbyType: function(req, res, next) {
    var filteredHobbies = userInfo.hobbies.filter(function(val) {
      return val.type == req.params.type;
    });
    res.status(200).json({ hobbies: filteredHobbies });
  },
  getHobbyName: function(req, res, next) {
    var filteredHobbies = userInfo.hobbies.filter(function(val) {
      return val.name == req.params.name;
    });
    res.status(200).json({ hobbies: filteredHobbies });
  },
  getFamily: function(req, res, next) {
    res.status(200).json({ family: userInfo.family });
  },
  getFamilyGender: function(req, res, next) {
    var filteredFamily = userInfo.family.filter(function(val) {
      return val.gender == req.params.gender;
    });
    res.status(200).json({ hobbies: filteredFamily });
  },
  getRestaurants: function(req, res, next) {
    res.status(200).json({ restaurants: userInfo.restaurants });
  },
  getNameRestaurant: function(req, res, next) {
    var filteredRestaurants = userInfo.restaurants.filter(function(val) {
      return val.name == req.params.name;
    });
    res.status(200).json({ restaurants: filteredRestaurants });
  },
  getSkillz: function(req, res, next) {
    if (req.query.experience) {
      var filteredSkillz = skillz.skills.filter(function(val) {
        return val.experience == req.query.experience;
      });
      return res.status(200).json({ skillz: filteredSkillz });
    }
    res.status(200).json({ skillz: skillz.skills });
  },
  getSecrets: function(req, res, next) {
    res.status(200).json({ secrets: secrets });
  },
  getSecretsName: function(req, res, next) {
    var filteredSecrets = secrets.secrets.filter(function(val) {
      return val.name == req.params.name;
    });
    res.status(200).json({ secrets: filteredSecrets });
  },
  changeName: function(req, res, next) {
    userInfo.name = req.body.name;
    res.status(200).json({ name: userInfo.name });
  },
  changeLocation: function(req, res, next) {
    userInfo.location = req.body.location;
    res.status(200).json({ location: userInfo.location });
  },
  changeFamily: function(req, res, next) {
    userInfo.family[req.params.id][req.params.key] = req.body[req.params.key];
    res.status(200).json({ family: userInfo.family });
  },
  changeRestaurant: function(req, res, next) {
    userInfo.restaurant[req.params.id][req.params.key] = req.body[req.params.key];
    res.status(200).json({ restaurant: userInfo.restaurant });
  },
  addHobby: function(req, res, next) {
    userInfo.hobbies.push(req.body.hobby);
    res.status(200).json({ hobbies: userInfo.hobbies });
  },
  addOccupation: function(req, res, next) {
    userInfo.occupations.push(req.body.occupation);
    res.status(200).json({ occupations: userInfo.occupations });
  },
  addFamily: function(req, res, next) {
    userInfo.family.push(req.body.family);
    res.status(200).json({ family: userInfo.family });
  },
  addRestaurant: function(req, res, next) {
    userInfo.restaurants.push(req.body.restaurant);
    res.status(200).json({ restaurants: userInfo.restaurants });
  },
  addSkillz: function(req, res, next) {
    skillz.skills.push(req.body);
    res.status(200).json({ skillz: skillz.skills });
  }
}
