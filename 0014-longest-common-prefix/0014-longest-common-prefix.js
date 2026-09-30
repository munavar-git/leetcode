/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  let res=strs[0];
  for(let i=1;i<strs.length;i++){
    while(!strs[i].startsWith(res)){
        res=res.slice(0,-1)
    }
  } 
  return res 
};