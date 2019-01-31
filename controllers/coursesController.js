'use strict';

var coursesController = require('./coursesControllerService');

module.exports.findCourses = function findCourses(req, res, next) {
  coursesController.findCourses(req.swagger.params, res, next);
};

module.exports.createCourses = function createCourses(req, res, next) {
  coursesController.createCourses(req.swagger.params, res, next);
};

// module.exports.getCourses = function getCourses(req, res, next) {
//   coursesController.getCourses(req.swagger.params, res, next);
// };
//
// module.exports.updateCourses = function updateCourses(req, res, next) {
//   coursesController.updateCourses(req.swagger.params, res, next);
// };
//
// module.exports.deleteCourses = function deleteCourses(req, res, next) {
//   coursesController.deleteCourses(req.swagger.params, res, next);
// };