// Static method or property: add method or property to a class that is not accessible on class instances
// Best used for ultility property or methods 
class DepartmentStatic {
    static fiscalYear = 2023
    constructor (name: string, code: number) {
       // this.fiscalYear => cannot access static property inside constructor 
    }
}

const IT = new DepartmentStatic("IT department",111)
console.log(DepartmentStatic.fiscalYear)


// Abstract - enforce the structure of based class but defer the implementation to the instances
abstract class DepartmentAbstract {

    employees: string [] = []
    constructor (name: string, number: number) {

    }
    abstract addEmployee (employeee: string) : void;
}

class ITDepartmentAbstract extends DepartmentAbstract {
    constructor( number: number) {
        super("IT department ", number)
    }
    addEmployee(employeee: string): void {
        this.employees.push(employeee)
    }

}

const itAbstractDept = new ITDepartmentAbstract(400)
itAbstractDept.addEmployee("Foo")
console.log( itAbstractDept.employees)