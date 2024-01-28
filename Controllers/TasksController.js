'use strict';

var utils = require('../utils/writer.js');
var TasksController = require('../service/TasksControllerService');

module.exports.createTasks = function createTasks (req, res, next, body) {
    TasksController.createTasks(body)
  .then(TasksController.retrieveTasks)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteTasks = function deleteTasks (req, res, next, id) {
    TasksController.deleteTasks(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.retrieveTasks = function retrieveTasks (req, res, next, id) {
    TasksController.retrieveTasks(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.retrieveTasks = function retrieveTasks (req, res, next) {
    TasksController.retrieveTasks()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateTasks = function updateTasks (req, res, next, body, id) {
    TasksController.updateTasks(body, id)
  .then(TasksController.retrieveTasks)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
