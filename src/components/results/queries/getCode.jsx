import gql from 'graphql-tag'

export const GET_ID = gql`
  query getId($keyword: String) {
    getId(
        keyword: $keyword
    )
  }
`