//Typeof Operator
const uniqueID= Symbol('quite', 3)
console.log(typeof uniqueID)// returns 'Symbol'

//Variable Declarator
var name= 'Kofi';
var surname= 'Asamoah'

//The value of an object key can be changed even if the object is assigned to a var declared with const
const pair = { value: 'Alexa' };
pair.value = 'Siri'; 
console.log()

//Scope
{
    let car$s= 3;
    console.log(car$s)
   
}
console.log('This is backslash \\ \nAnd this is a new line'.repeat(2))
console.log(`My name is ${name.concat(` ${surname}`)}`)//Template literals can be used as argument in string methods

const newLine= `My name is ${name}.And I was born in Tema`;


/*Work on this
const flot= Number(prompt('Enter number: '));
console.log(Number.isInteger(flot))
if(!(Number.isInteger(flot))){
    alert('Number is float');
}
else if(flot===0){
    alert('You cancelld the program');
}
else if(flot==''){
    alert('Please enter a number');
}

else if(Number.isNaN(flot)){
    alert('Please enter a number');
}
else{
    alert('Number is integer');
}//A test to see 
*/

console.log(0b1010)//Binary
console.log(2E3)//2 times 10 raised to the 3rd power

const newNo= Number('2');//The number function can be used to convert string to number. If the string cannot be converted like letters, NaN is returned
console.log(parseInt('2')+ 3)
console.log(28101..toString(36))


document.body.style.textAlign= 'justify';//Just trying the DOM

/* Week 2 programing basics assignment
const question= prompt('What is superman\'s real name?');
alert (`You answered ${question}. Thank you.`);
*/
console.log(typeof Number('qm'))//To test is it will be converted to number

const heroes= ['Batman', 'Wonder Woman', 'Flash', undefined, undefined, 'Aquaman']
delete heroes[3]

heroes.slice(3, 4);//slicing


//Destructing an array- taking elements out of an array and presenting them as individual elements or variables
const [kofi, ama]= [23, 18];//kofi and ama are the variables and assigned to 23 and 18 respectively. This gives us a neat way of swapping values--- [kofi, ama]= [ama, kofi]

//When a primitive datatype is added to a set, even if the original object is removed , the set will still store it.
let array = [1,2,3];
const strong = new Set().add(array);
array = null; // remove reference to the original

const newArr= Array.from(strong)[0]//Using [0] at the end makes the element accessible in the console.
const newArr2= [...strong][0]//I put the [0] because I wanted to access my elements in the console.
console.log(newArr2)
console.log(newArr)

//Tenary operator ? for conditionals
const n= 3;
n===3 ? (console.log(true)) : (console.log(false));

//Tenary operator inside a template string
console.log(`n is an ${n % 2 === 0? 'even' : 'odd'} nuber`);

//A for loop to countdown from 10
for(var i= 10; i > 0; i--){
    console.log(i)
}

//A while loop to countdown from 20
var count= 20;
while(count > 0){/*This means keep repeating the code below as long as the vaar above is greater than 0*/
    console.log(count);
    count--;/*This is th deceement opearator, it decreases the count var by 1 so it counts down*/
}
//A more concise
var counter= 50;
while(--counter){
    console.log(counter)
}//this will never reach zero because the 0 is falsy value

/*Infinite loop
let n = 1;
while(n>0){
console.log('Hello');
n++; //the increment will make the loop continue forever unless you stop it
}
*/

let no = 3;
while(no>=0){
console.log(no);
no--;//Using the decrement operator works
}

let bottles = 5;
do {
console.log(`There were ${bottles} green bottles, hanging on a wall. And if one green bottle should accidentally fall, there'd be ${bottles-1} green bottles hanging on the wall`);
bottles--;
} while (bottles > 0)
//Two tims table
for(i=1; i<13; i++){
    console.log(`2 * ${i} = ${2*i}`)
}

//nested for loop
for(im=1; im<13; im++){
    for(jm=1; jm<13; jm++){
        console.log(`${im} * ${jm} = ${im*jm}`)
    }
}


const newSet= new Set('hello');
for(const value of newSet){
    console.log(value)
}


