var message = "Help me, Obi-Wan Kenobi. You're my only hope!";
var episode = 4;
var favoriteDroid;
favoriteDroid = 'BB-8';
console.log(message);
console.log("This is episode " + 4);
episode = episode + 1;
console.log("Next episode is " + episode);
console.log("My favorite droid is " + favoriteDroid);
var isEnoughToBeatMF = function (parsecs) {
    return parsecs < 12;
};
var distance = 11;
console.log("Is ".concat(distance, " parsecs enough to beat Millenium Falcon? ").concat(isEnoughToBeatMF(distance) ? 'YES' : 'NO'));
var call = function (name) { return console.log("Do you copy, ".concat(name, "?")); };
call('R2');
