import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import Homepage from './components/Homepage';
import BasicMdPage from './components/BasicMdPage';
import workPageContent from '../src/content/WorkExperience.md';
import portfolioPageContent from '../src/content/Portfolio.md';

ReactDOM.render(
  <Router>
    <Route path='/' exact component={Homepage} />
    <Route
      path='/portfolio'
      component={() => <BasicMdPage mdContent={portfolioPageContent} />}
    />
    <Route
      path='/work'
      component={() => <BasicMdPage mdContent={workPageContent} />}
    />
  </Router>,

  document.getElementById('root')
);
