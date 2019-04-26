const express = require('express')
const app = express()

const helmet = require('helmet');
app.use(helmet());

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
// blogNannyAngular
// A small simple blog made with angular7 for a nanny who is not comfortable with new technology but would like to have visibility on the internet.