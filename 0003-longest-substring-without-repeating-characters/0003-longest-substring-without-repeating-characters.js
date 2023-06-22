/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let res = 1;
    let first = 0;
    let last = 1;
    let str = s.split('')
    if(str.length == 0){
        return 0
    }
    for (i = 1; i < str.length; i ++){
        substr = str.slice(first, i)
        index = substr.indexOf(str[i])
        if(index == -1){
            res = res < (i - first + 1) ? i - first + 1: res
        }else {
            first = first + index + 1
        }
    }
    return res
};