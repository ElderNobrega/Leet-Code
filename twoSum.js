/*
Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.
*/

/*
Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1]
 */


//solution using nested loop 
//Brute force => O(n^2)
var twoSum = function(nums, target) {
    
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0 + i; j < nums.length; j++) {
            if (target == nums[i] + nums[j]) 
                return [i,j]
        }    
    }
}

//Solution using object
//O(n)
function twoSum2(nums, target) {
    let map = {}
    let item = 0
    for (let i = 0; i < nums.length; i++) {
        if (map[nums[i]] >= 0) {
            return [map[nums[i]], i]
        }
        item = target - nums[i]
        map[item] = i
    }
    return false
}



console.log(twoSum2([2, 7, 11, 15], 9))