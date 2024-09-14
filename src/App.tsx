import React from 'react';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="container">
      {/* Header Section */}
      <header className="header">
        <h1>Sushma Shivani Nukala</h1>
        <p>Full Stack Developer | Software Engineer</p>
      </header>

      {/* Bio Section */}
      <section className="bio-section">
        <h2>About Me</h2>
        <p>
          I am Sushma Shivani Nukala, a passionate Full Stack Developer with expertise in React, ASP.NET, Java, and cloud technologies.
          Currently pursuing my Master's in Computer Science at Virginia Tech, I enjoy solving real-world problems through code and have
          built several full-stack applications. Let's build something amazing together!
        </p>
        <div className="personal-info">
          <p><strong>Email:</strong> sushmashivani@vt.edu</p>
          <p><strong>Phone:</strong> (571) 241 6826</p>
          <p><strong>LinkedIn:</strong> <a href="https://linkedin.com/in/sushma-nukala" target="_blank" rel="noopener noreferrer">Sushma Nukala</a></p>
          <p><strong>GitHub:</strong> <a href="https://github.com/sushmanukala9" target="_blank" rel="noopener noreferrer">sushmanukala9</a></p>
        </div>
      </section>

      {/* Projects Section */}
      <section className="projects-section">
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
        </div>
      </section>

      {/* Experience Section */}
      <section className="experience-section">
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
      </section>

      {/* Skills Section */}
      <section className="skills-section">
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
        <a href="https://linkedin.com/in/sushma-nukala" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </footer>
    </div>
  );
}

export default App;
