import ApolloClient from 'apollo-boost'

export default new ApolloClient({
  uri: 'http://localhost:3000/graphql',
  onError: ({ networkError, graphQLErrors }) => {
    console.log('graphQLErrors!', graphQLErrors)
    console.log('networkError!', networkError)
  },
})
