import React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import ExperienceCard from '../Highlights/ExperienceCard';
import { experiences } from '../Highlights/experience';
import './Highlights.css'; // Import the CSS file
import Particle from "../Particle";
const Highlights = () => {
    return (
        <div className="styled-container" id="experience">
            <Particle />
            <div className="wrapper">
                <div>
                    <div className="title">My <strong className='purple'>Experience</strong></div>
                    <div className="desc">What I have done so far</div>
                </div>
                <div className="timeline-section">
                    <Timeline>
                        {experiences.map((experience, index) => (
                            <TimelineItem key={index}>
                                <TimelineSeparator>
                                    <TimelineDot variant="outlined" color="secondary" />
                                    {index !== experiences.length - 1 && <TimelineConnector style={{ background: '#854CE6' }} />}
                                </TimelineSeparator>
                                <TimelineContent sx={{ py: '12px', px: 2 }}>
                                    <ExperienceCard experience={experience} />
                                </TimelineContent>
                            </TimelineItem>
                        ))}
                    </Timeline>
                </div>
            </div>
        </div>
    );
}

export default Highlights;
