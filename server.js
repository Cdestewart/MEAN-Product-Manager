const express = require("express");
const router = require("./server/routes.js");
const app = express();
const path = require("path");
const bp = require("body-parser");
app.use(express.static(path.join(__dirname, "/public/dist/public" )));
app.use(bp.json());
router(app);
app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("./public/dist/public/index.html"))
  });


app.listen(8000, (errs)=>console.log(errs?errs:'gucci'));
