/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let a=s.trim().split(" ").at(-1).length
    return a
};