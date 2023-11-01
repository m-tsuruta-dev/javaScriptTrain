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