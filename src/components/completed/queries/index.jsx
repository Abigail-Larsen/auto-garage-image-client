import gql from 'graphql-tag'
import { useQuery } from '@apollo/react-hooks'

export const GET_KEYWORD = gql`
  query getKeyword($id: String) {
    getKeyword(id: $id)
  }
`

export const GetKeyword = ({ id, children }) => {
  const { data, loading, error } = useQuery(GET_KEYWORD, {
    variables: {
      id,
    },
  })
  console.log('error', error)
  return children({
    loading,
    error,
    data: data?.getKeyword,
  })
}
