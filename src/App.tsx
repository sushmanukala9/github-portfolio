import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import BookstoreProject from './BookstoreProject';
import EventEaseProject from './EventEaseProject';
import SocialMediaAnalysisProject from './SocialMediaAnalysisProject';
import CompletelyFairSchedulerProject from './CompletelyFairSchedulerProject';
import FeatureSelectionGeneDataProject from './FeatureSelectionGeneDataProject';
import SmartClassroomProject from './SmartClassroomProject';
import './App.css';
const App: React.FC = () => {
  const handleScrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Router>
      <div className="container-fluid p-0">
        {/* Navigation Bar */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
          <a className="navbar-brand" href="#">Sushma's Portfolio</a>
          <div className="collapse navbar-collapse justify-content-center">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" onClick={() => handleScrollToSection('bio-section')}>About Me</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={() => handleScrollToSection('projects-section')}>Projects</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={() => handleScrollToSection('experience-section')}>Experience</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={() => handleScrollToSection('skills-section')}>Skills</a>
              </li>
            </ul>
          </div>
        </nav>

        {/* Main content */}
        <Routes>
          <Route
            path="/"
            element={
              <>
                {/* Header Section */}
                <header className="jumbotron jumbotron-fluid text-center bg-primary text-white">
                  <div className="container">
                    <h1 className="display-4">Sushma Shivani Nukala</h1>
                    <p className="lead">Full Stack Developer | Software Engineer</p>
                  </div>
                </header>

                {/* Bio Section */}
                <section id="bio-section" className="container py-5">
                  <h2>About Me</h2>
                  <p className="lead">
                    I am Sushma Shivani Nukala, a passionate Full Stack Developer with expertise in React, ASP.NET, Java, and cloud technologies.
                    Currently pursuing my Master's in Computer Science at Virginia Tech, I enjoy solving real-world problems through code and have
                    built several full-stack applications. Let's build something amazing together!
                  </p>
                  <div className="row mt-4">
                    <div className="col-md-4">
                      <p><strong>Email:</strong> sushmashivani@vt.edu</p>
                      <p><strong>Phone:</strong> (571) 241 6826</p>
                    </div>
                    <div className="col-md-4">
                      <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/sushma-nukala-867a82137/" target="_blank" rel="noopener noreferrer">Sushma Nukala</a></p>
                      <p><strong>GitHub:</strong> <a href="https://github.com/sushmanukala9" target="_blank" rel="noopener noreferrer">sushmanukala9</a></p>
                    </div>
                  </div>
                </section>

                {/* Projects Section */}
                <section id="projects-section" className="container py-5">
                  <h2>Projects</h2>
                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <h3>Online Bookstore Website</h3>
                      <p>Full-stack React J2EE Bookstore Website with MySQL DB.</p>
                      <Link to="/bookstore-project" className="btn btn-primary">View Details</Link>
                      <a href="https://www.youtube.com/watch?v=ZdEzDdZkWtk" className="btn btn-secondary ml-2">Demo Video</a>
                    </div>
                    <div className="col-md-6 mb-4">
                      <h3>Event Management Website – EventEase</h3>
                      <p>Built using React, SpringBoot, AWS. Hosted the backend on AWS EC2.</p>
                      <Link to="/eventease-project" className="btn btn-primary">View Details</Link>
                      <a href="https://www.youtube.com/watch?v=6KnC0JF73d8" className="btn btn-secondary ml-2">Demo Video</a>
                    </div>
                    <div className="col-md-6 mb-4">
                      <h3>Social Media Analysis and Product Recommendation</h3>
                      <p>Used Amazon EMR, SageMaker, Lambda, and RDS to process and analyze data.</p>
                      <Link to="/socialmedia-project" className="btn btn-primary">View Details</Link>
                    </div>
                    <div className="col-md-6 mb-4">
                      <h3>Completely Fair Scheduler</h3>
                      <p>Implemented a fair scheduler with multi-threading and load balancing for better CPU utilization.</p>
                      <Link to="/completelyfair-project" className="btn btn-primary">View Details</Link>
                    </div>
                    <div className="col-md-6 mb-4">
                      <h3>Feature Selection for Microarray Gene Data</h3>
                      <p>Used PCA and PSO to reduce dimensionality and classify microarray gene data.</p>
                      <Link to="/featureselection-project" className="btn btn-primary">View Details</Link>
                    </div>
                    <div className="col-md-6 mb-4">
                      <h3>Smart Classroom</h3>
                      <p>Developed a prototype for a smart classroom using Bluetooth beacons and IoT devices.</p>
                      <Link to="/smartclassroom-project" className="btn btn-primary">View Details</Link>
                    </div>
                  </div>
                </section>

                {/* Experience Section */}
                <section id="experience-section" className="container py-5">
                  <h2>Professional Experience</h2>
                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <h3>Kaiser Permanente | Full Stack Web Development Intern</h3>
                      <p>June 2024 – Present | Rockville, Maryland</p>
                      <ul>
                        <li>Developing full-stack applications for physicians and trainers using React and .NET APIs.</li>
                        <li>Designing DB schema and optimizing data flow with stored procedures.</li>
                      </ul>
                    </div>
                    <div className="col-md-6 mb-4">
                      <h3>Ivy Software Development Services | Software Engineer</h3>
                      <p>March 2022 – June 2023 | Hyderabad, Telangana</p>
                      <ul>
                        <li>Worked on BETMGM online gambling websites, focusing on login, registration, and compliance components.</li>
                        <li>Developed backend services for responsible gambling features like auto service/account closure in Java.</li>
                      </ul>
                    </div>
                    <div className="col-md-6 mb-4">
                      <h3>Oracle Cerner | Software Engineer</h3>
                      <p>January 2020 – September 2021 | Bangalore, Karnataka</p>
                      <ul>
                        <li>Enhanced the 'PowerChart' healthcare application by implementing an order priority feature in C++ MFC.</li>
                        <li>Optimized phlebotomist workflows by implementing complex backend logic for better resource management.</li>
                      </ul>
                    </div>
                    <div className="col-md-6 mb-4">
                      <h3>Cloudio Inc | Software Intern</h3>
                      <p>April 2019 – June 2019 | Hyderabad, Telangana</p>
                      <ul>
                        <li>Collaborated with Cloudio startup to create a web-based application for sales data analysis.</li>
                        <li>Implemented linear regression models for sales predictions, providing a user-friendly interface for analysis.</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Skills Section */}
                <section id="skills-section" className="container py-5">
                  <h2>Skills</h2>
                  <ul className="list-unstyled">
                    <li><strong>Languages:</strong> Java, C++, C#, ReactJs, TypeScript, JavaScript, Python, Kotlin</li>
                    <li><strong>Technologies:</strong> SpringBoot, MySQL, Git, Django, Android, Junit, AWS, Docker</li>
                    <li><strong>Concepts:</strong> Data Structures, Algorithms, Web App Design, REST API, CI/CD</li>
                  </ul>
                </section>

                {/* Footer */}
                <footer className="bg-dark text-white text-center py-4">
                  <p>Connect with me on:</p>
                  <a href="https://github.com/sushmanukala9" target="_blank" rel="noopener noreferrer" className="text-white mr-3">GitHub</a>
                  <a href="https://www.linkedin.com/in/sushma-nukala-867a82137/" target="_blank" rel="noopener noreferrer" className="text-white">LinkedIn</a>
                </footer>
              </>
            }
          />
          <Route path="/bookstore-project" element={<BookstoreProject />} />
          <Route path="/eventease-project" element={<EventEaseProject />} />
          <Route path="/socialmedia-project" element={<SocialMediaAnalysisProject />} />
          <Route path="/completelyfair-project" element={<CompletelyFairSchedulerProject />} />
          <Route path="/featureselection-project" element={<FeatureSelectionGeneDataProject />} />
          <Route path="/smartclassroom-project" element={<SmartClassroomProject />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
