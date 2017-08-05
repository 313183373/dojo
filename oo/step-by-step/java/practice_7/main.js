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

class Teacher extends Person{
    constructor(name,age,klass){
        super(name,age);
        this.klass=klass;
    }

    introduce(){
        return super.introduce()+' I am a Teacher. I teach '+(this.klass?'Class '+this.klass+'.':'No Class.');
    }
}

// console.log(new Teacher('xx',12).introduce());
// console.log(new Teacher('xx',13,3).introduce());