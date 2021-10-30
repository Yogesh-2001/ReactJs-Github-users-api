import Navbar from './Navbar';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AllUsers from './AllUsers';
import Home from './Home';
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/allusers' component={AllUsers} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
