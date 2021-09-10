import './App.css'
import { Root } from './components'
import { ApolloProvider } from '@apollo/client'
import client from './apollo'

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Root />
      </div>
    </ApolloProvider>
  )
}

export default App
