const express = require('express')
const path = require('path')
const app = express();
const cors = require('cors');


app.use(express.json());
app.use(cors())

app.post('/sum', (req, res) => {
  const a = parseInt(req.body.a);
  const b = parseInt(req.body.b);

  const sum = a + b;
  console.log(sum);
  res.json({
    answer: a + b
  })
})

app.listen(3001, () => {
  console.log('Server is running on port 3001');
})