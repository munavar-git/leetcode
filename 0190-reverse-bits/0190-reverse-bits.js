/**
 * @param {number} n
 * @return {number}
 */
var reverseBits = function(n) {
    let bin=n.toString(2)
    let reversed=bin.padStart(32,"0").split("").reverse().join("")
    let decimal=parseInt(reversed,2)
    return decimal
};