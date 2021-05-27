"use strict";
function returnAny(message) {
    console.log(message);
}
const any1 = returnAny('리턴은 아무거나');
any1.toString();
let looselyTyped = {};
const d = looselyTyped.a.b.c;
function leakingAny(obj) {
    const a = obj.num;
    const b = a + 1;
    return b;
}
const c = leakingAny({ num: 0 });
// c.indexOf('0'); //error
