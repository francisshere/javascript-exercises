const repeatString = function(string, num) {
    let concat = string;

    if (num < 0) {
        return "ERROR";
    } else if (num == 0) {
        return "";
    } else {
        for (let i=1; i < num; i++){
            concat += string;
        }
        return concat;
    }
   
};

repeatString('hey', 3);

// Do not edit below this line
module.exports = repeatString;
