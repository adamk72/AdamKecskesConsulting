import React from 'react';
import ResponsiveContainer from '../components/ResponsiveContainer';
import SectionDivider from '../components/SectionDivider';
import HeroSection from './HeroSection';
import TwoColumnSection from '../components/TwoColumnSection';

import { CardImage, CardText } from '../content/sections/IntroInfo';
import {
  SolverLeftSide,
  SolverRightSide,
} from '../content/sections/SolverInfo';
import { RoleLeftSide, RoleRightSide } from '../content/sections/RoleInfo';
import { TeamLeftSide, TeamRightSide } from '../content/sections/TeamInfo';

const Homepage = () => (
  <ResponsiveContainer>
    <HeroSection />
    <SectionDivider content='Who is &hellip; ?' />
    <TwoColumnSection
      leftSide={CardImage}
      rightSide={CardText}
      id='introSection'
    />
    <SectionDivider content="I'm a problem solver&hellip;" />
    <TwoColumnSection
      leftSide={SolverLeftSide}
      rightSide={SolverRightSide}
      id='solverSection'
    />
    <SectionDivider content='&hellip;With a Wide Range of Experiences&hellip;' />
    <TwoColumnSection
      leftSide={RoleLeftSide}
      rightSide={RoleRightSide}
      id='roleSection'
    />
    <SectionDivider content='&hellip;and I play well with others.' />
    <TwoColumnSection
      leftSide={TeamLeftSide}
      rightSide={TeamRightSide}
      id='teamSection'
    />
  </ResponsiveContainer>
);

export default Homepage;
