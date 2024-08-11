import React from 'react';
import {NavLink, useNavigate} from "react-router-dom";

const MenuComponent = () => {

    // let navigate = useNavigate();

    return (
        <div>
            {/*<button onClick={() => navigate('/users')}>Users</button>*/}
            {/*<button onClick={() => navigate('/userWithPosts')}>User With Posts</button>*/}
            {/*<button onClick={() => navigate('/posts')}>Posts</button>*/}
            {/*<button onClick={() => navigate('/postWithComments')}>Post With Comments</button>*/}
            {/*<button onClick={() => navigate('/comments')}>Comments</button>*/}
            <NavLink to={'users'}>Users</NavLink>
            <NavLink to={'usersWithPosts'}>Users With Posts</NavLink>
            <NavLink to={'posts'}>Posts</NavLink>
            <NavLink to={'postsWithComments'}>Posts With Comments</NavLink>
            <NavLink to={'comments'}>Comments</NavLink>
        </div>
    );
};

export default MenuComponent;