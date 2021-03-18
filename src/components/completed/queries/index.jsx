import gql from 'graphql-tag';
import { useQuery } from 'react-apollo';

export const GET_KEYWORD = gql`
  query getKeyword {
    getKeyword
  }
`;

export const GetKeyword = ({id, children}) => {
  console.log("ID", id)
    const {data, loading, error} = useQuery(
      GET_KEYWORD
    )
    
    return children({
        loading,
        error,
        data,
      });
}