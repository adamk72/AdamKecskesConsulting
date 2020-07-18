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

          <TextBody className="text-item-2" title="My How:">How does a company get <strong><em>twice</em></strong> as much done in <strong><em>half</em></strong> the time? By making a dramatic shift in your mindset about what defines productivity, communication and continual process improvement. <br /> <br />I guide companies <em>away</em> from boring meetings, ever changing dashboards, lost emails, and false priorities and move them towards thinking about culture, categorization, tasks, and sprints.</TextBody>

          <TextBody TextBody className="text-item-3" title="My Services:">I offer a range of tight knit services for small and medium sized companies. </TextBody>

          <div className="img-item-1"></div>

          <CardWrapper className="card-item-1"
            icon={<GrCode className="react-icons medium title" />}
            title="No-Code Operations"
            subtitle="Operations made easy">
            It today's ever integrated software platforms, it's easier than every to find the right combination of tools that work for your people and your company's culture.
            </CardWrapper>

          <CardWrapper className="card-item-2"
            icon={<GrCycle className="react-icons medium title" />}
            title="Product Life Cycle"
            subtitle="Improve processes">
            The product life cycle and my brand of operations go hand-in-hand to make a more reliable and robust process for churning out quality products with less effort, less time, and lower costs.
            </CardWrapper>

          <CardWrapper className="card-item-3"
            icon={<DiScrum className="react-icons large title" />}
            title="Scrum Master"
            subtitle="Fast Turn Around, Clean Code">
            Scrum is more than just leading software development meetings. It's about keeping track of numerous details and ensuring all stakeholders are well communicated with and kept up to speed.
            </CardWrapper>

          <CardWrapper className="card-item-4"
            icon={<DiJavascript1 className="react-icons large title" />}
            title="Javascript"
            subtitle="Front End Website Development">
            Javascript is my primary language and I typically use React as my UI framework. I work well with backend developers and designers alike to create robust web services and an engaging UX.
           </CardWrapper>
          <div className="spacer-item-1" />
        </div>
      </div>

    </ResponsiveContainer >
  )

};

export default Homepage;



