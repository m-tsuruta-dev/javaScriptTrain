/* No1 */
console.log(`\nNo1`);
let num1 = 2;
let num2 = 3;
let num3 = 10;
let num4 = 10000;
console.log(`${num3} + ${num2} = ${num3 + num2}`);
console.log(`${num3} - ${num2} = ${num3 - num2}`);
console.log(`${num3} x ${num2} = ${num3 * num2}`);
console.log(`${num4} ÷ ${num3} = ${num4 / num3}`);
console.log(`${num3} ÷ ${num2} = ${num3 / num2} 余り ${num3 % num2}`);
console.log(`${num1}の2乗 = ${num1} ** 2`);

/* No2 */
console.log(`\nNo2`);
for (let i = 1; i <= 30; i++) {
    console.log(i);
}

/* No3 */
console.log(`\nNo3`);
for (let i = 1; i <= 25; i++) {
    if(i % 5 == 0) {
        console.log(i);
    }
}

/* No4 */
console.log(`\nNo4`);

output04(5)
output04(7)
output04(26)

function output04(num){
   if (num > 25) {
     console.log(num);
   } else {
     for (let $i = 1; $i <= 25; $i++) {
       if ($i % num == 0) {
         console.log($i);      
       }
     }
   }
};

/* No5 */
console.log(`\nNo5`);

message = checkAge(19);
console.log(`あなたの場合はお酒は${message}です。`);

message = checkAge(20);
console.log(`あなたの場合はお酒は${message}です。`);

function checkAge(num,) {
    let message;
    if (num < 20) {
        message = `NG`;
    } else {
        message = `OK`;
    }

    return message;
};

/* No6 */
console.log(`\nNo6`);

let message06;
message06 = fizzBuss(6);
console.log(message06);
message06 = fizzBuss(10);
console.log(message06);
message06 = fizzBuss(15);
console.log(message06);
message06 = fizzBuss(16);
console.log(message06);


function fizzBuss(num) {
    let message06 = `Nothing`;
    if (num % 15 == 0) {
        message06 = `FizzBuzz`;
    } else if (num % 5 ==0) {
        message06 = `Buzz`;
    } else if (num % 3 ==0) {
        message06 = `Fizz`;
    }

    return message06;
}

/* No7 */
console.log(`\nNo7`);

showSeason07(3);
showSeason07(6);
showSeason07(9);
showSeason07(12);
showSeason07(13);

function showSeason07(month) {
    switch (month) {
        case 1:
        case 2:
        case 12:
            console.log(`Winter`);
            break;
        case 3:
        case 4:
        case 5:
            console.log(`Spring`);
            break;
        case 6:
        case 7:
        case 8:
            console.log(`Summer`);
            break;
        case 9:
        case 10:
        case 11:
            console.log(`Autumn`);
            break;
        
        default:
            console.log(`Unknown`)
    }
}

/* No8 */
console.log(`\nNo8`);

showSeason08(3, `japan`);
showSeason08(6, `japan`);
showSeason08(9, `japan`);
showSeason08(12, `japan`);
showSeason08(5, `ph`);
showSeason08(6, `ph`);

function showSeason08(month, country) {
    if (country == `japan`) {
        switch (month) {
            case 1:
            case 2:
            case 12:
                console.log(`Winter`);
                break;
            case 3:
            case 4:
            case 5:
                console.log(`Spring`);
                break;
            case 6:
            case 7:
            case 8:
                console.log(`Summer`);
                break;
            case 9:
            case 10:
            case 11:
                console.log(`Autumn`);
                break;
            
            default:
                console.log(`Unknown`)
        }
    } else if (country == `ph`) {
        switch (month) {
            case 6:
            case 7:
            case 8:
            case 9:
            case 10:
            case 11: 
                console.log(`Rainy`);
                break;
            case 12:
            case 1:
            case 2:
            case 3:
            case 4:
            case 5: 
                console.log(`Dry`);
                break;
            
            default:
                console.log(`Unknown`)
        }

    }
}

/* No9 */
console.log(`\nNo9`);

console.log(calcBmi09(164, 46));

function calcBmi09(height, weight) {
    calcHeight = (height / 100) ** 2;
    return weight / calcHeight;
}

/* No10 */
console.log(`\nNo10`);

console.log(calcOutput10(3));
console.log(calcOutput10(4));

function calcOutput10(num) {
    let stNum = num.toString();
    let threeNum = stNum.repeat(3);
    let  intNum = parseInt(threeNum);

    return num + intNum;

}