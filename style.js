//question 1//
console.log('You can ignore single and doublee quotes like this:\\\'\\\'\\\"\\\"');

//question 2//
alert('Please enter your data');

let userName = prompt("Enter your name?", 'Name');
alert(`Your name is: ${userName}`)

let userSurname = prompt("Enter your surname?", 'Surname');
alert(`Your full name is: ${userName} ${userSurname}`)

let age = prompt("How old are you?", 'Age');
alert(`Your full name is: ${userName} ${userSurname}, Your age is: ${age}`)

let access = confirm('Are you an admin?');
alert(`Your full name is: ${userName} ${userSurname}, Your age is: ${age}, Admin status is: ${access},`)

//question 3//
console.log(Boolean(alert('5')));//false//
console.log(true > false); //true//
console.log(true > 5); //false//
console.log(true < '5'); //true//
console.log(true > null); //true// 