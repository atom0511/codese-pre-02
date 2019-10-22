var x1 = 1;
var x2 = 2;

//cach 1

function tinhTong1(a, b) {
    sum = a + b;
    return sum;
}

let ketqua1 = tinhTong1(x1, x2);
console.log("Cach 1 co tong la: " + ketqua1);

//cach 2
function tinhTong2(a, b) {
    sum = a + b;
    console.log("Cach 2 co tong la: " + sum);
}
tinhTong2(x1, x2);