class Person{
    walk(){
        return "Can walk";
    }
}

class Teacher extends Person{
    teach(){
        return "Teaching";
    }
}

const sarah=new Teacher();
const walk=sarah.teach();
console.log(walk);