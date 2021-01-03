import './App.css';
import { Root } from './components'
import { ApolloProvider } from 'react-apollo';
import client from './apollo';

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Root/>
      </div>
    </ApolloProvider>
  );
}

export default App;
