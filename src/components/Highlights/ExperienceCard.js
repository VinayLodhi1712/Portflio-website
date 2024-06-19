import React from 'react';
import './Experience.css'; // Import the CSS file

const ExperienceCard = ({ experience }) => {
    return (
        <div className="card">
            <div className="top">
                {experience.img && (
                    <div className="image-container">
                        <img src={experience.img} alt={`${experience.company} logo`} className="icon" />
                    </div>
                )}
                <div className="body">
                    <div className="role">{experience.role}</div>
                    <div className="company">{experience.company}</div>
                    <div className="date">{experience.date}</div>
                </div>
            </div>
            <div className="description">{experience.desc}</div>
            {experience.skills && (
                <div className="skills">
                    <b>Skills:</b>
                    <ul className="skills-list">
                        {experience.skills.map((skill, index) => (
                            <li key={index} className="skill-item">{skill}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default ExperienceCard;
