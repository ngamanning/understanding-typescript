// function overloads - helpful when typescript cannot infer the return type on its own

type Combineable = string | number

function add (a: number, b: number) : number; // Overload definition
function add (a: string, b: string) : string; // Overload definition
function add (a: Combineable, b: Combineable)  {
    if (typeof(a) ==='string' && typeof(b) ==='string') {
        return a.toString() + b.toString()
    }
    return +a + +b
}


const resultStr = add('Max','Swabb')
resultStr.split('') // string function on result is now available 

const resultNumeric = add(4,5)
resultNumeric.toFixed(2) // match function on result is now available 


