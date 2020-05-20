const express = require("express");
const graphql = require("express-graphql");
const dotenv = require("dotenv");
const cors = require("cors");
const schema = require("./schema/schema");
const dbConnection = require("./config/dbConn");

dotenv.config({ path: "./config/config.env" });

dbConnection();

const app = express();

app.use(cors());

app.use(
  "/graphql",
  graphql({
    schema,
    graphiql: true
  })
);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
