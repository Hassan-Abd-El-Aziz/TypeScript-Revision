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
let sums = function (num1, num2) {
    return num1 + num2;
};
console.log(sums(10, 20));
let arow = (num1, num2) => num1 + num2;
console.log(arow(20, 30));
function employees(username = "NoName", salary, userage) {
    return `Heloo ${username} Your age is ${userage} your salary is ${salary}`;
}
console.log(employees("Ahmed", 35000, 35));
function nums(...num) {
    let result = 0;
    for (let i = 0; i < num.length; i++) {
        result += num[i];
    }
    return `restult is ${result}`;
}
console.log(nums(10, 20, 30, 40));
let uname = "Hassan";
function Page(btn) {
    return ` btn up is ${btn.up} - ${btn.left} - ${btn.right}`;
}
console.log(Page({ right: "GoRight", left: "GoLeft", up: true }));
//# sourceMappingURL=index.js.map