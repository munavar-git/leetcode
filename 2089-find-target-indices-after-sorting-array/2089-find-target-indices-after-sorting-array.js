/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function(nums, target) {
    nums.sort((a,b)=>a-b)
    let arr=[]
    let a=nums.filter((a,i)=>{
        if(a===target){
            arr.push(i)
        }
    })
    return arr
};