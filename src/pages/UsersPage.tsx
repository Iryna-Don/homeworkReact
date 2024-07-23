import React, {useState, useEffect} from 'react';
import {jsonplaceholderService} from "../services/jsonplaceholder.typicode.com.service";
import {IUser} from "../interfaces/IUser";
import UserComponent from "../components/UserComponent";

const UsersPage = () => {
    const[allUsers, setAllUsers]=useState<IUser[]>([]);
    useEffect(() => {
        jsonplaceholderService.getAllUsers().then(({data}) => {
            setAllUsers(data);
        })
    }, []);
    return (
        <div>
            {<UserComponent users={allUsers}/>}
        </div>
    );
};

export default UsersPage;