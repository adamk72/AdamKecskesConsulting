import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Homepage from './content/Homepage';
import About from './content/About';
import BasicMdPage from './components/BasicMdPage';
import workPageContent from '../src/content/md_files/WorkExperience.md';
import thespreadsheet from '../src/content/md_files/TheSpreadsheet.md';
import automatingreporting from '../src/content/md_files/AutomatingTheReporting.md';
import theproductlifecycle from '../src/content/md_files/TheProductLifeCycle.md';
import portfolioPageContent from '../src/content/md_files/Portfolio.md';
import philosophyPageContent from '../src/content/md_files/Philosophy.md';
const publicPath = '/path/to/subfolder/';

const routeCodes = {
  HOME: publicPath,
  SEARCH: `${publicPath}search`,
  ABOUT: `${publicPath}about`,
  WORK: `${publicPath}work`,
};

const App = () => {
  return (
    <main>
      <Switch>
        <Route path='/' exact component={Homepage} />
        <Route path='/about' exact component={About} />
        <Route
          path='/portfolio'
          component={() => <BasicMdPage mdContent={portfolioPageContent} />}
        />
        <Route
          path={routeCodes.WORK}
          exact
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
        <Route
          path='/theproductlifecycle'
          component={() => <BasicMdPage mdContent={theproductlifecycle} />}
        />
      </Switch>
    </main>
  );
};

export default App;
