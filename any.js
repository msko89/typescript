"use strict";
function returnAny(message) {
    console.log(message);
}
var any1 = returnAny('리턴은 아무거나');
any1.toString();
var looselyTyped = {};
var d = looselyTyped.a.b.c;
function leakingAny(obj) {
    var a = obj.num;
    var b = a + 1;
    return b;
}
var c = leakingAny({ num: 0 });
// c.indexOf('0'); //error
