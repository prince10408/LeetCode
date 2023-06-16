/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let res1, res2;
    for (i = 0; i< nums.length - 1; i++){
        for(j = i + 1; j < nums.length ; j ++)
            if((nums[i] + nums[j]) == target)
            {
                res1 = i
                res2 = j
                break
            }
    }
    return [res1, res2]
};