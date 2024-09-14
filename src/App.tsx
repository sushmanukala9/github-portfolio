import React from 'react';
import './App.css';

const App: React.FC = () => {

  const handleScrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="container">
      {/* Navigation Bar */}
      <nav className="navbar">
        <ul>
          <li onClick={() => handleScrollToSection('bio-section')}>About Me</li>
          <li onClick={() => handleScrollToSection('projects-section')}>Projects</li>
          <li onClick={() => handleScrollToSection('experience-section')}>Experience</li>
          <li onClick={() => handleScrollToSection('skills-section')}>Skills</li>
        </ul>
      </nav>

      {/* Header Section */}
      <header className="header">
        <h1>Sushma Shivani Nukala</h1>
        <p>Full Stack Developer | Software Engineer</p>
      </header>

      {/* Bio Section */}
      <section id="bio-section" className="bio-section">
        <h2>About Me</h2>
        <p>
          I am Sushma Shivani Nukala, a passionate Full Stack Developer with expertise in React, ASP.NET, Java, and cloud technologies.
          Currently pursuing my Master's in Computer Science at Virginia Tech, I enjoy solving real-world problems through code and have
          built several full-stack applications. Let's build something amazing together!
        </p>
        <div className="personal-info">
          <p><strong>Email:</strong> sushmashivani@vt.edu</p>
          <p><strong>Phone:</strong> (571) 241 6826</p>
          <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/sushma-nukala-867a82137/" target="_blank" rel="noopener noreferrer">Sushma Nukala</a></p>
          <p><strong>GitHub:</strong> <a href="https://github.com/sushmanukala9" target="_blank" rel="noopener noreferrer">sushmanukala9</a></p>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects-section" className="projects-section">
        <h2>Projects</h2>
        <div className="projects-list">
          <div className="project-item">
            <h3>Online Bookstore Website</h3>
            <p>Full-stack React J2EE Bookstore Website with MySQL DB.</p>
            <a href="https://github.com/sushmanukala9/bookstore" target="_blank" rel="noopener noreferrer">GitHub Repo</a>
            <a href="https://www.youtube.com/watch?v=xxxxxx" target="_blank" rel="noopener noreferrer">Demo Video</a>
          </div>
          <div className="project-item">
            <h3>Event Management Website – EventEase</h3>
            <p>Event management platform built using React, SpringBoot, AWS.</p>
            <a href="https://github.com/sushmanukala9/SEProject" target="_blank" rel="noopener noreferrer">GitHub Repo</a>
            <a href="https://www.youtube.com/watch?v=6KnC0JF73d8" target="_blank" rel="noopener noreferrer">Demo Video</a>
          </div>
          <div className="project-item">
            <h3>Social Media Analysis and Product Recommendation System</h3>
            <p>Used Amazon EMR with Hadoop and Spark to process Twitter data for trend analysis and product recommendations.</p>
          </div>
          <div className="project-item">
            <h3>Completely Fair Scheduler using Multi-Threading and Load Balancing</h3>
            <p>Extended Pintos OS with a fair scheduler and dynamic load balancer.</p>
          </div>
          <div className="project-item">
            <h3>Feature Selection for Microarray Gene Data</h3>
            <p>Implemented PCA and PSO to reduce dimensionality and achieved an 83.4% classification accuracy.</p>
          </div>
          <div className="project-item">
            <h3>Smart Classroom</h3>
            <p>Designed a prototype for a 'smart classroom' using IoT devices and J2EE Server.</p>
          </div>
          <div className="project-item">
            <h3>Seminar Scheduling System</h3>
            <p>Implemented a scheduling system for seminars using BSTs, Hashtable, and Tries.</p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience-section" className="experience-section">
        <h2>Professional Experience</h2>
        <div className="job-item">
          <h3>Kaiser Permanente | Full Stack Web Development Intern</h3>
          <p>June 2024 – Present | Rockville, Maryland</p>
          <ul>
            <li>Developing full-stack applications for physicians and trainers using React and .NET APIs.</li>
            <li>Designing the DB schema and optimizing data flow with stored procedures.</li>
          </ul>
        </div>
        <div className="job-item">
          <h3>Ivy Software Development Services | Software Engineer</h3>
          <p>March 2022 – June 2023 | Hyderabad, Telangana</p>
          <ul>
            <li>Worked on online gambling websites focusing on login, registration, and KYC components.</li>
            <li>Developed backend features for responsible gambling and compliance using Java and Spring.</li>
          </ul>
        </div>
        <div className="job-item">
          <h3>Oracle Cerner | Software Engineer</h3>
          <p>January 2020 – September 2021 | Bangalore, Karnataka</p>
          <ul>
            <li>Enhanced the 'powerchart' healthcare application by implementing an order priority feature.</li>
            <li>Designed complex logic to optimize phlebotomists' workflow using C++ MFC-based architecture.</li>
          </ul>
        </div>
        <div className="job-item">
          <h3>Cloudio Inc | Software Intern</h3>
          <p>April 2019 – June 2019 | Hyderabad, Telangana</p>
          <ul>
            <li>Collaborated on a web-based application for the company’s sales data analysis.</li>
            <li>Implemented linear regression for sales predictions in a user-friendly interface for users to analyze datasets.</li>
          </ul>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills-section" className="skills-section">
        <h2>Skills</h2>
        <ul>
          <li>Languages: Java, C++, C#, ReactJs, TypeScript, JavaScript, Python, Kotlin</li>
          <li>Technologies: SpringBoot, MySQL, Git, Django, Android, Junit, AWS</li>
          <li>Concepts: Data Structures, Algorithms, Web App Design, REST API, CI/CD</li>
        </ul>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>Connect with me on:</p>
        <a href="https://github.com/sushmanukala9" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/sushma-nukala-867a82137/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </footer>
    </div>
  );
}

export default App;
