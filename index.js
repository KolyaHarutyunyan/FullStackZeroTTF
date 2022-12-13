const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname + "/public")));

app.use(express.json());

app.get("/verification-form", (req, res) => {
    fs.promises.readFile("./verificationForm.json", "utf-8")
        .then(verificationForm => res.send(verificationForm))
        .catch(err => res.send(err.message));
});

app.post("/verification-form", (req, res) => {
    fs.promises.writeFile("./verificationForm.json", JSON.stringify(req.body))
        .then(() => res.send("Verification Form is saved successfully."))
        .catch(err => res.send(err.message));
});


app.listen(process.env.PORT || 3003);