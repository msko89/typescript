# TypeScript

- TypeScript는 타입을 추가하여 JavaScript를 확장
- TypeScript는 Compiled Language

  - 전통적인 Compiled Language와는 다른 점이 많아 Transpile 이라는 용어를 사용
  - JavaScript는 Interpreted Language

- TypeScript는 TypeScript 컴파일러를 통해 Browser, Node.js 런타임 환경에서 해석할 수 있는 JavaScript로 변환
  - TypeScript 컴파일러 설치 필요

| 항목                     |        Compiled        |   Interpreted    |
| ------------------------ | :--------------------: | :--------------: |
| 컴파일 필요              |           O            |        X         |
| 컴파일러 필요            |           O            |        X         |
| 컴파일 시점(컴파일 타임) |           O            |        X         |
| 실행방법                 | 컴파일된 결과물을 실행 | 코드 자체를 실행 |

<br/>
<br/>

## TypeScript 설치

---

1. TypeScript Compiler 설치

   - npm
     - npm i typescript -g
     - node_modules/.bin/tsc
     - tsc source.ts

2. TypeScript Compiler 실행 명령어

   - tsc + 파일명 ( 예: tsc test.ts )
   - test.ts -> test.js 파일 생성

3. TypeScript 설정파일

   - tsc --init
   - tsconfig.json 파일 생성
   - 설정파일이 있는 경우 tsc만 입력하면 컴파일 완료
   - tsc -w
     - 파일이 수정될 때마다 컴파일 실행

4. 해당 프로젝트에만 TypeScript 적용

   - npm uninstall typescript -g
   - npm init -y
   - npm i typescript -D
   - TypeSCript 실행

     1. node_modules/.bin/tsc
     1. node_modules/typescript/bin/tsc
     1. npx tsc(npx tsc -w)
     1. package.json scripts에 등록
        - build: "tsc"
        - buld:watch: "tsc -w"
        - npm run build

   - tsconfig.json 파일 생성
     - npx tsc --init

5. TypeScript Compiler 변경
   - 기본적으로 vscode 내에 내장되어 있음
   - npm으로 TypeScript 설치 후 설치한 TypeScript 버전을 사용하려면
     1. ts파일에서 하단에 버전 클릭
     1. TypeScript 버전 선택
     1. 작업 영역 버전 사용

<br/>
<br/>

## First Type Annotation

---

```js
let a = 'msko';
a = 89; //error

let b: string;
b = 'msko';
b = 89; //error

let c: number;
c = 'msko'; //error
c = 89;

function setNumber(d: number) {}
setNumber('msko'); //error
setNumber(89);
```

<br/>
<br/>

## Basic Types

---

- 기본 자료형 6가지
  - Boolean
  - Number
  - String
  - Null
  - Undefined
  - Symbol
  - Array: Object형
- 프로그래밍을 도울 몇가지 타입이 더 제공

  - Any, Void, Never, Unknown
  - Enum
  - Tuple: Object형

- TypeScript의 핵심 primitive types은 모두 소문자
- Number, String, Boolean, Symbol 또는 Object로 사용하면 안됨

```js
// 잘못된 예시
function reverse(s: String): String {
  return s.split('').reverse().join('');
}

// 올바른 예시
function reverse(s: string): string {
  return s.split('').reverse().join('');
}
```

### undefined & null

    - 모든 타입에 할당 가능
    - 컴파일 옵션에서 `--strictNullChecks` 사용하면 null/undefined는 void나 자기 자신에게만 할당 가능
    - null/undefined를 할당할 수 있게 하려면, union type을 이용

```js
let name: string = null;
let age: number = undefined;

// strictNullChecks => true
let u: undefined = null; //error
let union: string | null = null;
```

<br />

### Object

    - primitive type이 아닌 것을 나타내고 싶을 때 사용하는 타입
    - non-primitive type
        - not (number, string, boolean, bigint, symbol, null, undefined)

```js
// create by object literal
const person1 = { name: 'msko', age: 33 };

// person1 is not "object" type.
// person1 is "{name:string, age:number}" type.

// create by Object.create
const person2 = Object.create({ name: 'msko', age: 33 });
```

<br/>

### Array

    - 동일한 타입 속성으로만 가능
    - 다른 타입일 경우 union type으로 사용 가능

```js
let list1: number[] = [1, 2, 3, 4, 5];
// let list2: Array<number> = [1, 2, 3, 4, 5];
let list3: (number | string)[] = [1, 2, 3, '4'];
```

<br/>

### Tuple

```js
let x: [string, number];

//순서와 타입, 갯수가 맞아야 함
x = ['1', 2];
x = [1, '2']; //error
x = ['1', 2, 3]; //error

const person: [string, number] = ['msko', 33];
const [first, second] = person;
```

<br/>

### any

    - 어떤 타입이여도 상관없는 타입
    - 최대한 사용하지 않는게 핵심
        - 컴파일 타임에 타입 체크가 정상적으로 이뤄지지 않기 때문
    - 컴파일 옵션 중에 any를 써야하는데 쓰지 않으면 오류를 나타내는 옵션
        - noImplictAny

```js
function returnAny(message: any): any {
  console.log(message);
}

const any1 = returnAny('리턴은 아무거나');
any1.toString();

// any를 사용하게 될 경우 개체를 통해 계속 전파됨
// 타입 안정성을 위해 사용 자제
let looselyTyped: any = {};
const d = looselyTyped.a.b.c;

function leakingAny(obj: any) {
  const a: number = obj.num;
  const b = a + 1;
  return b;
}

const c = leakingAny({ num: 0 });
c.indexOf('0');
```

<br/>

### unknown

---

    - TypeScript 3.0 버전부터 지원
    - any와 짝으로 any보다 Type-safe한 타입
        - any와 같이 아무거나 할당 가능
        - 컴파일러가 타입을 추론할 수 있게끔 타입의 유형을 좁히거나 타입을 확정해주지 않으면 다른 곳에 할당 할 수 없고, 사용할 수 없다.
    - unknown 타입을 사용하면 runtime error를 줄일 수 있다.
        - 사용 전에 데이터의 일부 유형의 검사를 수행해야 함을 알리는 API에 사용할 수 있다.

<br/>

### never

---

    - never 타입은 모든 타입의 subtype 이며, 모든 타입에 할당 가능
    - never에는 그 어떤 것도 할당 할 수 없다.
    - any 조차도 never에 할당 할 수 없다.
    - 잘못된 타입을 넣는 실수를 막고자 할 때 사용

<br/>
