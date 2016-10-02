window.onload = function afterLoad() {
    interface Person {
        firstName: string;
        lastName: string;
    }

    function greeter(person: Person) {
        return 'Hello ' + person.firstName +  ' ' + person.lastName;
    }
    
    var user = { firstName: 'John', lastName: 'Doe' };
    
    document.body.innerHTML = greeter(user);
}
