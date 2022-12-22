const palindromes = function (string) {
    
    //lower case and remove punctuation & spaces
    let noPunctuation = string.replace(/\W/g,"");
    let noSpaces = noPunctuation.replace(/\s/g,"").toLowerCase();

    //loop
    for (let i = 0; i < noSpaces.length/2; i++) {
        console.log("String position i: " + noSpaces[i]);
        console.log("String position length-1-i: " + noSpaces[noSpaces.length -1 -i]);
        if (noSpaces[i] !== noSpaces[noSpaces.length -1 -i]) {
            return false;
        }
    }
    return true;




/**
 * This doesn't work. It checks string[i] against every string[j]
 */
    // for(let i =0; i< noSpaces.length; i++){
    //     for (let j = noSpaces.length-1; j>=0; j--) {
    //         if(noSpaces.charAt(i).toLowerCase() !== noSpaces.charAt(j).toLowerCase()) {
    //             return false;
    //         } 

    //     } 
    // }


};

// Do not edit below this line
module.exports = palindromes;
