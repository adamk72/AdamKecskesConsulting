import React from 'react';
import ResponsiveContainer from '../components/ResponsiveContainer';
import MainTitle from './MainTitle';
import CardWrapper from '../components/CardWrapper'
import TextBody from '../components/TextBody'
import { DiScrum, DiJavascript1 } from 'react-icons/di'
import { GrCycle, GrCode } from 'react-icons/gr'
import SectionDivider from '../components/SectionDivider'


const Homepage = () => {
  return (
    <ResponsiveContainer>
      <MainTitle />
      <div className="homepage container my-5">

        <div className="outer-grid">
          <div className="img-item-1"></div>

          <div className="inner-grid">

            <div className="text-body-display">
              <TextBody className="text-item-1 top-element pb-4" title="My Why:">
                I've seen too much employee misery. I've seen too many people, myself included, who have had to toil fruitlessly using old tools, opaque systems, and outdated practices. It doesn't have to be that way and I've shown many companies a better way of approaching how they do their operations.<br /><br />
                It's my mission is to create workplaces with reduced stress where employees can spend more time with friends and family while still being <em><strong>incredibly productive</strong></em> at work.</TextBody>

              <SectionDivider />

              <TextBody className="text-item-1 top-element pb-4" title="My What:">
                Ethical and Effective Operations (EEO) is the concept that companies can and should implement business systems that keep their employees' well-beings front of mind. It's easy to get lost in the daily grind of trying to satisfy the remote shareholders and upper management that is perhaps too far away from the hands on work. Truly productive work is not about working harder or longer hours, but quite the contrary.<br /><br /> It's about extensive planning; minimal, but highly effective execution, and taking the time to enjoy the work being done while not working to the point of drudgery. This is hardly a new concept; most people know it from the concept popularized by Allen F. Morgenstern in the 1930s, with his "work simplification plan." You probably know it better as "work smarter, not harder."
                <br />
                <br />
                I've implemented "work simplification plans" in a variety of operations and project management systems. The best I'd ever done was with a small and tight knit software development team in a start up company. After 6 months of 40 hour work weeks unwinding and refactor process, code, and UX alike, we managed to create a system that generated twice the results in half the time.

               </TextBody>

              <SectionDivider />

              <TextBody className="text-item-2 pb-4 pt-4" title="My How:">
                How does a company get <strong><em>twice</em></strong> as much done in <strong><em>half</em></strong> the time? By making a dramatic shift in your mindset about what defines productivity, communication and continual process improvement. <br /> <br />I guide companies <em>away</em> from boring meetings, ever changing dashboards, lost emails, and false priorities and move them towards thinking about culture, categorization, tasks, and sprints.</TextBody>
^
              <SectionDivider />

              <TextBody TextBody className="text-item-3 pt-4" title="My Services:">
                I offer a range of tight-knit services for small and medium sized companies.</TextBody>

            </div>
            <div className="cards-display cards-grid">

              <CardWrapper className="card-item-1"
                icon={<GrCode className="react-icons medium title" />}
                title="No-Code Operations"
                subtitle="Operations made easy">
                It today's ever integrated software platforms, it's easier than every to find the right combination of tools that work for your people and your company's culture.</CardWrapper>

              <CardWrapper className="card-item-2"
                icon={<GrCycle className="react-icons medium title" />}
                title="Product Life Cycle"
                subtitle="Improved processes">
                The product life cycle and my brand of operations go hand-in-hand to make a more reliable and robust process for churning out quality products with less effort, less time, and lower costs.</CardWrapper>

              <CardWrapper className="card-item-3"
                icon={<DiScrum className="react-icons large title" />}
                title="Scrum Master"
                subtitle="Fast Turn Around, Clean Code">
                Scrum is more than just leading software development meetings. It's about keeping track of numerous details and ensuring all stakeholders are well communicated with and kept up to speed.</CardWrapper>

              <CardWrapper className="card-item-4"
                icon={<DiJavascript1 className="react-icons large title" />}
                title="Javascript"
                subtitle="Front End Development">
                Javascript is my primary language and I typically use React as my UI framework. I work well with backend developers and designers alike to create robust web services and an engaging UX.</CardWrapper>
            </div>
          </div>
        </div>
      </div>

    </ResponsiveContainer >
  )

};

export default Homepage;



