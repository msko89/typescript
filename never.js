"use strict";
function error(message) {
    throw new Error(message);
}
function fail() {
    return error('failed');
}
function infiniteLoop() {
    while (true) { }
}
if (typeof a !== 'string') {
    a;
}
// const b: Indexable<{}> = '';  //never에 할당하려고 해서 error 발생
