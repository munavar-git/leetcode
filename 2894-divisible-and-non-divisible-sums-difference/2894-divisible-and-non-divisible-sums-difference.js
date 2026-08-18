/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var differenceOfSums = function(n, m) {
    let arr=[];
    for(let i=1;i<=n;i++){
        arr.push(i)
    }
let sumofnum=arr.filter(a=>a%m!==0).reduce((a,b)=>a+b,0)
let sumof3=arr.filter(a=>a%m===0).reduce((a,b)=>a+b,0)
return sumofnum-sumof3

};
