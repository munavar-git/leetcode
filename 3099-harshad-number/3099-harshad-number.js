/**
 * @param {number} x
 * @return {number}
 */
var sumOfTheDigitsOfHarshadNumber = function(x) {
    let sum=x.toString().split("").reduce((a,b)=>Number(a)+Number(b),0)
    if(x%sum==0){
        return sum
    }
    return -1
};