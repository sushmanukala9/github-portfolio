import React from 'react';
import { Link } from 'react-router-dom';

const EventEaseProject: React.FC = () => {
  return (
    <div className="container project-container">
      <Link to="/" className="btn btn-primary mt-3">Back to Portfolio</Link>

      <h1 className="mt-5">EventEase - Event Management Website</h1>

      {/* Objective and Tech Stack */}
      <section className="mt-5">
        <h2>Objective and Tech Stack</h2>
        <ul>
          <li>EventEase is an event management website for creating and managing events, including registrations, invites, and email notifications.</li>
          <li>Tech stack: React for frontend, SpringBoot for backend, AWS EC2 for deployment, and MySQL as the database.</li>
        </ul>
      </section>

      {/* Features and Functionality */}
      <section className="mt-5">
        <h2>Features and Functionality</h2>
        <ul>
          <li>Users can create, edit, and delete events.</li>
          <li>Participants can register for events, view event details, and receive email invitations.</li>
          <li>Amazon RDS is used to store event and user data, while AWS EC2 hosts the application backend.</li>
        </ul>
      </section>

      {/* Code Snippets */}
      <section className="mt-5">
        <h2>Code Snippets</h2>
        <h3>Event Creation API (SpringBoot)</h3>
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

        <h3>React Frontend: Event Registration Form</h3>
        <pre>
          <code>
            {`
            const handleSubmit = (e) => {
              e.preventDefault();
              const eventData = {
                name,
                description,
                date,
              };
              axios.post('/api/events', eventData)
                .then(response => alert('Event Created'))
                .catch(error => console.log(error));
            };
            `}
          </code>
        </pre>
      </section>

      {/* Screenshots */}
      <section className="mt-5">
        <h2>Screenshots</h2>
        <img src="/path-to-your-screenshot1" alt="EventEase Homepage" className="img-fluid" />
        <img src="/path-to-your-screenshot2" alt="Event Registration" className="img-fluid mt-3" />
      </section>

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
    </div>
  );
};

export default EventEaseProject;
