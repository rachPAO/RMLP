import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Form from './components/Form';
import Main from './components/Main';
import Error from './components/Error';
import Review from './components/Review';


export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" exact component={Main} />
          <Route path="/main" exact component={Review} />
          <Route path="/main" exact component={Error} />
          {/* <Route path="/form" component = {Form}/> */}
          <Route path="/error" component={Error}/>
          <Route path="/reviews" component={Form}/>
        </Routes>
      </Router>
    </div>
  );
}
