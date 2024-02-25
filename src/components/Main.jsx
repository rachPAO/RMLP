import React from 'react';
import { useState } from "react"
import { useNavigate } from "react-router-dom";


export default function Main() {
    const [userFound, setUserFound] = useState([])
    const navigate = useNavigate();

    async function onSubmit(e) {
      e.preventDefault()
      const hasUser = await (await fetch('http://localhost:4000/find_user?email=dong.nelson@northeastern.edu')).json()
      if (hasUser.count === 1){
        const hasReviews = await (await fetch('http://localhost:4000/find_reviews?email=dong.nelson@northeastern.edu')).json()
        setUserFound(hasReviews)
        navigate("/Review");

  
      }
      else {
        navigate("/Error");
      }
      
    }

    return (
    <div className="container">
    <h1>Rate My Lab Partner</h1>


      <form id="emailForm" onSubmit={onSubmit}>
      <label htmlFor="email"> Enter Northeastern Student Email: </label>
      <input type="email" id="email" name="email" required />
      <button type="submit">Submit</button>
      </form>
      </div>
    )
  }

      