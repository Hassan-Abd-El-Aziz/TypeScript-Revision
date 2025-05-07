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

//optional & defult parameter

function Employees(
  username: string = "NoName",
  salary: number,
  userage?: number
): string {
  return `Heloo ${username} Your age is ${userage} your salary is ${salary}`;
}
console.log(Employees("Ahmed", 35000, 35));

