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

2. TypeSCript Compiler 실행 명령어

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
   - npm i typescript
