import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Form from './components/Form';
import Main from './components/Main';
import Error from './components/Error';
import Review from './components/Review';


function App() {
  return (
    <div>
    <BrowserRouter>
        <Router>
        <Route path="/" exact component={Main} />
        <Route path="/form" component = {Form}/>
        <Route path="/error" component={Error}/>
        <Route path="/reviews" component={Review}/>
        </Router>
    </BrowserRouter>
    </div>
  );
}

export default App;