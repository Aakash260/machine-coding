// Most Asked 10 Interview Question

// Q1 Reverse String

// const str = "CanYouReverserMe";
//way 1:
// console.log(str.split("").reverse().join(""));

// way 2:
// let rev = "";
// for (let i = 0; i < str.length; i++) {
//   rev = str[i] + rev;
// }

// Q2 target sum

// const arr = [1, 3, 4, 5, 2];

// way 1
// function TargeySum(arr, target) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       if (arr[i] + arr[j] === target) {
//         return [arr[i], arr[j]];
//       }
//     }
//   }
// }

//way 2
// function TargeySum(arr, target) {
//   let map = new Map();
//   for (let i = 0; i < arr.length; i++) {
//     let compare = target - arr[i];
//     if (map.has(compare)) {
//       return [compare, arr[i]];
//     }
//     map.set(arr[i], i);
//   }
// }
// console.log(TargeySum(arr, 6));

//Q3 reverse no and tell is it palindrom

// function reverseAndPalindrom(no) {
//   let temp = no;
//   let rev = 0;
//   while (temp != 0) {
//     let digit = temp % 10;
//     rev = rev * 10 + digit;
//     temp = Math.floor(temp / 10);
//   }
//   return rev === no;
// }

// console.log(reverseAndPalindrom(123));

// Q4 longestConsecutive

// function longestConsecutive(nums) {
//   if (nums.length === 0) return 0;

//   const set = new Set(nums);
//   let longest = 0;

//   for (let num of set) {
//     // start only if num is the beginning of a sequence
//     if (!set.has(num - 1)) {
//       let currentNum = num;
//       let streak = 1;

//       while (set.has(currentNum + 1)) {
//         currentNum++;
//         streak++;
//       }

//       longest = Math.max(longest, streak);
//     }
//   }

//   return longest;
// }

// console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));

// Q5 flatten Array

//way 1
// const arr = [
//   [1, 2, 3],
//   [4, 5, [6, 7, 8]],
// ];

// function flattenArr(arr) {
//   let result = [];
//   for (let item of arr) {
//     if (Array.isArray(item)) {
//       result = result.concat(flattenArr(item));
//     } else {
//       result.push(item);
//     }
//   }
//   return result;
// }

//way 2
// function flattenArr(arr) {
//   return arr.reduce((acc, curr) => {
//     return acc.concat(Array.isArray(curr) ? flattenArr(curr) : curr);
//   }, []);
// }

// console.log(flattenArr(arr));

//Q6 reverse sentense

// const sent = "Hello World from JavaScript";

// console.log(sent.split(" ").reverse().join(" "));

// Q7 replace work from sentense

// const sent = "Hello World from Nodejs";

// function replaceWord(sent, current, replace) {
//   let arr = sent.split(" ");
//   let idx = arr.indexOf(current);
//   arr.splice(idx, 1, replace);
//   console.log("arr", arr, idx);
// }

// console.log(replaceWord(sent, "Nodejs", "Python"));

// Q8 check freq of ch and return max freq

// let str = "aaabbccd";

// function checkLarFreq(str) {
//   let obj = {};
//   for (let ch of str) {
//     if (obj[ch]) {
//       obj[ch] = obj[ch] + 1;
//     } else {
//       obj[ch] = 1;
//     }
//   }
//   let maxChar = "";
//   let maxCount = 0;

//   for (let key in obj) {
//     if (obj[key] > maxCount) {
//       maxCount = obj[key];
//       maxChar = key;
//     }
//   }
//   return { [maxChar]: maxCount };
// }

// console.log(checkLarFreq(str));

// Q10 Capital first letter

// const str = "i love india";

// function capitaliseFirst(str) {
//   let arr = str.split(" ");
//   let result = arr.map((word) => word.charAt(0).toUpperCase() + word.slice(1));
//   return result.join(" ");
// }

// console.log(capitaliseFirst(str));
