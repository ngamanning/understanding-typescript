// Private constructor - a technique to create a singleton pattern on a class
// The idea behind singleton is to ensure that there is only one instance of the 
// class at any given time 


class DepartmentWithSingleton {
    employees: string [] = []
    private static instance : DepartmentWithSingleton
    private constructor(private name: string, private code: number) {      
       
    }

    static getInstance( name: string, code: number) {
        if (this.instance) {
            return this.instance
        }
        this.instance = new DepartmentWithSingleton(name, code)
        return this.instance
    }
}

const singletonAccounting = DepartmentWithSingleton.getInstance("Accounting",300)
const singletonAccounting2 = DepartmentWithSingleton.getInstance("Accounting2",300)

console.log(singletonAccounting)  //DepartmentWithSingleton {name: 'Accounting', code: 300, employees: Array(0)}
console.log(singletonAccounting2) // DepartmentWithSingleton {name: 'Accounting', code: 300, employees: Array(0)}
