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


  
  type Vote {
    id: String
    name: String
    description: String
    question: String
    date: String
  },

  type Result {
    answer: String
  }
`)

module.exports = foo
