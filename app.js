const express = require("express");
const app = express();
const port = process.env.PORT || 4000;
const path = require("path");

const indexRoute = require('./routes/index.js')
const postRoute = require('./routes/post.js')
const submitRoute = require('./routes/submit.js')

app.use(express.static(path.join(__dirname,"public")));
app.use("/post",postRoute);
app.use("/submit",submitRoute);

app.use("/submit-form",(req,res) =>
  res.sendFile("public/form.html",{ root: __dirname})
);

console.log("The App is listening")
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
