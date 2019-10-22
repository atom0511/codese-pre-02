var arr = [];
var N = 5;
var count = 0;
var flag = true;

function taoMang(a, b) {
    // create a random array without two identical elements
    a[0] = Math.floor(Math.random() * 100);
    for (let i = 1; i < b;) {
        a[i] = Math.floor(Math.random() * 100);
        flag = true;
        while (flag) {
            if (count > 0) {
                a[i] = Math.floor(Math.random() * 100);
            }
            count = 0;
            for (let j = i - 1; j >= 0; j--) {
                if (a[i] === a[j]) {
                    count++;
                }
            }
            if (count === 0) {
                i++;
                flag = false;
            }
        }
    }
    console.log("created:");
    console.log(a);
    // sort this array
    for (let i = 0; i < b; i++) {
        for (let j = 0; j < b; j++) {
            if (a[i] < a[j]) {
                let temp = a[i];
                a[i] = a[j];
                a[j] = temp;
            }
        }
    }
    console.log("sorted:");
    console.log(a);
}

taoMang(arr, N);