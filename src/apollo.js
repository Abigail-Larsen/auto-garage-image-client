import ApolloClient from 'apollo-boost'

export default new ApolloClient({
  uri: 'https://auto-garage-image-client.herokuapp.com/graphql',
  onError: ({ networkError, graphQLErrors }) => {
    console.log('graphQLErrors!', graphQLErrors)
    console.log('networkError!', networkError)
  },
})
