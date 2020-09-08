import React from 'react';
import { NavLink } from 'react-router-dom';
import SectionBox from './SectionBox';
import { Button, GridList, makeStyles, Theme, createStyles } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    gridList: {
      justifyContent: 'space-evenly',
    },
  }),
);

function About() {
  const classes = useStyles();

  return (
    <GridList className={classes.gridList}>
      <SectionBox content={<div>
        <h1>About Us</h1>
        <p>Hello! My name is Michelle.</p>
        <p>I'm creating this personal website to learn more about web development.</p>
        <p>Fun fact: My original goal for this project was just to learn how to deploy a site using GitHub Pages.</p>
        <p>However, I've learned a lot more since then!</p>
        <i>See<Button component={NavLink} to="/learn">Learn</Button>for progress updates.</i>
      </div>}/>
      <SectionBox content={<div>
        <h1>Site Goals</h1>
        <p>Create a React TypeScript app without outside expectaions or deadlines (hobby, not work).</p>
        <p>Incremental research: Experiment with different libraries and frameworks for React.</p>
        <p>Incremental site development: Add something new or interesting to the site, hopefully a few times a week.</p>
        <p>Improve user experience: Learn about UI/UX and create mockups for the site.</p>
        <p>Brainstorm more content for the site, outside of the typical personal bio and resume.</p>
      </div>}/>
    </GridList>
  );
}

export default About;
