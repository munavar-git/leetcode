/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    let L=0,R=0,U=0,D=0;
    for(let move of moves){
        if(move==="L"){L++}
        else if(move==="R"){R++}
        else if(move==="U"){U++}
        else if(move==="D"){D++}
    }
    return L===R && U===D
};