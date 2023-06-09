const express = require("express");

const app = express();

const PORT = process.env.PORT || 1000;

app.use(express.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
  try {
    res.send("Hello from server side");
  } catch (error) {
    console.log(error);
  }
});

app.listen(PORT, (req, res) => {
  console.log(`Server is running on port ${PORT}`);
});
