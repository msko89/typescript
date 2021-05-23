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
