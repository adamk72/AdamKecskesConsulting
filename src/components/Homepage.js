import React from 'react';
import ResponsiveContainer from './ResponsiveContainer';
import Showcase from './Showcase';
import Main from './Main';
import SegmentDivider from './SegmentDivider';

const Homepage = () => (
  <ResponsiveContainer>
    <SegmentDivider>Who is &hellip; ?</SegmentDivider>
    <Showcase />
    <SegmentDivider>I'm a problem solver&hellip;</SegmentDivider>
    <Main />
  </ResponsiveContainer>
);

export default Homepage;
