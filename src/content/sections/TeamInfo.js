import React from 'react';
import SimpleCard from '../../components/SimpleCard';
import CircularEnclose from '../../components/CircularEnclose';
export const TeamLeftSide = {
  type: 'text',
  body: [
    <SimpleCard className='justify' title='We Are Better Together'>
      <p>
        The best teams I’ve lead or worked for have been the ones where we had
        mutual respect for one another and engaged in our work with transparency
        and humility.
      </p>
      <p>
        In teams that I manage, I rely heavily on the expertise and
        fact-oriented opinions of each person to make better overall decisions.
        I distinctly enjoy learning about the innovative solutions that my teams
        come up with.
      </p>
      <p>
        And when it comes to leadership, I stick to principles that respect each
        person; you don't know why they did X, Y, or Z unless you ask them.
        Principles such as:
      </p>
      <ul>
        <li key='1'>Transparency &amp; Honesty</li>
        <li key='2'>Safety both in the environment and in failure</li>
        <li key='3'>
          Recognize leadership and provide opportunities for improvement
        </li>
      </ul>
    </SimpleCard>,
  ],
};
export const TeamRightSide = {
  type: 'image',
  body: [
    <>
      <CircularEnclose image='images/teamwork.png' />
    </>,
  ],
};
