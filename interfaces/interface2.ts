interface Person2 {
  name: string;
  age?: number;
}

function hello2(person: Person2): void {
  console.log(`Hello, ${person.name}.`);
}

hello2({ name: 'msko', age: 33 });
hello2({ name: 'komong' });
