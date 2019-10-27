let a = 50000;
let b = a.toString();
let count = 0;
let check = "";
while (b.charAt(count) != "0s") {
    console.log("aaaaa");
    b = b.replace(b.charAt(count), "1");
    count++;
}

console.log(b);