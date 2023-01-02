const caesar = function(string, shift) {
    return string.split("").map(char =>shiftChar(char, shift)).join("");
};
//codeSet makes sure it works in upper and lower
const codeSet = code => (code < 97 ? 65 : 97);

// We mod to wrap around against the ascii aphabet
// it adds m to m. it can be done also if mod (n%m) is < than m
const mod = (n, m) => (n % m + m) %m;

const shiftChar = (char, shift) => {
    //assigns ASCII code to the selected char
    const code = char.charCodeAt();

    /**
     * checks if code (ascii num) is between ranges
     * returns number to string where that number runs thru mod
     * where the first argument is code+shift -codeSet, and second is 26(alphabet)
     * and we add if its lower or upper
     */
    if((code >=65 && code<=90) || (code >= 97 && code <=122)) {
        return String.fromCharCode(mod(code + shift - codeSet(code), 26) + codeSet(code));
    }

    //returns modified char
    return char;
}

//let finalArray = []; => creates a new empty array

 //for loop iterates through each character of the input string
// for (let i = 0; i < string.length; i++) {
    //variable code will assign the ascii code for the new shifted letter
//     let code = string.charCodeAt(i) + shift;
//     finalArray.push(String.fromCharCode(code));
// }
// return finalArray.join('');


// Do not edit below this line
module.exports = caesar;
