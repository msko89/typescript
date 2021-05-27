interface Person1 {
  name: string;
  age: number;
}

function hello1(person: Person1): void {
  console.log(`hello ${person.name}. ${person.age} years old.`);
}

const p1: Person1 = {
  name: 'msko',
  age: 33,
};

hello1(p1);
