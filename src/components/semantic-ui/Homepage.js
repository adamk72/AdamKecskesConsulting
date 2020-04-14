import React from 'react';
import ResponsiveContainer from './ResponsiveContainer';
import Showcase from './Showcase';
import Testimonials from './Testimonials';
import Footer from './Footer';
import Main from './MobileContainer';

const Homepage = () => (
  <ResponsiveContainer>
    <Showcase />
    <Testimonials />
    <Main />
    <Footer />
  </ResponsiveContainer>
);

export default Homepage;
