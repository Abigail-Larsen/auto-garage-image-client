import gql from 'graphql-tag';
import { useQuery } from 'react-apollo';

export const GET_PHOTOS = gql`
  query GetPhotos {
    photos {
        name
        size
        date
    }
  }
`;

export const GetPhotos = ({children}) => {
    const {data, loading, error} = useQuery(
        GET_PHOTOS
    )
    
    return children({
        loading,
        error,
        data,
      });
}