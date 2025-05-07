"use strict";
let str = "Text";
let num = 123;
let bol = true;
let all = "text";
all = 100;
all = false;
let arrstr = ["a", "b"];
let arrnum = [1, 2, 3, 4];
let mixArr = ["A", "B", 1, 2, 3];
let multiDim = [
    100,
    ["a", "b"],
    "Text",
    [1, 2, 3],
    true,
];
function sum(num1, num2) {
    let total = num1 + num2;
    return `Total num is ${total}`;
}
console.log(sum(10, 20));
function Employees(username = "NoName", salary, userage) {
    return `Heloo ${username} Your age is ${userage} your salary is ${salary}`;
}
console.log(Employees("Ahmed", 35000, 35));
//# sourceMappingURL=index.js.map