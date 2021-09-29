const getVote = require('./resolvers/getVote')
const getKeyword = require('./resolvers/getKeyword')
const getId = require('./resolvers/getId')
const getResults = require('./resolvers/getResults')
const getAllVotes = require('./resolvers/getAllVotes')

const root = {
  getVote,
  getKeyword,
  getId,
  getResults,
  getAllVotes,
}

module.exports = root
