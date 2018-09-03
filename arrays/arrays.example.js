'use strict';

/* array declaration */
let firstArray = [5, 3, 7, 9, 1, 'string', { key: 'value', key1: 12 }, ['array', 'new', 'array'], 'and so on'];
let secondArray = Array.of(5, 3, 7, 9, 1, 'string', { key: 'value', key1: 12 }, ['array', 'new', 'array'], 'and so on');
console.log(`--------------------------------------------`);
console.log('/* array declaration */\n');
console.log('Array declaration:');
console.log(`Usual way - []:           ${firstArray}`);
console.log(`Unusual way - Array.of(): ${firstArray}\n`);
console.log(`--------------------------------------------`);
/* Array.concat() and spread operator */
console.log('/* Array.concat() and spread operator */\n');
console.log(`The concat() method is used to merge two or more arrays. 
This method does not change the existing arrays, but instead returns a new array.`);
firstArray = [1, 2, 3, 4, 5, 6];
secondArray = [7, 8, 9, 10, 11, 12, 13];
let thirdArray = [14, 15, 16, 17, 18, 19, 20];
console.log(`First  before any operations: ${firstArray}`);
console.log(`Second before any operations: ${secondArray}`);
console.log(`Second before any operations: ${thirdArray}\n`);
let resultArray = firstArray.concat(secondArray, thirdArray);
console.log(`First    after firstArray.concat(secondArray, thirdArray) operations: ${firstArray}`);
console.log(`Second   after firstArray.concat(secondArray, thirdArray) operations: ${secondArray}`);
console.log(`Third    after firstArray.concat(secondArray, thirdArray) operations: ${thirdArray}`);
console.log(`Returned after firstArray.concat(secondArray, thirdArray) operations: ${resultArray}\n`);
resultArray = [...firstArray, ...secondArray,...thirdArray];
console.log(`First    after [...firstArray, ...secondArray,...thirdArray] operations: ${firstArray}`);
console.log(`Second   after [...firstArray, ...secondArray,...thirdArray] operations: ${secondArray}`);
console.log(`Third    after [...firstArray, ...secondArray,...thirdArray] operations: ${thirdArray}`);
console.log(`Returned after [...firstArray, ...secondArray,...thirdArray] operations: ${resultArray}\n`);
console.log(`--------------------------------------------`);
/* Array.push() operator */
console.log('/* Array.push() operator */\n');
firstArray = [1, 2, 3, 4, 5, 6];
secondArray = [7, 8, 9, 10, 11, 12, 13];
console.log(`First  before any operations: ${firstArray}`);
console.log(`Second before any operations: ${secondArray}\n`);
resultArray = firstArray.push(secondArray);
console.log(`First    after [resultArray = firstArray.push(secondArray)] operations: ${firstArray}`);
console.log(`Second   after [resultArray = firstArray.push(secondArray)] operations: ${secondArray}`);
console.log(`Returned after [resultArray = firstArray.push(secondArray)] operations: ${resultArray}\n`);
console.log(`WARNING!!!  WARNING!!!   WARNING!!!   [ firstArray[resultArray-1] ] -   ${firstArray[resultArray - 1]}`);
console.log(`The elements are added to the end of the array. And resultArray is new length property of the object upon which the method was called`);
console.log('https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push');
console.log(`--------------------------------------------`);
/* Array.push() operator */
console.log('/* Array.push() operator second example */\n');
firstArray = [1, 2, 3, 4, 5, 6];
console.log(`First  before any operations: ${firstArray}`);
resultArray = firstArray.push(7, 8, 9, 10);
console.log(`First    after [resultArray = firstArray.push(7,8,9,10)] operations: ${firstArray}`);
console.log(`Returned after [resultArray = firstArray.push(secondArray)] operations: ${resultArray}\n`);
console.log(`The elements are added to the end of the array. And resultArray is new length property of the object upon which the method was called`);
console.log('https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push');
console.log(`--------------------------------------------`);
/* Array.indexOf() operator */
console.log('/* Array.indexOf() operator */\n');
firstArray = [1, 2, 3, 4, 5, 6];
secondArray = [7, 8, 9, 10, 11, 12, 13, 10, 8, 9];
console.log(`First  before any operations: ${firstArray}`);
console.log(`Second before any operations: ${secondArray}\n`);
resultArray = firstArray.indexOf(10);
let resultArray1 = secondArray.indexOf(10);
console.log(`First    after [resultArray = firstArray.indexOf(10)] operations: ${firstArray}`);
console.log(`Returned after [resultArray = firstArray.indexOf(10)] operations: ${resultArray}\n`);
console.log(`Second   after [resultArray1 = secondArray.indexOf(10)] operations: ${secondArray}`);
console.log(`Returned after [resultArray1 = secondArray.indexOf(10)] operations: ${resultArray1}\n`);
console.log(`It means that Array.indexOf() returns index of the first entering element`);
console.log(`--------------------------------------------`);
/* Array.includes() operator */
console.log('/* Array.includes() operator */\n');
firstArray = [1, 2, 3, 4, 5, 6];
secondArray = [7, 8, 9, 10, 11, 12, 13, 10, 8, 9];
console.log(`First  before any operations: ${firstArray}`);
console.log(`Second before any operations: ${secondArray}\n`);
resultArray = firstArray.includes(10);
resultArray1 = secondArray.includes(10);
console.log(`First    after [resultArray = firstArray.includes(10)]   operations: ${firstArray}`);
console.log(`Returned after [resultArray = firstArray.includes(10)]   operations: ${resultArray}\n`);
console.log(`Second   after [resultArray1 = secondArray.includes(10)] operations: ${secondArray}`);
console.log(`Returned after [resultArray1 = secondArray.includes(10)] operations: ${resultArray1}\n`);
console.log(`It means that Array.indexOf() returns true or false depending on including array a variable or not`);
console.log(`--------------------------------------------`);
/* Array.slice(fromInd, toInd(exclude)) operator */
console.log('/* Array.slice(fromInd, toInd(exclude)) operator */\n');
firstArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
console.log(`First  before any operations: ${firstArray}`);
console.log(`                      indexs:[0,1,2,3,4,5,6,7,8,9 ,10,11,12]\n`);
resultArray = firstArray.slice(3, 9);
console.log(`First    after [resultArray = firstArray.slice(3, 9);]   operations: ${firstArray}`);
console.log(`Returned after [resultArray = firstArray.slice(3, 9);]   operations: ${resultArray}\n`);
console.log(`It means that Array.slice(fromInd, toInd(exclude)) returns new Array from origin without any changes origin array.`);
console.log(`--------------------------------------------`);
/* Array.splice(fromInd, amountOfElements, value1, value2, value3, value4) operator */
console.log('/* Array.splice(fromInd, amountOfElements, value1, value2, value3, value4) operator */\n');
firstArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
console.log(`First  before any operations: ${firstArray}`);
console.log(`                      indexs:[0,1,2,3,4,5,6,7,8,9 ,10,11,12]\n`);
resultArray = firstArray.splice(3, 9, 'value1', 'value2', 'value3', 'value4');
console.log(`First    after [resultArray = firstArray.splice(3, 9,'value1','value2','value3','value4')] operations: ${firstArray}`);
console.log(`Returned after [resultArray = firstArray.splice(3, 9,'value1','value2','value3','value4')] operations: ${resultArray}\n`);
console.log(`It means that Array.splice(fromInd, amountOfElements, value1, value2, value3, value4)\n
 returns new Array from origin fromId lenth = amountOfElements and changes origin array. It removes all elements which 
 cut for returned array and past insted of them next values that go after amountOfElements.`);
console.log(`--------------------------------------------`);