import gql from 'graphql-tag'
import { useQuery } from '@apollo/react-hooks'

export const GET_RESULTS = gql`
  query getResults($id: String) {
    getResults(
      id: $id
    ) {
      answer
    }
  }
`

export const GetVoteResults = ({ id, children }) => {
  console.log('ID', id)
  const { data, loading, error } = useQuery(GET_RESULTS, {
    variables: {
      id
    }
  })

  return children({
    loading,
    error,
    data: data?.getResults,
  })
}
