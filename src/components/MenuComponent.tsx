import React from 'react';
import {NavLink} from "react-router-dom";

const MenuComponent = () => {
    return (
        <div>
            <NavLink to={'users'}>Users </NavLink>
            <NavLink to={'posts'}>Posts </NavLink>
            <NavLink to={'comments'}>Comments </NavLink>
            <NavLink to={'userWithPosts'}>User With Posts </NavLink>
            <NavLink to={'postWithComments'}>Post With Comments </NavLink>
        </div>
    );
};

export default MenuComponent;