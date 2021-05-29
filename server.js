const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const port = 3000;

var corsOptions = {
  origin: false
};

app.options('/', cors(corsOptions));

app.get('/', cors(corsOptions), (req, res) => {
  res.json({ Hello: 'World 11!' });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
