let x: [string, number];

//순서와 타입, 갯수가 맞아야 함
x = ['1', 2];
// x = [1, '2']; //error
// x = ['1', 2, 3]; //error

const person: [string, number] = ['msko', 33];
const [first, second] = person;
