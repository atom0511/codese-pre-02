const express = require("express");
const handlebars = require("express-handlebars");
const bodyParser = require("body-parser");
const fs = require("fs");

let app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.engine("handlebars", handlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.get("/", (req, res) => {
    fs.exists("data.json", exists => {
        if (exists) {
            let data = fs.readFileSync("data.json", "utf8");
            let obj = JSON.parse(data);
            let questionContent = obj[Math.floor(Math.random() * obj.length)];
            res.render("homePage", {
                questionContent: questionContent.questionContent
            });
        } else {
            res.render("homePage", { questionContent: "Hien chua co cau hoi nao" });
        }
    });
});

app.listen(5000, err => {
    if (err) {
        console.log(err);
    } else {
        console.log("App listen to 5000");
    }
});

app.get("/ask", (req, res) => {
    res.render("ask");
});

app.post("/ask", (req, res) => {
    let questionContent = req.body.questionContent;
    try {
        let data = fs.readFileSync("data.json", "utf8");
        let obj = JSON.parse(data);
        let newQuestion = {
            id: obj.length,
            questionContent: questionContent,
            questionAnswers: []
        };
        obj.push(newQuestion);
        let savedData = JSON.stringify(obj);
        fs.writeFile("data.json", savedData, err => {
            if (err) {
                console.log(err);
            } else {
                res.render("ask");
            }
        });
    } catch (error) {
        let data = [];
        let newQuestion = {
            id: 0,
            questionContent: questionContent,
            questionAnswers: []
        };
        data.push(newQuestion);
        let savedData = JSON.stringify(data);
        fs.writeFile("data.json", savedData, err => {
            if (err) {
                console.log(err);
            } else {
                console.log("aaaaaaaa");
                res.render("ask");
            }
        });
    }
});