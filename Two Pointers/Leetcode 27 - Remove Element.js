/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let j = nums.length - 1;
    for(let i = j; i>=0; i-- ){
        if(nums[i]==val){
            let temp = nums[j];
            nums[j--] = nums[i];
            nums[i]= temp;
            
        }
    }
    return j + 1;
};