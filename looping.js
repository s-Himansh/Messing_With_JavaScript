// creating an object

// can only traverse on arrays

const arr = [
    {firstName : "Ron", lastName : "Kenley"}
];

// console.log(arr);


let ww = arr.forEach((element, index, arr) => {
    // console.log(element, " ", index, " ", arr);

    return element;
});

// forEach loop returns nothing. That's why we get undefined
// console.log(ww);

// for (i=0; i<arr.length; i++){
//     console.log(arr[i]);
// }


// whereas map always returns something. If we don't return anything it'll provide me undefined for the times the map is working

const names = [
    {firstName : "Robert", lastName : "Handleman"},
    {firstName : "Neil", lastName : "Armstrong"},
    {firstName : "Sarah", lastName : "Ellis"}
];

const returnVals = names.map((element, index, names) => {
    // console.log(element, " ", index);

    if (index > 0){
        return element;
    }
});

// console.log(returnVals)

// for filtering the data
const impFigures = [
    {firstName : "Robert", lastName : "Handleman", age : 34},
    {firstName : "Neil", lastName : "Armstrong", age : 56},
    {firstName : "Sarah", lastName : "Ellis", age : 43}
];


const filtering = (element, index, arr) => {
    return element.age > 34;
}

const result = impFigures.filter(filtering);

result.forEach((element) => {
    console.log(element.firstName);
})