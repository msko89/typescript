"use strict";
var _a;
// Symbol 함수를 사용해서 symbol 타입을 만들 수 있다.
// new Symbol로 사용할 수 없다.
// tsconfig.json의 lib에 ES2015 추가 필요
console.log(Symbol('foo') === Symbol('foo')); //false
/**
 * Symbol
 * 프리미티브 타입의 값을 담아서 사용
 * 고유하고 수정 불가능한 값으로 만듬
 * 주로 접근을 제어하는데 사용
 */
var sym = Symbol();
var obj = (_a = {},
    _a[sym] = 'value',
    _a);
console.log(obj[sym]);
