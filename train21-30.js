/* No21 */
console.log(`\nNo21`);

let nums21 = [1, 12, 12, 13, 2, 3, 4, 5, 6, 7, 8, 9, 10, 5, 4, 3];

let result21 = Array.from(nums21);
result21.sort((v1, v2) => v2 -v1);

console.log(result21);

/* No22 */
console.log(`\nNo22`);

let langs22 = ["ruby", "php", "python", "javaScript"];
langs22.sort((n1, n2) => n1.length -n2.length);

console.log(langs22);

/* No23 */
console.log(`\nNo23`);

let nums23 = [1,2,3,4,5];
let resultnums23 = nums23.map((nums23) => nums23 * 2);

console.log(resultnums23);

/* No24 */
console.log(`\nNo24`);

let values24_1 = [1, 2, 3, 4, 5, 8, 9, 10, 18, 20];
let values24_2 = [1, 2, 3, 4, 5, 8, 10, 20];

let result24_1 = multipple9(values24_1);
let result24_2 = multipple9(values24_2);

console.log(result24_1);
console.log(result24_2);

function multipple9 (values) {
    let answer = 0;
    for (let value of values) {
        if (value % 9 ==0) {
            answer = value;
        }
    }
    return answer;
}

/* No25 */
console.log(`\nNo25`);

let values25_1 = [1, 2, 3, 4, 5, 8, 9, 10, 18, 20];
let values25_2 = [1, 2, 3, 4, 5, 8, 10, 20];
  
let answer25_1 = values25_1.some((value) => value % 9 == 0 );
console.log(answer25_1);

let answer25_2 = values25_2.some((value) => value % 9 == 0 );
console.log(answer25_2);

/* No26 */
console.log(`\nNo26`);

let intBox26 = [];

while (true) {
    intBox26 = [];
  for (let i = 0; i < 10; i++) {
    let num = Math.floor( Math.random() * 30 ) + 1;
    intBox26.push(num + 1);
  }

  let answer = intBox26.some((value) => value % 11 == 0 );
  if (answer) {
    break;
  } else {
    
  }
}
console.log(intBox26);

/* No27 */
console.log(`\nNo27`);

let values27 = [1, "a", 2, "b", "c", 3];
let intArray27 = [];
let stringArray27 = [];
  

for (let value of values27) {
  if (typeof(value) === "number") {
    intArray27.push(value);
  } else if (typeof(value) === "string") {
    stringArray27.push(value);
  }
}

console.log(intArray27);
console.log(stringArray27);

/* No28 */
console.log(`\nNo28`);

let values28 = [1, "a", 2, "b", "c", 3, "4", "5", "6"];
let intArray28 = [];
let stringArray28 = [];
  

for (let value of values28) {
  if (! isNaN(value)) {
    value = parseInt(value);
    intArray28.push(value);
  } else {
    stringArray28.push(value);
  }
}

console.log(intArray28.sort((v1, v2) => v2 - v1));

/* No29 */
console.log(`\nNo29`);

let values29 =  ["Ms. Tanaka", "Mr. Suzuki", "Ms. Akagi", "Mrs. Yoko", "Ms. Yoshiki"];
let arrayBox29 = [];
let arrayBox29_2 = [];
  
arrayBox29 = values29.filter((value) => value.startsWith("Ms."));
console.log(arrayBox29);
arrayBox29_2 = values29.filter((value) => value.endsWith("ki"));
console.log(arrayBox29_2);

/* No30 */
console.log(`\nNo30`);

let values30 = ["Taiwan-tokyo", "Taiwan-osaka", "Taiwan-kyoto"];
let resultValues30 = values30.map((value) => value.replaceAll("Taiwan", "Japan"));
console.log(resultValues30);