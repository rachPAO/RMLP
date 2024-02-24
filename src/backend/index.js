const express = require('express')
const app = express()
const port = 4000

db = connect(user.dasuhdfjads)
const email1 = 
// db.run('Insert into user_table ${email1}, (err, res) => {
//     
// })

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/find_user', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})