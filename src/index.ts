//Type Annotation
let str: string = "Text";
let num: number = 123;
let bol: boolean = true;
let all: any = "text";
all = 100;
all = false;
let arrstr: string[] = ["a", "b"];
let arrnum: number[] = [1, 2, 3, 4];
let mixArr: (number | string)[] = ["A", "B", 1, 2, 3];
let multiDim: (number | string[] | string | number[] | boolean)[] = [
  100,
  ["a", "b"],
  "Text",
  [1, 2, 3],
  true,
];
//type Annotation with function
function sum(num1: number, num2: number): string {
  let total: number = num1 + num2;
  return `Total num is ${total}`;
}
console.log(sum(10, 20));

//anonymous Function
let sums = function (num1: number, num2: number): number {
  return num1 + num2;
};
console.log(sums(10, 20));
//Arow func
let arow = (num1: number, num2: number): number => num1 + num2;
console.log(arow(20, 30));

//optional & defult parameter

function employees(
  username: string = "NoName",
  salary: number,
  userage?: number
): string {
  return `Heloo ${username} Your age is ${userage} your salary is ${salary}`;
}
console.log(employees("Ahmed", 35000, 35));

//rest Parameter
function nums(...num: number[]): string {
  let result: number = 0;
  for (let i = 0; i < num.length; i++) {
    result += num[i];
  }
  // num.forEach((val) => {
  //   result += val;
  // });
  return `restult is ${result}`;
}

console.log(nums(10, 20, 30, 40));

//Type Alias
type st = string;
let uname: st = "Hassan";
type Buttons = {
  right: string;
  left: string;
};
type mix = Buttons & { up: boolean };
function Page(btn: mix) {
  return ` btn up is ${btn.up} - ${btn.left} - ${btn.right}`;
}
console.log(Page({ right: "GoRight", left: "GoLeft", up: true }));

//literal Types
type nums = 0 | 1 | -1;
function compar(num1: number, num2: number): nums {
  if (num1 === num2) {
    return 0;
  } else if (num1 > num2) {
    return 1;
  } else {
    return -1;
  }
}

type Txt = "A" | "B" | "C";
function comparstr(str1: string): Txt {
  if (str1.startsWith("A") === true) {
    return "A";
  } else if (str1.startsWith("B") === true) {
    return "B";
  } else {
    return "C";
  }
}

console.log(comparstr("A"));

// Tuple Data type

let art: [number, string, boolean] = [100, "ZIzo", true];
console.log(art);
art.push(150, false);
console.log(art);

// Tuple use destruction
let [id, title, avi] = art;
console.log(id);
console.log(title);
console.log(avi);

//void Data type

function vid(nam: string): void {
  console.log(nam);
  return;
}
vid("Mido");

// Never data Type

const nvr = (msg: string) => {
  throw new Error(msg);
};
console.log(nvr("Test Error"));
