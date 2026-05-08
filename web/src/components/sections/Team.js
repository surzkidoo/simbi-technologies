import React from 'react';

const Team = () => {
    const teamMembers = [
        {
            name: "Abubakar Mukhtar",
            role: "Full Stack Engineer",
            image: "/images/CEO.jpg",
            linkedin: "#",
            github: "https://github.com/surzkidoo"
        },
        {
            name: "Abubakar Nuuman",
            role: "Mobile App Engineer",
            image: "/images/abu.jpg",
            linkedin: "https://www.linkedin.com/in/abubakar-nuuman-adam",
            github: "https://github.com/abubakarrhazes"
        },
        {
            name: "Mubarak Aliyu",
            role: "UI/UX Designer",
            image: "/images/mubarak.jpg",
            linkedin: "https://www.linkedin.com/in/aliyu-mubarak-a080b0196/",
            website: "http://aliyumubarak.me"
        }
    ];

    return (
        <section id="team" className="team">
            <div className="container">
                <div className="section-header">
                    <span className="subtitle">The Collective</span>
                    <h2>Meet the Visionaries</h2>
                    <p>A multidisciplinary team of elite engineers, creative designers, and strategic product thinkers.</p>
                </div>
                <div className="team-grid">
                    {teamMembers.map((member, index) => (
                        <div className="team-member" key={index} data-aos="fade-up" data-aos-delay={(index + 1) * 100}>
                            <div className="member-card">
                                <div className="member-image">
                                    <img src={member.image} alt={member.name} />
                                    <div className="member-overlay">
                                        <div className="member-social">
                                            {member.linkedin && <a href={member.linkedin}><i className="fab fa-linkedin-in"></i></a>}
                                            {member.github && <a href={member.github}><i className="fab fa-github"></i></a>}
                                            {member.website && <a href={member.website}><i className="fas fa-globe"></i></a>}
                                        </div>
                                    </div>
                                </div>
                                <div className="member-info">
                                    <h3>{member.name}</h3>
                                    <p>{member.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;
