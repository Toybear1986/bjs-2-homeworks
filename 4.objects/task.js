function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = [];
}

let student1 = new Student("Василиса", "женский", 19);
let student2 = new Student("Артём", "мужской", 25);

Student.prototype.setSubject = function (subjectName) {
    this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
    if (this.marks === undefined) {
        return this.excluded.reason;
    } else {
        this.marks = this.marks.concat(marks);
    }
}

Student.prototype.getAverage = function () {
    if (this.marks === undefined) {
        return 0;
    } else {
        const average = this.marks.reduce((accumulator, value) => accumulator + value, 0) / this.marks.length;
        if (isNaN(average)) {
            return 0;
        }
        return average
    }
}

Student.prototype.exclude = function (reason) {
    delete this.subject;
    delete this.marks;
    this.excluded = reason;
}