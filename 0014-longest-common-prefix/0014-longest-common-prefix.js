/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    strs.sort();
    let result = ''
    for(let i = 0; i < strs[0].length; i ++){
        if(strs[0][i] == strs[strs.length - 1][i]){
            result += strs[0][i]
        }else {
            break;
        }
    }
    return result
};