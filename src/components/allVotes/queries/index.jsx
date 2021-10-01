import gql from 'graphql-tag'
import { useQuery } from '@apollo/react-hooks'

export const GET_ALL_VOTES = gql`
  query getAllVotes {
    getAllVotes {
      id
      name
      question
    }
  }
`
export const GET_VOTE_COUNT = gql`
  query getVote($id: String) {
    getResults(id: $id) {
      answer
    }
  }
`
export const GetAllVotes = ({ children }) => {
  const { data, loading, error } = useQuery(GET_ALL_VOTES)
  return children({
    loading,
    error,
    data: data?.getAllVotes,
  })
}

export const GetVoteCount = ({ id, children }) => {
  const { data, loading, error } = useQuery(GET_VOTE_COUNT, {
    variables: {
      id,
    },
  })

  return children({
    loading,
    error,
    data: data?.getResults,
  })
}
