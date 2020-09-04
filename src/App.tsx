import React from 'react';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';
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
      <BrowserRouter>
        <div>
          <Navigation />
            <Switch>
              <Route path="/tsx-app" component={Home} exact/>
              <Route path="/tsx-app/about" component={About}/>
              <Route path="/tsx-app/learn" component={Learn}/>
              <Route component={Error}/>
            </Switch>
        </div> 
      <br></br>
      <Button component={NavLink} to="/tsx-app/learn" variant="outlined">
        <ListSubheader component="div">Site Development</ListSubheader>
        <img src={require('./images/code.svg')} alt="code" width="30" height="30"/>
        <ListSubheader component="div">...Work in Progress...</ListSubheader>
      </Button>
      </BrowserRouter>
    </div>
  );
}

export default App;
