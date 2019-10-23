let loiBH = "Mrs          Dau and the order of the Phoenix";
for (let i = 1; i < loiBH.length; i++) {
    if (loiBH[i] === loiBH[i - 1] && loiBH[i] === 0) {
        loiBH[i] = null;
    }
}
console.log(loiBH);
let copy = loiBH.split(" ");
for (let i = 0; i < copy.length; i++) {
    setTimeout(function() {
        console.log(copy[i]);
    }, i * 1000);
}
