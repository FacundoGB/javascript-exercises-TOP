const sumAll = function(n1, n2) {
    let sum = 0;

    // if(n1 > n2) {
    //     n2 = n1
    //     n1 = n2
    // } else if (n1 < 0 || n2 < 0) {
    //     return "ERROR";
    // }

    if (Number(n1)!== n1 || Number(n2) !== n2) {
        return "ERROR";
    } else if (n1 < 0 || n2 < 0) {
        return "ERROR";
    } else if (n1 > n2) {
        n2 = n1;
        n1 = n2;
    }

    for(let i = 0; i<=n2; i++) {
        sum = sum + i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
