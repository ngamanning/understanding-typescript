// return type of function
function add ( n1: number, n2: number) {
    return n1 + n2
}

function addWithReturnType ( n1: number, n2: number) : number {
    return n1 + n2
}

// function return void 
function print ( n1: number) : void {
    console.log("The number is " + n1)
}

console.log(print(6)) // ==> yeild undefined

// function as TYPE - a custom type that describe a function
let combine : ( a: number, b: number) => number
combine = add
console.log(combine(8,8))


// function types in callback 
function addAndDoSomething (n1: number, n2: number, doSomething: ( r: number ) => void) {
    const result = n1 + n2
    doSomething(result)
}

addAndDoSomething(8,10, print)
addAndDoSomething(8,10, (result) => console.log("The new number is " + result))