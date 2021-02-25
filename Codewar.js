// const n = 9119;
// const a = Array.from(n.toString()).map(Number);
// const compareEachOne = (arr) => {
//     return arr.reduce((match, c, i) => {
//         if (!match) {
//             return false
//         }
//         return c === arr[a.length - 1 - i];
//     }, true)
// }
// console.log(compareEachOne(a));

// function squareDigits(num){
//   //may the code be with you
//   const a = Array.from(num.toString()).map(Number);
//   const result = a.map(item => Math.pow(item, 2)).join("")
//   console.log(typeof(Number(result)))
//   return result;
// }
// squareDigits(9119)

// function alphabetPosition(text) {
//   return text
//     .split("")
//     .map((item) => item.toLowerCase().charCodeAt(0) - 97 + 1)
//     .filter((item) => item > 0)
//     .toString();
// }
// function alphabetPosition(text) {
//   return text.split("").reduce( (t, v) => v.toLowerCase().charCodeAt(0) - 97 + 1 > 0 ? [...t, v.toLowerCase().charCodeAt(0) - 97 + 1]: t,[]).join(" ").toString();
// }
// function test(text) {
//     return text.split("").map(item => item.toLowerCase().charCodeAt(0) - 96)
// }
// function alphabetPosition(text) {
//   return [...text].map((a) => parseInt(a, 36) - 9).filter((a) => a >= 0);
// }
function alphabetPosition(text) {
    return [...text].reduce((t, v) => parseInt(v, 36) - 9 >= 0 ? [...t, parseInt(v, 36) - 9] : t, [])
}
console.log(alphabetPosition("|=-r-^ex"));
