import React from 'react';
import { FaGoogle } from "react-icons/fa";
import useAuth from '../../../Hooks/useAuth';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const { googleSignIn } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const loggedUser = result.user
                console.log(loggedUser)
                const registeredUser = { name: loggedUser.displayName, email: loggedUser.email, photo: loggedUser.photoURL }
                fetch('https://e-speak-server-ie0i5px7u-hridhyapaul.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(registeredUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.insertedId) {
                        console.log('User inserted to database')
                        }
                        navigate(from, { replace: true });
                    })
            })
            .catch(error => {
                console.log(error.message);
            })
    }
    return (
        <div>
            <div className="flex items-center justify-center space-x-2">
                <span className="block w-14 h-0.5 bg-gray-300"></span>
                <span className="text-gray-500">or</span>
                <span className="block w-14 h-0.5 bg-gray-300"></span>
            </div>
            <button
                onClick={handleGoogleSignIn}
                type="button"
                className="flex items-center justify-center gap-3 w-full py-1.5 text-[#082A5E] bg-white border-2 border-[#082A5E] hover:bg-[#082A5E] hover:text-white transform hover:scale-105 duration-300 rounded mt-4"
            >
                <FaGoogle></FaGoogle>
                <p className='font-semibold'>Login with Google</p>
            </button>
        </div>
    );
};

export default SocialLogin;