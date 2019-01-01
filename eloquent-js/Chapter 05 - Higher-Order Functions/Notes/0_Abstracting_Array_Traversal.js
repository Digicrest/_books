/*
    So let’s try to abstract this into a function. 
    Can you think of a way?  
    
    var array = [1, 2, 3];
    for (var i = 0; i < array.length; i++) {
        var current = array[i];
        console.log(current);
    }
 */

 // iterate over an array and run the callback with each
let forEach = (arr, action) => arr.map(action);