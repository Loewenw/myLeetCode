/**
字符          数值
I             1
V             5
X             10
L             50
C             100
D             500
M             1000

I 可以放在 V (5) 和 X (10) 的左边，来表示 4 和 9。
X 可以放在 L (50) 和 C (100) 的左边，来表示 40 和 90。 
C 可以放在 D (500) 和 M (1000) 的左边，来表示 400 和 900。
 */
/**
 * @param {string} s
 * @return {number}
 */

var romanToInt = function(s) {
    let obj = {
      'I': 1,
      'V': 5,
      'X': 10,
      'L': 50,
      'C': 100,
      'D': 500,
      'M': 1000
    }
    let intNum = 0;
    s.split('').map((item, index) => {
      if(index >= 1){
        intNum += obj[s[index - 1]] >= obj[item] ? obj[item] : (obj[item] - 2 * obj[s[index - 1]]);
        return;
      }
      intNum += obj[item];
      return;
    });
    return intNum;
};