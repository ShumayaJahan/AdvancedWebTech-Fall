const studentName = "Shumaya Jahan";

let marks = [];

marks.push(85);
marks.push(70);
marks.push(68);
marks.push(90);
marks.push(55);

function calculateTotal(marks) {
    let total = 0;

    for (let i = 0; i < marks.length; i++) {
        total = total + marks[i];
    }

    return total;
}

function calculateAverage(total, numberOfSubjects) {
    let average = total / numberOfSubjects;
    return average;
}

function calculateGrade(average) {
    if (average >= 90) {
        return "A+";
    }
    else if (average >= 85) {
        return "A";
    }
    else if (average >= 80) {
        return "B+";
    }
    else if (average >= 75) {
        return "B";
    }
     else if (average >= 70) {
        return "C+";
    }
     else if (average >= 65) {
        return "C";
    }
     else if (average >= 60) {
        return "D+";
    }
    else if (average >= 50) {
        return "D";
    }
    else {
        return "F";
    }
}

function checkResult(marks) {
    for (let i = 0; i < marks.length; i++) {
        if (marks[i] < 50) {
            return "Fail";
        }
    }

    return "Pass";
}

function findHighestMark(marks) {
    let highest = marks[0];

    for (let i = 1; i < marks.length; i++) {
        if (marks[i] > highest) {
            highest = marks[i];
        }
    }

    return highest;
}

function countPassedSubjects(marks) {
    let count = 0;

    for (let i = 0; i < marks.length; i++) {
        if (marks[i] >= 50) {
            count++;
        }
    }

    return count;
}

const total = calculateTotal(marks);
const average = calculateAverage(total, marks.length);
const grade = calculateGrade(average);
const result = checkResult(marks);
const highestMark = findHighestMark(marks);
const passedSubjects = countPassedSubjects(marks);

console.log("Student Name: " + studentName);
console.log("Marks: " + marks);
console.log("Total Marks: " + total);
console.log("Average Marks: " + average);
console.log("Grade: " + grade);
console.log("Result: " + result);
console.log("Highest Mark: " + highestMark);
console.log("Passed Subjects: " + passedSubjects);

