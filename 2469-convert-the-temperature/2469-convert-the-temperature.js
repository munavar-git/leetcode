/**
 * @param {number} celsius
 * @return {number[]}
 */
var convertTemperature = function(celsius) {
    let kevin=celsius+273.15
    let fahrenheit=celsius * 1.80+32
    return [kevin,fahrenheit]
};