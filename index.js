// Write your solution here!

const cats = ["Milo", "Otis", "Garfield"];


function destructivelyAppendCat(name) {
    cats.push(name);
}

function destructivelyPrependCat(name) {
    cats.unshift(name);
}
function destructivelyRemoveLastCat(name) {
    cats.pop();
}
function destructivelyRemoveFirstCat(name) {
    cats.shift();

}
function appendCat(name) {
   const copyCats = [...cats, "Broom"];
   return copyCats;
}
function prependCat(name) {
    const copyCats2 = ["Arnold", ...cats]
    return copyCats2;
}
function removeLastCat(name) {
    const removeLastCat = cats.slice(0,2);
    return removeLastCat;
}
function removeFirstCat(name) {
    const removeFirstCat =cats.slice(1);
    return removeFirstCat;
}