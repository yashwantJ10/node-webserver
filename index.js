const express = require('express');
const app = express();
const port = process.env.PORT || 9000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World !');
});

app.post('/webhook/proposal', function (req, res) {
  console.log("req body", req.body);
  res.send('ACK');
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
});
