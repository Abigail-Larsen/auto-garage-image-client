import './App.css';
import { Root } from './components'
import { ApolloProvider } from '@apollo/client';
import {
  MuiPickersUtilsProvider
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import client from './apollo';

function App() {
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <ApolloProvider client={client}>
        <div className="App">
          <Root />
        </div>
      </ApolloProvider>
    </MuiPickersUtilsProvider>
  );
}

export default App;
