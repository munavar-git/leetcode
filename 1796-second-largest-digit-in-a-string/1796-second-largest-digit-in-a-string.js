/**
 * @param {string} s
 * @return {number}
 */
var secondHighest = function(s) {
    let num=""
    for(let i of s){
        if(i>="0" && i<="9"){
            num+=i
        }
    }
    let uniqueNum=[...new Set(num)]
    let sortedNum=uniqueNum.sort((a,b)=>b-a)
    if(sortedNum.length<2){
        return -1
    }{

        return Number(sortedNum[1])
    }
    
}


