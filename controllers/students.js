let i = 1;

const students = [
    {
        studentID: i++,
        classID: "DIN",
        studentName: "John Doe",
        address: "Testikatu 1"
    },
    {
        studentID: i++,
        classID: "DIN",
        studentName: "Jane Doe",
        address: "Testikatu 2"
    },
    {
        studentID: i++,
        classID: "DIN",
        studentName: "John Smith",
        address: "Testikatu 3"
    }
];

const findIndex = id => {
    console.log("findIndex id", id);
    let index = false;
    students.map((student, idx) => {
        if (student.studentID == id) {
            console.log("findIndex, found!!!, idx", idx);
            index = idx;
        }
    });
    console.log("findIndex, returning index", index);
    return index;
};

module.exports.getStudents = () => {
    console.log("get students", students);
    return students;
};

module.exports.getStudent = id => {
    console.log("get student students", students);
    console.log("get student id", id);
    let index = findIndex(+id);
    console.log("getStudent, index", index);
    if (index >= 0) {
        console.log("get student index", +index);
        console.log("get student found student", students[+index]);
        return students[index];
    } else {
        console.log("get student not found");
        return false;
    }
};

module.exports.addStudent = student => {
    console.log("add students", students);
    if (student) {
        student.studentID = i++;
        students.push(student);
        console.log("add students after", students);
        return true;
    } else {
        return false;
    }
};

module.exports.putStudent = (student) => {
    console.log("put students before", students);
    let index = findIndex(student.studentID);
    if (index) {
        students[index].classID = student.classID;
        students[index].studentName = student.studentName;
        students[index].address = student.address;
        console.log("put students after", students);
        return true;
    } else {
        return false;
    }
};

module.exports.deleteStudent = id => {
    console.log("delete students before", students);
    let index = findIndex(id);
    if (index) {
        students.splice(index, 1);
        console.log("delete students after", students);
        return true;
    } else {
        return false;
    }
};