/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
let dup=[...new Set(nums)].sort((a,b)=>b-a)
   if(dup.length>=3){
    return dup.at(2)
   }else{
    return dup.at(0)
   }
};