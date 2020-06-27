import React from 'react';
import ResponsiveContainer from '../components/ResponsiveContainer';
import SectionDivider from '../components/SectionDivider';
import MainTitle from './MainTitle';
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
    <MainTitle />
    And now for something completely different
  </ResponsiveContainer>
);

export default Homepage;
