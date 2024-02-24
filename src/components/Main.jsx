export default function Main() {
    return (
    <div class="container">
    <h1>Rate My Lab Partner</h1>
    <form id="emailForm" onSubmit={() => {
      fetch('http://localhost:4000/find_user')
    }}>
      <label for="email">Enter Northeastern Student Email:</label>
      <input type="email" id="email" name="email" required />
      <button type="submit">Submit</button>
    </form>
  </div>
  )
    }
