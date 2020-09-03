import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import Home from './components/Home';
import Navigation from './components/Navigation';
import TileComponent from './components/TileComponent';
import tileData from './images/tileData';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import ListSubheader from '@material-ui/core/ListSubheader';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-evenly',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
      margin: '25px',
    },
    gridList: {
      justifyContent: 'space-evenly',
    },
    title: {
      color: '#602cc9',
    },
    hover: {
      '&:hover': {
          opacity: .5,
      },
    },
    avatarSize: {
      width: '250px',
      height: '250px',
      margin: theme.spacing(.5),
    },
  }),
);

function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <div className={classes.root}>
        <GridList className={classes.gridList} spacing={10}>
          <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
            <Fragment>
              <ListSubheader component="div">Site is a Work in Progress...</ListSubheader>
              <img src={require('./images/code.svg')} alt="code" width="30" height="30"/>
            </Fragment>
          </GridListTile>
          {tileData.map((tile) => (
            <TileComponent tileContent={tile} classes={classes}></TileComponent>
          ))}
        </GridList>
      </div>
      <BrowserRouter>
        <div>
          <Navigation />
            <Switch>
              <Route path="/" component={Home} exact/>
              <Route path="/about" component={About}/>
              <Route path="/contact" component={Contact}/>
              <Route component={Error}/>
            </Switch>
        </div> 
      </BrowserRouter>
      <ListSubheader component="div">Attributions</ListSubheader>
      <div>Code Icon made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
    </div>
  );
}

export default App;
