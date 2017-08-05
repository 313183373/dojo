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
        return super.introduce()+` I am a Student. I am at class ${this.klass}`;
    }
}

class Worker extends Person{
    introduce(){
        return super.introduce()+' I am a Worker. I have a job.'
    }
}

// console.log(new Worker('xx',12).introduce());
// console.log(new Student('XX',13,3).introduce());
// console.log(new Person('xx',13).introduce());