/**** GENERICS  */ 

// 1) a simple generics
function merge <T,U> (a :T, b :U) {
    return Object.assign(a,b)
}

const mergedOutput = merge({name: 'Klause'}, {age: 11})
console.log (mergedOutput) // {name: 'Klause', age: 11}

const mergedOutputWrong = merge({name: 'Klause'}, 11)
console.log (mergedOutputWrong) // {name: 'Klause'} - Object.assign(a,b) silently exlude argument b as 11 is not an object

// 2) generic type constraint - forcing generics to be a certain type
function mergeWithTypeConstraint  <T extends object ,U extends object> (a :T, b :U) {
    return Object.assign(a,b)
}

const mergedOutputWithTypeConstraint = mergeWithTypeConstraint({name: 'Klause'}, {age: 11})
console.log (mergedOutputWithTypeConstraint) // {name: 'Klause', age: 11}
// const mergedOutputWithTypeConstraintIncorect = mergeWithTypeConstraint({name: 'Klause'}, 11) // => compilation error


// 3) A generic function example with constraint 
interface Lengthy {
    length: number
}
 // extends lengthy will allow the function to work with any type that has length prop, such as string or array 
function countLengthAndDescrible<T extends Lengthy> ( element : T ) : [T, string] {
    let text = 'Has no value'
    if (element.length > 0) {
        text = `Has ${element.length} element${element.length === 1 ? '' : 's'}`
    }
    return [element, text]
}

const countString = countLengthAndDescrible('The cat has awake')
console.log(countString)

const countArray = countLengthAndDescrible(['eat','sleep','play'])
console.log(countArray)
// const countNumber= countLengthAndDescrible(1) // => error: number does not have length prop

// 4) setting constraint with keyof to avoid dumb mistake of accessing a key that doesn't exist 
function extract <T extends object, U extends keyof T> (obj: T , key : U) {
    return `value is ${ obj[key] }`
}

extract({name: 'Klaus'},'name')
// extract({name: 'Klaus'},'age') // => error as age is not a property of the first argument object