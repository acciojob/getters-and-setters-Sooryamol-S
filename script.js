class Person {
    // Constructor method with name and age
    constructor(name, age) {
        this._name = name; // Using underscore to denote private variables
        this._age = age;
    }

    // Getter for name
    get name() {
        return this._name;
    }

    // Setter for age
    set age(age) {
        this._age = age;
    }

    // Getter for age (optional)
    get age() {
        return this._age;
    }
}

// Student class extends Person
class Student extends Person {
    study() {
        console.log(`${this.name} is studying`);
    }
}

// Teacher class extends Person
class Teacher extends Person {
    teach() {
        console.log(`${this.name} is teaching`);
    }
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;