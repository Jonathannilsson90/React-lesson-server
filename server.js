require("dotenv").config();
/// Calling on NPM packages

const express = require("express");
const mongoose = require("mongoose");
const port = process.env.PORT;

const app = express();

app.use(express.json());

const bookRoutes = require("./routers/bookRouters");
app.use("/books", bookRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

mongoose.set("strictQuery", false);
mongoose.connect(process.env.DB_URL, () =>
  console.log("Server is now connected to the DB")
);
