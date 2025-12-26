import React from 'react';
import './timeline.css';

const TimelineData = [
    {
        year: "2016",
        title: "Bachelor's in Design",
        description: "Enrolled in formal design education to deepen my understanding of design thinking and aesthetics."
    },
    {
        year: "2020",
        title: "Started Design Career",
        description: "Started my career as a visual designer, but after working on UX processes for an internal tool, I discovered my passion for turning research and ideas into meaningful product experiences"
    },
    {
        year: "2021",
        title: "Professional Opportunity",
        description: "Worked as a Designer with Internshala and Utilize Core, collaborating closely with engineers and PMs for smooth delivery and pixel-perfect designs, along with contributing to the design system."
    },
    {
        year: "2022",
        title: "Collaboration with International Clients",
        description: "Currently working here since 2022 as Sr. Designer. Collaborated directly with global clients like Microsoft, PepsiCo, Staples, and Wolters Kluwer."
    }
];

const TimeLine = () => {
    return (
        <div className="max-w-3xl mx-auto p-8 font-sans main">
            <div className="relative border-l border-gray-200 ml-20">
                {TimelineData.map((item, index) => (
                    <div key={index} className="timeStage mb-12 ml-8 relative">
                        {/* Year Label */}
                        <span className="year absolute -left-28 top-0 text-gray-400 font-medium">
                            {item.year}
                        </span>
                        <div className="dot"></div>
                        <div className="box">
                            {/* Content */}
                            <div className='content'>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">
                                    {item.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed max-w-2xl">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div >
    );
};

export default TimeLine;