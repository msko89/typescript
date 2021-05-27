interface Person3 {
  name: string;
  age?: number;
  [index: string]: any;
}

function hello3(person: Person3): void {
  console.log(`Hello, ${person.name}`);
}

const p31: Person3 = {
  name: 'msko',
  age: 33,
};

const p32: Person3 = {
  name: 'komong',
  sisters: ['Sung', 'Chan'],
};

const p33: Person3 = {
  name: 'tester',
  father: p31,
  mother: p32,
};
