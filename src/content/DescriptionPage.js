import React from 'react';
import ResponsiveContainer from '../components/ResponsiveContainer';
import SectionDivider from '../components/SectionDivider';
import MainTitle from './MainTitle';
import TwoColumnSection from '../components/TwoColumnSection';
import GetSpecialOffer from './sections/GetSpecialOffer'
import { CardImage, CardText } from './sections/IntroInfo';
import { SolverLeftSide, SolverRightSide } from './sections/SolverInfo';
import { RoleLeftSide, RoleRightSide } from './sections/RoleInfo';
import { TeamLeftSide, TeamRightSide } from './sections/TeamInfo';

const Homepage = () => (
  <ResponsiveContainer>
    <MainTitle />
    <GetSpecialOffer />
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
