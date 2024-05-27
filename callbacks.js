// passing functions as an argument



func2 = () => {
    console.log('this is function 2');

    return null;
}

func1 = (func2) => {
    console.log('this is function 1');

    const ans = func2();

    console.log(ans);
}

func1(func2);



