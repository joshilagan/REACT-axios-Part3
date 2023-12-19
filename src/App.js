// Import React, useState, useEffect, axios and Parser
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Parser } from "html-to-react";

// Define the API endpoint
const API_URL = 'https://api.tvmaze.com/schedule';

// Define the component
const App = () => {
  // Use useState to store the posts data
  const [posts, setPosts] = useState([]);

  // Use useEffect to fetch the data when the component mounts
  useEffect(() => {
    // Define the async function that makes the request
    const fetchData = async () => {
      // Use axios to get the data from the API
      const { data } = await axios.get(API_URL);
      // Update the state with the data
      setPosts(data);
    };
    // Invoke the function
    fetchData();
  }, []); // Pass an empty array as the second argument to run only once
    // Return the JSX to render
  return (
    <div className="wrapper">
    
      {posts.length > 0 ? (
        <div className="content">
          {posts.map((post) => (
            <div className="post" key={post.id}>
              <h2>{post.show.name}</h2>
              {/* convert html strings to react elements */}
              <p>{Parser().parse(post.show.summary)}</p>
              <img src={post.show.image.medium} alt="" />
            </div>
          ))}
        </div>
      ) : (
        <p className="loading">Loading...</p>
      )}
    </div>
  );
};

// Export the component
export default App;