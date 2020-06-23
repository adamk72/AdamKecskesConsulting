import React from 'react';
import ResponsiveContainer from '../components/ResponsiveContainer';
import SegmentDivider from '../components/SegmentDivider';
import HeroSection from './HeroSection';
import MainSection from './MainSection';
import ShowcaseSection from './ShowcaseSection';
const Homepage = () => (
  <ResponsiveContainer>
    <HeroSection />
    <SegmentDivider content='Who is &hellip; ?' />
    <ShowcaseSection />
    <SegmentDivider content="I'm a problem solver&hellip;" />
    <MainSection />
  </ResponsiveContainer>
);

export default Homepage;
