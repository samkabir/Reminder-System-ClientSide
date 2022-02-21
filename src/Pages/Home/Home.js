import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'


const Home = () => {
    return (
        <div>
            <Link to="/reminderPage">
                <Button>Google Sign IN</Button>
          </Link>
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