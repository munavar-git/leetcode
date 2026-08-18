/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var differenceOfSums = function(n, m) {
    let sumofnum=0
    let sumofM=0
    for(let i=1;i<=n;i++){
        if(i%m!=0){
            sumofnum+=i
        }
        else {
        sumofM+=i
        }
    }
return sumofnum-sumofM

};
