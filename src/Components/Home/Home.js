import React, { useEffect, useState } from 'react';
import Friends from '../Friends/Friends';

const Home = () => {
    const [friends , setFriends] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => setFriends(json))
    }, [])
    return (
        <div>
            {
                friends.map(frnd => <Friends friend = {frnd}></Friends>)
            }
        </div>
    );
};

export default Home;