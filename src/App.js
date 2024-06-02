import logo from './logo.svg';
import './App.css';
import LoginButton from './Components/login';
import LogoutButton from './Components/logout';
import { useEffect, useState } from 'react';
import { gapi } from 'gapi-script';

import Favorites from './Components/Favorites';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MovieSearch from './Components/MovieSearch';
import SignupPage from './Components/SignupPage';
import SigninPage from './Components/SigninPage';

const clientID = "453971664497-cg6lpjtcv8m1oqcbf5ulg3tombim97tu.apps.googleusercontent.com";


function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false); 

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientID,
        scope: ""
      })
        .then(() => {
                const authInstance = gapi.auth2.getAuthInstance();
                setIsLoggedIn(authInstance.isSignedIn.get()); 
                authInstance.isSignedIn.listen(updateSigninStatus); 
            });
  };
  gapi.load('client:auth2', start);
  })



  const accessToken = gapi.auth2 && gapi.auth2.getAuthInstance().currentUser.get().getAuthResponse().access_token;
  const refreshToken = gapi.auth2 && gapi.auth2.getAuthInstance().currentUser.get().getAuthResponse().refresh_token;


   const updateSigninStatus = (isUserSignedIn) => {
        setIsLoggedIn(isUserSignedIn); 
    }

  
const ConsoleLog = ({ token }) => {
    useEffect(() => {
        console.log('Access Token:', token);
    }, [token]);

    return null; 
};

  
  return (
        <Router>
          <Routes>
            <Route path="/favorite" element={<Favorites />} />
        <Route path="/" element={<SigninPage  />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/home" element={<MovieSearch />} />
      </Routes>
       {accessToken && <ConsoleLog token={accessToken} />}
        </Router>
    );
}


export default App;
