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
var Cuntries;
(function (Cuntries) {
    Cuntries["one"] = "Egypt";
    Cuntries["Two"] = "Ksa";
    Cuntries["three"] = "UAe";
    Cuntries["four"] = "Sodan";
})(Cuntries || (Cuntries = {}));
var cun2;
(function (cun2) {
    cun2["five"] = "Egypt My cun";
})(cun2 || (cun2 = {}));
let nams = "hassan";
if (nams === "zizo") {
    console.log(`Heloo ${nams} Your cuntry is ${Cuntries.one}`);
}
else if (nams === "hassan") {
    console.log(`Heloo ${nams} Your cuntry is ${cun2.five}`);
}
let Head = document.getElementById("headr");
Head.style.color = "red";
let img = document.getElementById("img");
img.src;
let inp = document.getElementById("input");
inp.value;
let dt = 100;
dt.repeat(15);
let alldt;
alldt = 10;
alldt = "10";
function tstmix(tst) {
    console.log(tst.one);
    console.log(tst.two);
    console.log(tst.three);
}
tstmix({ one: "zizo", two: true, three: 100 });
//# sourceMappingURL=index.js.map