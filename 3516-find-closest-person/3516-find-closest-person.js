/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {number}
 */
var findClosest = function(x, y, z) {
    let person1=Math.abs(x-z)
    let person2=Math.abs(y-z)
    if(person1<person2){
        return 1
    }else if(person1>person2){
        return 2
    }else{
        return 0
    }
};