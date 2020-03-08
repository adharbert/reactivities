let data: number;


interface ICar {
    color: string;
    model: string;
    topSpeed?: number;
}

const car1: ICar = {
    color: 'blue',
    model: 'BMW'
}

const car2: ICar = {
    color: 'red',
    model: 'Mercedes',
    topSpeed: 100
}


// must define x & y to any
/*
const multiply = (x, y) {
    return x*y;
}
*/

// basic multiply returning value
const multiply = (x: any, y: any) => {
    return x*y;
}

// force result to be string instead of number
const multiplyReturnString = (x: any, y: any): string => {
    return (x*y).toString();
}
