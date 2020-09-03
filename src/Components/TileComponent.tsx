import React from 'react';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover'
import Avatar from '@material-ui/core/Avatar';
import GridListTile from '@material-ui/core/GridListTile';
import IconButton from '@material-ui/core/IconButton';

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

export default TileComponent;
