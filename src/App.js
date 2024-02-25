import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import Main from './components/Main';

function App() {
  return (
  <><Form /><Main /></>
  
  );
}

export default App;


// const { checkEmailExists } = require('./find-user');
// const email = 'example@example.com';

// checkEmailExists(email, (err, exists) => {
//   if (err) {
//     console.error('Error checking email:', err);
//     return;
//   }
//   if (exists) {
//     console.log('Email exists in the database');
//   } else {
//     console.error('Email does not exist in the database');
//     // Throw an error or handle it as needed
//   }
// });
