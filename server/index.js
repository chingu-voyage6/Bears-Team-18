const express = require("express");

const app = express();

const port = process.env.PORT ? process.env.PORT : 5000;

app.use('/api/test', (req, res, next) => {
  res.send('Connection to Back-End successful!');
});

app.listen(port, () => {
  console.log("Express Server Listening on Port 5000!");
});
