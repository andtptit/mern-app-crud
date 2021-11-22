import HomePage from './pages/HomePage';
import { Route, Switch, BrowserRouter} from 'react-router-dom'
import Login from './components/Login/index.js';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={HomePage}  path="/" />
        <Route component={Login}  path="/login" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
