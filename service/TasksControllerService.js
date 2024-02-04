'use strict';

var sql = require('../utils/db.js');


/**
 * Create Tasks
 *
 * body Tasks  (optional)
 * returns Tasks
 **/
exports.createTasks = function(body) {
  return new Promise(function(resolve, reject) {
    console.log(body);
    sql.query("INSERT INTO Tasks (TaskID, Title, Description, DueDate, UserID, CategoryID, StatusID) Values (?,?,?,?,?,?,?)",[body.TaskID,body.Title,body.Description,body.DueDate,body.UserID,body.CategoryID,body.StatusID],function(err,res){
      if(err){
        console.log(err);
        reject(err);
      }
      else {
        console.log(res.insertId);
        resolve(res.insertId);
      }
    });
  });
}


/**
 * Delete Tasks
 *
 * id Long 
 * no response value expected for this operation
 **/
exports.deleteTasks = function(id) {
  return new Promise(function(resolve, reject) {
    sql.query("DELETE FROM Tasks WHERE TaskID = ?",[id], function (err,res){
      if (err|| !res.affectedRows){
        console.log(err);
        console.log(res);
      }
      else{
        console.log(res);
        resolve({"deleted":id});
      }
    });
  });
}


/**
 * Retrieve Tasks
 *
 * id Long 
 * returns Tasks
 **/
exports.retrieveTask = function(id) {
  return new Promise(function(resolve, reject) {
    sql.query("SELECT * FROM Tasks WHERE TaskID = ?",[id], function(err,res){
      if(err){
        console.log(err);
        reject(err);
      }
      else{
        console.log(res);
        resolve(res[0]);
      }
    });
  });
}


/**
 * Retrieve Tasks
 *
 * returns List
 **/
exports.retrieveTasks = function() {
  return new Promise(function(resolve, reject) {
    sql.query("SELECT * FROM Tasks",function(err,res){
      if(err){
        console.log(err);
        reject(err);
      }
      else{
        console.log(res);
        resolve(res);
      }
    });
  });
}


/**
 * Update Tasks
 *
 * body Tasks
 * id Long 
 * no response value expected for this operation
 **/
exports.updateTasks = function(body,id) {
  return new Promise(function(resolve, reject) {
    sql.query("UPDATE Tasks set TaskID = ?, Title = ?, Description = ?, DueDate = ?, UserID = ?, CategoryID = ?, StatusID = ? WHERE TaskID = ?", [body.TaskID,body.Title,body.Description,body.DueDate,body.UserID,body.CategoryID,body.StatusID, id],function(err,res){
      if(err){
        console.log(err);
        reject(err);
      }
      else{
        console.log(res);
        resolve(id);
      }
    });
  });
}

