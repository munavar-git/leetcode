/**
 * @param {number[]} prices
 * @param {number} money
 * @return {number}
 */
var buyChoco = function(prices, money) {
     let sorted=prices.sort((a,b)=>a-b)
     let added=prices[0]+prices[1]
     if(added<=money){
     return money-added
  }
  return money
};