import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import initializeAuthentication from '../../Firebase/firebase.initialize';


initializeAuthentication();

const provider = new GoogleAuthProvider();

const Home = () => {

    const [user, setUser] = useState({})

    const handleGoogleSignIn = () => {
        const auth = getAuth();
        signInWithPopup(auth, provider)
        .then(result => {
            const {displayName, email} = result.user;
            const loggedInUser = {
                name: displayName,
                email: email
            };
            setUser(loggedInUser);
            console.log(loggedInUser);
        })
    }

    return (
        <div>
            <br />
            <div>
                <Button onClick={handleGoogleSignIn}>Google Sign In</Button>
            </div>
            <br />
            {
                user.email && <div>
                        <h2>Welcome {user.name}</h2>
                        <Link to="/reminderPage">
                            <Button>Go to Reminder App</Button>
                        </Link>
                </div>
            }
            
        </div>
    );
};

const Button = styled.button`
      padding: 20px;
      font-size: 20px;
      background-color: black;
      border: none;
      color:white;
      &:hover{
            cursor: pointer;
            background-color: white;
            color: black;
            transition-delay: 0.1s;
            transition-duration: 0.3s;
            transition-timing-function: linear;
            border:1px solid black;
      }
`;

export default Home;