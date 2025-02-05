/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let res = 0;

    for (let left = 0, right = 0, tempRes = 0; left < height.length; left++, right = left) {
        tempRes = 0;

        if (height[left] >= height[left + 1]) {
            while (right < height.length && height[right] < height[left]) {
                right++;
                tempRes += (height[left] - height[right]);
            }
            if (right = height.length) {
                continue;
            }
            else {
                res += tempRes;
                left = right;
            }
        }
    }

    return res;
};

trap([0,1,0,2,1,0,1,3,2,1,2,1]);