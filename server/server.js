const express = require("express");
const app = express();
const router = require("./routes/routes");
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use("/", router);

app.use(express.static("public"));

const port = 3001;

app.listen(port, () => console.log(`Node js Server ruuning at http://54.180.117.235:${port}/`));
