const language: string = "javascript";
console.log(language.split(""));
const score: number = 100;
// console.log(score.split());
const isAvailable: boolean = false;
// Ternary operator
const text: string = language === "javascript" ? "weird" : "awesome";
let keyboard: any;
keyboard = "Akko";
keyboard = 100;
keyboard = false;
let bottle: undefined = undefined;
let mouse: null = null;

let study: unknown;
study = "reactjs";
if (typeof study === "string") {
  study.split("");
}
function sum(a: unknown, b: unknown): number {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  }
  return 0;
}
sum("5", "10"); // 0
sum(5, 10); // 15
function calculate(): never {
  // while (true) {
  //   console.log("infinite");
  // }
  throw new Error("some message");
}
const title: string = "abc";
const number: number = 10;
const isActie: boolean = true;
const name1: string = title === "abc" ? "123" : "222";
function sum1(a: number, b: number) {
  return a + b;
}
sum1(1, 2);
