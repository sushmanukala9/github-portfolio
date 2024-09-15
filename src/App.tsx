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

        {/* Online Bookstore Website */}
        <div className="mb-5">
          <h3>Online Bookstore Website</h3>
          <p>Full-stack React J2EE Bookstore Website with MySQL DB.</p>
          <a href="https://github.com/sushmanukala9/SushmaBookstoreFinal" target="_blank" rel="noopener noreferrer" className="btn btn-primary">GitHub Repo</a>
          <a href="https://www.youtube.com/watch?v=ZdEzDdZkWtk" target="_blank" rel="noopener noreferrer" className="btn btn-secondary ml-2">Demo Video</a>

          <div className="container bookstore-container">
  

      <h1 className="mt-5">Online Bookstore Project</h1>

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

      {/* Screenshots */}
      <section className="mt-5">
        <h2>Screenshots</h2>
        <img src="/path-to-your-screenshot1" alt="Homepage" className="img-fluid" />
        <img src="/path-to-your-screenshot2" alt="Cart Component" className="img-fluid mt-3" />
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
    </div>
        </div>

        {/* EventEase - Event Management Website */}
        <div className="mb-5">
          <h3>Event Management Website – EventEase</h3>
          <p>Built using React, SpringBoot, AWS. Hosted the backend on AWS EC2, and stored the database in AWS RDS. Provided email service using JavaMail API.</p>
          <a href="https://github.com/sushmanukala9/SEProject" target="_blank" rel="noopener noreferrer" className="btn btn-primary">GitHub Repo</a>
          <a href="https://www.youtube.com/watch?v=6KnC0JF73d8" target="_blank" rel="noopener noreferrer" className="btn btn-secondary ml-2">Demo Video</a>

          {/* Code Snippets */}
          <h4 className="mt-4">Code Snippets</h4>
          <pre>
            <code>
              {`
                @PostMapping("/events")
                public ResponseEntity<Event> createEvent(@RequestBody Event event) {
                  Event newEvent = eventService.saveEvent(event);
                  return new ResponseEntity<>(newEvent, HttpStatus.CREATED);
                }
              `}
            </code>
          </pre>
        </div>

        {/* Social Media Analysis and Product Recommendation */}
        <div className="mb-5">
          <h3>Social Media Analysis and Product Recommendation</h3>
          <p>Utilized Amazon EMR with Hadoop and Spark to process Twitter data and identify top trending hashtags. AWS SageMaker was used for sentiment analysis and product quality prediction, while AWS Lambda facilitated real-time REST API communication.</p>

          {/* Code Snippets */}
          <h4 className="mt-4">Code Snippets</h4>
          <pre>
            <code>
              {`
                from sagemaker import get_execution_role

                role = get_execution_role()
                sentiment_model = sagemaker.Model('sentiment-model.tar.gz', role=role)

                predictor = sentiment_model.deploy(initial_instance_count=1, instance_type='ml.m5.large')

                response = predictor.predict('This product is amazing!')
                print(response)
              `}
            </code>
          </pre>
        </div>

        {/* Completely Fair Scheduler using Multi-Threading */}
        <div className="mb-5">
          <h3>Completely Fair Scheduler using Multi-Threading and Load Balancing</h3>
          <p>Extended Pintos by improving thread creation and scheduling with a fair scheduler. Developed a dynamic load balancer to distribute threads evenly across CPUs, ensuring efficient processor utilization.</p>

          {/* Code Snippets */}
          <h4 className="mt-4">Code Snippets</h4>
          <pre>
            <code>
              {`
                thread_create(thread_func, priority) {
                  t = allocate_thread();
                  set_priority(t, priority);
                  schedule_thread(t);
                }

                schedule_thread(t) {
                  add_to_runqueue(t);
                  balance_threads();
                }
              `}
            </code>
          </pre>
        </div>

        {/* Feature Selection for Microarray Gene Data */}
        <div className="mb-5">
          <h3>Feature Selection for Microarray Gene Data</h3>
          <p>Employed Principal Component Analysis (PCA) and Particle Swarm Optimization (PSO) to reduce dimensionality. Achieved an 83.4% classification accuracy using the Extreme Learning Machines classifier.</p>

          {/* Code Snippets */}
          <h4 className="mt-4">Code Snippets</h4>
          <pre>
            <code>
              {`
                from sklearn.decomposition import PCA

                pca = PCA(n_components=10)
                reduced_data = pca.fit_transform(gene_data)
              `}
            </code>
          </pre>
        </div>

        {/* Smart Classroom */}
        <div className="mb-5">
          <h3>Smart Classroom</h3>
          <p>Designed and implemented a prototype for a 'smart classroom' using Bluetooth beacon tags and IoT devices. Developed a centralized server and Arduino-based control system to optimize energy usage.</p>

          {/* Code Snippets */}
          <h4 className="mt-4">Code Snippets</h4>
          <pre>
            <code>
              {`
                void setup() {
                  Serial.begin(9600);
                  setupBluetooth();
                }

                void loop() {
                  detectBeacons();
                }

                void detectBeacons() {
                  if (beaconDetected()) {
                    logAttendance();
                  }
                }
              `}
            </code>
          </pre>
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
          {/* Other experiences */}
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
    </div>
  );
};

export default App;
