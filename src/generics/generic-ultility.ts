// Generic utility type

// Parial type - makes all propperties defined in a type optional 

interface CourseGoal {
    name: string;
    description: string;
}

function createCourseGoal ( name: string, description: string) : CourseGoal{
    let newGoal : Partial<CourseGoal> = {};
    newGoal.name = name
    newGoal.description = description
    return newGoal as CourseGoal; 
}

// Readonly type 
const namesWithoutReadonly : string [] =  ['Max', 'Klaus']
namesWithoutReadonly.push('Foo')

const readOnlyNames : Readonly< string []> =  ['Max', 'Klaus']
// readOnlyNames.push('Foo') //=> compilation error 


const mutableGoal: CourseGoal = {
    name: 'Foo',
    description: 'fa'
}
mutableGoal.name ='Fee'

const readonlyGoal : Readonly<CourseGoal> = {
    name: 'Foo',
    description: 'fa'
}
// readonlyGoal.name = 'few' // => compilation error 
