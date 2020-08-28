import React, { Fragment } from 'react';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover'
import './App.css';
import tileData from './images/tileData';
import Avatar from '@material-ui/core/Avatar';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
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
      <ListSubheader component="div">Attributions</ListSubheader>
      <div>Code Icon made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
    </div>
  );
}

export default App;

interface TileComponentProps {
  tileContent: any;
  classes: any;
}

class TileComponent extends React.Component<any, TileComponentProps> {
  private tileContent: any;
  private classes: any;
  private tilePopover = (tile: any) => {
    return <Popover
      id="popover-positioned-top"
      title="Popover top"
      className={this.classes.title}
    >
      <strong>{tile.title}</strong>
    </Popover>
  };

  constructor(props: any) {
    super(props);
    this.tileContent = props.tileContent;
    this.classes = props.classes;
  }

  render() {
    return (
      <GridListTile key={this.tileContent.img}>
          <IconButton
            aria-label={`info about ${this.tileContent.title}`}
            className={this.classes.hover}
            href={this.tileContent.url}
          >
            <OverlayTrigger
              placement="bottom"
              delay={{ show: 150, hide: 200 }}
              overlay={this.tilePopover(this.tileContent)}
            >
              <Avatar
                alt={this.tileContent.title}
                src={this.tileContent.img}
                variant='circle'
                className={this.classes.avatarSize}
              />
            </OverlayTrigger>
          </IconButton>
      </GridListTile>
    );
  }
}
