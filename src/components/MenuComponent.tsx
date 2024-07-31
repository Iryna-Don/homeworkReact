import React from 'react';
import {NavLink} from "react-router-dom";

const MenuComponent = () => {
    return (
        <div className={'menuWrapper'}>
            <NavLink className={({isActive}) => isActive ? 'activeLink' : 'withoutDecoration'}
                     to={'/'}>Authorization</NavLink>
            <br/>
            <NavLink className={({isActive}) => isActive ? 'activeLink' : 'withoutDecoration'}
                     to={'/users'}>Registration Page</NavLink>
            <br/>
            <NavLink className={({isActive}) => isActive ? 'activeLink' : 'withoutDecoration'}
                     to={'/cars'}>Cars Page</NavLink>
        </div>
    );
};

export default MenuComponent;