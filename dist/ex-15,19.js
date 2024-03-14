"use strict";
let gst = ["Anum", "Qudsiyah", "Ayesha"];
console.log("Ayesha is unable to come\n");
//Ayesha is not coming so, the new gst is Maheen
//Modifying List
let ind = gst.indexOf("Ayesha");
gst.splice(ind, 1, "Maheen");
//printing new list with message
for (let a = 0; a < gst.length; a++) {
    console.log("Hey " + gst[a] + ", You are cordially invited on Dinner tonight at my place.");
}
//Exercise #19 
//Number of people
console.log("The total number of people joining us on dinner are " + gst.length);
