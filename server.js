const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const port = 3000;

//app.options('/api', cors());

app.get('/api', cors(), (req, res) => {
  res.json({ Hello: 'World!!' });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
