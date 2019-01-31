'use strict';

let grades = require('./grades');

module.exports.funcgradesgradesIdPARAMETERS = function funcgradesgradesIdPARAMETERS(req, res, next) {
  res.send({
    message: 'This is the mockup controller for funcgradesgradesIdPARAMETERS'
  });
};

// module.exports.getGrades = function getGrades(req, res, next) {
//   res.send({
//     message: 'This is the mockup controller for getGrades'
//   });
// };
//
// module.exports.updateGrades = function updateGrades(req, res, next) {
//   res.send({
//     message: 'This is the mockup controller for updateGrades'
//   });
// };
//
// module.exports.deleteGrades = function deleteGrades(req, res, next) {
//   res.send({
//     message: 'This is the mockup controller for deleteGrades'
//   });
// };
//
module.exports.getGrades = function getGrades(req, res, next) {
  console.log("getgrades req", req);
  const id = req.gradesId.value;
  const grade = grades.getGrade(id);
  if (grade) {
    console.log("getGrades, grade", grade);
    res.status(200).json(grade);
  } else {
    res.status(404).send("GET GRADE NOT FOUND");
  }
};

module.exports.updateGrades = function updateGrades(req, res, next) {
  console.log("updateGrades req", req);
  const grade = req.undefined.value;
  if (grades.putGrade(grade)) {
    res.status(200).send("UPDATE COURSES OK");
  } else {
    res.status(404).send("UPDATE COURSES SERVER ERROR")
  }
};

module.exports.deleteGrades = function deleteGrades(req, res, next) {
  // console.log("deleteGrades req", req);
  const deleteID = req.gradesId.value;
  if (grades.removeGrade(deleteID)) {
    res.status(200).send('GRADES DELETE OK');
  } else {
    res.status(404).send('NOT FOUND');
  }
};