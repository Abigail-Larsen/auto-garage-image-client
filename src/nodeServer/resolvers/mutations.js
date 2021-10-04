const { Pool } = require('pg')

const pool = new Pool({
  connectionString:
    process.env.DATABASE_URL ||
    'postgres://hwdxxryjhbvtnu:2ac3c5d28c091491dd1db9a8987e6e446a2256e9666f7e58b06ac98f6ecab7e8@ec2-54-161-239-198.compute-1.amazonaws.com:5432/d6avc8mgr7q011',
  ssl: {
    rejectUnauthorized: false,
  },
})

const createVote = async (req, res) => {
  const client = await pool.connect()
  console.log('req', req)
  const queryString = `INSERT INTO voteToSendDB(id, name, question, date, type)VALUES('${req.id}', '${req.name}', '${req.question}', '${req.date}', '${req.type}');`

  pool.query(queryString, (err, res) => {
    if (err !== undefined) {
      console.log('Postgres INSERT error:', err)
      const keys = Object.keys(err)
      console.log('\nkeys for Postgres error:', keys)
      console.log('Postgres error position:', err.position)
    }
    if (res !== undefined) {
      console.log('Postgres response:', res)
      const keys = Object.keys(res)
      console.log('\nkeys type:', typeof keys)
      console.log('keys for Postgres response:', keys)

      if (res.rowCount > 0) {
        console.log('# of records inserted:', res.rowCount)
      } else {
        console.log('No records were inserted.')
      }
    }
  })
  client.release()
}

const deleteVote = async (req, res) => {
  const client = await pool.connect()
  const queryString = `DELETE FROM voteToSendDB WHERE id = '${req.id}'`

  pool.query(queryString, (err, res) => {
    if (err !== undefined) {
      console.log('Postgres INSERT error:', err)
      const keys = Object.keys(err)
      console.log('\nkeys for Postgres error:', keys)
      console.log('Postgres error position:', err.position)
    }
    if (res !== undefined) {
      console.log('Postgres response:', res)
      const keys = Object.keys(res)
      console.log('\nkeys type:', typeof keys)
      console.log('keys for Postgres response:', keys)
    }
  })
  client.release()
}

const sendVote = async (req, res) => {
  const client = await pool.connect()
  const queryString = `INSERT INTO votesDB(id, answer)VALUES('${req.id}', '${req.answer}');`

  pool.query(queryString, (err, res) => {
    if (err !== undefined) {
      console.log('Postgres INSERT error:', err)
      const keys = Object.keys(err)
      console.log('\nkeys for Postgres error:', keys)
      console.log('Postgres error position:', err.position)
    }
    if (res !== undefined) {
      console.log('Postgres response:', res)
      const keys = Object.keys(res)
      console.log('\nkeys type:', typeof keys)
      console.log('keys for Postgres response:', keys)

      if (res.rowCount > 0) {
        console.log('# of records inserted:', res.rowCount)
      } else {
        console.log('No records were inserted.')
      }
    }
  })
  client.release()
}

module.exports = {
  sendVote,
  createVote,
  deleteVote,
}
