import React from 'react';
import ResponsiveContainer from '../components/ResponsiveContainer';
import Showcase from './Showcase';
import Main from './Main';
import SegmentDivider from '../components/SegmentDivider';

const Homepage = () => (
  <ResponsiveContainer>
    <SegmentDivider content='Who is &hellip; ?' />
    <Showcase />
    <SegmentDivider content="I'm a problem solver&hellip;" />
    <Main />
  </ResponsiveContainer>
);

export default Homepage;
