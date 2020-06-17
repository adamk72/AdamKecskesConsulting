import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import Homepage from './content/Homepage';
import BasicMdPage from './components/BasicMdPage';
import workPageContent from '../src/content/md_files/WorkExperience.md';
import thespreadsheet from '../src/content/md_files/TheSpreadsheet.md';
import automatingreporting from '../src/content/md_files/AutomatingTheReporting.md';
import portfolioPageContent from '../src/content/md_files/Portfolio.md';
import philosophyPageContent from '../src/content/md_files/Philosophy.md';

ReactDOM.render(
  <Router basename='/'>
    <Route path='/' exact component={Homepage} />
    <Route
      path='/portfolio'
      component={() => <BasicMdPage mdContent={portfolioPageContent} />}
    />
    <Route
      path='/work'
      component={() => <BasicMdPage mdContent={workPageContent} />}
    />
    <Route
      path='/optimization'
      component={() => <BasicMdPage mdContent={philosophyPageContent} />}
    />
    <Route
      path='/thespreadsheet'
      component={() => <BasicMdPage mdContent={thespreadsheet} />}
    />
    <Route
      path='/automatingreporting'
      component={() => <BasicMdPage mdContent={automatingreporting} />}
    />
  </Router>,

  document.getElementById('root')
);
