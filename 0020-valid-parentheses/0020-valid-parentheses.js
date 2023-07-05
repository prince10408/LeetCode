/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let str = s.split('')
    const data = {
        '{': 1,
        '}': -1,
        '(': 2,
        ')': -2,
        '[': 3,
        ']': -3
    }
    const tmp = []
    for (let i = 0; i< str.length ; i ++){
        console.log(data[str[i]], tmp)
        if(data[str[i]] > 0) tmp.push(data[str[i]])
        else {
            if((data[str[i]] + tmp[tmp.length - 1]) == 0) tmp.pop()
            else return false
        }
    }
    if(tmp.length == 0) return true
    else return false
};