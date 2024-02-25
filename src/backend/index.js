const express = require('express')
const app = express()
var cors = require('cors')
app.use(cors())
const port = 4000
const sqlite3 = require('sqlite3')
const db = new sqlite3.Database('/Users/rachelpao/Desktop/data/user.db')

 // Route to fetch user data from user DB
app.get('/find_user', (req, res) => {
  const x = req.query.email
  const find_user = `SELECT COUNT(*) AS count FROM user WHERE email = '${x}'`;
  db.get(find_user, (err, result) => {
    if (err) {
      throw err;
    }
    res.json(result);
  });
});

//Route to fetch review data from review DB  (another get EP)
app.get('/find_reviews', (req, res) => {
  const x = req.query.email
  const find_reviews = `SELECT comments FROM review WHERE reviewee = '${x}'`;
  db.all(find_reviews,[], (err, result) => {
    if (err) {
      throw err;
    }
    res.json(result);
  });
});




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

