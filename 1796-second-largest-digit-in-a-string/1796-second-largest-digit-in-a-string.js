/**
 * @param {string} s
 * @return {number}
 */
var secondHighest = function(s) {
  let num=s.match(/\d/g)
  let uniquenum=[...new Set(num)]
  let sorted=uniquenum.sort((a,b)=>b-a)
  if(sorted.length< 2){
    return -1
  }{
    return Number(sorted[1])
  } 
}


