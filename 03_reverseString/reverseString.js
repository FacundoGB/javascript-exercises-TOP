const reverseString = function(s) {
    let stringArray = s.split(""); // ["h", "e", "l", "l", "o"]

    // reverse the new created array
    let reverseArray = stringArray.reverse(); // ["h", "e", "l", "l", "o"].reverse();

    // join all elements of the array into a string
    let joinArray = reverseArray.join(""); // ["o", "l", "l", "e", "h"].join("")

    return joinArray;
};

// Do not edit below this line
module.exports = reverseString;
