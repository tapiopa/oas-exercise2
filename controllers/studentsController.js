'use strict';

var studentsController = require('./studentsControllerService');

module.exports.findStudents = function findStudents(req, res, next) {
  studentsController.findStudents(req.swagger.params, res, next);
};

module.exports.createStudents = function createStudents(req, res, next) {
  studentsController.createStudents(req.swagger.params, res, next);
};

// module.exports.getStudents = function getStudents(req, res, next) {
//   studentsController.getStudents(req.swagger.params, res, next);
// };
//
// module.exports.updateStudents = function updateStudents(req, res, next) {
//   studentsController.updateStudents(req.swagger.params, res, next);
// };
//
// module.exports.deleteStudents = function deleteStudents(req, res, next) {
//   studentsController.deleteStudents(req.swagger.params, res, next);
// };