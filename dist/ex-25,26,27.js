"use strict";
let alien_color = ["green", "yellow", "red"];
console.log("\nExercise 25");
//version that passes 
for (let a = 0; a < alien_color.length; a++) {
    if (alien_color[a] === "green") {
        console.log(alien_color[a] + ":  Alien color is Green so You have just Earned 5 points");
    }
}
//version that fails
for (let a = 0; a < alien_color.length; a++) {
    if (alien_color[a] === "purple") {
        console.log(":  Alien color is Purple so You have just Earned 5 points");
    }
}
//Exercise 26
console.log("\nExercise 26");
//version that runs if block
for (let a = 0; a < alien_color.length; a++) {
    if (alien_color[a] === "green") {
        console.log(alien_color[a] + ":  Alien color is Green so You have just Earned 5 points for shooting the alien");
    }
    //version that runs else block
    else
        (console.log(alien_color[a] + ":  the color is not green and you have earned 10 points"));
}
//Exercise # 27 
console.log("\nExercise 27");
for (let a = 0; a < alien_color.length; a++) { //version that runs if block
    if (alien_color[a] === "green") {
        console.log(alien_color[a] + ":  Alien color is Green so You have just Earned 5 points");
    }
    //version that runs elseif block
    else if (alien_color[a] === "yellow") {
        console.log(alien_color[a] + ":  Alien color is yellow  so You have just Earned 10 points");
    }
    //version that runs another else if block
    else if (alien_color[a] === "red") {
        console.log(alien_color[a] + ":  Alien color is red  so You have just Earned 15 points");
    }
}
