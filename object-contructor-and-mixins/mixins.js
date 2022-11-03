const say = {
    sayHi() {
        return `Hi! My name is ${this.name}`
    }
}

class Person {
    constructor(name) {
        this.name = name
    }

    // sayHi() {
    //     return `Hi! My name is ${this.name}`
    // }

}

// Siri, Alexa
class VirtualAssistant {
    constructor(name) {
        this.name = name
    }

    // sayHi() {
    //     return `Hi! My name is ${this.name}`
    // }

}

Object.assign(Person.prototype, say)

Object.assign(VirtualAssistant.prototype, say)

const person1 = new Person("John")

const siri = new VirtualAssistant("Siri")

console.log(person1.sayHi())

console.log(siri.sayHi())