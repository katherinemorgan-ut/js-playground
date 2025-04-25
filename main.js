console.log('Hello world');
// console.error('This is an error');

// var, let and const. Don't use var. 

// Data types: primitive (string, number, bool, null, undefined, symbol)

// Constructor function
function Person(firstName, lastName, dateOfBirth) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dateOfBirth = new Date(dateOfBirth);
    // Method - fxn within a constructor 
}

Person.prototype.getBirthYear = function() {
    return this.dateOfBirth.getFullYear();
}

Person.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`
}

// Instantiate an object 
const person1 = new Person('Kitty', 'Morgan', '9-29-1996');
console.log(person1);
console.log(person1.getBirthYear());

// ==========================================================

// Class
class Person {
    constructor(firstName, lastName, dateOfBirth) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dateOfBirth = new Date(dateOfBirth);
    }

    getBirthYear() {
        return this.dateOfBirth.getFullYear();
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`
    }
}