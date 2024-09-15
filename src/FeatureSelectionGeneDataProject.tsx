import React from 'react';
import { Link } from 'react-router-dom';

const FeatureSelectionGeneDataProject: React.FC = () => {
  return (
    <div className="container project-container">
      <Link to="/" className="btn btn-primary mt-3">Back to Portfolio</Link>

      <h1 className="mt-5">Feature Selection for Microarray Gene Data</h1>

      {/* Objective and Tech Stack */}
      <section className="mt-5">
        <h2>Objective and Tech Stack</h2>
        <ul>
          <li>Reduced dimensionality of high-dimensional gene data using Principal Component Analysis (PCA) and Particle Swarm Optimization (PSO).</li>
          <li>Tech stack: Python, Sklearn, Pycharm.</li>
        </ul>
      </section>

      {/* Features and Functionality */}
      <section className="mt-5">
        <h2>Features and Functionality</h2>
        <ul>
          <li>Achieved an 83.4% classification accuracy using Extreme Learning Machines (ELM) for feature classification.</li>
          <li>PCA and PSO helped reduce data dimensions while retaining key gene expression patterns.</li>
        </ul>
      </section>

      {/* Code Snippets */}
      <section className="mt-5">
        <h2>Code Snippets</h2>
        <h3>Principal Component Analysis (PCA)</h3>
        <pre>
          <code>
            {`
            from sklearn.decomposition import PCA

            pca = PCA(n_components=10)
            reduced_data = pca.fit_transform(gene_data)
            `}
          </code>
        </pre>

        <h3>Particle Swarm Optimization (PSO) for Feature Selection</h3>
        <pre>
          <code>
            {`
            def pso_optimize(num_particles, dimensions):
                particles = initialize_particles(num_particles, dimensions)
                for each particle:
                    update_velocity_and_position(particles)
                    evaluate_fitness(particles)
                return best_particle
            `}
          </code>
        </pre>
      </section>

      {/* Screenshots */}
      <section className="mt-5">
        <h2>Screenshots</h2>
        <img src="/path-to-your-screenshot1" alt="PCA Data Reduction" className="img-fluid" />
        <img src="/path-to-your-screenshot2" alt="PSO Feature Selection" className="img-fluid mt-3" />
      </section>
    </div>
  );
};

export default FeatureSelectionGeneDataProject;
