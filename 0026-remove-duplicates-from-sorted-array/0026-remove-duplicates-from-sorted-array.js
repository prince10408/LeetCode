/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let res = []
    let temp = nums[0]
    
    res.push(temp)
    for(let i = 1; i < nums.length ; i ++){
        if(temp !== nums[i]){
            temp = nums[i]
            res.push(temp)
        }
    }
    for(let i = 0; i < res.length ; i ++){
        nums[i] = res[i]
    }
    return res.length
};