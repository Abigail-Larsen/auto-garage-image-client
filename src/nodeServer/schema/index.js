const { buildSchema } = require('graphql')

const foo = buildSchema(`
  type Query {
    getVote(
      id: String
    ): Vote,

    getId(
      keyword: String
    ): String,

    getKeyword(
      id: String
    ): String,

    getResults(
      id: String
    ): [Result],

    getAllVotes: [Vote],
  },

  type Mutation {

    createVote(
      id: String
      name: String
      question: String
      date: String
      type: String
    ): CreateVoteResponse
    
    deleteVote(
      id: String
    ): DeleteVoteResponse,

    sendVote(
      id: String
      answer: String
    ): SendVoteResponse,

    editVote(
      id: String
      name: String
      question: String
      date: String
      type: String
    ): CreateVoteResponse
  },

  type CreateVoteResponse {
    id: String
  },

  type DeleteVoteResponse {
    id: String
  },

  type SendVoteResponse {
    id: String
  },

  type Vote {
    id: String
    name: String
    question: String
    date: String
    type: String
  },

  type Result {
    answer: String
  }
`)

module.exports = foo
