/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortEvenOdd = function(nums) {
    let odd=[]
    let even=[];
    for(let i=0;i<nums.length;i++){
        if(i%2===0){
            even.push(nums[i])
        }
        else{
            odd.push(nums[i])
        }
    }
    even.sort((a,b)=>b-a).reverse()
    odd.sort((a,b)=>a-b).reverse()
    let arr=[]
    for (let i=0;i<nums.length;i++){
        if(i%2===0){
            arr.push(even.shift())
        }else{
            arr.push(odd.shift())
        }
    }
    return arr
};