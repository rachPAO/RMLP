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





// //checks if the given email exists in the DB
// function checkEmailExists(email, callback) {
//   const sql = 'SELECT COUNT(*) AS count FROM username WHERE email = ?';
//   db.query(sql, [email], (err, result) => {
//     if (err) {
//       callback(err, null);
//       return;
//     }
//     const count = result[0].count;
//     callback(null, count > 0);
//   });
// }


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

