/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let result = 0;
    for(let i = 0 ; i < nums.length ; i ++){
        if(nums[i] < target){
            result = i + 1
        }else{
            break;
        }
    }
    return result
};