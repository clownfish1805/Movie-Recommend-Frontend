import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

import Favorites from './Components/Favorites';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MovieSearch from './Components/MovieSearch';
import SignupPage from './Components/SignupPage';
import SigninPage from './Components/SigninPage';

const clientID = "453971664497-cg6lpjtcv8m1oqcbf5ulg3tombim97tu.apps.googleusercontent.com";


function App() {

const [backendData, setBackendData] = useState(null);

  useEffect(() => {
    // Example of making a GET request to your backend
    axios.get('https://movie-recommend-backend-jvnl.vercel.app/')
      .then(response => {
        setBackendData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data from backend:', error);
      });
  }, []); 



  return (
    <Router>
      <Routes>
        <Route path="/favorite" element={<Favorites />} />
        <Route path="/" element={<SigninPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/home" element={<MovieSearch />} />
      </Routes>
    </Router>
    );
}


export default App;
