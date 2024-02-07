'use strict';

var sql = require('../utils/db.js');


/**
 * Create TaskStatus
 *
 * body TaskStatus  (optional)
 * returns TaskStatus
 **/
exports.createTaskStatus = function(body) {
  return new Promise(function(resolve, reject) {
    console.log(body);
    sql.query("INSERT INTO TaskStatus (StatusID, StatusName) Values (?,?)",[body.StatusID,body.StatusName],function(err,res){
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
 * Delete TaskStatus
 *
 * id Long 
 * no response value expected for this operation
 **/
exports.deleteTaskStatus = function(id) {
  return new Promise(function(resolve, reject) {
    sql.query("DELETE FROM Tasks WHERE StatusID = ?",[id], function (err,res){
      if (err|| !res.affectedRows){
        console.log(err);
        console.log(res);
      }
      else{
        console.log(res);
      }
    });
    sql.query("DELETE FROM TaskStatus WHERE StatusID = ?",[id], function (err,res){
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
 * Retrieve TaskStatus
 *
 * id Long 
 * returns TaskStatus
 **/
exports.retrieveTaskStatus = function(id) {
  return new Promise(function(resolve, reject) {
    sql.query("SELECT * FROM TaskStatus WHERE StatusID = ?",[id], function(err,res){
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
 * Retrieve TaskStatuses
 *
 * returns List
 **/
exports.retrieveTaskStatuses = function() {
  return new Promise(function(resolve, reject) {
    sql.query("SELECT * FROM TaskStatus",function(err,res){
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
 * Update TaskStatus
 *
 * body TaskStatus
 * id Long 
 * no response value expected for this operation
 **/
exports.updateTaskStatus = function(body,id) {
  return new Promise(function(resolve, reject) {
    sql.query("UPDATE TaskStatus set StatusName = ? WHERE StatusID = ?", [body.StatusName, id],function(err,res){
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

