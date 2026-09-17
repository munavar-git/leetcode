/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberGame = function(nums) {
     let sorted=nums.sort((a,b)=>b-a)
    const arr=[]
    while(nums.length){
        let a=nums.pop()
        let b=nums.pop()
        arr.push(b)
        arr.push(a)
    }
    return arr
};