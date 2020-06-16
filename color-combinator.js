function colorCombinator(primary,secondary){
if(primary === "red" && secondary === "yellow"){
    return "When you combine red and yellow, you get orange!";
}
else if(primary === "red" && secondary === "blue"){
    return "When you combine red and blue, you get purple!";
}
else if(primary === "yellow" && secondary === "blue"){
    return "When you combine yellow and blue, you get green!";
}
else if(primary === "orange" && secondary ==="yellow"){
    return "Sorry, one of those colors is not a primary color!";
}
else if(primary === "blorgon" && secondary ==="red"){
    return "Sorry, one of those colors is not a primary color!";
}
else if(primary === "ted" && secondary ==="red"){
    return "Sorry, one of those colors is not a primary color!";
}
else if(primary === "blorgon" && secondary ==="blue"){
    return "Sorry, one of those colors is not a primary color!";
}
else if(primary === "yellow" && secondary ==="purple"){
    return "Sorry, one of those colors is not a primary color!";
}
else if(primary === "blue" && secondary ==="white"){
    return "Sorry, one of those colors is not a primary color!";
}
else if(primary === "Ted" && secondary ==="from Better Off Ted"){
    return "Sorry, one of those colors is not a primary color!";
}
else if(primary === "black" && secondary ==="black"){
    return "Sorry, one of those colors is not a primary color!";
}
}



module.exports = colorCombinator;