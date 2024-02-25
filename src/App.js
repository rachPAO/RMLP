import React from 'react';
import { BrowserRouter as Routes, Route} from 'react-router-dom';
import './App.css';
import Form from './components/Form';
import Main from './components/Main';
import Error from './components/Error';
import Review from './components/Review';


function App() {
  return (
    <div>
       <BroswerRouter>
        <Routes>
        <Route exact path="/" component={Main} />
        <Route path="/form" component={Form} />
        <Route path="/error" component={Error} />
        <Route path="/reviews" component={Review} />
        <Route path="*" element={<Error />} />
      </Routes>
      </BroswerRouter>
    </div>
  )
};

export default App;