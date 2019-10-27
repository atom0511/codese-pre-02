let loiBH = "  Mrs       Dau and the order of the Phoenix   ";
loiBH = loiBH.trim();
console.log(loiBH);
for (let i = 1; i < loiBH.length; i++) {
    if (loiBH[i] === loiBH[i - 1] && loiBH[i] === " ") {
        loiBH = loiBH.replace(loiBH[i], "");
        i--;
    }
}

let copy = loiBH.split(" ");
for (let i = 0; i < copy.length; i++) {
    setTimeout(function() {
        console.log(copy[i]);
    }, i * 1000);
}