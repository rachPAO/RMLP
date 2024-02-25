import React from 'react';
import { Link } from 'react-router-dom';



// Component for the main page
export default function Main() {
  return (
    <div>
      <h1>Welcome!</h1>
      <p>This is the main page.</p>
      <Link to="/Form">
        <button>Write a Review!</button>
      </Link>
    </div>
  );
}

