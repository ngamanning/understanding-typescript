// Objects are "things" we work with in code
// Classes are blueprint for objects (the object definition )

// Class definition
class Department {
    
    name: string;
    code: number;
    constructor ( name: string, code: number) {
        this.name = name
        this.code = code
    }

    describe () {
        console.log(`Department ${this.name}: Code ${this.code}`)
    }
}

// Create a department object
const education = new Department("Education", 112);
education.describe()

// The problem with this key word
const newDepartment = { describe: education.describe }
newDepartment.describe() //==> yeild Department undefined: Code undefined at runtime 

// Using Typescript to fix the this problem 
class ProperDepartment {
    
    name: string;
    code: number;
    constructor ( name: string, code: number) {
        this.name = name
        this.code = code
    }

    // declare describe must be called on an instance of ProperDepartment
    describe ( this: ProperDepartment) {
        console.log(`Department ${this.name}: Code ${this.code}`)
    }
}

const education1 = new ProperDepartment("Education", 112);
const newDepartment1 = { describe: education1.describe }
// newDepartment1.describe() //==> yeild compilation error
const newDepartment2= { name: 'Proper Education', code: 222, describe: education1.describe }
newDepartment2.describe() // => Department Proper Education: Code 222


// private and public access modifier 

class DepartmentWithoutAccessModifier {
    name: string;
    employees: string [] = []
    constructor ( n: string) {
        this.name = n
    }

    addEmployee ( employee: string) {
        this.employees.push(employee)
    }
}

const accounting = new DepartmentWithoutAccessModifier ("Accounting");
// Ways to add new employee 
accounting.addEmployee("Klaus") 
accounting.employees[1] = "Mina" // => no error 
console.log(accounting.employees) // => no error 


class DepartmentWithAccessModifier {
    name: string;
    // declare accessible within the class, enforcing the only way to add employee is through the addEmployee method 
    private employees: string [] = []
    constructor ( n: string) {
        this.name = n
    }

    addEmployee ( employee: string) {
        this.employees.push(employee)
    }
}

const strictAccounting = new DepartmentWithAccessModifier ("Accounting");
// the below codes returns compilation error 
// strictAccounting.employees[1] = "Mina"
// console.log(strictAccounting.employees)


// Shorthand initialzation 
class DepartmentWithShorthandInitialization {
  
   constructor( public name: string, private code: number) {
  }

  describe () {
    console.log(`${this.name} code is ${this.code}`)
  }
}

const newAccounting = new DepartmentWithShorthandInitialization('New Accounting',111)
newAccounting.describe()

// Readonly property 
class DepartmentWithReadonly {
    readonly code: number;
    name: string
    constructor (code: number, name: string) {
        this.code = code
        this.name = name
    }
}

const newDept = new DepartmentWithReadonly( 300, "New Department")
// newDept.code = 500  // => compilation error 


