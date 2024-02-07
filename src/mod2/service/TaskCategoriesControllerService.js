'use strict';

var sql = require('../utils/db.js');


/**
 * Create TaskCategories
 *
 * body TaskCategories  (optional)
 * returns TaskCategories
 **/
exports.createTaskCategories = function(body) {
  return new Promise(function(resolve, reject) {
    console.log(body);
    sql.query("INSERT INTO TaskCategories (CategoryID, CategoryName) Values (?,?)",[body.CategoryID,body.CategoryName],function(err,res){
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
 * Delete TaskCategories
 *
 * id Long 
 * no response value expected for this operation
 **/
exports.deleteTaskCategories = function(id) {
  return new Promise(function(resolve, reject) {
    sql.query("DELETE FROM Tasks WHERE CategoryID = ?",[id], function (err,res){
      if (err|| !res.affectedRows){
        console.log(err);
        console.log(res);
      }
      else{
        console.log(res);
      }
    });
    sql.query("DELETE FROM TaskCategories WHERE CategoryID = ?",[id], function (err,res){
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
 * Retrieve TaskCategories
 *
 * id Long 
 * returns TaskCategories
 **/
exports.retrieveTaskCategory = function(id) {
  return new Promise(function(resolve, reject) {
    sql.query("SELECT * FROM TaskCategories WHERE CategoryID = ?",[id], function(err,res){
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
 * Retrieve TaskCategories
 *
 * returns List
 **/

exports.retrieveTaskCategories = function() {
  return new Promise(function(resolve, reject) {
    sql.query("SELECT * FROM TaskCategories",function(err,res){
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
 * Update TaskCategories
 *
 * body TaskCategories
 * id Long 
 * no response value expected for this operation
 **/
exports.updateTaskCategories = function(body,id) {
  return new Promise(function(resolve, reject) {
    sql.query("UPDATE TaskCategories set CategoryName = ? WHERE CategoryID = ?", [body.CategoryName, id],function(err,res){
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

