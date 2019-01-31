let g = 1;

let grades = [
    {
        gradeID: g++,
        courseID: 1,
        gradeName: "1",
    },
    {
        gradeID: g++,
        courseID: 2,
        gradeName: "2",
    },
    {
        gradeID: g++,
        courseID: 3,
        gradeName: "3",
    }
];

const findIndex = id => {
    console.log("findIndex id", id);
    let index = null;
    grades.map((grade, idx) => {
        if (grade.gradeID == id) {
            console.log("findIndex, found!!!, idx", idx);
            index = idx;
        }
    });
    console.log("findIndex, returning index", index);
    return index;
};

module.exports.getAllGrades = () => {
    console.log("get grades", grades);
    return grades;
};

module.exports.getGrade = id => {
    console.log("get grade grades", grades);
    console.log("get grade id", id);
    let index = findIndex(+id);
    console.log("getgrade, index", index);
    if (index >= 0) {
        console.log("get grade index", +index);
        console.log("get grade found grade", grades[+index]);
        return grades[index];
    } else {
        console.log("get grade not found");
        return false;
    }
};

module.exports.addGrade = grade => {
    console.log("add grades", grades);
    if (grade) {
        grade.gradeID = g++;
        grades.push(grade);
        console.log("add grades after", grades);
        return true;
    } else {
        return false;
    }
};

module.exports.putGrade = (grade) => {
    console.log("put grades before", grades);
    let index = findIndex(grade.gradeID);
    if (index) {
        grades[index].courseID = grade.classID;
        grades[index].gradeName = grade.gradeName;
        console.log("put grades after", grades);
        return true;
    } else {
        return false;
    }
};

module.exports.removeGrade = id => {
    console.log("delete grades before", grades);
    let index = findIndex(id);
    if (index) {
        grades.splice(index, 1);
        console.log("delete grades after", grades);
        return true;
    } else {
        return false;
    }
};