
// to encapsulate the logic of a class property 
class DepartmentWithGetterSetter {

    employees :string [] = []
    constructor (public name: string, public code: number) {       
    }

    get newestEmployee () {
        if (this.employees.length === 0) {
            return 'No employee'
        }
        return this.employees[this.employees.length -1]
    }

    set newEmpployee (value: string) {
        this.addEmployee(value)
    }  

    private addEmployee( employee: string) {
        this.employees.push(employee)
    }
}


const accoutingWithGetter = new DepartmentWithGetterSetter( "Accouting", 222)
accoutingWithGetter.newEmpployee = 'Tom'
console.log(accoutingWithGetter.newestEmployee)