/*
const quiz= [
    ['What is Superman\'s real name?', 'Clark Kent'],
    ['What is Wonder Woman\'s real name?', 'Diana Prince'],
    ['What is Batman\'s real name?', 'Bruce Wayne'], 
    ['What is Flash\'s real name?', 'Barry Allen']
]
let score= 0;
for(const [question, answer] of quiz){
    const response= prompt(question);
    if(response === answer){
        alert('Correct');
        score++;
    }
    else if(response== 0){
        alert('You entered nothing')
    }
    else{
        alert(`wrong, the correct answer is ${answer}`)
    }
}
alert(`Game Over, you scored ${score} point${score > 1  ?'s' : ''} out of ${quiz.length} total points`)

*/

const holder= function(){
    return arguments;
}
console.log(holder('hello', NaN))

//The rest operator is created as a parameter. It will collect all the arguments that will be passed in the function when it is called or invoked and create an array for them. since the rest operator create an array for future arguments, I used the for-of loop to iterate over each value that will be given as argument. If you pass an argument, it will override the default value. Default values should always come after non default values or the function will fail but the parameters will be reserved. Arrow functions are one of the main  
function mean(...args){
    let total= 0;
    for(const value of args){
        total+= value;
    }
    return total/args.length;
}
console.log(mean(100, 100, 100));


/*Using for-in loop
function mean(...args){
    let total= 0;
    for(const value in args){
        total+= args[value];
    }
    return total/args.length;
}
console.log(mean(100, 100, 100));
*/

/*Using for loop
function mean(...args){
    let total= 0;
    for(let i=0; i<args.length; i++){
        total+= args[i];
    }
    return total/args.length;
}
console.log(mean(100, 100, 100));
*/

const square = x => console.log(`Hello ${x}`);
 square('World');


 
//A better way of sorting an array with numerical values. Provide a callback function to the sort() method that tells it how to compare two values, aand b. The callback function should return the following: 1) A negative value if a comes before b 2)0 if a and b are equal 3)A positive value if a comes after b. Here is the function: 
/* This preventsoverflow errors. 
function numerically (a,b) {
if (a < b) {
return -1;
} else if (a> b) {
return 1;
} else {
return 0;
}
}

*/

//Using forEach
const colors= ['red', 'blue', 'violet'];

colors.forEach( (color, index) => console.log(`Color at position ${index} is ${color}`) );



//Using Map
function squared(x){
    return 2 * x;
}

const mAp= [1, 2, 3, 4]
mAp.map(squared)

{
    //increment and decrement
    let a= 2, b= 3;
    a= ++b;
    console.log(a);
}


//Testing the pre and post increment operators
let point= 200;
console.log(point++);

/**Infinity
 Used to represent a number too big for JS
 Infinity can also be maintained by dividing by zero
**/
console.log(2e308);//This will be an Infinity
{//Trying the Boolean function to check boolean values
    if(Boolean(-0)== true){
        console.log('TRUE');
    }
    else {
        console.log('FALSE');
    }

    let point= 3;
    console.log(typeof !point);
}

console.log(Number('5')===5)//Using hard equality ensures you convert string to number to avoid coercion.

let avengers = ['Captain America', 'Iron Man', 'Thor', 'Hulk', 'Hawkeye', 'Black Widow'];
let jla= ['Batman', 'Superman', 'Wonder Woman', 'Cyborg', 'Aquaman', 'Martian Manhunter', 'Green Lantern']
avengers= [...avengers, ...jla]// The spread operator is an alternative to concat() method with assignment--> avengers= avengers.concat(jla)

/*Creating Sets
The add() method is used to add values
The size method is used to find the number of values
The has(value) method is used to check for a value and returns a boolean value
The delete(value) method is used to remove values
The clear() method is used to remove all values
The Array.from() function can alslo be used to convert sets to array
*/
const sets= new Set();
sets.add(100);
console.log(sets);
const sets2= new Set(avengers);
console.log(sets2);
const sets3= new Set();
sets3.add('value1').add('value2').add('value3').add('value4');
const setsArray= [...sets3];//One way of converting sets to array
jla.concat([...sets3]);//Another way of converting sets to array
const setsArray2= Array.from(sets3)
//By combining this use of the spread operator with the ability to pass an array to the new Set() constructor, we now have a convenient way to create a copy of an array with any duplicate values removed
const duplicate = [3, 1, 4, 1, 5, 9, 2, 6 ,5,3,5,9];
const nonDuplicate = [...new Set(duplicate)];



/*Maps
They are a
convenient way of keeping a list of key and value pairs, and are similar to “hashes”, or“hash tables” or “dictionaries” in other programming languages.
Maps are similar to JavaScript objects but they have some noticeable differences:
Maps use any datatype as a key.
With the size property of Maps you can efficiently find the number of key-value pairs.
Maps are solely focused on the storage and retrieval of key-value pairs.
*/

