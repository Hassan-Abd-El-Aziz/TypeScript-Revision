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

//type annotation with object
let obj: { readonly unams: string; id: number; avi: boolean; tst?: number } = {
  unams: "zizo",
  id: 15,
  avi: true,
};

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

// const nvr = (msg: string) => {
//   throw new Error(msg);
// };
// console.log(nvr("Test Error"));

//Enums Data Type
enum Cuntries {
  one = "Egypt",
  Two = "Ksa",
  three = "UAe",
  four = "Sodan",
}
enum cun2 {
  five = Cuntries.one + " My cun",
}
let nams = "hassan";
if (nams === "zizo") {
  console.log(`Heloo ${nams} Your cuntry is ${Cuntries.one}`);
} else if (nams === "hassan") {
  console.log(`Heloo ${nams} Your cuntry is ${cun2.five}`);
}

// Data Assertions

// let Head = document.getElementById("headr") as HTMLElement;
// Head.style.color = "red";

// let img = <HTMLImageElement>document.getElementById("img");
// img.src;

// let inp = document.getElementById("input") as HTMLInputElement;
// inp.value;

// let dt: any = 100;
// dt.repeat(15);

// Union and intersection types

let alldt: string | number;
alldt = 10;
alldt = "10";

type A = {
  one: string;
  two: boolean;
};
type B = {
  three: number;
};

type mixAB = A & B;

function tstmix(tst: mixAB) {
  console.log(tst.one);
  console.log(tst.two);
  console.log(tst.three);
}

tstmix({ one: "zizo", two: true, three: 100 });

// interface declaretion
interface UserData {
  id: number;
  readonly name: string;
  salary?: number;
}

let uone: UserData = { id: 1, name: "Hassan", salary: 10000 };
function uTwo(udata: UserData) {
  console.log(udata.id);
  console.log(udata.name);
  console.log(udata.salary);
}

uTwo({ id: 2, name: "zizo" });

//interface Methods & Parameter

interface Users {
  id: number;
  name: string;
  sayhi(): string;
  goodmorning: () => string;
  getdoubel(dt: number): number;
}
let userOne: Users = {
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

// interface Reopen

//Home page
interface Settings {
  theme: boolean;
  font: string;
}
//sideBar
interface Settings {
  sideBar: boolean;
}
interface Settings {
  title?: string;
}
let userSettings: Settings = {
  theme: false,
  font: "Open Sans",
  sideBar: false,
  title: "navBar",
};

console.log(userSettings.theme);
console.log(userSettings.font);
console.log(userSettings.sideBar);
console.log(userSettings.title);

interface users {
  id: number;
  name: string;
}
interface Moderator {
  roule: string | number;
}
interface Admin extends users, Moderator {
  protected?: boolean;
}

let usss: Admin = {
  id: 101,
  name: "Mohamed",
  roule: 2,
};

console.log(usss.id);
console.log(usss.name);
console.log(usss.roule);

// Class Type Annotation

class Usess {
  s: number;
  n: string;
  UpSal: () => string;
  constructor(name: string, salary: number) {
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

// Class Access Modifiers

class Tsts {
  msg: () => string;
  constructor(
    public uname: string,
    // private salary: number,
    protected age: number
  ) {
    this.msg = function () {
      return ` Your name is  ${uname} Your salary is  your Age is ${age}`;
    };
  }
}

let ts1 = new Tsts("zizo", 15000);

console.log(ts1.uname);
console.log(ts1.msg());

// Get & Set Accessors

class Userss {
  msg: () => string;
  constructor(
    private _userName: string,
    public age: number,
    protected salary?: number
  ) {
    this.msg = function () {
      return `WellCome Back Hassan`;
    };
  }
  get userName() {
    return this._userName;
  }
  set userName(val: string) {
    this._userName = val;
  }
}

let newUser = new Userss("Hassan", 154, 20000);
console.log(newUser.msg);
console.log(newUser.userName);
newUser.userName = "Ahmed";
console.log(newUser.userName);

// class static member
class stUsers {
  static counter: number = 0;
  static getcount(): string {
    return ` ${this.counter} Users Created`;
  }
  constructor(public userNmae: string) {
    stUsers.counter++;
  }
}

let u1 = new stUsers("Hassan");
let u2 = new stUsers("Ahmed");
let u3 = new stUsers("Mohamed");

console.log(u1.userNmae);
console.log(stUsers.getcount());

// class implements interface
interface Settingees {
  theme: boolean;
  font: string;
  save(): void;
}
class UsImp implements Settingees {
  static counter = 0;
  constructor(
    public theme: boolean,
    public font: string,
    public uname: string
  ) {
    UsImp.counter++;
  }
  save(): void {
    console.log(
      `your Name is  ${this.uname} your theme ${this.theme} your font ${this.font} `
    );
  }
}

let uI1 = new UsImp(true, "open sans", "zizo");
let uI2 = new UsImp(false, "open sans", "mido");
let uI3 = new UsImp(true, "open sans", "zizo");

console.log(uI1.uname);
console.log(uI1.save());
console.log(UsImp.counter);
