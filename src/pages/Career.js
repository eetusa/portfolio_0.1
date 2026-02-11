import React, { useEffect, useState } from 'react';
import ExperienceList from '../components/ExperienceList';
import ExperienceItem from '../components/ExperienceItem';

const Career = () => {

    const [totalExperience, setTotalExperience] = useState('');

    useEffect(() => {
        const start = new Date(2021, 3, 1); // April 2021
        const now = new Date();
        let years = now.getFullYear() - start.getFullYear();
        let months = now.getMonth() - start.getMonth();
        if (months < 0) {
            years -= 1;
            months += 12;
        }
        let result = '';
        if (years > 0) {
            result += years + (years === 1 ? ' year' : ' years');
        }
        if (months > 0) {
            if (result) result += ', ';
            result += months + (months === 1 ? ' month' : ' months');
        }
        setTotalExperience(result);
    }, []);

    const techTags = [
        'Java', 'Spring', 'Python', 'PostgreSQL', 'Axon Framework',
        'Microservices', 'Event Sourcing', 'CQRS', 'REST API', 'System Integration',
        'Azure', 'Kafka', 'Docker', 'Kubernetes',
        'CI/CD', 'SQL',
    ];

    return (
        <div className="row px-0 mx-0">
            <div className="col-12 col-sm-5 col-lg-4 mx-0 order-2 order-sm-1 career-sidebar">
                <div className="career-profile">
                    <div className="career-photo-clip">
                        <div className="career-photo-circle">
                            <img
                                className="career-photo"
                                src={require('../assets/images/siteimages/minakuva4.png')}
                                alt="Eetu Salli"
                            />
                        </div>
                    </div>
                    <div className="career-profile-info">
                        <span className="career-profile-name">Eetu Salli</span>
                        <span className="career-profile-desc">Software Developer</span>
                        <span className="career-profile-desc">Finland &middot; {totalExperience} in tech</span>
                    </div>
                </div>

                <span className="career-sidebar-label">Experience</span>
                <ExperienceList>
                    <ExperienceItem
                        title="Software Developer"
                        org="Vincit Oyj"
                        start="2022, 08, 08"
                    />
                    <ExperienceItem
                        title="Software Developer"
                        org="Elinar Oy Ltd"
                        start="2022, 02, 01"
                        end="2022, 08, 05"
                        description="Enterprise content management systems — Java, React, FileNet"
                    />
                    <ExperienceItem
                        title="Project Researcher"
                        org="Satakunta University of Applied Sciences - SAMK"
                        start="2021, 04, 01"
                        end="2022, 02, 01"
                        description="VR rehabilitation PoC, mobile apps, motion data analysis"
                    />
                </ExperienceList>

                <span className="career-sidebar-label">Education</span>
                <div className="career-education">
                    BBA in Information Technology<br />
                    Satakunta University of Applied Sciences
                </div>
            </div>
            <div className="col-12 col-sm-7 col-lg-8 mx-0 order-1 order-sm-2 career-showcase">
                <div className="career-showcase-header">
                    <span className="career-showcase-label">Current project</span>
                    <h4 className="career-showcase-title">Lead Backend Developer</h4>
                    <span className="career-showcase-company">Vincit Oyj</span>
                </div>

                <div className="career-showcase-context">
                    <span>Large-scale B2B platform in the pharmaceutical industry</span>
                    <span className="career-showcase-detail">Enterprise client &middot; Team of 5–15 &middot; 3+ years on project</span>
                </div>

                <div className="career-showcase-section">
                    <h6 className="career-showcase-section-title">Key achievements</h6>
                    <ul className="career-showcase-achievements">
                        <li>Led the maturation of an Axon Framework migration — from early adoption to stable production platform</li>
                        <li>Architected business-critical features and established team-wide design patterns</li>
                        <li>Go-to expert for critical production issues across the platform</li>
                    </ul>
                </div>

                <div className="career-showcase-tags">
                    {techTags.map((tag, i) => (
                        <span key={i} className="career-tech-tag">{tag}</span>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Career;
