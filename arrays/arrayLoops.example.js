'use strict';

/* using loop for */
let array = [5, 3, 7, 9, 1, 'just string', { key: 'value', key1: 12 }, ['array', 'new', 'array'], 'and so on'];
console.log(`--------------------------------------------`);
console.log(`Array: `, array);
console.log('\nusing for loop: ');
for (let i = 0; i < array.length; i++) {
    console.log(`element's index equals: [${i}] and value: `, array[i]);
}
console.log('\nuse loop [for] only for synchronous operations, because of it is synchronous');
console.log(`--------------------------------------------`);

/* using Array.forEach() */
console.log(`--------------------------------------------`);
console.log(`Array: `, array);
console.log('\nusing [Array.forEach()]: ');
let returned = array.forEach((element, index, array) => {
    console.log(`element's index equals: [${index}] and value: `, element);
})
console.log('\n[Array.forEach()] returns value: ', returned);
console.log('you cat work with all array inside foreach function using local scope parameter [array]');
console.log(`--------------------------------------------`);

/* using Array.map() */
console.log(`--------------------------------------------`);
console.log(`Array: `, array);
console.log('\nusing [Array.map()]: ');
returned = array.map((element, index, array) => {
    console.log(`element's index equals: [${index}] and value: `, element);
    return typeof (element) === 'number' ? element * 10 : element;
});
console.log('\n[Array.map()] returns value: ', returned);
console.log(`[Array.map()] works as [Array.forEach()] but returns changed origin array.
 You need to ecplisit return value`);
console.log(`--------------------------------------------`);

/* using Array.filter() */
console.log(`--------------------------------------------`);
console.log(`Array: `, array);
console.log('\nusing [Array.filter()]: ');
returned = array.filter((element, index, array) => {
    console.log(`element's index equals: [${index}] and value: `, element);
    return typeof (element) === 'number';
});
console.log('\n[Array.filter()] returns value: ', returned);
console.log(`[Array.map()] works as [Array.forEach()] but returns changed origin array. 
You need to return boolean value.`);
console.log('if you return true - the element appeares in returned array, if false - not');
console.log(`Array: `, array);
console.log('\nusing [Array.filter()]: ');
returned = array.filter(({ length }) => {
    console.log(`elements length equals: [${length}]`);
});
console.log('\n[Array.filter()] returns value: ', returned);
console.log(`[Array.map()] works as [Array.forEach()] but returns changed origin array. 
You need to return boolean value.`);
console.log('if you return true - the element appeares in returned array, if false - not');
console.log(`--------------------------------------------`);

/* using Array.find() */
console.log(`--------------------------------------------`);
console.log(`Array: `, array);
console.log('\nusing [Array.find()]: ');
returned = array.find((element, index, array) => {
    console.log(`element's index equals: [${index}] and value: `, element);
    return typeof (element) === 'string';
});
console.log('\n[Array.find()] returns value: ', returned);
console.log('[Array.find()] works as [Array.forEach()] but returns changed origin array and stops loop.');
console.log(`The find() method returns the value of the first element in the array that satisfies the 
provided testing function. Otherwise undefined is returned.`);
console.log(`--------------------------------------------`);

/* using Array.find() */
console.log(`--------------------------------------------`);
console.log(`Array: `, array);
console.log('\nusing [Array.findIndex()]: ');
returned = array.findIndex((element, index, array) => {
    console.log(`element's index equals: [${index}] and value: `, element);
    return typeof (element) === 'object';
});
console.log('\n[Array.findIndex()] returns value: ', returned);
console.log(`[Array.findIndex()] works as [Array.forEach()] but returns index of the first element from origin array
\n that satisfies the provide tresting function and stops loop.\n Otherwise undefined is returned.`);
console.log(`--------------------------------------------`);