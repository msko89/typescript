"use strict";
// const aNumber: number = maybe;  //error
if (typeof maybe === 'number') {
    var aNumber = maybe;
}
//Type Guard
if (maybe === true) {
    var aBoolean = maybe;
    // const aString: string = maybe; //error
}
if (typeof maybe === 'string') {
    var aString = maybe;
    // const aBoolean: boolean = maybe;  //error
}