const romanNumerals = new Map();
romanNumerals.set(1, 'I').set(2, 'II').set(3, 'III').set(4, 'IV').set(5,'V');// The set method is used to add key and value to maps
console.log(romanNumerals);
romanNumerals.get(4);// To look up a value, we can use the get() method:

console.log(romanNumerals.has(10));//The has() method can be used to check if a particular key is in a map and returns a boolean
console.log(romanNumerals.size);//The size property returns the number of values
/*
The delete() method takes the key as an argument and removes the key/value pair and returns a boolean depending on wether the was in the map and removed and not in the map and not removed.
The clear() method removes all values
*/
const heroesMap = new Map([ ['Clark Kent','Superman'],['Bruce Wayne', 'Batman'], ['Victor Stone', 'Cyborg']]);// Multidimensional array can be used to add multiple values to a map at the instance of creating it.

/*
Converting maps to nested or multidimensional array
Use the sread operator or the Array.from() function
*/

/*Logic- Switch Statement

*/

const test= 6;

switch(test){
    case 5: console.log('Yeah it is 5');
    break;
    case 4: console.log('Yeah it is 4');
    break;
    case 3: console.log('Yeah it is 3');
    break;
    default: console.log('Yeah none');
    break;
}

let cnt= 0;
for(i=1; i<= 5; i++){
    cnt+= 1;
        console.log(`${i} + ${cnt} = ${i + cnt} `)
}


let cntr= 2, itr= 1;
while(itr<=5){
    //cntr+=1;
    console.log(`${itr} * ${cntr} = ${itr * cntr}`)
    itr++;
}

let bottles1 = 11;
while (--bottles1){
console.log(`There were ${bottles1} green bottles, hanging on a wall. And if one green bottle should accidentally fall, there'd be ${bottles1-1} green bottles hanging on the wall`);
}

let bottles2 = 5;
do {
console.log(`There were ${bottles2} green bottles, hanging on a wall. And if one green bottle should accidentally fall, there'd be ${bottles2-1} green bottles hanging on the wall`);
bottles2--;
} while (bottles2 > 0);//do-while loop

const heroesArr= [...heroesMap];//I converted the map to an array and loop through it below using for loop

for(let i=0; i< heroesArr.length; i++){
    console.log(heroesArr[i]);
}

/*For-of loop
An Improved iterator for Arrays, Sets and Maps in ES6
Simple and short but the var that replaces all the setup in a for loop should be declared with const
*/
for(const value of heroesArr){
    console.log(value);
}

for(const [key, item] of romanNumerals.entries()){
    console.log(key + ' = ' + item);
}//Using thw entries method to get both key and value in maps

/*FUNCTIONs
 Methods of Creating
 1. Function Literal or declaration
 2. Function Expression- Anonymous function expression and named function expression.
 Both anonymous and named functions shhould be terminated with a semicolon to complete the assignment.
 3. Function constructors- not recommended. Functions created this have global scope everywhere.
*/
/*Function Literal*/
function hello(){
    console.log('Hello World');
}

/*Function Exp
 1.  Anonymous Fx exp
 2. Nmaed fx exp
*/
const hello2= function(){
    console.log('hello world');
};

const hello3= function showHello(){
    console.log('hello world');
};
/*Function that don't return anything returns undefined*/
const hello4= function(){
    return 'Hello World'
};
/*Assigning a function invocation to a var 
The value of the var will be the returned value of the function.
The var won't be a function but will take the datatype of the returned value.
You don't need to end the var with parentheses to invoke the function
*/
const hello5= hello4();

/*Parameter and Argument 
 Any parameters a function needs are set when the function isdefined. When a function is invoked, it is provided with arguments.
*/
function square1(x){
    return x*x;
}//The parameter x is set with the function
console.log(square1(2));//The argument is provided 
/*Multiple parameters and arguments*/
function mean1(a, b, c){
    return (a + b + c)/3
}
console.log(mean1(100, 100, 100));//

/*Variable Number of Arguments
  Not limiting the arguments.
  Every function has a special var callled arguments-  array-like object that contains every argument passed to the function when it is invoked.

*/

function empty(){
    return arguments;//The special var
}

