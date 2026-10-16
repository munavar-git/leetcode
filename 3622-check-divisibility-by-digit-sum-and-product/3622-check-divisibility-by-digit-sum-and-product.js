/**
 * @param {number} n
 * @return {boolean}
 */
var checkDivisibility = function (n) {
    let str = String(n)
    let sum = str.split("").reduce((sum, num) => Number(sum) + Number(num))
    let product = str.split("").reduce((prod, num) => Number(prod) * Number(num))
    if (n % (sum + product) === 0) {
        return true
    }
    return false

}