/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let leng=new Set(nums).size;
    return leng!==nums.length
          
};