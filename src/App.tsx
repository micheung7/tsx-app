import React from 'react';
import { Route, Switch, NavLink, HashRouter } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Error from './components/Error';
import Home from './components/Home';
import Learn from './components/Learn';
import Navigation from './components/Navigation';
import ListSubheader from '@material-ui/core/ListSubheader';
import Button from '@material-ui/core/Button';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <div>
          <Navigation />
            <Switch>
              <Route path="/" component={Home} exact/>
              <Route path="/about" component={About}/>
              <Route path="/learn" component={Learn}/>
              <Route component={Error}/>
            </Switch>
        </div> 
      <br></br>
      <Button component={NavLink} to="/learn" variant="outlined">
        <ListSubheader component="div">Site Development</ListSubheader>
        <img src={require('./images/code.svg')} alt="code" width="30" height="30"/>
        <ListSubheader component="div">...Work in Progress...</ListSubheader>
      </Button>
      </HashRouter>
    </div>
  );
}

export default App;
