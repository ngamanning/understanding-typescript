// Interface: describle the structure of an object
// Unlike class which is blueprint for creating new objects, interfaces are custom type
// Unlike custom type, interface can be use in class to enforce the class adheres to a pre-defined structure
// Why use interface: 
// - Want ensure the class adheres a certain structure, but the implementation is flexible per class, helpful when other parts of the code base rely on that structure

// Resource: More on TS Interfaces: https://www.typescriptlang.org/docs/handbook/interfaces.html

// Basic interface 
interface Person {
    name: string,
    age: number,
    sayHello (phrase: string) : void
}

let user1: Person

user1 = {
    name: 'John',
    age: 20,
    sayHello (phrase: string) {
      
    }
}

user1.sayHello("Good morning")

// Using interface in class
class PersonWithInterface implements Person {
    name: string
    age: number
    hobbies: string [] = []
    constructor( name: string, age: number) {
        this.name = name
        this.age = age
    }

    sayHello(phrase: string): void {
        console.log( phrase + ' ' + this.name)
    }

    addHobby (hobby: string) {
        this.hobbies.push(hobby)
    }
}

const user2 = new PersonWithInterface('Jane Doe', 40)
user2.addHobby('Read')

// Read-only interface 
interface Named {
    readonly name: string,
}

// Extending interface 
interface Greetable extends Named {
    greeting (phrase: string) : void
}

class GreetablePerson implements Greetable {
    
    name: string

    constructor (name: string) {
        this.name = name
    }
    greeting(phrase: string): void {
        console.log(phrase + ' ' + this.name)
    }  

}

// Interface as function type
interface AddFn {
    (a: number, b: number): number
}

let add: AddFn
add = (n1: number, n2: number) => n1 = n2

// equivalent to (more common)
type AddFnType = (a: number, b: number) => number
let addWithType : AddFnType
addWithType = (n1: number, n2: number) => n1 = n2


// Optional property - can also be used in class
interface OptionalName {
    readonly name: string,
    outputName ?: string // => mark output name as optional
}

let userWithOptionalName: OptionalName = {
    name: 'Foo'
}