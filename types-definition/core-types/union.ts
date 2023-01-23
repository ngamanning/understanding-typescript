// The union type 
let unionType : (string | number) []
unionType = [10, 'foo']
unionType = ['foo', 'foo', 10]

function combine (input1: number | string, input2: number | string) {
    
    if ( typeof(input1) ==='number' && typeof(input2) === 'number') {
      return input1 + input2
       
    } else {
        return input1.toString() + ' ' + input2.toString()
    }    
}

const combineAges = combine(10,15)
const combineStr = combine(10,"15")