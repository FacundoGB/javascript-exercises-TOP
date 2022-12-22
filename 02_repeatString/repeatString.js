const repeatString = function(s, n) {
    if (n > 0) {
        return s.repeat(n);
    }else if (n === 0 || s === '') {
        return "";
    } else if (n < 0) {
        return "ERROR";
    }
    
};

// Do not edit below this line
module.exports = repeatString;
