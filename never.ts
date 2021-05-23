function error(message: string): never {
  throw new Error(message);
}

function fail() {
  return error('failed');
}

function infiniteLoop(): never {
  while (true) {}
}

declare const a: string | number;

if (typeof a !== 'string') {
  a;
}

type Indexable<T> = T extends string ? T & { [index: string]: any } : never;
// const b: Indexable<{}> = '';  //never에 할당하려고 해서 error 발생
