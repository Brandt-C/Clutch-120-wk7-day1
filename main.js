console.log('hi world!')


// This is a comment, specifically this is a single-line comment
/*  This is a multi
-line
comment
*/
/* */

/*
    Differences with Python:
        - Python is an interpreted language
            -reads it top-down as is
        - JavaScript is a compiled Lang
            - spaces and lines will be elliminated and variables read/processed 
            first
*/
// specific python vs JS:
/*
    - Strings -->   SAME
    -  Bools  -->  SAME
    -  Int ---> number
    -  Float ---> number

*/

/* 
SYNTAX practices:  snake_case is for Python 
and camelCase is for JavaScript

*/
//  use your semi-colons to end a line!
//  Variable definition:
var x = 56;
console.log(x);
var name = 'Brandt';
console.log(name);
console.log(typeof name);
console.log(typeof x);


// Booleans
var bool1 = true;
var bool2 = false;
console.log(typeof bool1);
console.log(bool2);

// lists and dictionaries:
//         -Arrays
//          -Objects

// array
var jsArr = [12, 32, 34, 'strings', false, name];
console.log(jsArr);

console.log(jsArr[0]);
console.log(jsArr[4]);

//Object
var jsObj = { 'a Key': 'aValue'};
var jsObj2 = { anotherKey : 'another_value'};

console.log(jsObj);

// Just like Python with the brackets
console.log(jsObj2['anotherKey']);  // Bracket notation always works

// OR
console.log(jsObj2.anotherKey);  // dot notation USUALLY works


console.log(hoisted_var);
var hoisted_var = "I'm hoisted!"
console.log(hoisted_var);


/// ^^^^^ don't do this!!!!  BAD practice. . .   var shouldn't be regularly 
// used anymore

// The right way:
//  let and const
/*
- let:
    - let allows for re-definition but NOT re-declaration
- const:
    - const doesn't allow for either 

*/

let qw = 5;
console.log(qw);
qw = 67;
console.log(qw);


const pipi = 3.141512;
console.log(pipi);
/*

A SIDEBAR!  The JS equivalent of an f-string:
``````````````````````````````-->  these are BACK-TICKS!!!
''''''''''''''''''''''''''''''--> these are single quotes!
- in python we do this:
    f_string = f"this is the string with a {variable}"
`       ` 
- in JS:
    fString = `We use this string with back-ticks and ${variable}`
*/
console.log('\n', 'MATH section here:');

/* MATH operators:
        -mostly the same as Python!
*/

// add   +
console.log('addition');
console.log(34 + 89);

// sub -
console.log('subtraction');
console.log(50-30);

// multiplication *
console.log('multiplication');
console.log(10 * 5);

//division /
console.log('division');
console.log(10 / 5);

// exponents **
console.log('exponents');
console.log(10 ** 5);

//division revisited!
console.log('back to division');
let numExp = 33 / 5.3
console.log(numExp);

/*
Rounding
Math.round(<value>)
Math.floor(<value>)
Math.ceil(<value>)
*/
console.log(Math.round(numExp));
console.log(Math.floor(numExp));
console.log(Math.ceil(numExp));

// .toFixed()  -->  you'll see this a lot, it's out-of-place
console.log(numExp.toFixed(2));
console.log(numExp);

let newNum = 3.1415

// quick workaround to actually round - mult * 100, round to int, divide / 100
console.log(Math.round(newNum*100)/100);

// https://www.youtube.com/watch?v=et8xNAc2ic8  JS WTF video

let test =  4.14 + '4';
console.log(test);
console.log(typeof test);

let test2 = '4' + false ;
console.log(test2);
console.log(typeof test2);

let test3 = 3 + true ;
console.log(test3);
console.log(typeof test3);

let test4 = 3 + false ;
console.log(test4);
console.log(typeof test4);

let test5 = [] + undefined ;
console.log(test5);
console.log(typeof test5);

let test6 = [] + false ;
console.log(test6);
console.log(typeof test6);

let test7 = [] + 45 ;
console.log(test7);
console.log(typeof test7);

let gwen = ('b' + 'a' + + 'b' + 'a');
console.log(gwen);

