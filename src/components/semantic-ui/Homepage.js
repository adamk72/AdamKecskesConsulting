import React from 'react';
import ResponsiveContainer from './ResponsiveContainer';
import Showcase from './Showcase';
import Testimonials from './Testimonials';
import Footer from './Footer';
import Main from './Main';
import SegmentDivider from './SegmentDivider';

const Homepage = () => (
  <ResponsiveContainer>
    <SegmentDivider />
    <Showcase />
    <SegmentDivider />

    <Testimonials />
    <SegmentDivider />
    <Main />
    <SegmentDivider />
    <Footer />
  </ResponsiveContainer>
);

export default Homepage;
