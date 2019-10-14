const pass = "TrungAtom";
const kiTu = "!@#$%^&*()";
let lengPass = 0;
let charNull = "";
while (pass.charAt(lengPass) != charNull) {
    lengPass++;
}
let demThuong = 0;
let demHoa = 0;
let demKiTu = 0;
let demSo = 0;
for (let i = 0; i < lengPass; i++) {
    if (pass.charAt(i) >= "a" && pass.charAt(i) <= "z") {
        demThuong++;
    } else if (pass.charAt(i) >= "A" && pass.charAt(i) <= "Z") {
        demHoa++;
    } else if (pass.charAt(i) >= "0" && pass.charAt(i) <= "9") {
        demSo++;
    }
}
for (let i = 0; i < lengPass; i++) {
    for (let j = 0; j < 10; j++) {
        if (pass.charAt(i) == pass.charAt(j)) {
            demKiTu++;
        }
    }
}
if (demThuong == 0) {
    console.log("Pass cần chứa ít nhất 1 kí tự thường a-z");
}
if (demHoa < 3) {
    console.log("Pass cần chứa ít nhất 3 kí tự in hoa A-Z");
}
if (demSo < 2) {
    console.log("Pass cần chứa ít nhất 2 kí tự số 0-9");
}
if (demKiTu != 1) {
    console.log("Pass cần chứa 1 và chỉ 1 kí tự đặc biệt ! @ # $ % ^ & * () ");
}