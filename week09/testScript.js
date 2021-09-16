document.getElementsByTagName('a')[0].addEventListener('click', function(event){
    const assure= confirm('Do you want to leave ?');
    (assure=== false)?event.preventDefault():false; 
}, false);

/****************************
Simple reset function
*****************************/
const resetForm1 = () => document.forms[0].reset();

/*********************
Reset with event listener
**********************/
document.getElementsByTagName('input')[1].addEventListener('click', function(event){
    alert(`Reset ${document.forms[0].elements[0].value}`);
    document.forms[0].reset();
    event.preventDefault();
}, false);


/*
var madness= setInterval(()=>alert('sorry baby'),  5000)
madness;

document.getElementsByTagName('button')[2].addEventListener('click', function(event){
    event.preventDefault();
    clearInterval(madness);
}, false);
*/
/* Using the setTimeout method to change the location of the window and the confirm method to make sure if the user wants to stay or not
const another_Madness= setTimeout(function (){
    const assure= confirm('Do you want to continue using this site');
    if(assure=== false){
        window.location= 'https://google.com';
    }
    
}, 5000)
another_Madness
*/

/******************************* 
Opening a new window that pops up and closing it using the setTimeout method.
********************************/
/*const global= this; 
const popup= global.open('https://google.com', 'Google', 'width=400, height=400, resizable=yes');

setTimeout(()=>popup.close(),5000);//arrow functions are very handy for these kinds of methods since they are anonymous*/

const global= this;
global.name= 'wek09 window';
const anotherSite= setTimeout(function(){
    const conf= confirm(`Do you want to leave ${global.name}`);
    (conf=== true) ? global.location= 'https://twitter.com' : false;
}, 5000)
anotherSite











