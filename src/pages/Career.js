import React, { useEffect, useRef, useState } from 'react';
import ExperienceList from '../components/ExperienceList';
import ExperienceItem from '../components/ExperienceItem';

const careerItems = [
    {
        id: 'sok-full-stack-developer',
        title: 'Full-stack Software Developer',
        highlightTitle: 'Full-stack Software Developer',
        org: 'Suomen Osuuskauppojen Keskuskunta (SOK)',
        start: '2026-08-10',
        description: 'Full-stack development for an S Group retail product selection platform',
        context: 'Retail product selection platform used across S Group stores',
        contextDetail: 'Product selections made in the system determine which products are offered in stores',
        achievements: [],
        technologies: [
            'React', 'Node.js', 'AWS', 'Amazon Aurora', 'AWS Lambda', 'Kafka', 'PostgreSQL', 'GraphQL',
        ],
    },
    {
        id: 'vincit-software-developer',
        title: 'Software Developer',
        highlightTitle: 'Backend Developer with Lead Responsibilities',
        org: 'Vincit Oyj',
        start: '2022-08-08',
        end: '2026-08-07',
        description: 'Software consulting and backend development for a pharmaceutical client',
        context: 'Large-scale B2B platform in the pharmaceutical industry',
        contextDetail: 'Consulting engagement \u00b7 Enterprise client \u00b7 Team of 5-15 \u00b7 4 years on project',
        achievements: [
            'Assumed responsibility for backend technical decisions and helped onboard developers joining the project',
            'Led the maturation of an Axon Framework migration - from early adoption to stable production platform',
            'Architected business-critical features and established team-wide design patterns',
            'Go-to expert for critical production issues across the platform',
        ],
        technologies: [
            'Java', 'Spring', 'Python', 'PostgreSQL', 'Axon Framework',
            'Microservices', 'Event Sourcing', 'CQRS', 'REST API', 'System Integration',
            'Azure', 'Kafka', 'Docker', 'Kubernetes', 'CI/CD', 'SQL',
        ],
    },
    {
        id: 'elinar-software-developer',
        title: 'Software Developer',
        highlightTitle: 'Software Developer',
        org: 'Elinar Oy Ltd',
        start: '2022-02-01',
        end: '2022-08-05',
        description: 'Enterprise content management and document integrations',
        context: 'Enterprise content management and secure document upload integration',
        contextDetail: 'React and Java/Spring \u00b7 ADFS authentication \u00b7 IBM FileNet',
        achievements: [
            'Developed features for a React and Java/Spring system that authenticated users through ADFS and uploaded documents to IBM FileNet',
        ],
        technologies: ['React', 'Java', 'Spring', 'ADFS', 'IBM FileNet'],
    },
    {
        id: 'samk-project-researcher',
        title: 'Project Researcher',
        highlightTitle: 'Project Researcher',
        org: 'Satakunta University of Applied Sciences - SAMK',
        start: '2021-04-01',
        end: '2022-02-01',
        description: 'Physical rehabilitation PoCs - VR motion analysis, wearables, and mobile apps',
        context: 'Proof-of-concept systems for technology-assisted physical rehabilitation',
        contextDetail: 'VR motion tracking \u00b7 Wearable integrations \u00b7 Gamified mobile rehabilitation',
        achievements: [
            'Designed and built an end-to-end VR motion-data system, from Unity controller tracking through Node.js and MongoDB to a Python/PyQt desktop application for lightweight analysis with 3D spatial and 2D visualizations',
            'Developed a Kotlin Android app that collected data from a sports wrist device and sent it to a server',
            'Created a gamified mobile yoga rehabilitation prototype designed to work with a yoga play mat',
        ],
        technologies: ['Unity', 'Node.js', 'MongoDB', 'Python', 'PyQt', 'Kotlin', 'Android'],
    },
];

export const sortCareerItemsNewestFirst = (items) => (
    [...items].sort((first, second) => second.start.localeCompare(first.start))
);

const sortedCareerItems = sortCareerItemsNewestFirst(careerItems);

const Career = () => {

    const [totalExperience, setTotalExperience] = useState('');
    const [selectedCareerId, setSelectedCareerId] = useState(sortedCareerItems[0].id);
    const showcaseRef = useRef(null);

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

    const selectedCareer = sortedCareerItems.find((item) => item.id === selectedCareerId)
        || sortedCareerItems[0];

    const handleCareerSelect = (careerId) => {
        setSelectedCareerId(careerId);

        if (!window.matchMedia || !window.matchMedia('(max-width: 575.98px)').matches) {
            return;
        }

        window.requestAnimationFrame(() => {
            if (!showcaseRef.current) {
                return;
            }

            const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
            showcaseRef.current.focus({ preventScroll: true });
            showcaseRef.current.scrollIntoView({
                behavior: reduceMotion ? 'auto' : 'smooth',
                block: 'start',
            });
        });
    };

    return (
        <div className="row px-0 mx-0">
            <div className="col-12 col-sm-5 col-lg-4 mx-0 order-1 order-sm-1 career-sidebar">
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
                    {sortedCareerItems.map((item) => (
                        <ExperienceItem
                            key={item.id}
                            title={item.title}
                            org={item.org}
                            start={item.start}
                            end={item.end}
                            description={item.description}
                            isSelected={item.id === selectedCareer.id}
                            controlsId="career-showcase"
                            onSelect={() => handleCareerSelect(item.id)}
                        />
                    ))}
                </ExperienceList>

                <span className="career-sidebar-label">Education</span>
                <div className="career-education">
                    BBA in Information Technology<br />
                    Satakunta University of Applied Sciences
                </div>
            </div>
            <div
                id="career-showcase"
                ref={showcaseRef}
                className="col-12 col-sm-7 col-lg-8 mx-0 order-2 order-sm-2 career-showcase"
                tabIndex="-1"
                aria-live="polite"
            >
                <div className="career-showcase-header">
                    <span className="career-showcase-label">Career highlight</span>
                    <h4 className="career-showcase-title">{selectedCareer.highlightTitle}</h4>
                    <span className="career-showcase-company">{selectedCareer.org}</span>
                </div>

                {(selectedCareer.context || selectedCareer.contextDetail) && (
                    <div className="career-showcase-context">
                        {selectedCareer.context && <span>{selectedCareer.context}</span>}
                        {selectedCareer.contextDetail && (
                            <span className="career-showcase-detail">{selectedCareer.contextDetail}</span>
                        )}
                    </div>
                )}

                {selectedCareer.achievements.length > 0 && (
                    <div className="career-showcase-section">
                        <h6 className="career-showcase-section-title">Key achievements</h6>
                        <ul className="career-showcase-achievements">
                            {selectedCareer.achievements.map((achievement) => (
                                <li key={achievement}>{achievement}</li>
                            ))}
                        </ul>
                    </div>
                )}

                {selectedCareer.technologies.length > 0 && (
                    <div className="career-showcase-tags" aria-label="Technologies">
                        {selectedCareer.technologies.map((tag) => (
                            <span key={tag} className="career-tech-tag">{tag}</span>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Career;
