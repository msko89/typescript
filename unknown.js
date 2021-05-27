"use strict";
// const aNumber: number = maybe;  //error
if (typeof maybe === 'number') {
    const aNumber = maybe;
}
//Type Guard
if (maybe === true) {
    const aBoolean = maybe;
    // const aString: string = maybe; //error
}
if (typeof maybe === 'string') {
    const aString = maybe;
    // const aBoolean: boolean = maybe;  //error
}
