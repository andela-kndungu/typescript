window.onload = function afterLoad() {
    class Student{
        fullname: string;
        constructor(public firstName, public middleInitial, public lastName) {
            this.fullname = firstName + ' ' + middleInitial + ' ' + lastName;
        } 
    }
    
    interface Person {
        firstName: string;
        lastName: string;
    }

    function greeter(person: Person) {
        return 'Hello ' + person.firstName +  ' ' + person.lastName;
    }
    
    var user = new Student('James', 'E.', 'Jones');
    
    document.body.innerHTML = greeter(user);
}
