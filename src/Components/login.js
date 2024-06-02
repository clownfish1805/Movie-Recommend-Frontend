import { GoogleLogin } from 'react-google-login'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BiSolidCameraMovie } from 'react-icons/bi';

const clientID = "453971664497-cg6lpjtcv8m1oqcbf5ulg3tombim97tu.apps.googleusercontent.com";

function Login() {

    const navigate = useNavigate();
    const [accessToken, setAccessToken] = useState(null);

    const onSuccess = (res) => {
        console.log("LOGIN SUCCESS! Current user:", res.profileObj);

        setAccessToken(res.accessToken); // to get the token for storage

        // Store the token in an HTTP-only cookie
        document.cookie = `token=${res.accessToken}; HttpOnly; Secure`;
        
         navigate('/favorite'); 
        
    }
    const onFailure = (res) => {
        console.log("LOGIN FAILED! res:", res);
    }

    return (
        
        <div>
            <GoogleLogin
                clientId={clientID}
                buttonText='Sign In'
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}
            />
         </div>

    )
}

export default Login;