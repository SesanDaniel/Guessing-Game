import * as $ from 'jquery';

$('h1').text("Bye world")

let present = 2023;
let myAge = present-2013;

console.log(myAge);
console.log(typeof(myAge));

for(let i = present; i < 2033; i++) {
    myAge = i-1995
    console.log(`My age in year ${i} is ${myAge}`);
}

if(myAge < 18 && myAge > 70){
    console.log('You are ineligible to vote at this time.')
}



