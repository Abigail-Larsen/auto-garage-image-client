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
    const result = await client.query('SELECT * FROM voteToSendDB')
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

router.get('/keywords', async (req, res) => {
  try {
    const client = await pool.connect()
    const result = await client.query(
      `SELECT keyword FROM voteToSendDB WHERE id='7665f2e9-5d7c-49e5-92a3-b9079a4c88b5'`,
    )
    const results = { 'results for voteToSendDB': result ? result.rows[0].keyword : null }
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

// endpoints to add to database
router.post('/createNewVote', async (req, res) => {
  try {
    const client = await pool.connect()
    const { id, title, keyword, description, question } = req.body.newForm
    const queryString = `INSERT INTO voteToSendDB(id, keyword, name, description, question)VALUES('${id}', '${keyword}', '${title}', '${description}', '${question}');`

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
  } catch (err) {
    res.send('Error creating vote' + err)
  }
})

router.post('/postResponseToVote', async (req, res) => {
  try {
    const client = await pool.connect()
    const { id, answer, keyword } = req.body
    const queryString = `INSERT INTO votesDB(id, answer, keyword)VALUES('${id}', '${answer}', '${keyword}');`

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
  } catch (err) {
    console.error(err)
    res.send('Error ' + err)
  }

  res.send('app is healthy')
})

module.exports = router
