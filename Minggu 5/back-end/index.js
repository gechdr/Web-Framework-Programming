// npx sequelize-cli db:migrate
// npx sequelize-cli db:seed:all

const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    optionsSuccessStatus: 200,
  })
);
const routes = require("./src/routes/routes");

app.use(routes);

const port = 3000;
app.listen(port, function () {
  console.log(`listening on port ${port}`);
});