console.log(empty(1,2,3,4,5));//The arguments passed ias array-like but lacks some array methods like slice(),  join(), and forEach()
/*Use the rest operator to create an array of arguments
 The rest operator is a set of three dots placed in front of the first parameter of the function.
 This collects all the arguments passed when the function is called 
*/
function restOperator(...arrayLike){
    return arrayLike;//Now arrayLike is an actual array so all methods can be used
}
function restOperator2(...actualArray){
    for(const elem of actualArray){
        console.log(elem)
    }/*Because it is now an array I use the for each to iterate through the values*/
    const [a, b]= [actualArray.slice(0, 3), actualArray.slice(3, 5)];
    console.log(a);
    console.log(b);/*Using the slice method to destructure the array  */
}
restOperator2(1,2,3,4,5,6,7,8,9);
/*Improved Mean Function with the rest operator*/
function mean2(...meanArg){
    let total1= 0;
    for(const val of meanArg){
        total1+=val;
    }/*The for-of() can now  be used*/
    return total1/meanArg.length;
}
console.log(mean2(100, 50, 100, 50))

/*Default Parameter
  The function uses the value of the defaukt parameter if no argument is passed when it is called
*/
function defaultFx(param= 'Hello'){
    return (`Hey! ${param} World`)
}
/*You can override the default value, by specifying our own argument
  Defaultparameters come after non default parameters
*/

/*Function Callbacks- A function given as a parameter to another function.
  A function that is passed as an argument to another is known as a callback.
*/

/* Dealing with callbacks  */
//const sing = music => console.log(`I am singing ${music}`);
function sing(music){
    console.log(`I am singing ${music}`);
}
function dance(style, sing){
    console.log(`I dance to ${style}`);
    sing('Alobam');/*The main function is called here with the argument */
}
console.log(dance('shaku shaku', sing));//The function, sing is a refernce not the main function.

const greet= () => console.log('Hello Everyone!');
function nom(greet){
    console.log('Je m\'appelle Kofi');
    greet();
}
console.log(nom(greet));

/*Sorting Arrays With A Callback*/
const numerically= (a, b) => a-b;

// Now the solution
console.log([1,3,12,5,23,18,7].sort(numerically));//This command can be used in the console to see sorted numbers

const arr3=[100, 13]
console.log(arr3.sort((a,b)=>a-b));

/*Array Iterators- Using the arrow function with it is handy 
  forEach- loops through an array and invokes a callback function using each value as an argument.
  The callback function takes three parameters, the first represents the value in the array, the second represents the current index and the third represent the array that the callback is being called on.
*/
const primary= ['Red', 'Yellow', 'Blue'];
primary.forEach( (colour, pos) => console.log(`This is ${colour}, and is a position ${++pos}`));

/*
  Map() 
  This is often used to process data returned from databases in array form, such as adding HTML tags to plain text. The difference is that it returns a new array that replaces each value with the return value of the callback function.
*/
console.log([2, 4, 6, 8].map((x) => x*x));/*Using a function that squares each item in the array*/
document.write(primary.map(colour=>`<p>${colour}</p>`))/*Adding HTML tags*/

/*Reduce
  This returns an accumulated value
  takes two arguments
*/
console.log([1,2,3,4,5].reduce( (acc,val) => acc + val, 20));
const phrase= 'The quick brown fox jumps over the lazy dog';
const phraseArr= phrase.split(' ');
console.log(phraseArr);
phraseArr.reduce((acc, word) => acc + word.length, 0);
/*Using the split and forEach to find the number of letters*/

/* 
  Filter
  The filter() method returns a new array that only contains items from the original array that return true when passed to the callback.
*/
/*
Using the filter method to filter an array of numbers to just even numbers
*/
const numbers = [ 2, 7, 6, 5, 11, 23, 12 ];
console.log(numbers.filter(x => x%2 === 0));

/*Chaining Iterators*/
console.log([1,2,3].map(x => x*x).reduce((acc, x) => acc+x));

/*Chaining Iterators- Adding sales tax using map() or forEach() and accumulating using reduce()*/
const sales= [100, 230, 55];
console.log(sales.map(value => value +(value*0.15)).reduce((acc, value) => acc+value));

function salesTax(...amount){
    let tax= 0.15;
    return amount.map(value => value + value * tax).reduce((acc, value) => acc+value);
}
console.log(salesTax(100, 230, 55));

for(var x = 1; x <= 100; x++){
    var output = " ";
    if(x % 3 == 0)
            output += "Fizz";
    if(x % 5 == 0)
            output += "Buzz";
    console.log(output || x);
}

















