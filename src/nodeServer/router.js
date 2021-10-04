const express = require('express')
const router = express.Router()
const { Pool } = require('pg')

const pool = new Pool({
  connectionString:
    process.env.DATABASE_URL ||
    'postgres://hwdxxryjhbvtnu:2ac3c5d28c091491dd1db9a8987e6e446a2256e9666f7e58b06ac98f6ecab7e8@ec2-54-161-239-198.compute-1.amazonaws.com:5432/d6avc8mgr7q011',
  ssl: {
    rejectUnauthorized: false,
  },
})

// endpoints for my information
router.get('/votesThatHaveBeenCreated', async (req, res) => {
  try {
    const client = await pool.connect()
    const result = await client.query('SELECT * FROM voteToSendDB WHERE date IS NOT NULL')
    const results = { 'results for voteToSendDB': result ? result.rows : null }
    res.send(results)
    client.release()
  } catch (err) {
    console.error(err)
    res.send('Error ' + err)
  }
})

router.get('/voted', async (req, res) => {
  try {
    const client = await pool.connect()
    const result = await client.query('SELECT * FROM votesDB')
    const results = { 'results for voteToSendDB': result ? result.rows : null }
    res.send(results)
    client.release()
  } catch (err) {
    console.error(err)
    res.send('Error ' + err)
  }
})

router.get('/myPolls', async (req, res) => {
  try {
    const client = await pool.connect()
    const result = await client.query(`SELECT * FROM voteToSendDB `)
    res.send(result)
    client.release()
  } catch (err) {
    console.error(err)
    res.send('Error ' + err)
  }
})

module.exports = router
