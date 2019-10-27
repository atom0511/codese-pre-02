var fs = require("fs");
fs.readFile("data.txt", "utf8", (err, data) => {
    if (err) {
        console.log("err");
    } else {
        var arr = data;
        getID(data.length, `${data}`);
        console.log("----------------");
        changeValue(obj.questionContent);
    }
});

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
    console.log('ID with string "NO" greater than 3 is: ');
    if (countID1 > 3) console.log("1");
    if (countID2 > 3) console.log("2");
    if (countID3 > 3) console.log("3");
};
let obj = {
    id: 1,
    questionContent: "âsasas",
    questionAnswer: [
        ["yes", "no"],
        ["yes", "no"], "yes", "no", "no", "no", "yes"
    ]
};
let changeValue = a => {
    obj.questionContent = "this is questionContent after change";
    console.log(obj.questionContent);
};