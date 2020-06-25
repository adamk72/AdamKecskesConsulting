import React from 'react';
import ResponsiveContainer from '../components/ResponsiveContainer';
import SectionDivider from '../components/SectionDivider';
import HeroSection from './HeroSection';
import TwoColumnSection from '../components/TwoColumnSection';
import SolverSection from './SolverSection';
import TeamSection from './TeamSection';
import RoleSection from './RoleSection';

import { CardImage, CardText } from '../content/IntroInfo';

const Homepage = () => (
  <ResponsiveContainer>
    <HeroSection />
    <SectionDivider content='Who is &hellip; ?' />
    <TwoColumnSection leftSide={CardImage} rightSide={CardText} />
    <SectionDivider content="I'm a problem solver&hellip;" />
    <SolverSection />
    <SectionDivider content='&hellip;With a Wide Range of Experiences&hellip;' />
    <RoleSection />
    <SectionDivider content='&hellip;and I play well with others.' />
    <TeamSection />
  </ResponsiveContainer>
);

export default Homepage;
