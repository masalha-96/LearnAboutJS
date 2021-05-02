'use strict';

// let arr = [2,3,4,5,6,7];
// let sum=0;
// let avg=0;
// for ( let i=0 ; i < arr.length ; i++ )
// {
//     sum = sum + arr[i];
//     avg = sum/ arr.length;
// }

// alert('sum= ' + sum + ' avg= ' + avg );

// let userInput = prompt('please enter the length of ur array');
// let  arr = [];

// // for user input 
// for ( let i = 0 ; i < userInput ; i++ )
// {
//  arr [i] = prompt('enter the value for the ' + (i+1) + ' elemnt')
// }

// // for print
// for ( let i = 0 ; i < userInput ; i++ )
// {
//  alert('elemnt # ' + (i+1) + ' = ' + arr[i]);
// }

// //remove from the first the array shift
// let array1 = [1,10,15];
// array1.shift(); 
// for ( let i= 0 ; i< array1.length ; i++ )
// {
//     alert('elemnt #' + (i+1) + '= ' + array1[i]);
// }

let arr = ['a', 'b', 'd'];


arr.splice(3, 2, 'v');

alert(arr[3]);
// ['a', 'b', 'c', 'd'];

for ( let i = 0 ; i < arr.length ; i++)
{
    alert(arr[i]);
}
