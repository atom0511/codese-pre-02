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

const linkFB = "fb.com/";

let tkFB = timKiem(linkFB);
let at = tkFB("atom");
console.log(at);
//cach3
let tong3 = (a, b) => {
    return a + b;
};

//cach4
let tong4 = (a, b) => ({
    tenham: "ham",
    ketqua: a + b
});

//cach5
let sinhTong = e => {
    return function(f) {
        return e + f;
    };
};

let sinhTong2 = sinhTong(5);
let sinhTong3 = sinhTong2(6);
console.log(sinhTong3);
// ứng dụng của hàm trên:
let timKiem = function(tenMXH) {
    return function(tenNguoiDung) {
        return tenMXH + tenNguoiDung;
    };
};