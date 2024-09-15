import React from 'react';

import './App.css';

const BookstoreProject: React.FC = () => {
  return (
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
  );
};

export default BookstoreProject;
