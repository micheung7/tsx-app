import React, { Fragment } from 'react';
import './App.css';
import tileData from './images/tileData';
import Avatar from '@material-ui/core/Avatar';

import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
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
    titleBar: {
      background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
    title: {
      color: '#a8fff9',
    },
    subtitle: {
      color: '#cefc03',
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
            <Fragment>
              <GridListTile key={tile.img}>
                <IconButton
                  aria-label={`info about ${tile.title}`}
                  href={tile.url}
                >
                  <Avatar alt={tile.title} src={tile.img} variant='circle' className={classes.avatarSize}/>
                </IconButton>
                <GridListTileBar
                  classes={{
                    root: classes.titleBar,
                    title: classes.title,
                    subtitle: classes.subtitle,
                  }}
                  title={tile.title}
                  subtitle={<span>Description</span>}
                />
              </GridListTile>
            </Fragment>
          ))}
        </GridList>
      </div>
      <ListSubheader component="div">Attributions</ListSubheader>
      <div>Code Icon made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
    </div>
  );
}

export default App;
