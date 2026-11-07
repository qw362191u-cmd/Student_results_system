class Student {
    constructor(id, name, grades, attendance) {
        this.id = id;
        this.name = name;
        this.grades = grades;
        this.attendance = attendance;
    }

    // Calculate Average
    calculateAverage() {
        let total = this.grades.reduce((sum, grade) => sum + grade, 0);
        return total / this.grades.length;
    }

    // Calculate Grade
    getGrade() {
        let average = this.calculateAverage();

        if (average >= 90) {
            return "A";
        } else if (average >= 80) {
            return "B";
        } else if (average >= 70) {
            return "C";
        } else if (average >= 60) {
            return "D";
        } else if (average >= 50) {
            return "E";
        } else {
            return "F";
        }
    }

    // Final Result
    getResult() {
        let average = this.calculateAverage();

        if (average >= 50 && this.attendance >= 75) {
            return "ناجح";
        } else {
            return "يحتاج مراجعة";
        }
    }
}

// Students List
let studentsList = [
    new Student(101, "Ahmed", [90, 85, 95], 90),
    new Student(102, "Mona", [45, 48, 42], 80),
    new Student(103, "Ali", [40, 45, 47], 85),
    new Student(104, "Sara", [70, 75, 80], 60)
];

// Print All Students Reports
console.log("===== Students Reports =====");

studentsList.forEach(student => {
    console.log("Name:", student.name);
    console.log("Average:", student.calculateAverage());
    console.log("Grade:", student.getGrade());
    console.log("Result:", student.getResult());
    console.log("----------------------");
});

// Filter Students Between 40 and 49
let weakStudents = studentsList.filter(student => {
    let average = student.calculateAverage();
    return average >= 40 && average <= 49;
});

// Add 5 Bonus Marks Using Map
let mercyStudents = weakStudents.map(student => {
    return {
        id: student.id,
        name: student.name,
        oldAverage: student.calculateAverage(),
        newAverage: student.calculateAverage() + 5
    };
});

// Calculate Total New Averages Using Reduce
let totalNewAverages = mercyStudents.reduce((sum, student) => {
    return sum + student.newAverage;
}, 0);

// Protect Against Division by Zero
let mercyAverage = mercyStudents.length > 0
    ? totalNewAverages / mercyStudents.length
    : 0;

// Print Mercy Students
console.log("===== Mercy Committee =====");
console.log(mercyStudents);

// Print Mercy Average
console.log("Average After Mercy:", mercyAverage);
