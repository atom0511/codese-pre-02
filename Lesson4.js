var fs = require("fs");
fs.readFile("data.txt", "utf8", (err, data) => {
    if (err) {
        console.log("err");
    } else {
        var arr = data;
        console.log(`${data}`);
        getID(data.length, `${data}`);
    }
});
console.log(arr);
let getID = (a, b) => {
    let count = 0;
    let countID1 = 0;
    let countID2 = 0;
    let countID3 = 0;

    for (let i = 1; i < a; i++) {
        if (b[i] === "d" && b[i - 1] === "i") {
            count += 1;
        }
        switch (count) {
            case 1:
                if (b[i] == "o" && b[i - 1] == "n") countID1 += 1;
                break;
            case 2:
                if (b[i] == "o" && b[i - 1] == "n") countID2 += 1;
                break;
            case 3:
                if (b[i] == "o" && b[i - 1] == "n") countID3 += 1;
                break;
        }
    }
    let maxCount = Math.max(countID1, countID2, countID3);
    switch (maxCount) {
        case countID1:
            console.log(1);
            break;
        case countID1:
            console.log(2);
            break;
        case countID1:
            console.log(3);
            break;
    }
};