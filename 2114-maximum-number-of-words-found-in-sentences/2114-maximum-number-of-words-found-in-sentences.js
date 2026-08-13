/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    let len=sentences.map(a=>a.split(" ").length)
    let sorted=len.sort((a,b)=>b-a).at(0)
    return sorted
};