import React, { useState } from 'react';
import './App.css';

const App: React.FC = () => {
  // State to manage the visibility of each section
  const [showProjects, setShowProjects] = useState(false);
  const [showExperience, setShowExperience] = useState(true); // Keep experience visible by default
  const [showSkills, setShowSkills] = useState(false);

  return (
    <div className="container-fluid p-0">
      {/* Header Section */}
      <header className="jumbotron jumbotron-fluid text-center bg-primary text-white">
        <div className="container">
          <h1 className="display-4">Sushma Shivani Nukala</h1>
          <p className="lead">Full Stack Developer | Software Engineer</p>
        </div>
      </header>

      {/* Bio Section (Always Displayed) */}
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

      {/* Experience Section */}
      <div className="horizontal-bar" onClick={() => setShowExperience(!showExperience)}>
        <h2>Experience {showExperience ? '-' : '+'}</h2>
      </div>
      {showExperience && (
        <section id="experience-section" className="container py-5">
          <div className="row">
            {/* Kaiser Permanente Experience */}
            <div className="col-md-6 mb-4">
              <h3>Kaiser Permanente | Full Stack Web Development Intern</h3>
              <p>June 2024 – Present | Rockville, Maryland</p>
              <ul>
                <li>Developing full-stack applications for physicians and trainers using React and .NET APIs.</li>
                <li>Designing DB schema and optimizing data flow with stored procedures.</li>
                <li>Collaborating with teams to deliver a seamless experience for users, focusing on security, scalability, and performance improvements.</li>
              </ul>
            </div>

            {/* Ivy Software Development Services */}
            <div className="col-md-6 mb-4">
              <h3>Ivy Software Development Services | Software Engineer</h3>
              <p>March 2022 – June 2023 | Hyderabad, Telangana</p>
              <ul>
                <li>Worked on BETMGM online gambling websites, focusing on login, registration, and compliance components.</li>
                <li>Developed backend services for responsible gambling features such as automatic service/account closure using Java.</li>
                <li>Debugged and resolved complex issues within the Spring framework and SQL queries to improve application performance and user experience.</li>
              </ul>
            </div>

            {/* Oracle Cerner Experience */}
            <div className="col-md-6 mb-4">
              <h3>Oracle Cerner | Software Engineer</h3>
              <p>January 2020 – September 2021 | Bangalore, Karnataka</p>
              <ul>
                <li>Enhanced the 'PowerChart' healthcare application by implementing an order priority feature using C++ MFC architecture.</li>
                <li>Optimized phlebotomist workflows by implementing complex backend logic, improving the management of patient lab orders and test priorities.</li>
                <li>Collaborated with cross-functional teams, including healthcare professionals and developers, to deliver efficient and reliable software solutions that meet user needs.</li>
                <li>Followed Software Development Lifecycle (SDLC) practices: code design, analysis, implementation, unit testing, code reviews, and deployment.</li>
              </ul>
            </div>

            {/* Cloudio Inc Experience */}
            <div className="col-md-6 mb-4">
              <h3>Cloudio Inc | Software Intern</h3>
              <p>April 2019 – June 2019 | Hyderabad, Telangana</p>
              <ul>
                <li>Collaborated with Cloudio startup to create a web-based application for sales data analysis using Python, Django, and MySQL.</li>
                <li>Implemented linear regression models for sales predictions, providing a user-friendly interface for users to upload and analyze datasets.</li>
                <li>Developed interactive dashboards to visualize sales trends, allowing stakeholders to make data-driven business decisions.</li>
                <li>Utilized Python libraries like Pandas, NumPy, and Matplotlib to handle data analysis and generate graphical reports.</li>
              </ul>
            </div>
          </div>
        </section>
      )}

      {/* Projects Section */}
      <div className="horizontal-bar" onClick={() => setShowProjects(!showProjects)}>
        <h2>Projects {showProjects ? '-' : '+'}</h2>
      </div>
      {showProjects && (
        <section id="projects-section" className="container py-5">
          {/* Online Bookstore Website */}
          <div className="mb-5">
            <div className="container bookstore-container">
              <h1 className="mt-5">Online Bookstore Project</h1>

              {/* YouTube Video */}
              <section className="mt-5">
                <h2>Project Demo Video</h2>
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/ZdEzDdZkWtk"
                  title="Bookstore Project Demo"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen>
                </iframe>
              </section>

              {/* Objective and Tech Stack */}
              <section className="mt-5">
                <h2>Objective and Tech Stack</h2>
                <ul>
                  <li>Online eCommerce bookstore website</li>
                  <li>Implements full-stack web development</li>
                  <li>Tech stack: React for frontend, J2EE for backend, MySQL for database</li>
                </ul>
              </section>

              {/* Vision and Mission */}
              <section className="mt-5">
                <h2>Vision and Mission of the Project</h2>
                <p>
                  This project aims to create an online bookstore where users can browse and purchase books across various categories. The main fragments of the project include:
                </p>
                <ul>
                  <li>React Hooks for managing state</li>
                  <li>REST APIs for fetching and processing data</li>
                  <li>DAO pattern for backend logic</li>
                  <li>Database transactions for secure and efficient order handling</li>
                </ul>
              </section>

              {/* Code Snippets */}
              <section className="mt-5">
                <h2>Code Snippets</h2>
                <h3>React API Call</h3>
                <pre>
                  <code>
                    {`
                      useEffect(() => {
                        axios.get(\`http://localhost:8080/categories/\${categoryId}/books\`)
                          .then(response => {
                            setBooks(response.data);
                          })
                          .catch(error => {
                            console.log(error);
                          });
                      }, [categoryId]);
                    `}
                  </code>
                </pre>

                <h3>Cart Reducer Logic</h3>
                <pre>
                  <code>
                    {`
                      const cartReducer = (state, action) => {
                        switch(action.type) {
                          case "ADD":
                            return [...state, action.item];
                          case "REMOVE":
                            return state.filter(item => item.id !== action.id);
                          case "CLEAR":
                            return [];
                          default:
                            return state;
                        }
                      };
                    `}
                  </code>
                </pre>

                <h3>Order Processing API</h3>
                <pre>
                  <code>
                    {`
                      @POST
                      @Path("/orders")
                      @Consumes(MediaType.APPLICATION_JSON)
                      public Response placeOrder(OrderForm orderForm) {
                        long orderId = orderService.placeOrder(orderForm);
                        if (orderId > 0) {
                          return Response.ok(orderId).build();
                        }
                        return Response.status(Response.Status.BAD_REQUEST).build();
                      }
                    `}
                  </code>
                </pre>
              </section>
            </div>
          </div>

          {/* EventEase Project */}
          <div className="mb-5">
            <h3>Event Management Website – EventEase</h3>
            <p>
              EventEase is a web-based event tracking application designed to simplify the process of organizing events, managing guest lists, and handling RSVPs.
              It allows hosts to create customized invitations, send them via email, and track guest responses easily.
            </p>
            <a href="https://github.com/sushmanukala9/SEProject" target="_blank" rel="noopener noreferrer" className="btn btn-primary">GitHub Repo</a>

            {/* YouTube Video */}
            <section className="mt-5">
              <h2>Project Demo Video</h2>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/6KnC0JF73d8"
                title="EventEase Project Demo"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen>
              </iframe>
            </section>

            {/* Features and Functionality */}
            <h4 className="mt-4">Features and Functionality</h4>
            <p>
              The EventEase application simplifies event management by offering structured forms for event creation and guest response tracking. It allows hosts to:
              <ul>
                <li>Create customized invitations with personalized messages, photos, and event-specific questions.</li>
                <li>Invite guests via email with unique links to respond to the event.</li>
                <li>Track guest responses, RSVP status, and submitted photos/messages.</li>
                <li>Display guest responses in a user-friendly format.</li>
              </ul>
              This solution enhances host-invitee communication and ensures a seamless event management experience.
            </p>

            {/* Technical Stack */}
            <h4 className="mt-4">Technical Stack</h4>
            <p>
              The EventEase web application was built using the following technologies:
              <ul>
                <li><strong>Front-End:</strong> React.js, HTML, CSS, JavaScript</li>
                <li><strong>Back-End:</strong> Java, Spring Boot, JDBC, MySQL, Tomcat</li>
                <li><strong>Email:</strong> JavaMailSender for sending invitation emails</li>
                <li><strong>Database:</strong> MySQL for event and response data storage</li>
              </ul>
              The application follows the MVC (Model-View-Controller) architecture, ensuring separation of concerns and maintainability.
            </p>

            {/* Java MailSender */}
            <h4 className="mt-4">Email Functionality (Java MailSender)</h4>
            <p>
              EventEase uses the <strong>JavaMailSender</strong> interface, part of the Spring Framework's email support. This allows the application to send 
              personalized invitations via email. Here’s an example of how emails are sent:
            </p>
            <pre>
              <code>
                {`
                  @Autowired
                  private JavaMailSender mailSender;

                  public void sendEmail(String to, String subject, String body) {
                    SimpleMailMessage message = new SimpleMailMessage();
                    message.setTo(to);
                    message.setSubject(subject);
                    message.setText(body);
                    mailSender.send(message);
                  }
                `}
              </code>
            </pre>

            {/* Deployment Details */}
            <h4 className="mt-4">Deployment Details</h4>
            <p>
              The application is hosted on Amazon Web Services (AWS), leveraging the following services:
              <ul>
                <li><strong>Amazon RDS (Relational Database Service):</strong> Hosts the MySQL database used for event and response data storage.</li>
                <li><strong>Amazon EC2 (Elastic Compute Cloud):</strong> Hosts the backend API, providing scalable server resources.</li>
                <li><strong>Amazon S3 (Simple Storage Service):</strong> Hosts the front-end static assets and serves them to users.</li>
              </ul>
              The AWS cloud infrastructure ensures scalability, high availability, and secure access to the application.
            </p>
          </div>
        </section>
      )}

      {/* Skills Section */}
      <div className="horizontal-bar" onClick={() => setShowSkills(!showSkills)}>
        <h2>Skills {showSkills ? '-' : '+'}</h2>
      </div>
      {showSkills && (
        <section id="skills-section" className="container py-5">
          <ul className="list-unstyled">
            <li><strong>Languages:</strong> Java, C++, C#, ReactJs, TypeScript, ES6, JavaScript, HTML, CSS, Python, Kotlin, ASP.NET</li>
            <li><strong>Technologies:</strong> React, SpringBoot, MySQL, Github/GitLab, Django, Android, JUnit, Automation Testing, Kernel Scripting (Multithreading, Synchronization, Semaphores, Mutex Locks), AWS, S3, EC2, Jenkins, Docker, Kubernetes</li>
            <li><strong>Concepts:</strong> Data Structures and Algorithms, Web App Design and Development, REST API, DAO Pattern, Mobile Development, CI/CD</li>
          </ul>
        </section>
      )}

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-4">
        <p>Connect with me on:</p>
        <a href="https://github.com/sushmanukala9" target="_blank" rel="noopener noreferrer" className="text-white mr-3">GitHub</a>
        <a href="https://www.linkedin.com/in/sushma-nukala-867a82137/" target="_blank" rel="noopener noreferrer" className="text-white">LinkedIn</a>
      </footer>
    </div>
  );
};

export default App;
