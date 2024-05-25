// passing functions as an argument



func2 = () => {
    console.log('this is function 2');

    return "returning some value";
}

func1 = (func2) => {
    console.log('this is function 1');

    console.log(func2());
}

func1(func2);



