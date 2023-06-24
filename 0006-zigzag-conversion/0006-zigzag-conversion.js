/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    const str = s.split("")
    const tmp_res = []
    let res= ""
    for (let i = 0; i< numRows; i ++){
        const tmp = []
        tmp_res.push(tmp)
    }
    
    for(let i = 0; i < str.length; i ++){
        const tmp_index =(numRows - 1)? i % (2 * (numRows - 1)): 0
        if(tmp_index < numRows){
            tmp_res[tmp_index].push(str[i])
        }else {
            tmp_res[numRows - 1 - (tmp_index + 1)%numRows].push(str[i])
        }
    }
    for (let i = 0; i< numRows; i ++){
        res += tmp_res[i].join('')
    }
    return res
};