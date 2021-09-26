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
console.log(`n is an ${n%2===0? 'even' : 'odd'} nuber`);

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


 // Dealing with callbacks
const sing = () => console.log('I am singing')
function dance(style, sing){
    console.log('I dance to ' + style)
    sing()
}
dance('shaku shaku', sing)

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
//This is for the example
const numerically= (a, b) => a-b;
// Now the solution
[1,3,12,5,23,18,7].sort(numerically);//This command can be used in the console to see sorted numbers

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
The clear() method os used to remove all values
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
jla.concat([...sets3]);//Another way of convering sets to array
const setsArray2= Array.from(sets3)
//By combining this use of the spread operator with the ability to pass an array to the new Set() constructor, we now have a convenient way to create a copy of an array with any duplicate values removed
const duplicate = [3, 1, 4, 1, 5, 9, 2, 6 ,5,3,5,9];
const nonDuplicate = [...new Set(duplicate)];






