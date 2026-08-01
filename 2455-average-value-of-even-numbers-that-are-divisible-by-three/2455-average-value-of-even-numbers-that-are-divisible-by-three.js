/**
 * @param {number[]} nums
 * @return {number}
 */
var averageValue = function(nums) {
   let n=0
   let sum=0
   for(let i=0;i<nums.length;i++){
    if(nums[i]%6===0 ){
    n++
    sum+=nums[i]
   }
   }
   if(n===0){
    return 0
   }
   let result=Math.floor(sum/n)
   return result
};