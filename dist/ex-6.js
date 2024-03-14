"use strict";
let anyname = "\tnim \n rah    ";
console.log(anyname);
let strippingname = anyname.replace(/ /g, "").replace(/\t/g, "").replace(/\n/g, "");
console.log(strippingname);
