import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ReactDOM from "react-dom/client";
import './App.css';
import Form from './components/Form';
import Main from './components/Main';
import Error from './components/Error';
import Review from './components/Review';


export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/Form" element={<Form />} />
          <Route path="/Main" element={<Main />} />
          <Route path="/Review" element={<Review />} />
          <Route path="/Error" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
};
