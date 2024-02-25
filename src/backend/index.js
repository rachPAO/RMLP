const express = require('express')
const app = express()
const port = 4000
const sqlite3 = require('sqlite3')
const db = new sqlite3.Database('/Users/rachelpao/Desktop/data/user.db')

email = emailInput
const find_reviews = `SELECT reviewee, comments FROM review WHERE reviewee = '${email}'`;
const find_user = `SELECT COUNT(*) FROM table WHERE email = '${email}'`;
//     
// })

 // Route to fetch user data from user DB
app.get('/find_user', (req, res) => {
  const x = req.params.email
  db.query(find_user, (err, result) => {
    if (err) {
      throw err;
    }
    res.json(result);
  });
});

//Route to fetch review data from review DB  (another get EP)







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

