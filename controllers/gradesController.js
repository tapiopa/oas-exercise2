'use strict';

var gradesController = require('./gradesControllerService');

module.exports.findGrades = function findGrades(req, res, next) {
  gradesController.findGrades(req.swagger.params, res, next);
};

module.exports.createGrades = function createGrades(req, res, next) {
  gradesController.createGrades(req.swagger.params, res, next);
};

// module.exports.funcgradesgradesIdPARAMETERS = function funcgradesgradesIdPARAMETERS(req, res, next) {
//   gradesController.funcgradesgradesIdPARAMETERS(req.swagger.params, res, next);
// };
//
// module.exports.getGrades = function getGrades(req, res, next) {
//   gradesController.getGrades(req.swagger.params, res, next);
// };
//
// module.exports.updateGrades = function updateGrades(req, res, next) {
//   gradesController.updateGrades(req.swagger.params, res, next);
// };
//
// module.exports.deleteGrades = function deleteGrades(req, res, next) {
//   gradesController.deleteGrades(req.swagger.params, res, next);
// };