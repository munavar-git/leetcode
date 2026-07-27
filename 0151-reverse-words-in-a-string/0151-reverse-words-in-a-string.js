/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let reversed=s.trim().split(" ").reverse().filter(a=>a.trim()).join(" ")
    return reversed
};