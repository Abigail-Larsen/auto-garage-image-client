import gql from 'graphql-tag'
import { useQuery } from '@apollo/react-hooks'

export const GET_VOTE = gql`
  query getVote($id: String) {
    getVote(id: $id) {
      id
      name
      question
      date
      type
    }
    getResults(id: $id) {
      answer
    }
  }
`

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

export const GetVote = ({ id, children }) => {
  const { data, loading, error } = useQuery(GET_VOTE, {
    variables: {
      id,
    },
  })

  return children({
    loading,
    error,
    data: data,
  })
}

export const GetAllVotes = ({ children }) => {
  const { data, loading, error } = useQuery(GET_ALL_VOTES, {
    fetchPolicy: 'network-only',
  })
  return children({
    loading,
    error,
    data: data?.getAllVotes,
  })
}

export const GetVoteCount = ({ id, children }) => {
  const { data, loading, error } = useQuery(GET_VOTE_COUNT, {
    fetchPolicy: 'network-only',
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
