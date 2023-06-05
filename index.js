const express = require('express')
const path = require("path");

const app = express()

const port = 3000

function staticConnection(req, res) {
    res.sendFile(path.resolve('./', 'dist', 'index.html'))
}


app.use(express.static('./dist'));

app.get('/', staticConnection);



app.get('/api', (req, res) => {
  console.log(req.get("host"));
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})