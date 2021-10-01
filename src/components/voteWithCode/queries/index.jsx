import gql from 'graphql-tag'
import { useQuery } from '@apollo/react-hooks'

export const GET_VOTE = gql`
  query getVote($id: String) {
    getVote(id: $id) {
      id
      name
      question
      type
    }
  }
`

export const GetVote = ({ id, children }) => {
  const { data, loading, error } = useQuery(GET_VOTE, {
    variables: {
      id,
    },
  })
  return children({
    loading,
    error,
    data: data?.getVote,
  })
}
