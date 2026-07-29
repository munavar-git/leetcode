/**
 * @param {...(null|boolean|number|string|Array|Object)} args
 * @return {number}
 */
var argumentsLength = function(...args) {
    let a=0;
    for(let leng in args){
        a++
    }
    return a
};

/**
 * argumentsLength(1, 2, 3); // 3
 */