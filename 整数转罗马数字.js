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
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    let roman = '';
    let newNum = num;
    switch(newNum.toString().length){
      case 4:
        roman += createString(parseInt(newNum / 1000), 'M');
        newNum = newNum % 1000;
        console.log('4', roman, newNum);
      case 3:
        roman += createNum(parseInt(newNum / 100), 'C', 'D', 'M');
        newNum = newNum % 100;
        console.log('3', roman, newNum);
      case 2:
        roman += createNum(parseInt(newNum / 10), 'X', 'L', 'C');
        newNum = newNum % 10;
        console.log('2', roman, newNum);
      case 1:
        roman += createNum(newNum, 'I', 'V', 'X');
        console.log('1', roman, newNum);
      default:
        break;
    }
    return roman;
};
const createString = (num, str) => {
  const arr = Array.from({length: num}, (v, k) => str);
  return arr.join('');
}
const createNum = (num, str1, str2, str3) => {
  if(num < 4){
    return createString(num, str1);
  } else if (num === 4){
    return str1 + str2;
  } else if (num >= 5 && num < 9){
    return str2 + createString(num - 5, str1);
  } else if (num === 9){
    return str1 + str3;
  }
  return '';
}