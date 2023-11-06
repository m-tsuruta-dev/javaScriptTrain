/* No31 */
console.log(`\nNo31`);

let values31 = ["090-1111-22223","090-1111-22224","090-1111-22225"];

let resultvalue31 = values31.map((value) => value.replaceAll("-",""));
console.log(resultvalue31);


/* No32 */
console.log(`\nNo32`);

let values32 = "ph-cebu, japan-tokyo, japan-osaka, Taiwan-taipei, japan-kyoto";
let arrayValue32 = values32.split(",").map((v) => v.trim());
let arrayValueJp32 = arrayValue32.filter((values32 => values32.startsWith("japan-")));
let capitalValueJp32 = arrayValueJp32.map((arrayValueJp32) => arrayValueJp32.substring(0, 1).toUpperCase() + arrayValueJp32.substring(1));
let stringJp32 = capitalValueJp32.join(",")

console.log(stringJp32);

/* No33 */
console.log(`\nNo33`);

let intBoxes33 = [];

for (var i = 0; i < 20; i++) {

  let num33 = Math.floor( Math.random() * 10 ) + 1;
  if (!intBoxes33.includes(num33)) {
    intBoxes33.push(num33);  
  }
}

let intSet33 = new Set();

for (var i = 0; i < 20; i++) {
  let num331 = Math.floor( Math.random() * 10 ) + 1;
  intSet33.add(num331);
}

console.log(Array.from(intSet33));

/* No34 */
console.log(`\nNo34`);

let listBox341 = [1, 2, 3, 4, 5, 8, 9];
let listBox342 = [9, 7, 6, 5, 4];
  
let set341 = new Set(listBox341);
let set342 = new Set(listBox342);
  
let answer34 = symmetricDifference(set341, set342);

console.log(answer34);
console.log(Array.from(answer34));

function symmetricDifference(setA, setB) {

  for (let value of setB) {
    if (setA.has(value)) {
      setA.delete(value)
    } else {
      setA.add(value)
    }
  }

  return setA

}

/* No35 */
console.log(`\nNo35`);

let nums35 = '99\t100\t201\t101\t9999\t2\t5\t6';

var new_data35 = nums35.split('\t')
                      .filter(val => Number(val) > 100)
                      .sort()
                      .reverse()
                      .join(',')

console.log(new_data35);

/* No36 */
console.log(`\nNo36`);

let human36 = new Map([["name", "Taro"], ["age", 20], ["height", 180], ["weight", 60]]);
human36.set('nick_name', 'Ace');

console.log(human36);

/* No37 */
console.log(`\nNo37`);

let human37 = new Map([["name", "Taro"], ["age", 20], ["height", 180], ["weight", 60]]);
let human372 = new Map([["name2", "Jiro"], ["age2", 30], ["height2", 170], ["weight2", 50]]);

let human373 = new Map([...human37, ...human372]);

/* No38 */
console.log(`\nNo38`);

let people38 = [];

let mapPeople381 = new Map([["name", "Taro1"], ["age", 20], ["height", 180], ["weight", 60], ["country", "Japan"]]);
let mapPeople382 = new Map([["name", "Taro2"], ["age", 30], ["height", 170], ["weight", 65]]);
let mapPeople383 = new Map([["name", "Taro3"], ["age", 40], ["height", 160], ["weight", 70], ["country", "Taiwan"]]);
let mapPeople384 = new Map([["name", "Taro4"], ["age", 50], ["height", 150], ["weight", 75], ["country", "Japan"]]);

people38.push(mapPeople381);
people38.push(mapPeople382);
people38.push(mapPeople383);
people38.push(mapPeople384);

let listPeoples38 = [];

for (var person of people38 ) {
  if (person.has("country")){
    listPeoples38.push(person);
  }
}

console.log(listPeoples38);

/* No39 */
console.log(`\nNo39`);

let people39 = [];

let mapPeople391 = new Map([["name", "Taro1"], ["age", 20], ["height", 180], ["weight", 60], ["country", "Japan"]]);
let mapPeople392 = new Map([["name", "Taro2"], ["age", 30], ["height", 170], ["weight", 65]]);
let mapPeople393 = new Map([["name", "Taro3"], ["age", 40], ["height", 160], ["weight", 70], ["country", "Taiwan"]]);
let mapPeople394 = new Map([["name", "Taro4"], ["age", 50], ["height", 150], ["weight", 75], ["country", "Japan"]]);

people39.push(mapPeople391);
people39.push(mapPeople392);
people39.push(mapPeople393);
people39.push(mapPeople394);

let listPeoples39 = [];

for (var person of people39 ) {
  for (var value of person.values() ) {
    if (value == "Japan"){
        listPeoples39.push(person);
      break;
    }
  }
}

console.log(listPeoples39);

/* No40 */
console.log(`\nNo40`);

let people40 = [];

let mapPeople401 = new Map([["name", "Taro1"], ["age", 20], ["height", 180], ["weight", 60], ["country", "Japan"]]);
let mapPeople402 = new Map([["name", "Taro2"], ["age", 30], ["height", 170], ["weight", 65]]);
let mapPeople403 = new Map([["name", "Taro3"], ["age", 40], ["height", 160], ["weight", 70], ["country", "Taiwan"]]);
let mapPeople404 = new Map([["name", "Taro4"], ["age", 50], ["height", 150], ["weight", 75], ["country", "Japan"]]);

people40.push(mapPeople401);
people40.push(mapPeople402);
people40.push(mapPeople403);
people40.push(mapPeople404);

let listPeople40 = [];

for (var person of people40 ) {
  if (person.get('age') > 30){
    listPeople40.push(person);
  }
}

console.log(listPeople40);