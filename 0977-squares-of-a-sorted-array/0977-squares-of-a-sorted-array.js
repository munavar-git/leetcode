/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let arr=[]
    for(let i=0;i<nums.length;i++){
        if(nums[i]<0){
            arr.push(nums[i]*(-1))
        }else{
            arr.push(nums[i])
        }
    }
    return arr.sort((a,b)=>a-b).map((a)=>a**2)
};