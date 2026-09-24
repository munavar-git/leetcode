/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function(image) {
    let reversed=image.map((a)=>a.reverse())
    for(let i=0;i<reversed.length;i++){
        for(let j=0;j<reversed.length;j++){
            if(reversed[i][j]===0){
                reversed[i][j]=1
            }else{
                reversed[i][j]=0

            }
        }
    }
    return reversed
    
};