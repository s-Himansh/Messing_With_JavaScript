// destructuring is like opening the fields to the outside world
const obj = {name : "some name", age : 19, city : "some city"};

const { name, age, city } = obj;

console.log('name is ', name);
console.log('age is ', age);
console.log('city is ', city);




// spreading is like creating a deep copy data
const arr = [1, 2, 3, 4];
const newArr = [...arr];

console.log(newArr);


//* bonus concept
//* rest parameter can take any number of parameters and convert it into array


/*
    few things 
    rest parameters always come at last in terms of arguments
*/

const restParameters = (a, b, ...rest) => {
    console.log('rest paramters are ', rest);
    console.log("these are first and second parameters", a, b);
};

restParameters(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);