// Parent class
class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a sound.`);
    }
}

// Child class inheriting from Animal
class Dog extends Animal {
    constructor(name, breed) {
        super(name); // Call the parent class constructor
        this.breed = breed;
    }

    bark() {
        console.log(`${this.name} barks! Woof woof!`);
    }
}

// Create an instance of Dog
let myDog = new Dog("Buddy","Golden Retriever");

// Call methods
myDog.speak(); // Buddy makes a sound.
myDog.bark();  // Buddy barks! Woof woof!
