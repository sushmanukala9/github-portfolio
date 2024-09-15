import React from 'react';


const CompletelyFairSchedulerProject: React.FC = () => {
  return (
    <div className="container project-container">
      

      <h1 className="mt-5">Completely Fair Scheduler with Multi-Threading and Load Balancing</h1>

      {/* Objective and Tech Stack */}
      <section className="mt-5">
        <h2>Objective and Tech Stack</h2>
        <ul>
          <li>Designed and implemented a completely fair scheduler with multi-threading to improve processor utilization.</li>
          <li>Tech stack: C, Pintos (Operating Systems Framework), Multi-core OS.</li>
        </ul>
      </section>

      {/* Features and Functionality */}
      <section className="mt-5">
        <h2>Features and Functionality</h2>
        <ul>
          <li>Improved thread creation and scheduling by implementing a fair scheduler.</li>
          <li>Developed a dynamic load balancer to evenly distribute threads across multiple CPUs.</li>
        </ul>
      </section>

      {/* Code Snippets */}
      <section className="mt-5">
        <h2>Code Snippets</h2>
        <h3>Thread Creation and Scheduling</h3>
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

        <h3>Load Balancing Logic</h3>
        <pre>
          <code>
            {`
            balance_threads() {
              for each processor in multi-core {
                  if (processor load > threshold) {
                      move threads to other processors;
                  }
              }
            }
            `}
          </code>
        </pre>
      </section>

      {/* Screenshots */}
      <section className="mt-5">
        <h2>Screenshots</h2>
        <img src="/path-to-your-screenshot1" alt="Scheduler Overview" className="img-fluid" />
        <img src="/path-to-your-screenshot2" alt="Load Balancing" className="img-fluid mt-3" />
      </section>
    </div>
  );
};

export default CompletelyFairSchedulerProject;
