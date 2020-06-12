import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import Homepage from './content/Homepage';
import BasicMdPage from './components/BasicMdPage';
import workPageContent from '../src/content/WorkExperience.md';
import simpleCasesPageContent from '../src/content/SimpleCases.md';
import complexCases from '../src/content/ComplexCases.md';
import portfolioPageContent from '../src/content/Portfolio.md';
import philosophyPageContent from '../src/content/Philosophy.md';

ReactDOM.render(
  <Router basename='/k'>
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
      path='/simpleCases'
      component={() => <BasicMdPage mdContent={simpleCasesPageContent} />}
    />
    <Route
      path='/complexCases'
      component={() => <BasicMdPage mdContent={complexCases} />}
    />
  </Router>,

  document.getElementById('root')
);
