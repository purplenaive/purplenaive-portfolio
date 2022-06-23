const express = require("express");
const serverStatic = require("serve-static");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;

app.use("/", serverStatic(path.join__dirname, "/public"));
app.listen(port)
console.log("listening on port : ", port);

