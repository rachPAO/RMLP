export default function Main() {
    return (
    <div class="container">
    <h1>Rate My Lab Partner</h1>

    
      

    
var reviewList = [];

    <form id="emailForm" onSubmit={() => {
      const hasUser = fetch('http://localhost:4000/find_user')
      if (hasUser){
        // if it has a user, then query for its reviews (another fetch)
      } else {
        // redirect to another page with error message
      }



      //find reviews returns an array
    }}>
      <label for="email">Enter Northeastern Student Email:</label>
      <input type="email" id="email" name="email" required />
      <button type="submit">Submit</button>
    </form>
    {/* <script>
        document.getElementById('emailForm').addEventListener('submit', function(event) {
            event.preventDefault(); 

            const emailInput = document.getElementById('email').value;
            
            console.log(emailInput);
        });
    </script> */}
  </div>
  )
    }
