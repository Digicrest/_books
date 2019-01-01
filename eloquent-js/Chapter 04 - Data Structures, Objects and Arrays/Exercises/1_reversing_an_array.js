/*
  write two functions, reverseArray and reverseArrayInPlace.

  The first, reverseArray, takes an array as argument and produces a new array
  that has the same elements in the inverse order.

  The second, reverseArrayInPlace, does what the reverse method does: it modifies
  the array given as argument in order to reverse its elements.

  Neither may use the standard reverse method.
*/

function reverseArray(arr) {
  let new_array = [];
  arr.map(i => new_array.unshift(i));
  return new_array;
}

function reverseArrayInPlace(array) {
  for (let index = 0; index < Math.floor(array.length / 2); index++) {
    // Store head of array
    let temp = array[index];

    // copy tail into head
    array[index] = array[array.length - 1 - index];
    
    // write head into to tail
    array[array.length - 1 - index] = temp;
  }
}

var letters = ['A','B','C'];
console.log(`${letters} -> ${reverseArray(letters)}`);

var a = [1, 2, 3, 4, 5];
let msg = a.toString() + " -> ";
reverseArrayInPlace(a);
msg += a.toString();
console.log(msg);
