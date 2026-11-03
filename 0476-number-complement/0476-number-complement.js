/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
  const binary=num.toString(2) 
  let arr=[]
  for(let i=0;i<binary.length;i++){
    arr.push((binary[i]==="0")?"1":"0")
  }
  let bi=arr.join("")
  return parseInt(bi,2)
};