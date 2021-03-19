import gql from 'graphql-tag'
import { useQuery } from '@apollo/react-hooks'

export const GET_VOTE = gql`
  query getVote($id: String) {
    getVote(id: $id) {
      id
      name
      description
      question
    }
    getResults(id: $id) {
      answer
    }
  }
`

export const GetVote = ({ id, children }) => {
  const { data, loading, error } = useQuery(GET_VOTE, {
    variables: {
      id,
    },
  })
  console.log("GetVote'", data.getResults)

  return children({
    loading,
    error,
    data: data,
  })
}
