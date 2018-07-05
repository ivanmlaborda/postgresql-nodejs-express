const pgdb = () => {
  const pgp = require('pg-promise')(/*options*/)

  const URL_DB = process.env.DB_URI

  const db = pgp(URL_DB)

  db.none(`INSERT INTO items(text, complete) VALUES ('TEST1', true)`)

  db.any('SELECT * FROM items')
    .then(console.log)
    .catch(error => console.log(`ERROR: ${error}`))
  
  db.none(`INSERT INTO items(text, complete) VALUES ('TEST2', true)`)

  db.any('SELECT * FROM items')
    .then(console.log)
    .catch(error => console.log(`ERROR: ${error}`))
}

module.exports = pgdb