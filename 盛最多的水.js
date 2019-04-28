/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let maxNum = 0;
    for(let i = 0; i < height.length; i++){
      for(let j = i + 1; j < height.length; j++){
        let b = Math.min(height[i], height[j]) * (j - i);
        maxNum = Math.max(maxNum, b);
      }
    }
    return maxNum;
};


/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea2 = function(height) {
  let maxNum = 0;
  let len = height.length;
  let l = 0;
  let r = len - 1;
  while(l < r){
    let b = Math.min(height[l], height[r]) * (r - l);
    maxNum = Math.max(maxNum, b);
    height[l] > height[r] ? r-- : l++;
  }
  return maxNum;
};