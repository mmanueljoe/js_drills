// DRILL 3: Object operations
const users = [{id: 1, name: 'John', age: 25}, {id: 2, name: 'Jane', age: 30}, {id: 3, name: 'Johnson', age: 45}];

// merge objects
const employee1 = {
    id: 1,
    name: 'John',
    position: 'UI/UX designer',
    skills: {hardSkills: ['Prompt engineering', 'Product Design', 'Prototyping', 'UX Researching'],
        softSkills: ['Communication', 'Critical Thinking', 'Problem Solving']
    }
}

const employee2 = {
    id: 2,
    name: 'Joe',
    position: 'Frontend Engineer',
    skills: {hardSkills: ['Prompt engineering', 'Programming', 'System Design'],
        softSkills: ['Communication', 'Critical Thinking', 'Problem Solving']
    }
}

const Employees = {employee1, ...employee2};
console.log(Employees)


// deep clone
// TO-DO: don't know how to implement this
const deepClone = structuredClone(employee1);


// extract subset of properties
const { skills: { hardSkills } } = employee1;
console.log(hardSkills);



// transform object structure
// TO-DO: don't know to go about this
const byId = Object.fromEntries(users.map(user => [user.id, user]));
console.log(byId)

const summaries = users.map(({id, name}) => ({id, name}));
console.log(summaries)


const reshaped = users.map(user => ({userId: user.id, fullName: user.name, yearsOld: user.age}));
console.log(reshaped)

// group array of objects by property
const groupByAge = users.reduce((ageGroup, user) => {
    const age = user.age;

    if(!ageGroup[age]){
        ageGroup[age] = []
    }

    ageGroup[age].push(user.name);

    return ageGroup;
}, {})

console.log(groupByAge);
