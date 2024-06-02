import { GoogleLogout } from 'react-google-login'
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BiSolidCameraMovie } from 'react-icons/bi';

const clientID = "453971664497-cg6lpjtcv8m1oqcbf5ulg3tombim97tu.apps.googleusercontent.com";

function Logout() {

    const navigate = useNavigate();

    const onSuccess = (res) => {
        console.log("LOGOUT SUCCESS!");
        navigate('/');
    }
    const onFailure = (res) => {
        console.log("LOGIN FAILED! res:", res);
    }

    return (

        <div>
            <div>
           
            <GoogleLogout
                clientId={clientID}
                buttonText='Logout'
                onLogoutSuccess={onSuccess}
                />
                </div>
        </div>
    )
}

export default Logout;