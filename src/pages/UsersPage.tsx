import React, {useState, useEffect} from 'react';
import {jsonplaceholderService} from "../services/jsonplaceholder.typicode.com.service";
import {IUser} from "../interfaces/IUser";
import UserComponent from "../components/UserComponent";
import {Outlet} from "react-router-dom";
import styles from "./usersPage.module.css"

const UsersPage = () => {
    const [allUsers, setAllUsers] = useState<IUser[]>([]);
    useEffect(() => {
        jsonplaceholderService.getAllUsers().then(({data}) => {
            setAllUsers(data);
        })
    }, []);
    return (
        <div className={styles.wrap}>
            <UserComponent users={allUsers}/>
            <Outlet/>
        </div>
    );
};

export default UsersPage;