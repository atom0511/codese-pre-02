let str = ' Cach viet dau """ trong string';
let str2 = ` Cach viet dau ''' va """ trong string`;
let x3 = 3;
let str3 = "Day la x3: " + x3; // cach nay de loi
let str4 = `Day la x3: ${x3}`; // cach nay moi dung

const fs = require("fs");

let dulieu = "TrungAtom";
fs.writeFile("text.txt", dulieu, (data, err) => {
    if (err) {
        console.log(err);
    }
});

fs.readFile("text.txt", (data, err) => {
    if (err) {
        console.log(err);
    } else {
        console.log(`du lieu doc duoc: ${data}`);
    }
});