// The unknown type - a more restrictive variation of any 

let userInput: unknown
let userName : string

userInput = 5
userInput = "Klaus"

if ( typeof(userInput) === 'string') {
    userName = userInput 
}

// VS any

let userInputAny: any
let anyName : string
anyName = userInputAny