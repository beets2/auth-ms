const express = require("express");
const dotenv = require("dotenv");
const { generalSecrets } = require("./config");
const routes = require("./routes").default;
dotenv.config();

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use("/", routes);

app.listen(generalSecrets.PORT, () =>
  console.log("Auth ms running at " + generalSecrets.PORT)
);
