export default function Form() {
    return(
        <div className="container">
        <h1>Create Post</h1>
        <form id="postForm">
    
          <label form="recName">Your Name:</label>
          <input type="text" id="recName" name="recName" required />
    
          <label form="raterEmail">Rater Email:</label>
          <input type="email" id="raterEmail" name="raterEmail" required />
    
          <label form="classLab">Class Code:</label>
          <input type="text" id="classLab" name="classLab" required />
    
          <h4>Rate on a scale of 1 to 5. 1 being the lowest and 5 being the highest.</h4>
          <label for="rating">Quality</label>
          <input type="number" id="rating" name="rating" min="1" max="5" required />
    
          <h4>Tell us your experience  with your partner. What's their personality like? Love them? Hate them? How many times did you want to kill them?</h4>
          <label for="pHMIHT">Personality/HMIHT</label>
          <textarea id="pHMIHT" name="pHMIHT" rows="4" cols="50" required></textarea>"
          
          <h4>Would you partner with this person again?</h4>
          <input type="radio" id="yes" name="yes" value="Yes" />
          <label for="yes">Yes</label>
          
          <input type="radio" id="no" name="no" value="No" />
          <label for="no">No</label>
    
          <button type="submit">Submit</button>
        </form>
      </div>
    )
}