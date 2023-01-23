// Never type 
// never is  type that a function can return 

function generateError (message: string, code: number) : never{
    throw { message: message, errorCode: code}
}


