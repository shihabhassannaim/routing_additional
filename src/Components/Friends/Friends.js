import React from 'react';
import './Friends.css'
import { Link } from 'react-router-dom';

const Friends = (props) => {
    const {name , email ,id} = props.friend;
    const friendStyle = {
        color : 'Aqua', 
        margin : '50px', 
        padding : '50px',
        border : '4px solid gray',
        borderRadius : '10px', 
        backgroundColor : '#461959',
        width : '250px' , 
        height : '250px'
    }
    return (
       
        <div style={friendStyle}>
             <Link to={`/friends/${id}`}>
            <h1>Name : {name}</h1>
            <h3>Email : {email}</h3>
            <p>{id}</p>
            </Link>
        </div>
    );
};

export default Friends;