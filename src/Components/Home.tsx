import React from 'react';
import TileComponent from './TileComponent';
import tileData from '../images/tileData';
import useStyles from '../Styles';
import { GridList } from '@material-ui/core';

function Home() {
  const classes = useStyles();
  
  return (
    <div>
      <h1>Home</h1>
      <div className={classes.root}>
        <GridList className={classes.gridList} spacing={10}>
          {tileData.map((tile) => (
            <TileComponent tileContent={tile} classes={classes}></TileComponent>
          ))}
        </GridList>
      </div>
    </div>
  );
}

export default Home;
