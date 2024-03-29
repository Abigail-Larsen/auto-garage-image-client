const getVote = require('./resolvers/getVote')
const getKeyword = require('./resolvers/getKeyword')
const getId = require('./resolvers/getId')
const getResults = require('./resolvers/getResults')
const getAllVotes = require('./resolvers/getAllVotes')
const { sendVote, createVote, deleteVote, editVote } = require('./resolvers/mutations')

const root = {
  getVote,
  getKeyword,
  getId,
  getResults,
  getAllVotes,
  sendVote,
  createVote,
  deleteVote,
  editVote,
}

module.exports = root
