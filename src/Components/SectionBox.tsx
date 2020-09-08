import React from 'react';
import { Box } from '@material-ui/core';

interface SectionBoxProps {
  content: any;
}

class SectionBox extends React.Component<any, SectionBoxProps> {
  private defaultProps = {
    bgcolor: 'background.default',
    borderColor: 'text.primary',
    m: 1,
    border: 1,
    style: { width: '25rem', height: '25rem' },
  };

  render() {
    return (
      <Box borderRadius={15} {...this.defaultProps}>
        {this.props.content}
      </Box>
    );
  }
}

export default SectionBox;
