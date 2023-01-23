// Literal type - build on union type but more specific about what value a type definition can accept
// In the example below, the convertResult argument is a string type, but only accept as-number, as-text

function combineWithLiteral (input1: number | string, input2: number | string, convertResult: 'as-number' | 'as-text' ) {
    
    if ( convertResult === 'as-number') {
      return +input1 + +input2
       
    } else {
        return input1.toString() + ' ' + input2.toString()
    }    
}

const combineAgesWithLiteral = combineWithLiteral(10,15, 'as-number')
const combineAgesWithLiteralText = combineWithLiteral(10,15, 'as-text') 