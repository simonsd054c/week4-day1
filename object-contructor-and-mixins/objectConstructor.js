// class Vehicle {
//     constructor(make, model) {
//         this.make = make
//         this.model = model
//     }

//     run() {
//         return `${this.make} ${this.model} is running. Vrooommm!!!`
//     }
// }

// const accord = new Vehicle("honda", "accord")

// console.log(accord.make)
// console.log(accord.model)

// console.log(accord.run())


//Let's convert above class into object constructor
function Vehicle(make, model) {
    this.make = make
    this.model = model

    // this.run = function() {
    //     return `${make} ${model} is running. Vrooommm!!!`
    // }
}

// protoype - shared property among all the objects created using that object constructor



Vehicle.prototype.run = function() {
    return `${this.make} ${this.model} is running. Vrooommm!!!`
}

const corolla = new Vehicle("toyota", "corolla")

console.log(corolla.make)
console.log(corolla.model)

console.log(corolla.run())
