import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetails = () => {
    const {id} = useParams();
    const [ami , setAmi] = useState({});
    useEffect(()=> {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(response => response.json())
        .then(data => setAmi(data))
    },[])
    console.log(ami);
    const {name , email ,username} = ami;
    return (
        <div>
            <h1>Name : {name}</h1>
            <h5>Email : {email}</h5>
            <h5>{username}</h5>
        </div>
    );
};

export default FriendDetails;