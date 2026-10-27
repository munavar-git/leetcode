/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
    let a="abcdefghijklmnopqrstuvwxyz"
    for(let char of a){
        if(!sentence.toLowerCase().includes(char)){
            return false
        }
    }
    return true
};