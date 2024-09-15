import React from 'react';


const SmartClassroomProject: React.FC = () => {
  return (
    <div className="container project-container">
  

      <h1 className="mt-5">Smart Classroom Project</h1>

      {/* Objective and Tech Stack */}
      <section className="mt-5">
        <h2>Objective and Tech Stack</h2>
        <ul>
          <li>Designed a prototype for a smart classroom using Bluetooth beacon tags and IoT devices.</li>
          <li>Tech stack: Arduino Uno, J2EE Server, NodeMCU, Bluetooth Beacons.</li>
        </ul>
      </section>

      {/* Features and Functionality */}
      <section className="mt-5">
        <h2>Features and Functionality</h2>
        <ul>
          <li>Used Bluetooth beacons to track student attendance and movement within the classroom.</li>
          <li>Developed a centralized server to control energy consumption based on classroom occupancy.</li>
        </ul>
      </section>

      {/* Code Snippets */}
      <section className="mt-5">
        <h2>Code Snippets</h2>
        <h3>Bluetooth Beacon Detection</h3>
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

        <h3>Energy Control Based on Classroom Occupancy</h3>
        <pre>
          <code>
            {`
            if (classroomEmpty()) {
                turnOffLightsAndDevices();
            } else {
                keepSystemsRunning();
            }
            `}
          </code>
        </pre>
      </section>

      {/* Screenshots */}
      <section className="mt-5">
        <h2>Screenshots</h2>
        <img src="/path-to-your-screenshot1" alt="Smart Classroom Dashboard" className="img-fluid" />
        <img src="/path-to-your-screenshot2" alt="Bluetooth Beacon System" className="img-fluid mt-3" />
      </section>
    </div>
  );
};

export default SmartClassroomProject;
