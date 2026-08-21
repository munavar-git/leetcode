/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function(nums) {
    let sumofElement=nums.reduce((a,b)=>a+b,0)
    let sumofDigits=nums.join("").split("").reduce((a,b)=>a+Number(b),0)
    return sumofElement-sumofDigits
};