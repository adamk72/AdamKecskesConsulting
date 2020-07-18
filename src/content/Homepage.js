import React from 'react';
import ResponsiveContainer from '../components/ResponsiveContainer';
import MainTitle from './MainTitle';
import CardWrapper from '../components/CardWrapper'
import TextBody from '../components/TextBody'
import { DiScrum, DiJavascript1 } from 'react-icons/di'
import { GrCycle, GrCode } from 'react-icons/gr'


const Homepage = () => {
  return (
    <ResponsiveContainer>
      <MainTitle />
      <div className="homepage container my-5">
        <div className="cards-display my-5">
          <TextBody className="text-item-1 top-element" title="My Why:">
            Create work environments with reduced stress where employees can spend more time with friends and family while <em>still</em> being <em><strong>incredibly productive</strong></em> at work.
        </TextBody>

          <TextBody className="text-item-2" title="My How:">How does a company get <strong><em>twice</em></strong> as much done in <strong><em>half</em></strong> the time? By making a dramatic shift in your mindset about what defines productivity, communication and continual process improvement. <br /> <br />I guide companies <em>away</em> from boring meetings, spreadsheet dashboards, todo lists, and false priorities and move them towards thinking about culture, categorization, tasks, and sprints.</TextBody>

          <TextBody TextBody className="text-item-3" title="My Services:">Commodo officia dolor elit dolore aute irure elit ipsum proident deserunt cillum. Duis pariatur ut sit voluptate amet mollit adipisicing quis fugiat id.</TextBody>

          <div className="img-item-1"></div>

          <CardWrapper className="card-item-1"
            icon={<GrCode className="react-icons medium title" />}
            title="No-Code Operations"
            subtitle="Operations made easy">
            Operations made easy
            </CardWrapper>

          <CardWrapper className="card-item-2"
            icon={<GrCycle className="react-icons medium title" />}
            title="Project Lifecycle"
            subtitle="Operations made easy">
            Body
            </CardWrapper>

          <CardWrapper className="card-item-3"
            icon={<DiScrum className="react-icons large title" />}
            title="Scrum Master"
            subtitle="Operations made easy">
            Body
            </CardWrapper>

          <CardWrapper className="card-item-4"
            icon={<DiJavascript1 className="react-icons large title" />}
            title="Javascript"
            subtitle="Operations made easy">
            Body1
           </CardWrapper>
          <div className="spacer-item-1" />
        </div>
      </div>

    </ResponsiveContainer >
  )

};

export default Homepage;



