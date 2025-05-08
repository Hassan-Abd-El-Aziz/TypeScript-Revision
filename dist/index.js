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
function compar(num1, num2) {
    if (num1 === num2) {
        return 0;
    }
    else if (num1 > num2) {
        return 1;
    }
    else {
        return -1;
    }
}
function comparstr(str1) {
    if (str1.startsWith("A") === true) {
        return "A";
    }
    else if (str1.startsWith("B") === true) {
        return "B";
    }
    else {
        return "C";
    }
}
console.log(comparstr("A"));
let art = [100, "ZIzo", true];
console.log(art);
art.push(150, false);
console.log(art);
let [id, title, avi] = art;
console.log(id);
console.log(title);
console.log(avi);
function vid(nam) {
    console.log(nam);
    return;
}
vid("Mido");
const printname = (names) => {
    console.log(names);
};
console.log(printname("mizoo"));
//# sourceMappingURL=index.js.map