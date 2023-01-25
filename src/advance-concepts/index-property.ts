// Index property 

// An interface that has flexible key
interface ErrorContainer {
    // declares all properties in this interface must have a string property with string value
    [prop: string] : string
}

// implementation 
const errorBag : ErrorContainer = {
    id: '',
    email: 'not a vailid email',
    user: 'not a valid user'
    // code: 3 ==> invalid 
}