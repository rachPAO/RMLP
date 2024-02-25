import { useState } from "react"

export default function Main() {
    const [userFound, setUserFound] = useState([])

    async function onSubmit(e) {
      e.preventDefault()
      const hasUser = await (await fetch('http://localhost:4000/find_user?email=liu.david@northeastern.edu')).json()
      if (hasUser.count === 1){
        const hasReviews = await (await fetch('http://localhost:4000/find_reviews?email=liu.david@northeastern.edu')).json()
        setUserFound(hasReviews)
      }
      else {
        window.location.href = '/errorpg.html'
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

      