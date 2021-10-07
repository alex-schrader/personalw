import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { IoHardwareChipOutline } from "react-icons/io5";
import './Timeline.css'
import { BiAtom } from "react-icons/bi";
import { GiSoccerBall } from "react-icons/gi";
import { FaSyringe } from "react-icons/fa";


const Timeline = () => {
  return (
    <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2021                                         "
        contentStyle={{ background: 'rgb(211, 211, 211)', color: 'black'}}
        iconStyle={{ background: "rgb(211, 211, 211)", color: 'black' }}
        icon={<IoHardwareChipOutline/>}
      >
        <h3 className="vertical-timeline-element-title">ITS Summer Technical Associate</h3>
        <h4 className="vertical-timeline-element-subtitle">Swarthmore, PA</h4>
        <p>
        Assisting using Jamf to remotely manage computers, imaging new Apple and Dell computers, completing computer moves and setups, resolving general troubleshooting concerns
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="                                         2018 - 2020"
        iconStyle={{ background: "rgb(211, 211, 211)", color: 'black' }}
        contentStyle={{ background: 'rgb(211, 211, 211)', color: '#00000'}}
        icon={<BiAtom />}
      >
        <h3 className="vertical-timeline-element-title">Physics and Math Tutor</h3>
        <h4 className="vertical-timeline-element-subtitle">
          Seoul, South Korea
        </h4>
        <p>
          Tutored students through NHS in introductory mechanics and calculus
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2017 - 2020                                         "
        dateClassName='datecls'
        iconStyle={{ background: "rgb(211, 211, 211)", color: 'black' }}
        icon={<GiSoccerBall />}
        contentStyle={{ background: 'rgb(211, 211, 211)', color: '#00000'}}
      >
        <h3 className="vertical-timeline-element-title">Assistant Soccer Coach</h3>
        <h4 className="vertical-timeline-element-subtitle">Seoul, South Korea</h4>
        <p>Ran soccer drills for kids ages 8-14 and helped organize parent spectators</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="                                         2017"
        iconStyle={{ background: "rgb(211, 211, 211)", color: 'black'}}
        contentStyle={{ background: 'rgb(211, 211, 211)', color: '#00000'}}
        icon={<FaSyringe/>}
      >
        <h3 className="vertical-timeline-element-title">IVI Intern</h3>
        <h4 className="vertical-timeline-element-subtitle">
          Seoul, South Korea
        </h4>
        <p>Interned at the International Vaccine Institute for 2 weeks, learning about both the creation and distribution process</p>
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
};


export default Timeline