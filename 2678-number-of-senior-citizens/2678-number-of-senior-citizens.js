/**
 * @param {string[]} details
 * @return {number}
 */
var countSeniors = function(details) {
    let number=details.map((age)=>Number(age.slice(11)))
    let people=number.filter(num=>num>=6100).length
    return people
};