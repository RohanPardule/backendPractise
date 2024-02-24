require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
//routes banane keliye express use kiya aisa mere dost ne kaha
app.get('/login', (req, res) => {
    res.send('Chipi chipi chapa chapa')
  })
  app.get('/rohan', (req, res) => {
    res.send('Backend smjta kya tereko huten ki daadi mera express bhari')
  })




app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})