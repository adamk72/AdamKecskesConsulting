import React from 'react';
import ResponsiveContainer from '../components/ResponsiveContainer';
import SegmentDivider from '../components/SegmentDivider';
import HeroSection from './HeroSection';
import IntroSection from './IntroSection';
import SolverSection from './SolverSection';
import TeamSection from './TeamSection';
import RoleSection from './RoleSection';
const Homepage = () => (
  <ResponsiveContainer>
    <HeroSection />
    <SegmentDivider content='Who is &hellip; ?' />
    <IntroSection />
    <SegmentDivider content="I'm a problem solver&hellip;" />
    <SolverSection />
    <SegmentDivider content='&hellip;With a Wide Range of Experiences&hellip;' />
    <RoleSection />
    <SegmentDivider content='&hellip;and I play well with others.' />
    <TeamSection />
  </ResponsiveContainer>
);

export default Homepage;
