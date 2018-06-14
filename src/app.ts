import update from "immutability-helper";

const state1: string[] = ["x"];
const state2 = update(state1, { $push: [{}] });

console.log(state1);
console.log(state2);
