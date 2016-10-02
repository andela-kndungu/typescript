window.onload = function afterLoad() {
    function greeter(person: string) {
        return 'Hello ' + person;
    }
    
    var user = 23;
    
    document.body.innerHTML = greeter(user);
}
