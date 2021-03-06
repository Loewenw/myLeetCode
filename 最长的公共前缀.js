/**
编写一个函数来查找字符串数组中的最长公共前缀。

如果不存在公共前缀，返回空字符串 ""。

示例 1:

输入: ["flower","flow","flight"]
输出: "fl"
示例 2:

输入: ["dog","racecar","car"]
输出: ""
解释: 输入不存在公共前缀。
说明:

所有输入只包含小写字母 a-z 。
 */

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  let strsLen = strs.length;
  if(!strsLen) return '';
  let arr = [''];
  let fristStr = strs[0];
  let fristStrLen = fristStr.length;
  
  for(let i = 0; i < fristStrLen; i++){
    let num = 1;
    for(let j = 1; j < strs.length; j++){
      if(strs[j][i] === fristStr[i]){
        num++
      }
    }
    if(num === strsLen){
      arr.push(fristStr[i]);
      continue;
    }
    break;
  }
  return arr.join('');
};