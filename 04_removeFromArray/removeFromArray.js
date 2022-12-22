const removeFromArray = function(array, n1, n2, n3, n4) {
   
    /* 
    Create a new array with the arguments
    loop through the first array. In each element loop through
    the next array and compare array[i] with array2[j]. If equal
    delete the element of array[i].
    */
    // let array2 = [n1, n2, n3, n4];

    // for(let i = array.length-1; i>=0; i--) {
    //     for(let j = 0; j <array.length; j++) {
    //         if(array[i] === array2[j]) {
    //             array.splice(i, 1);
    //         }
    //     }
    // }
    // return array;

    
   
    /*
    loop through the array backwards (as the array length will vary), 
    check if each index coincides with the argument
    If it does, delete it. 
     */
    // for (let i = array.length-1; i>=0; i--) {
    //     if (array[i] === n1 || array[i] === n2 || array[i] === n3 || array[i] === n4) {
    //         array.splice(i, 1);
    //     }
    // }
    // return array;
};

// Do not edit below this line
module.exports = removeFromArray;
