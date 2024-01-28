'use strict';

var utils = require('../utils/writer.js');
var TaskStatusController = require('../service/TaskStatusControllerService');

module.exports.createTaskStatus = function createTaskStatus (req, res, next, body) {
    TaskStatusController.createTaskStatus(body)
  .then(TaskStatusController.retrieveTaskStatus)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteTaskStatus = function deleteTaskStatus (req, res, next, id) {
    TaskStatusController.deleteTaskStatus(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.retrieveTaskStatus = function retrieveTaskStatus(req, res, next, id) {
    TaskStatusController.retrieveTaskStatus(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.retrieveTaskStatus = function retrieveTaskStatus (req, res, next) {
    TaskStatusController.retrieveTaskStatus()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateTaskStatus = function updateTaskStatus (req, res, next, body, id) {
    TaskStatusController.updateTaskStatus(body, id)
  .then(TaskStatusController.retrieveTaskStatus)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
