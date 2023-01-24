// Class with inheritance 
class Department {    
    name: string;
    code: number;
    private employees: string [] = [] // Only accessible within Department class
    protected protectedEmployees: string [] = [] // private but accessible from inherited classes

    constructor (  code: number, name: string,) {
        this.name = name
        this.code = code
    }

    describe () {
        console.log(`Department ${this.name}: Code ${this.code}`)
    }

    addEmployee ( employee: string) {
        this.employees.push(employee)
    }
}

class ITDepartment extends Department {
   
    constructor( code: number, public admin: string) {
        // Must call super to call constructor of base class
        super( code, 'IT')
    }

    getAdmin() {
        console.log ('Admin is ' + this.admin)
    }
}
const itDept = new ITDepartment(300, 'Klaus');
itDept.describe() // => Department IT: Code 300
itDept.getAdmin() // Admin is Klaus


class AccountingDepartment extends Department {
    constructor (code: number, private reports: string [] = []) {
        super(code, 'Accounting')
    }

    addReport( report: string) {
        this.reports.push(report)
    }
    getReports() {
        console.log(this.reports)
    }
}

const accounting1 = new AccountingDepartment(400)
accounting1.describe() 
accounting1.addReport('Annual sales')
accounting1.getReports()

