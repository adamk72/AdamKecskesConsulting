import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import Portfoliopage from './components/semantic-ui/Portfoliopage';
import Homepage from './components/semantic-ui/Homepage';

ReactDOM.render(
  <Router>
    <Route path='/' exact component={Homepage} />
    <Route path='/portfolio' component={Portfoliopage} />
  </Router>,

  document.getElementById('root')
);
