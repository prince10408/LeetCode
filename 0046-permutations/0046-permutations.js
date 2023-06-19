/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let res = []
    
    func(nums, [], Array(nums.length).fill(false), res)
    return res
};

function func(numx, pass, used, res){
    if(numx.length == pass.length){
        res.push(Array.from(pass))
        return
    }
    for(let i = 0; i < numx.length ; i ++){
        if(used[i] == true)
            continue
        used[i] = true
        pass.push(numx[i])
        func(numx, pass, used, res)
        used[i] =false
        pass.pop(numx[i])
    }
}