/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let joined=digits.join("")
    let added=BigInt(joined)
    let a=added+1n
    let arr=a.toString().split("").map(a=>Number(a))
    return arr
};