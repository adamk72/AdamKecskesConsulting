import React from 'react';
import ResponsiveContainer from './ResponsiveContainer';
import Showcase from './Showcase';
import Testimonials from './Testimonials';
import Footer from './Footer';
import Main from './Main';
import { Divider } from 'semantic-ui-react';

const Homepage = () => (
  <ResponsiveContainer>
    <Divider
      as='h4'
      className='header'
      horizontal
      style={{ margin: '3em 0em', textTransform: 'uppercase' }}
    >
      ...
    </Divider>
    <Showcase />
    <Divider
      as='h4'
      className='header'
      horizontal
      style={{ margin: '3em 0em', textTransform: 'uppercase' }}
    />
    <Testimonials />
    <Main />
    <Footer />
  </ResponsiveContainer>
);

export default Homepage;
