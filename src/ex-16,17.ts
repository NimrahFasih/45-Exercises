let guest : string[] = ["Anum", "Qudsiyah", "Ayesha"];

//Ayesha is not coming so, the new guest is Maheen
//Modifying List
let index = guest.indexOf("Ayesha");
guest.splice(index ,1, "Maheen");
//new list
console.log(guest);

//found bigger dinner table
console.log("Hey Guys, i Just found a bigger dinner table so want to invite more of our friends");

//adding at start
guest.unshift("Sadia");

//adding in the middle of array
guest.splice(2,0, "Rimsha");

//adding at the end using append
guest.push("Namra");

//sending messages
for(let a : number =0; a<guest.length; a++){
    console.log("Hey "+guest[a] +", You are cordially invited on Dinner tonight at my place.")
}
console.log(guest);
//Shrinking Guest List
console.log("\nsorry guys! but i can Invite only two people ");
for (let i=guest.length; i>2; i--){
    
    console.log("Hey "+guest[i-1] +", sorry can't invite you this time. May be next time");
    guest.pop();
}

console.log("\nYou guys are still Invited ");
for (let j=2; j>0; j--){
    
    console.log("Hey "+guest[j-1] +" , You are still invited");
    guest.pop();
}

//printing an empty list 
console.log("list = " +guest);


