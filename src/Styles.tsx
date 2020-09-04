import { makeStyles, Theme, createStyles } from "@material-ui/core";

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

export default useStyles;
