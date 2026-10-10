/**
 * @param {number} n
 * @return {boolean}
 */
var checkGoodInteger = function(n) {
    let digitSum=n.toString().split("").reduce((a,b)=>Number(a)+Number(b));
    let squareSum=n.toString().split("").map((a)=>Number(a*a)).reduce((a,b)=>a+b)
    let res=squareSum-digitSum
    if(res>=50){
        return true
    }
    return false

}