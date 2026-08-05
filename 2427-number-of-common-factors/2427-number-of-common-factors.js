/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var commonFactors = function(a, b) {
    let arr=[]
  for(let i=0;i<=1000;i++){
    if(a%i===0 && b%i===0){
        arr.push(i)
    }
  }
return arr.length
};