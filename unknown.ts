declare const maybe: unknown;

// const aNumber: number = maybe;  //error
if (typeof maybe === 'number') {
  const aNumber: number = maybe;
}

//Type Guard
if (maybe === true) {
  const aBoolean: boolean = maybe;
  // const aString: string = maybe; //error
}

if (typeof maybe === 'string') {
  const aString: string = maybe;
  // const aBoolean: boolean = maybe;  //error
}
