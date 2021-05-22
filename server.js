const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const cors = require('cors');
app.use(
  cors({
    origin: '*'
  })
);

const port = 3000;

app.get('/', (req, res) => {
  res.json({ Hello: 'World 11!' });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
