// INTERSECTION TYPE 
// Allows combine types - with object type, intersection type combines the base togethers together

// intersection with custom types
type Admin = {
    name: string;
    privileges : string []
}

type User = {
    name: string;
    code: number
}

type SuperUser = Admin & User
// with object type, intersection type combines the base togethers together
const admin : SuperUser = {
    name: 'Admin',
    code: 200,
    privileges: ['read-write']
}

// Intersection with interface
interface IAdmin {
    name: string;
    privileges: string []
}

interface IUser {
    name: string;
    code: number
}

interface ISuperUser extends IAdmin, IUser {};

const adminInterface : ISuperUser = {
    name: 'Admin',
    code: 200,
    privileges: ['read-write']
}

// intersection with union type - the intersection type takes the common properties of the base type

type Combinable = string | number
type Numeric = number | boolean

type Universal = Combinable & Numeric

const alpha : Universal = 40 // Only number property 