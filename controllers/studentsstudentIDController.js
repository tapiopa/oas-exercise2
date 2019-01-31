'use strict';

var varstudentsstudentIDController = require('./studentsstudentIDControllerService');

module.exports.funcstudentsstudentIDPARAMETERS = function funcstudentsstudentIDPARAMETERS(req, res, next) {
  varstudentsstudentIDController.funcstudentsstudentIDPARAMETERS(req.swagger.params, res, next);
};

module.exports.getStudents = function getStudents(req, res, next) {
  varstudentsstudentIDController.getStudents(req.swagger.params, res, next);
};

module.exports.updateStudents = function updateStudents(req, res, next) {
  console.log("controller, updateStudents");
  varstudentsstudentIDController.updateStudents(req.swagger.params, res, next);
};

module.exports.deleteStudents = function deleteStudents(req, res, next) {
  console.log("controller, deletestudents");
  varstudentsstudentIDController.deleteStudents(req.swagger.params, res, next);
};