'use strict';

var utils = require('../utils/writer.js');
var UsersController = require('../service/UsersControllerService.js');

module.exports.createUsers = function createUsers (req, res, next, body) {
  UsersController.createUsers(body)
  .then(UsersController.retrieveUsers)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteUsers = function deleteUsers (req, res, next, id) {
  UsersController.deleteUsers(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.retrieveUsers = function retrieveUsers (req, res, next, id) {
  UsersController.retrieveUsers(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.retrieveUsers = function retrieveUsers (req, res, next) {
  UsersController.retrieveUsers()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateUsers = function updateUsers(req, res, next, body, id) {
  UsersController.updateUsers(body, id)
  .then(UsersController.retrieveUsers)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
