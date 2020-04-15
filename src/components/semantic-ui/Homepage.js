import React from 'react';
import ResponsiveContainer from './ResponsiveContainer';
import Showcase from './Showcase';
import Footer from './Footer';
import Main from './Main';
import SegmentDivider from './SegmentDivider';

const Homepage = () => (
  <ResponsiveContainer>
    <SegmentDivider>Who is &hellip; ?</SegmentDivider>
    <Showcase />
    <SegmentDivider>I'm a Problem Solver&hellip;</SegmentDivider>
    <Main />
    <SegmentDivider />
    <Footer />
  </ResponsiveContainer>
);

export default Homepage;
