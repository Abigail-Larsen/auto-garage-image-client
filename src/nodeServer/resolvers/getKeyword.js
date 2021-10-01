const { Pool } = require('pg')

const pool = new Pool({
  connectionString:
    process.env.DATABASE_URL ||
    'postgres://hwdxxryjhbvtnu:2ac3c5d28c091491dd1db9a8987e6e446a2256e9666f7e58b06ac98f6ecab7e8@ec2-54-161-239-198.compute-1.amazonaws.com:5432/d6avc8mgr7q011',
  ssl: {
    rejectUnauthorized: false,
  },
})

const getKeyword = async (req, res) => {
  const id = await req.id
  const client = await pool.connect()
  const result = await client.query(`SELECT keyword FROM voteToSendDB WHERE id='${id}'`)
  client.release()
  return result.rows.length > 0 ? result.rows[0].keyword : 'wooden'
}

module.exports = getKeyword
