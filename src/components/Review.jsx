import React from 'react';
import { Link } from 'react-router-dom';

// Define array of names
const names = ['Alice', 'Bob', 'Charlie', 'David'];

// Component for the main page
export default function Main() {
  return (
    <div>
      <h1>Welcome, {randomName}!</h1>
      <p>This is the main page.</p>
      <Link to="/other-page">
        <button>Write a Review!</button>
        /src/components/Form.jsx
      </Link>
    </div>
  );
}

