/* No41 */
console.log(`\nNo41`);

let people41 = [];

let mapPeople411 = new Map([["name", "Taro1"], ["age", 20], ["height", 180], ["weight", 60], ["country", "Japan"]]);
let mapPeople412 = new Map([["name", "Taro2"], ["age", 30], ["height", 170], ["weight", 65]]);
let mapPeople413 = new Map([["name", "Taro3"], ["age", 40], ["height", 160], ["weight", 70], ["country", "Taiwan"]]);
let mapPeople414 = new Map([["name", "Taro4"], ["age", 20], ["height", 160], ["weight", 75], ["country", "Japan"]]);
let mapPeople415 = new Map([["name", "Taro5"], ["age", 60], ["height", 160], ["weight", 75], ["country", "Japan"]]);
let mapPeople416 = new Map([["name", "Taro6"], ["age", 50], ["height", 150], ["weight", 75], ["country", "Japan"]]);

people41.push(mapPeople411);
people41.push(mapPeople412);
people41.push(mapPeople413);
people41.push(mapPeople414);
people41.push(mapPeople415);
people41.push(mapPeople416);


let sortPeople41 = people41.sort(function(v1, v2){

                   if (v1.get("height") == v2.get("height") ) {
                     return v2.get("age") - v1.get("age")
                   } else {
                     return v1.get("height") - v2.get("height")
                   }
                 });

console.log(sortPeople41);

/* No42 */
console.log(`\nNo42`);

let fruits42 = new Map([["apple", 100], ["mango", 200], ["banana", 300]]);

fruits42.delete("apple");

console.log(fruits42);

/* No43 */
console.log(`\nNo43`);

let fruits43 = [];

let fruit431 = new Map([["apple", 100], ["orange", 50], ["mango", 30]]);
let fruit432 = new Map([["apple", 200], ["orange", 250], ["mango", 230]]);
let fruit433 = new Map([["apple", 300], ["orange", 350], ["mango", 330]]);

fruits43.push(fruit431);
fruits43.push(fruit432);
fruits43.push(fruit433);

let result43 = 0;
for (var fruit of fruits43) {
    result43 += fruit.get("apple");  
}
console.log(result43);

/* No44 */
console.log(`\nNo44`);

let fruits44 = ["apple", "apple", "orange", "mango", "mango", "mango", "mango"];

let mapFruits44 = new Map();

let current44 = 0;

for (let fruit of fruits44) {
  if (mapFruits44.has(fruit)) {
    current44 = mapFruits44.get(fruit);
  } else {
    current44 = 0; 
  }
  
  mapFruits44.set(fruit, current44 + 1);
}
console.log(mapFruits44);

/* No45 */
console.log(`\nNo45`);

console.log(checkMultiple451(9));
console.log(checkMultiple451(10));
console.log(checkMultiple451(14));
console.log(checkMultiple451(15));
console.log(checkMultiple451(30));
  
console.log(checkMultiple452(9));
console.log(checkMultiple452(10));
console.log(checkMultiple452(14));
console.log(checkMultiple452(15));
console.log(checkMultiple452(30));


function checkMultiple451(number) {
  if (number % 3 == 0 || number % 5 == 0) {
    return true;
  } else {
    return false;
  }
}

function checkMultiple452(number) {
  if (number % 3 != 0 && number % 5 != 0) {
    return false;
  } else {
    return true;
  }
}

/* No46 */
console.log(`\nNo46`);

var d = new Date();

yesterday(d);
today(d);
tomorrow(d);

function today(date) {

  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var day = date.getDate();

  console.log(year + '-' + month + '-' + day);
}

function yesterday(date) {

  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var day = date.getDate() - 1;

  console.log(year + '-' + month + '-' + day);
}

function tomorrow(date) {

  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var day = date.getDate() + 1;

  console.log(year + '-' + month + '-' + day);
}

/* No47 */
console.log(`\nNo47`);

let ascii_code47 = 'A'.charCodeAt(0);
console.log(ascii_code47);

let num47 = String.fromCodePoint(65);    
console.log(num47);

/* No48 */
console.log(`\nNo48`);

let capital_letter_start = 65
let capital_letter_end = capital_letter_start + 25

var alphabet_array = []
for (var i = 0; i < 10; i++){
  var num = getRandom(capital_letter_start, capital_letter_end)
  alphabet_array.push(String.fromCharCode(num))
}

console.log(alphabet_array.join(''))


// getRandom(2, 5)で、2から5の数字がランダムで出ます
function getRandom(min, max) {
  var random = Math.floor(Math.random() * (max + 1 - min)) + min
  return random
}

/* No49 */
console.log(`\nNo49`);

let people49 = [{ "name" : "Taro1", "age" : 20, "height" : 180, "weight" : 60 },
              { "name" : "Taro2", "age" : 40, "height" : 160, "weight" : 70 },
              { "name" : "Taro3", "age" : 50, "height" : 150, "weight" : 75 }
             ];

for (let person of people49) {
  console.log(`name ${person["name"]}, age ${person["weight"]}`);
  console.log(`BMI: ${bmi(person["height"], person["weight"])}`);
}


function bmi(height, weight) {
  let mHeight = (height / 100) ** 2;
  
  return weight / mHeight;
}

/* No50 */
console.log(`\nNo50`);

class People50 {

    constructor(name, age, height, weight) {
      this.name = name;
      this.age = age;
      this.height = height;
      this.weight = weight;
    }
  
    showStatus(){
      console.log(`name ${this.name}, age ${this.age}`);
    }
    
    showBMI(){
      console.log(`BMI: ${this.bmi()}`);
    }
  
    bmi() {
      let mHeight = (this.height / 100) ** 2;
      return this.weight / mHeight;
    }
  }
  
  
  let people50 = [{ "name" : "Taro1", "age" : 20, "height" : 180, "weight" : 60 },
                { "name" : "Taro2", "age" : 40, "height" : 160, "weight" : 70 },
                { "name" : "Taro3", "age" : 50, "height" : 150, "weight" : 75 }
               ];
  
  for (let person of people50) {
    let personObj = new People50(person["name"], person["age"], person["height"], person["weight"]);
    personObj.showStatus();
    personObj.showBMI();
  }
