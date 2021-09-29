import gql from 'graphql-tag'
import { useQuery } from '@apollo/react-hooks'

export const GET_ALL_VOTES = gql`
  query getAllVotes {
    getAllVotes {
      id
      name
      description
      question
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
