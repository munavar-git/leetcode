/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let reversed=s.split(" ").map(a=>a.split("").reverse().join("")).join(" ")
    return reversed
};