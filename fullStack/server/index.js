const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use("/about", (req,res) => {
    console.log("running about");
    res.send("running about");
})

app.get("", (req,res) => {
    res.send("home");
});

app.get("/none", (req,res) => {
    res.send("<h1>none</h1>");
});

app.listen(PORT , () => {
    console.log(`server started on port:${PORT}`);
});