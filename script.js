let myGrade = [50, 30, 70, 100, 27]; // an array of 5 different numbers

console.log(myGrade[0]); // outputs first value of the array, always starts at 0
console.log(myGrade[4]); // outputs last value in the array

// arrays always start at zero, for each part of the array we go up a number value

/****************************************/ 

// for loop to display all numbers in the array as well as their positions

for(let i = 0; i < myGrade.length; i++){ 
    console.log(`myGrade[${i}]; ${myGrade[i]}`);
}

/**************************************** */

// using push adds a new number to the end of the array
myGrade.push(88);
myGrade.push(70);
myGrade.push(0);
myGrade.push(99);
myGrade.push(57);
console.log(myGrade);

// using the pop method takes away the last number added to the array

myGrade.pop()
myGrade.pop()
myGrade.pop()
console.log(myGrade);
/***************************************** */






