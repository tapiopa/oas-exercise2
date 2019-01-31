let i = 1;

const courses = [
    {
        courseID: i++,
        courseName: "Test course name",
        description: "Test description"
    },
    {
        courseID: i++,
        courseName: "Test course name 2",
        description: "Test description 2"
    },
    {
        courseID: i++,
        courseName: "Test course name 3",
        description: "Test description 3"
    }
];

const findIndex = id => {
    console.log("findIndex id", id);
    let index = false;
    courses.map((course, idx) => {
        if (course.courseID == id) {
            console.log("findIndex, found!!!, idx", idx);
            index = idx;
        }
    });
    console.log("findIndex, returning index", index);
    return index;
};

module.exports.getAllCourses = () => {
    console.log("get courses", courses);
    return courses;
};

module.exports.getCourse = id => {
    console.log("get course courses", courses);
    console.log("get course id", id);
    let index = findIndex(+id);
    console.log("getCourse, index", index);
    if (index >= 0) {
        console.log("get course index", +index);
        console.log("get course found course", courses[+index]);
        return courses[index];
    } else {
        console.log("get course not found");
        return false;
    }
};

module.exports.addCourse = course => {
    console.log("add courses", courses);
    if (course) {
        course.courseID = i++;
        courses.push(course);
        console.log("add courses after", courses);
        return true;
    } else {
        return false;
    }
};

module.exports.putCourse = (course) => {
    console.log("put courses before", courses);
    let index = findIndex(course.courseID);
    if (index) {
        courses[index].courseName = course.courseName;
        courses[index].description = course.description;
        console.log("put courses after", courses);
        return true;
    } else {
        return false;
    }
};

module.exports.removeCourse = id => {
    console.log("delete courses before", courses);
    let index = findIndex(id);
    if (index) {
        courses.splice(index, 1);
        console.log("delete courses after", courses);
        return true;
    } else {
        return false;
    }
};