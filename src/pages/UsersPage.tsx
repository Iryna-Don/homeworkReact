import React, {useState, useEffect} from 'react';
import {jsonplaceholderService} from "../services/jsonplaceholder.typicode.com.service";
import {IUser} from "../interfaces/IUser";
import {Outlet, useSearchParams} from "react-router-dom";
import styles from "./usersPage.module.css"
import PaginationComponent from "../components/PaginationComponent";
import UsersComponent from "../components/UsersComponent";

const UsersPage = () => {
    const [allUsers, setAllUsers] = useState<IUser[]>([]);
    useEffect(() => {
        jsonplaceholderService.getAllUsers().then(({data}) => {
            setAllUsers(data);
        })
    }, []);
    return (<>
            <div className={styles.wrap}>
                <UsersComponent users={allUsers}/>
                {/*<Outlet/>*/}
            </div>
        </>
    );
};

export default UsersPage;