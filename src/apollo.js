import ApolloClient from 'apollo-boost'

export default new ApolloClient({
  uri: 'https://localhost:9000/graphql',
  onError: ({ networkError, graphQLErrors }) => {
    console.log('graphQLErrors', graphQLErrors)
    console.log('networkError', networkError)
  },
})
