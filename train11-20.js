/* No11 */
console.log(`\nNo11`);


console.log(calc11(10, 5));
console.log(calc11(5, 10));

function calc11(num1, num2) {
    let result = num1 - num2;
    if (result < 0) {
        result = Math.abs(result);
    }
    return result;
}

/* No12 */
console.log(`\nNo12`);

console.log(stringLength12(`tsurutamasahiro`));

function stringLength12(value) {
    return value.length;
}

/* No13 */
console.log(`\nNo13`);
console.log(`a`.toUpperCase());
console.log(`A`.toLowerCase());

/* No14 */
console.log(`\nNo14`);

let s1 = 'rubyab';
let s2 = 'railsb';

let result = compareString14(s1, s2);
console.log(result);

function compareString14(str1, str2) {
    let array1 = str1.split(``);
    let array2 = str2.split(``);

    let resultArray = [];

    for (var str of array1) {
        if (array2.includes(str)) {
            if (!resultArray.includes(str)) {
                resultArray.push(str);
            }
        }
    }

    return resultArray;
}

/* No15 */
console.log(`\nNo15`);

showString15("world");


function showString15(str) {
  console.log(str.substring(0, 1));
  console.log(str.substring(str.length - 1));
  console.log(str.substring(0, 2));
  console.log(str.substring(1, 4));
};

/* No16 */
console.log(`\nNo16`);

let array1 = ["banana", "apple", "orange"];
let array2  = ["mango", "banana", "apple"];

let array3  = ["banana", "apple", "orange"];
let array4  = ["mango", "banana", "melon"];
  
let setAnswer1 = compareList16(array1, array2);
let setAnswer2 = compareList16(array3, array4);

// Setを配列に変換
// exchange from Set to Array
let arrayAnswer1 = Array.from(setAnswer1);
let arrayAnswer2 = Array.from(setAnswer2);
console.log(arrayAnswer1);
console.log(arrayAnswer2);


function compareList16(array1, array2) {
  let set1 = new Set(array1);
  let set2 = new Set(array2);
  const intersection = new Set([...set1].filter(value => set2.has(value)));
  
  return intersection;
}

/* No17 */
console.log(`\nNo17`);
let array17 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let total = 0;
  
for (let num of array17) {
  total += num;
}

console.log(total);

/* No18 */
console.log(`\nNo18`);

let array18 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let max = 0;
  
for (let num of array17) {
  if (num > max) {
    max = num;
  }
}
console.log(max);

/* No19 */
console.log(`\nNo19`);

let languages = ["ruby", "php", "python", "java"];
let resultLanguages = languages.map((language) => language.toUpperCase());

console.log(resultLanguages);

/* No20 */
console.log(`\nNo20`);

let langes = ["ruby", "php", "python", "java"];
let resultLanges = langes.map(
    (language) => language.substring(0, 1).toUpperCase() + language.substring(1));

    console.log(resultLanges);