import gql from 'graphql-tag'

export const CREATE_VOTE = gql`
  mutation createVote($id: String, $name: String, $question: String, $date: String, $type: String) {
    createVote(id: $id, name: $name, question: $question, date: $date, type: $type) {
      id
    }
  }
`

export const DELETE_VOTE = gql`
  mutation deleteVote($id: String) {
    deleteVote(id: $id) {
      id
    }
  }
`

export const SEND_VOTE = gql`
  mutation sendVote($id: String, $answer: String) {
    sendVote(id: $id, answer: $answer) {
      id
    }
  }
`
