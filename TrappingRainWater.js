/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let leftMax = 0,
        rightMax = 0,
        left = 0,
        right = height.length - 1,
        water = 0;
    
    while (left < right) {
        if (leftMax < rightMax) {
            left++;
            leftMax = Math.max(leftMax, height[left]);
            water += leftMax - height[left];
        }
        else {
            right--;
            rightMax = Math.max(rightMax, height[right]);
            water += rightMax - height[right];
        }
    }
    return water;
}

console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]));