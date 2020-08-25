import React from 'react';
import './App.css';
import tileData from './images/tileData';
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
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      width: 500,
      height: 450,
    },
    icon: {
      color: 'rgba(255, 255, 255, 0.54)',
    },
  }),
);

function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <div className={classes.root}>
        <GridList cellHeight={180} className={classes.gridList}>
          <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
            <ListSubheader component="div">Site is a Work in Progress...</ListSubheader>
            <img src={require('./images/code.svg')} alt="code" width="30" height="30"/>
          </GridListTile>
          {tileData.map((tile) => (
            <GridListTile key={tile.img}>
              <img src={tile.img} alt={tile.title} />
              <GridListTileBar
                title={tile.title}
                // subtitle={<span>by: </span>}
                actionIcon={
                  <div
                    // onClick={() => }
                  >
                  <IconButton
                    aria-label={`info about ${tile.title}`}
                    className={classes.icon}
                  >
                    <img src={require('./images/next-arrow.svg')} alt="next-arrow" width="30" height="30"/>
                  </IconButton>
                  </div>
                }
              />
            </GridListTile>
          ))}
        </GridList>
      </div>
      <ListSubheader component="div">Attributions</ListSubheader>
      <div>Arrow Icon made by <a href="https://www.flaticon.com/free-icon/right_1251850" title="Icongeek26">Icongeek26</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
      <div>Code Icon made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
    </div>
  );
}

export default App;
