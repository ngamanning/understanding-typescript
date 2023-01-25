
// Type guards
interface IAdmin {
    name: string;
    privileges: string []
}

interface IUser {
    name: string;
    code: number
}

type UnknownUser = IAdmin | IUser;

function printEmpName ( emp: UnknownUser ) {
    
    console.log(emp.name)

    // Js in key word - check if a property exists in an object
    if ('privileges' in emp) {
        console.log(emp.privileges)
    }  
}


// Type guard with class 
class SUV {
    drive() {
        console.log( 'driving')
    }
}

class Truck {
    drive() {
        console.log( 'Truck driving')
    }

    loadCargo () {
        console.log( 'Loading')
    }
}

type Vehicle = SUV | Truck
const suv = new SUV()
const truck = new Truck()

function useVehicle ( vehicle :Vehicle) {
    vehicle.drive()

    // Type checking with keyword instance of 
    if ( vehicle instanceof Truck) {
        vehicle.loadCargo()
    }   
}

useVehicle(suv)
useVehicle(truck)

// Type guarding with discriminated union 
interface Bird {
    kind: 'bird',
    flyingSpeed: number
}

interface Horse {
    kind: 'horse',
    runningSpeed: number
}

type Animal = Bird | Horse

function move (animal: Animal) {
    let speed = 0
    switch (animal.kind) {
        case 'horse' : speed = animal.runningSpeed; break;
        case 'bird' : speed = animal.flyingSpeed
    }
    console.log( 'Moving at speed ' + speed)
}

move({kind: 'bird', flyingSpeed: 40})

// Type guarding with type casting: tell TypeScript some value is of specific type when TS cannot detect on is own,  useful when working with DOM. 

const paragraph = document.querySelector('p') // infered:  HtmlParagraphElement | null
const paragraphById = document.getElementById('#myDiv') // infered: HtmlElement | null
const input = document.getElementById('#my=input') // infered: HtmlElement | null


// 1) Type casting method 1
const castedInput = document.getElementById('#my=input2') ! as HTMLInputElement // Cast input as HTMLInputElement
const castedInputWithAnotherSyntax = <HTMLInputElement>document.getElementById('#my=input2') !
castedInput.value = 'Foo'
castedInputWithAnotherSyntax.value = 'Bar'


