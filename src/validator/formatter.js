const functionUp = "monthly class"
function trim(){
    console.log("after trim" , functionUp.trim());
}

function lower(){
    console.log("string is lowercase-" , functionUp.toLowerCase());
}

function upper(){
    console.log("string in Uppercase-" , functionUp.toUpperCase());
}

module.exports.trim = trim
module.exports.lower = lower
module.exports.upper = upper