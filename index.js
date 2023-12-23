const getFullName= (fname, lname)=> {
    return `${fname} ${lname}`;
}

const actual = getFullName('John', 'Doe');

const expected = 'JohnDoe';

if(actual !== expected) {
    throw new Error(`${actual} is not equal to ${expected}`);
}