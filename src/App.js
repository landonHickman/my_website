
import './App.css';
import Home from './Components/Home';
import MyProjects from './Components/MyProjects';
import Navbar from './Components/NavBar';
import {Switch, Route} from 'react-router-dom'

function App() {
  return (
    <div>
      <Navbar/>
      <Switch>
          <Route path="/projects">
            <MyProjects />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </div>
  );
}

export default App;
