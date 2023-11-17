const path = require("path");
const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// const errorController = require("./controllers/error");
// const bodyParser = require("body-parser");

// app.set("view engine", "ejs");
// app.set("views", "views");

const adminRoutes = require("./Routes/Admin");

const sequelize = require("./util/database");

// app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());
app.use(adminRoutes);

sequelize
  .sync()
  .then((res) => {
    // console.log(res);
  })
  .catch((err) => console.log(err));

app.listen(3000);
