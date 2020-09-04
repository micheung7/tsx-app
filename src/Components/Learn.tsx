import React from 'react';
import { ListSubheader, ListItem } from '@material-ui/core';

function Learn() {
  return (
    <div>
      <h1>Learn More</h1><br></br>
      <h2>Progress Updates</h2>
        <h3>2020</h3>
          <h4>September</h4>
            <h5>v4. Create new pages (including the one you're reading now) and navigate to them using react-router</h5>
              <h6>(We're no longer stuck on the home page!)</h6>
            <h5>v3. Refactor App into separate React components</h5>
              <h6>(There's more site content now, so no more adding all code to the same file)</h6>
          <h4>August</h4>
            <h5>v2. Experiment with material-ui, bootstrap, and styling</h5>
            <h5>v1. Site creation using create-react-app for TypeScript and deployment with GitHub Pages</h5>
              <h6>(After hours of trial and error from following many tutorials...)</h6>
      <h2>&lt;Code/&gt;</h2>
        <h5><a href="https://github.com/micheung7/tsx-app">GitHub Repository</a></h5>
      <h2>Research</h2>
        <h5><a href="https://github.com/gitname/react-gh-pages">Deploying a React App to GitHub Pages tutorial</a></h5>
        <h5><a href="https://create-react-app.dev/docs/documentation-intro">Create React App documentation</a></h5>
        <h5><a href="https://www.golangprograms.com/how-to-create-simple-react-router-to-navigate-multiple-pages.html">React Router navigation</a></h5>
        <h5><a href="https://stackoverflow.com">Stack Overflow</a></h5>
      <h2>Image Attributions</h2>
        <h5>Code Icon made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a></h5>
    </div>
  );
}

export default Learn;