// NaN is NOT A NUMBER

console.log('FUNCTIONS', '\n')

// def function(parameters):  --Pythonish
//     code to execute
// SIMPLE SYNTAX:
// function <name>(parameters){code to execute}
function helloWorld(){
    return 'Hi There CLUTCH!'
};
console.log(helloWorld());
let ret_val = helloWorld();
console.log(ret_val);

let helloName = function(n){
    return `Hi there mr/ms/mx ${n}!`
};

let ret_val2 = helloName('Connor');
console.log(ret_val2);

// Another way, arrow functions
// ()=>{}

let nextHi = (n) => {
    return `Hello AGAIN ${n}`
};
console.log(nextHi('David'));

//Some notes on arrow function definition with parameters:
//  only 1 parameter --> we can drop the parenthesis!
//  no parameters means we need them, multiples same thing

// self-invoking func example:
console.log(((n)=>{return `HELLO for the last time ${n}`})('Kaytlin'));

console.log('CONDITIONALS!', '\n');
/*
Python:
if 
elif
else

JS:
if (condition){
    code block
}else if (condition){
    code block
}else {
    code block
}
*/

let age = 68;
if (age < 18){
    console.log('KID')
} else if (age > 65){
    console.log('senior')
} else {
    console.log('adult')
};

// Comparison operators are ALL the same as Python  (<, >, <=),
// but not everything:
//  and -->  &&
//  or  --> ||
//  equality check requires more thought because we have == AND ===
//  == checks for equality of value but not type
//  === check both

console.log('10' == 10); //true
console.log('10' === 10); //false
console.log(10 === 10);  //true

let color = 'blue';

if (color === 'blue' || color === 'white'){
    console.log('This is the OR conditional firing')
}else if (color === 'blue' && color === 'white'){
    console.log('AND conditional firing!')
};

//LOOPING
// Mostly the same as Python but MORE ways to do it

//  The gold standard for loop in JS: 
// (like a typical for-loop in python)
let orig_test = 'abcdefgh';
// for i in (range(len(iterable))):
//     print(iterable[i])
for (let i = 0; i < orig_test.length; i++ ){
    console.log(orig_test[i])
};


//while loop
let ind = 0;
while (ind < 10){
    console.log(ind);
    ind++;
}



//nested loops- of course
let tester = 'xyzabc';
for (let i = 0; i<tester.length; i++){
    for (let j = 1; j < 5; j++){
        console.log(tester[i], j)
    }
};

//for of and for each loops are also options!!!


// the do-while loop
do {
    console.log('first step');
} while(false){
    console.log('I should not be showing!!!')
} // Will take one step regardless of false condition for loop

//  Back to ARRAYS!
let animals = ['bear', 'tiger', 'elephant', 'monkey'];

for (let i = 0; i<animals.length; i++){
    console.log(animals[i])
};

// adding and removing values:

console.log(animals);
console.log(animals.push('eagle'));
console.log(animals);

//removal. . . little bit trickier
// splice, pop, shift

animals.pop();
console.log(animals);

animals.splice(2, 1);
console.log(animals);
animals.push('elephant');
console.log(animals);

// let's re-create .remove!!!!
const removeFunc = (arr, v) => {
    for (let i = 0; i < arr.length; i++){
    if (arr[i] === v){
        arr.splice(i, 1);
        break;
    }
}
}
removeFunc(animals, 'elephant');
console.log(animals);
// slice. . .  in python [::]
// start is only required param, end is optional non-inclusive

console.log(animals.slice(1, 2));


//other array methods of mention:
// .join(), indexOf()
// .join -->  in python it's "sep".join(iterable)

let animalsStr = animals.join(', ');
console.log(animalsStr);

// .search() which is a string method
let search_str = 'Bald Eagle';
console.log(search_str.search('d'));


animals.push('elephant');
console.log(animals);
animals.splice(1, 1, 'bear')

switch (animals[1]){
    case 'tiger':
        console.log('what big teeth you have');
        break;
    case 'bear':
        console.log('what thick fur you have!');
        break;
    default:
    console.log('what kind of animal are you?');
    break;
}
