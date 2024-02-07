'use strict';

var utils = require('../utils/writer.js');
var TaskCategoriesController = require('../service/TaskCategoriesControllerService');

module.exports.createTaskCategories = function createTaskCategories (req, res, next, body) {
    TaskCategoriesController.createTaskCategories(body)
  .then(TaskCategoriesController.retrieveTaskCategories)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteTaskCategories = function deleteTaskCategories (req, res, next, id) {
    TaskCategoriesController.deleteTaskCategories(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.retrieveTaskCategory = function retrieveTaskCategory (req, res, next, id) {
    TaskCategoriesController.retrieveTaskCategory(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.retrieveTaskCategories = function retrieveTaskCategories(req, res, next) {
    TaskCategoriesController.retrieveTaskCategories()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateTaskCategories = function updateTaskCategories(req, res, next, body, id) {
    TaskCategoriesController.updateTaskCategories(body, id)
  .then(TaskCategoriesController.retrieveTaskCategories)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
