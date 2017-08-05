class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    introduce(){
        return `My name is ${this.name}. I am ${this.age} years old.`
    }
}

class Student extends Person{
    constructor(name,age,klass){
        super(name,age);
        this.klass=klass;
    }
    introduce(){
        return `My name is ${this.name}. I am ${this.age} years old. I am a student. I am at Class ${this.klass}.`;
    }
}

class Worker extends Person{
    introduce(){
        return `My name is ${this.name}. I am ${this.age} years old. I am a Worker. I have a job.`
    }
}

// let w1=new Worker('xx',23);
// console.log(w1.introduce());