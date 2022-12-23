const fibonacci = function(n) {
    
    let n1 = 0, n2 = 1, temp;
    if (n<0) {
        console.log("OOPS");
        return "OOPS";
    }
    for(let i = 1; i<=n; i++) {
        temp = n1 + n2;
        console.log("temporal: " + temp);
        n1 = n2;
        console.log("n1: " + n1);
        n2 = temp;
    }
    return n1

    // for (let i = 0; i <= n; i++) {
    //     fibo = fibo + i;
    // }
    // return fibo;

};

// Do not edit below this line
module.exports = fibonacci;
