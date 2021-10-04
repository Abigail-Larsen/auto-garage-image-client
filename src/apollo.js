import ApolloClient from 'apollo-boost'
require('dotenv').config()

export default new ApolloClient({
  uri: 
  proce/ss.env.enviornment !== 'DEV'
  ? 'http://localhost:3000/graphql'
  : 'https://auto-garage-image-client.herokuapp.com/graphql',
  onError: ({ networkError, graphQLErrors }) => {
    console.log('graphQLErrors!', graphQLErrors, process.env)
    console.log('networkError!', networkError)
  },
})
