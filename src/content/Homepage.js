import React from 'react';
import ResponsiveContainer from '../components/ResponsiveContainer';
import SectionDivider from '../components/SectionDivider';
import HeroSection from './HeroSection';
import IntroSection from './IntroSection';
import SolverSection from './SolverSection';
import TeamSection from './TeamSection';
import RoleSection from './RoleSection';
const Homepage = () => (
  <ResponsiveContainer>
    <HeroSection />
    <SectionDivider content='Who is &hellip; ?' />
    <IntroSection />
    <SectionDivider content="I'm a problem solver&hellip;" />
    <SolverSection />
    <SectionDivider content='&hellip;With a Wide Range of Experiences&hellip;' />
    <RoleSection />
    <SectionDivider content='&hellip;and I play well with others.' />
    <TeamSection />
  </ResponsiveContainer>
);

export default Homepage;
