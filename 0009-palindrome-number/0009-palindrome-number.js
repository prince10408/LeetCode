/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let s = x.toString().slice('');
    for(let i = 0 ; i < s.length/2 ; i++){
        if(s[i] !== s[s.length - 1 - i])
            return false
    }
    return true
};