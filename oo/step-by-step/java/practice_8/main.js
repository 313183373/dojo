class Class {
    constructor(number) {
        this.number = number;
    }
}

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        return `My name is ${this.name}. I am ${this.age} years old.`
    }
}

class Student extends Person {
    constructor(name, age, klass) {
        super(name, age);
        this.klass = klass;
    }

    introduce() {
        return super.introduce() + ` I am a Student. I am at class ${this.klass.number}`;
    }
}

class Worker extends Person {
    introduce() {
        return super.introduce() + ' I am a Worker. I have a job.'
    }
}

class Teacher extends Person {
    constructor(name, age, klass) {
        super(name, age);
        this.klass = klass;
    }

    introduce() {
        return super.introduce() + ' I am a Teacher. I teach ' + (this.klass ? 'Class ' + this.klass + '.' : 'No Class.');
    }

    introduceWith(student) {
        return super.introduce() + ' I am a Teacher. I ' + (this.klass === student.klass.number ? `teach` : `don't teach`) + ` ${student.name}.`;
    }
}

let t = new Teacher('xiongxin', 14, 3);
let s1 = new Student('xx', 13, new Class(3));
let s2 = new Student('xxx', 14, new Class(2));

console.log(t.introduce());
console.log(t.introduceWith(s1));
console.log(t.introduceWith(s2));