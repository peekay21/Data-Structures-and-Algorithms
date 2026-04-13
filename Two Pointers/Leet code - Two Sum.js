/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // let left = 0;
    // let right = nums.length-1;
    // while(left < right){
    //     if(nums[left] + nums[right] > target){
    //         right--;
    //     }
    //     else if(nums[left] + nums[right] < target){
    //         left++;
    //     }
    //     else{
    //         return [left,right];
    //     }
    // }


    const numMap = new Map();
    
    for(let i = 0;i < nums.length; i++){
        let complement = target - nums[i];
        
        if(numMap.has(complement)){
            return [numMap.get(complement), i];
        }
        else{
            numMap.set(nums[i], i);
        }
    }
};
