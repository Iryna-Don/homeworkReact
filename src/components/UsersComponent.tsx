import React from 'react';
import {useMyContextProvider} from "../context/Context";
import UserComponent from "./UserComponent";

const UsersComponent = () => {
    const {userStore: {allUsers}} = useMyContextProvider();
    return (
        <div>
            {allUsers.map(user=><UserComponent key={user.id} user={user}></UserComponent>)}
        </div>
    );
};

export default UsersComponent;