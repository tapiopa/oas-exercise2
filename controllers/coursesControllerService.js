'use strict';

const courses = require('./courses');

module.exports.findCourses = function findCourses(req, res, next) {
  console.log("findCourses req", req);
  // res.send("findCourses");
  res.status(200).json(courses.getAllCourses());
};

module.exports.createCourses = function createCourses(req, res, next) {
  console.log("createCourses req", req);
  // res.send("createCourses");
  const course = req.undefined.value;
  if (courses.addCourse(course)) {
    res.status(200).send("POST COURSE OK");
  } else {
    res.status(404).send("POST COURSE SERVER ERROR");
  }
};

