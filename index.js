var express = require('express');
var bodyParser = require('body-parser');
var middleware = require('./controllers/middleware.js');
var mainCtrl = require('./controllers/mainCtrl.js');

var app = express();

app.use(express.static('assets'));
app.use(bodyParser.json());
app.use(middleware.addHeaders);

app.get('/name', mainCtrl.getName);
app.get('/location', mainCtrl.getLocation);
app.get('/occupations', mainCtrl.getOccupations);
app.get('/occupations/latest', mainCtrl.getLatestOccupation);
app.get('/hobbies', mainCtrl.getHobbies);
app.get('/hobbies/:type', mainCtrl.getHobbyType);
app.get('/hobbies/:name', mainCtrl.getHobbyName);
app.get('/family', mainCtrl.getFamily);
app.get('/family/:gender', mainCtrl.getFamilyGender);
app.get('/restaurants', mainCtrl.getRestaurants);
app.get('/restaurants/:name', mainCtrl.getNameRestaurant);
app.get('/skillz', mainCtrl.getSkillz);
app.get('/secrets/:username/:pin', middleware.authorize ,mainCtrl.getSecrets);
app.get('/secrets/:username/:pin/:name', middleware.authorize ,mainCtrl.getSecretsName);

app.put('/name', mainCtrl.changeName);
app.put('/location', mainCtrl.changeLocation);
app.put('/family/:id/:key', mainCtrl.changeFamily);
app.put('/restaurant/:id/:key', mainCtrl.changeRestaurant);
app.put('/skillz/:id/:key', mainCtrl.changeSkillz);

app.post('/hobbies', mainCtrl.addHobby);
app.post('/occupations', mainCtrl.addOccupation);
app.post('/family', mainCtrl.addFamily);
app.post('/restaurants', mainCtrl.addRestaurant);
app.post('/skillz', middleware.generateId, mainCtrl.addSkillz);

var port = 3000;
app.listen(port, function() {
  console.log(port + " working...");
});
