// typically declared before being used
// Often to refer to a union type or literal type for resuability 

type Combinable = number | string
type Literal = 'as-text' | 'as-number'


function combineable (input1: Combinable, input2: Combinable, convertResult: Literal ) {
    
    if ( convertResult === 'as-number') {
      return +input1 + +input2
       
    } else {
        return input1.toString() + ' ' + input2.toString()
    }    
}

combineable(10,15, 'as-number')
combineable(10,15, 'as-text') 