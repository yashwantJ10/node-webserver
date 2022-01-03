const express = require('express')
const app = express()
const port = 9000

app.get('/webhook/proposal', (req, res) => {
  res.send('ACK');
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
});
