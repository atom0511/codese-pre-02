var soTien = 123456789;
let copySoTien = soTien.toString();
console.log(copySoTien);
let lengSoTien = 0;
let charNull = "";

while (copySoTien.charAt(lengSoTien) != charNull) {
    lengSoTien++;
}
let count = 0;
while (copySoTien.charAt(lengSoTien - 1) != charNull) {
    lengSoTien -= 1;
    count++;
    console.log("count = " + count);
    console.log("leng = " + lengSoTien);
    if (count == 3 && lengSoTien != 0) {
        console.log("vao");
        let a = lengSoTien;
        copySoTien = copySoTien.replace(
            copySoTien.charAt(lengSoTien),
            "," + copySoTien.charAt(lengSoTien)
        );
        console.log(copySoTien);
        count = 0;
    }
    if (lengSoTien == 0) {
        break;
    }
}
console.log(copySoTien);