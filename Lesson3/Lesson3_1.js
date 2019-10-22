let loiBH = "Mrs Dau and the order of the Phoenix";
let copy = loiBH.split(" ");
for (let i = 0; i < copy.length; i++) {
    setTimeout(function() {
        console.log(copy[i]);
    }, i * 1000);
}