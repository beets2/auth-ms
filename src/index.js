const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

const { generalSecrets } = require("./config");
const routes = require("./routes").default;

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use("/", routes);

console.log(generalSecrets);

app.listen(generalSecrets.PORT, () =>
  console.log("Auth ms running at " + generalSecrets.PORT)
);
