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
let obj = {
    unams: "zizo",
    id: 15,
    avi: true,
};
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
let alldt;
alldt = 10;
alldt = "10";
function tstmix(tst) {
    console.log(tst.one);
    console.log(tst.two);
    console.log(tst.three);
}
tstmix({ one: "zizo", two: true, three: 100 });
let uone = { id: 1, name: "Hassan", salary: 10000 };
function uTwo(udata) {
    console.log(udata.id);
    console.log(udata.name);
    console.log(udata.salary);
}
uTwo({ id: 2, name: "zizo" });
let userOne = {
    id: 1,
    name: "mizo",
    sayhi() {
        return `hi ${this.name}`;
    },
    goodmorning: () => `Good Morning ${userOne.name}`,
    getdoubel(dat) {
        return dat * 2;
    },
};
console.log(userOne.id);
console.log(userOne.name);
console.log(userOne.sayhi());
console.log(userOne.goodmorning());
console.log(userOne.getdoubel(5));
let userSettings = {
    theme: false,
    font: "Open Sans",
    sideBar: false,
    title: "navBar",
};
console.log(userSettings.theme);
console.log(userSettings.font);
console.log(userSettings.sideBar);
console.log(userSettings.title);
let usss = {
    id: 101,
    name: "Mohamed",
    roule: 2,
};
console.log(usss.id);
console.log(usss.name);
console.log(usss.roule);
class Usess {
    constructor(name, salary) {
        this.n = name;
        this.s = salary;
        this.UpSal = function () {
            return ` your Salary now is ${salary * 2}`;
        };
    }
    sayheloo() {
        return ` Heloo ${this.n}`;
    }
}
let uones = new Usess("Mido", 26000);
console.log(uones.n);
console.log(uones.s);
console.log(uones.UpSal());
console.log(uones.sayheloo());
class Tsts {
    constructor(uname, age) {
        this.uname = uname;
        this.age = age;
        this.msg = function () {
            return ` Your name is  ${uname} Your salary is  your Age is ${age}`;
        };
    }
}
let ts1 = new Tsts("zizo", 15000);
console.log(ts1.uname);
console.log(ts1.msg());
class Userss {
    constructor(_userName, age, salary) {
        this._userName = _userName;
        this.age = age;
        this.salary = salary;
        this.msg = function () {
            return `WellCome Back Hassan`;
        };
    }
    get userName() {
        return this._userName;
    }
    set userName(val) {
        this._userName = val;
    }
}
let newUser = new Userss("Hassan", 154, 20000);
console.log(newUser.msg);
console.log(newUser.userName);
newUser.userName = "Ahmed";
console.log(newUser.userName);
class stUsers {
    static getcount() {
        return ` ${this.counter} Users Created`;
    }
    constructor(userNmae) {
        this.userNmae = userNmae;
        stUsers.counter++;
    }
}
stUsers.counter = 0;
let u1 = new stUsers("Hassan");
let u2 = new stUsers("Ahmed");
let u3 = new stUsers("Mohamed");
console.log(u1.userNmae);
console.log(stUsers.getcount());
class UsImp {
    constructor(theme, font, uname) {
        this.theme = theme;
        this.font = font;
        this.uname = uname;
        UsImp.counter++;
    }
    save() {
        console.log(`your Name is  ${this.uname} your theme ${this.theme} your font ${this.font} `);
    }
}
UsImp.counter = 0;
let uI1 = new UsImp(true, "open sans", "zizo");
let uI2 = new UsImp(false, "open sans", "mido");
let uI3 = new UsImp(true, "open sans", "zizo");
console.log(uI1.uname);
console.log(uI1.save());
console.log(UsImp.counter);
class Food {
    constructor(title) {
        this.title = title;
    }
}
class Pizza extends Food {
    constructor(title, price) {
        super(title);
        this.price = price;
    }
    foodPrice() {
        console.log(`Pizza Price $${this.price}`);
    }
}
class Burger extends Food {
    constructor(title, price) {
        super(title);
        this.price = price;
    }
    foodPrice() {
        console.log(`Burger Pris $${this.price}`);
    }
}
let newPizza = new Pizza("Hot Pizza", 150.0);
let newBurger = new Burger("Beef Burger", 120.5);
console.log(newPizza.title);
console.log(newPizza.foodPrice());
console.log(newBurger.title);
console.log(newBurger.foodPrice());
class Player {
    constructor(name) {
        this.name = name;
    }
    attack() {
        console.log(`hello Player `);
    }
}
class PlOne extends Player {
    constructor(name, spear) {
        super(name);
        this.spear = spear;
    }
    attack() {
        console.log(`wellCOme ${this.name} num of spear is ${this.spear}`);
        this.spear -= 1;
    }
}
let pone = new PlOne("AHmed", 100);
console.log(pone.attack());
pone.attack();
console.log(pone.name);
pone.attack();
console.log(pone.spear);
class Pltwo extends Player {
    constructor(name, axe) {
        super(name);
        this.axe = axe;
    }
    attack() {
        super.attack();
        console.log(`wellCOme ${this.name} num of spear is ${this.axe}`);
        this.axe -= 1;
    }
}
let ptwo = new Pltwo("Hassan", 200);
console.log(ptwo.attack());
ptwo.attack();
console.log(ptwo.name);
ptwo.attack();
console.log(ptwo.axe);
//# sourceMappingURL=index.js.map