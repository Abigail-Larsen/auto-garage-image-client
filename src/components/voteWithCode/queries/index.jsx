import gql from 'graphql-tag';
import { useQuery } from 'react-apollo';

export const GET_VOTE = gql`
  query getVote {
    getVote {
      id,
      name,
      description,
      question
    }
  }
`;

export const GetVote = ({children}) => {
    const {data, loading, error} = useQuery(
      GET_VOTE
    )
    
    return children({
        loading,
        error,
        data,
      });
}