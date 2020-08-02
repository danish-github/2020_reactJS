function square(x) {
    return x * x;
}

console.log(square(4));

const squareArrow = (x) => {
    return x *x ;
}

// arrow functions are anonymous

const squareArrow = (x) => x * x;

console.log(squareArrow(4));


const getFirstName = (fullName) => fullName.split(' ')[0];

console.log(getFirstName('Andrew Mead'));

