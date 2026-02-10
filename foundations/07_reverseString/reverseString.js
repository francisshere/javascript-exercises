const reverseString = function(str) {
    // split the string into an array of characters
    // reverse the array
    // join the array back into a string
    return str.split("").reverse().join("");        

}

reverseString("hello");

// Do not edit below this line
module.exports = reverseString;
